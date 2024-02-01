import { Breadcrumb } from 'antd';

type Props = {};

export default function Home({}: Props) {
    return (
        <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
            <div
                style={{
                    padding: 24,
                    minHeight: 360,
                }}
            >
                Bill is a cat.
            </div>
        </div>
    );
}
