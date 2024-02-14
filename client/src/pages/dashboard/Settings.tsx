import { Divider, Grid, rem, Card, Image, Text, Input, TextInput, Button, PasswordInput } from "@mantine/core";
import { useEffect, useState } from "react";

type Props = {};

type UserInformationType = {
    id: number;
    username: string;
    email: string;
}

export default function Settings({ }: Props) {
    const [userInformation, setUserInformation] = useState<UserInformationType>({ id: 0, username: "", email: "" })

    useEffect(() => {
        const userVerify = async () => {
            try {
                const res = await fetch("http://localhost:5001/api/v1/auth/verify", {
                    method: "POST",
                    credentials: "include"
                });
                const data: any = await res.json();
                setUserInformation(data.user);

            } catch (error) {
                console.log(error);
            }
        }
        userVerify();
    }, [])
    return (
        <div>
            <h1 className="text-xl ml-2 mb-2">Settings</h1>
            <Grid mt="xl" justify="center" align="stretch">

                <Grid.Col mb="xl" span={5} style={{ minHeight: rem(300), minWidth: rem(330) }}>
                    <Card
                        radius="md"
                        shadow="sm"
                        padding="lg"
                        m="xl"
                    >
                        <Text fw={600} size="lg">

                            User Information
                        </Text>
                        <Divider mb="md" />
                        <Text mb="xs">
                            Username: <span className="text-blue-600"> {userInformation.username} </span>
                        </Text>
                        <Text>
                            Email: <span className="text-blue-600"> {userInformation.email} </span>
                        </Text>

                    </Card>
                </Grid.Col>
                <Grid.Col mb="xl" span={5} style={{ minHeight: rem(300), minWidth: rem(530) }}>
                    <Card
                        shadow="sm"
                        padding="xl"
                    >
                        <Text fw={600} size="lg" mb="md">
                            Update Password
                        </Text>

                        <form>
                            <PasswordInput
                                label="Password"
                                placeholder="********"
                            />
                            <PasswordInput
                                label="Password confirm"
                                placeholder="*******"
                                mb="md"
                            />
                            <Button type="submit">Update</Button>
                        </form>
                    </Card>
                </Grid.Col>
            </Grid>
        </div>
    )
}
