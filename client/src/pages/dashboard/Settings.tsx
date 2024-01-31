import { Breadcrumb } from "antd"

type Props = {}

export default function Settings({ }: Props) {
    return (
        <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item>Settings</Breadcrumb.Item>
            </Breadcrumb>


            <div
                style={{
                    padding: 24,
                    minHeight: 360,

                }}
            >
                Settings.
            </div>
        </div>
    )
}