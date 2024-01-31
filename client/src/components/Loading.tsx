import { Layout, Spin } from 'antd'

type Props = {}

export default function Loading({ }: Props) {
    return (
        <Layout
        style={{ height: "100vh", justifyContent: "center"}}
        >
            <Spin size="large" />
        </Layout>
    )
}