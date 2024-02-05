import { Breadcrumb } from 'antd';

type Props = {};

export default function Settings({}: Props) {
    return (
        <div>
            <Breadcrumb
                items={[{ title: 'Dashboard' }, { title: 'Settings' }]}
                style={{ margin: '16px 0' }}
            ></Breadcrumb>

            <div
                style={{
                    padding: 24,
                    minHeight: 360,
                }}
            >
                Settings.
            </div>
        </div>
    );
}
