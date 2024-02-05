import { Breadcrumb } from 'antd';

type Props = {};

export default function Home({}: Props) {
    return (
        <div>
            <Breadcrumb
                items={[{ title: 'Dashboard' }, { title: 'Home' }]}
                style={{ margin: '16px 0' }}
            ></Breadcrumb>
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
