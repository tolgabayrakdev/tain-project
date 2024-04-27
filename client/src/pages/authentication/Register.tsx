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


export default function Register() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const form = useForm({
        initialValues: {
            username: '',
            email: '',
            password: '',
            termsOfService: false,
        },

        validate: {
            username: (value) =>
                value.length < 3 ? 'You must be at least 3 to username' : null,
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : 'Invalid email',
            password: (value) =>
                value.length < 8 ? 'You must be at least 8 to password' : null,
        },
    });

    const submitRegister = async (values: {
        username: string;
        email: string;
        password: string;
    }) => {
        try {
            setLoading(true);
            const result = await fetch(
                'http://localhost:5001/api/v1/auth/register',
                {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: values.username,
                        email: values.email,
                        password: values.password,
                    }),
                },
            );
            if (result.status === 201) {
                setTimeout(() => {
                    notifications.show({
                        title: 'Success',
                        message: 'Account created successful. You are redirecting...',
                        color: 'green',
                    });
                    setLoading(false);
                    navigate('/login');
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
                <h3 className="text-center text-2xl">Register</h3>
                <form onSubmit={form.onSubmit((values) => submitRegister(values))}>
                    <TextInput
                        withAsterisk
                        label="Username"
                        placeholder="username"
                        {...form.getInputProps('username')}
                    />
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
                            to="/login"
                        >
                            You have already account?
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
