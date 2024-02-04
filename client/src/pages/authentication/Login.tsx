import { Flex, Layout, Card, Form, Input, Button, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();

    const onFinish = async (values: { email: string; password: string }) => {
        try {
            const result = await fetch(
                'http://localhost:5001/api/v1/auth/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                    body: JSON.stringify({
                        email: values.email,
                        password: values.password,
                    }),
                },
            );
            if (result.status === 200) {
                messageApi.open({
                    type: 'success',
                    content: 'This is a success message',
                });
                navigate('/');
            } else {
                messageApi.open({
                    type: 'warning',
                    content: 'Email or password wrong!',
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
                        Login Here
                    </h3>
                    <Form onFinish={onFinish}>
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
                        <Link to="/register">You dont have an account ?</Link>
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

export default Login;
