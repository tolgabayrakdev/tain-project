import { Layout, Spin } from 'antd';

export default function Loading() {
    return (
        <Layout style={{ height: '100vh', justifyContent: 'center' }}>
            <Spin size="large" />
        </Layout>
    );
}
