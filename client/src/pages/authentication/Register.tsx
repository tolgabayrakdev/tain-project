import { Button, Form, Input, Layout, message, Card, Flex } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();

    const onFinish = async (values: {
        username: string;
        email: string;
        password: string;
    }) => {
        try {
            const result = await fetch(
                'http://127.0.0.1:5001/api/v1/auth/register',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                    body: JSON.stringify({
                        username: values.username,
                        email: values.email,
                        password: values.password,
                    }),
                },
            );
            if (result.status === 201) {
                messageApi.open({
                    type: 'success',
                    content: 'This is a success message',
                });
                navigate('/home');
            } else if (result.status === 400) {
                console.log(result);

                messageApi.open({
                    type: 'warning',
                    content: 'Email or username already used',
                });
            }
        } catch (error) {
            messageApi.open({
                type: 'error',
                content: 'Something went wrong!',
            });
        }
    };

    return (
        <Layout>
            {contextHolder}
            <Flex
                style={{ height: '100vh' }}
                justify="center"
                align="center"
                vertical
            >
                <Card
                    style={{
                        width: 400,
                    }}
                >
                    <h3 style={{ textAlign: 'center', marginBottom: 12 }}>
                        Register Here
                    </h3>
                    <Form onFinish={onFinish}>
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                                {
                                    min: 6,
                                    message: 'Minimum 6 length',
                                },
                            ]}
                        >
                            <Input placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                                {
                                    min: 6,
                                    message: 'Please enter a mail address!',
                                },
                            ]}
                        >
                            <Input placeholder="Email" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password placeholder="Password" />
                        </Form.Item>
                        <Link to="/login">You have already account ?</Link>
                        <Button
                            style={{ width: '100%', marginTop: 12 }}
                            type="primary"
                            htmlType="submit"
                        >
                            Submit
                        </Button>
                    </Form>
                </Card>
            </Flex>
        </Layout>
    );
};

export default Register;
