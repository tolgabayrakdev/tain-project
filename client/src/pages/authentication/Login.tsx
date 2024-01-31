import { Flex, Layout, Card, Form, Input, Button, message } from 'antd';

const Login = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const onFinish = async (values: { email: string; password: string }) => {
        const result = await fetch('http://127.0.0.1:5001', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                email: values.email,
                password: values.password,
            }),
        });
        if (result.status === 200) {
            messageApi.open({
                type: 'success',
                content: 'This is a success message',
            });
        } else {
            messageApi.open({
                type: 'warning',
                content: 'Email or password wrong!',
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
                        <Button
                            style={{ width: '100%' }}
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
