import React, { useEffect, useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    LogoutOutlined,
    SettingOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Divider, Layout, Menu, Tooltip, theme } from 'antd';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import AuthWrapper from '../util/AuthWrapper';
import Loading from '../components/Loading';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem(<Link to="/">Dashboard</Link>, '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('Team', 'sub2', <TeamOutlined />, [
        getItem('Team 1', '6'),
        getItem('Team 2', '8'),
    ]),
    getItem('Files', '9', <FileOutlined />),
    getItem(<Link to='/settings'>Settings</Link>, '10', <SettingOutlined />)
];

const Home = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    let location = useLocation();
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const onClick = (e: any) => {
        console.log('click ', e.key);
    }

    const handleLogout = async () => {
        setLoading(false);
        try {
            const result = await fetch("http://localhost:5001/api/v1/auth/logout", {
                method: "POST",
                credentials: "include"
            });
            if (result.status === 200) {
                navigate("/login");
                setLoading(true);
            }
        } catch (error) {
            throw error;
        }
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
            >
                <Divider
                    style={{
                        color: 'white',
                    }}
                >
                    <p>LOGO</p>
                </Divider>
                <Menu
                    onClick={onClick}
                    theme="dark"
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    items={items}
                />
            </Sider>
            {
                loading ? <Layout>
                    <Header style={{ padding: 0, background: colorBgContainer }}>
                        <div style={{ display: "flex", justifyContent: "flex-end", marginRight: 16, marginTop: 12 }}>
                            <Tooltip title="Logout">
                                <Button onClick={handleLogout} icon={<LogoutOutlined />} type="primary" danger />
                            </Tooltip>
                        </div>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Outlet />
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©{new Date().getFullYear()} Created by TainProject
                    </Footer>
                </Layout> : <Loading />
            }

        </Layout>
    );
};

export default AuthWrapper(Home);
