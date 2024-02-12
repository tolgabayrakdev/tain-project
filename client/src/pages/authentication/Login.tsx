import { Link, useNavigate } from 'react-router-dom';
import {
    TextInput,
    Checkbox,
    Button,
    Group,
    Box,
    PasswordInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useState } from 'react';

type Props = {};

export default function Login({}: Props) {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const form = useForm({
        initialValues: {
            email: '',
            password: '',
            termsOfService: false,
        },

        validate: {
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : 'Invalid email',
            password: (value) =>
                value.length < 8 ? 'You must be at least 8 to password' : null,
        },
    });

    const submitLogin = async (values: { email: string; password: string }) => {
        try {
            setLoading(true);
            const result = await fetch(
                'http://localhost:5001/api/v1/auth/login',
                {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: values.email,
                        password: values.password,
                    }),
                },
            );
            if (result.status === 200) {
                setTimeout(() => {
                    setLoading(false);
                    navigate('/dashboard');
                }, 1500);
            } else {
                setTimeout(() => {
                    setLoading(false);
                    notifications.show({
                        title: 'Error',
                        message: 'Check your email or password!',
                        color: 'red',
                    });
                }, 1500);
            }
        } catch (error) {
            setLoading(false);
            throw error;
        }
    };
    return (
        <div className="flex h-screen justify-center items-center">
            <Box w={400} className="border p-6 rounded-xl bg-gray-50">
                <h3 className="text-center text-2xl">Login</h3>
                <form onSubmit={form.onSubmit((values) => submitLogin(values))}>
                    <TextInput
                        withAsterisk
                        label="Email"
                        placeholder="your@email.com"
                        {...form.getInputProps('email')}
                    />
                    <PasswordInput
                        withAsterisk
                        label="Password"
                        placeholder="********"
                        {...form.getInputProps('password')}
                    />

                    <Checkbox
                        mt="md"
                        label="I agree to sell my privacy"
                        {...form.getInputProps('termsOfService', {
                            type: 'checkbox',
                        })}
                    />

                    <Group justify="space-between" mt="xl">
                        <Link
                            className="text-sm hover:underline hover:text-blue-600 duration-100"
                            to="/register"
                        >
                            You dont have a account ?
                        </Link>
                        <Button loading={loading} type="submit">
                            Submit
                        </Button>
                    </Group>
                </form>
            </Box>
        </div>
    );
}
