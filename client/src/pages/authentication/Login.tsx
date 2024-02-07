import { Link } from 'react-router-dom';
import {
    TextInput,
    Checkbox,
    Button,
    Group,
    Box,
    PasswordInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';

type Props = {};

export default function Login({}: Props) {
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
    return (
        <div className="flex h-screen justify-center items-center">
            <Box w={400} className="border p-6 rounded-xl bg-gray-50">
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
                        <Button type="submit">Submit</Button>
                    </Group>
                </form>
            </Box>
        </div>
    );
}
