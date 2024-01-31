import React from 'react';
import { Flex, Layout, Card, Form, Input, Button, message } from 'antd';


const Login: React.FC = () => {
    const [messageApi, contextHolder] = message.useMessage();


    const onFinish = (values: any) => {
        console.log(values);
        messageApi.open({
            type: 'success',
            content: 'This is a success message',
        });
    };

    return (
        <Layout>
            {contextHolder}
            <Flex style={{ height: "100vh" }} justify="center" align="center" vertical>
                <Card style={{
                    width: 400
                }}>
                    <h3 style={{ textAlign: "center", marginBottom: 12 }}>Login Here</h3>
                    <Form
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your email!",
                                }
                            ]}>
                            <Input placeholder="Email" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your password!"
                                }
                            ]}
                        >
                            <Input.Password placeholder="Password" />
                        </Form.Item>

                        <Button style={{ width: "100%" }} type="primary" htmlType="submit">Submit</Button>
                    </Form>
                </Card>
            </Flex>

        </Layout>




    );
};

export default Login;