import { AppShell, Burger, Group, Menu, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconLogout, IconPhoto, IconSettings } from '@tabler/icons-react';
import { Link, NavLink, Outlet } from 'react-router-dom';

type Props = {};

export default function DashboardLayout({}: Props) {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 260,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        size="sm"
                    />
                    <div>
                        <p>Logo</p>
                    </div>
                    <div className="ml-auto mr-4">
                        <Menu shadow="md" width={180}>
                            <Menu.Target>
                                <Button>Toggle menu</Button>
                            </Menu.Target>
                            <Menu.Dropdown>
                                <Menu.Label>Account</Menu.Label>
                                <Menu.Item
                                    leftSection={
                                        <IconSettings style={{ width: 14 }} />
                                    }
                                >
                                    <Link to="settings">Settings</Link>
                                </Menu.Item>
                                <Menu.Divider />

                                <Menu.Item
                                    color="red"
                                    leftSection={
                                        <IconLogout style={{ width: 14 }} />
                                    }
                                >
                                    Log out
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                    </div>
                </Group>
            </AppShell.Header>
            <AppShell.Navbar p="xs">
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? 'border flex justify-center mt-5 text-center p-1 rounded-md text-white hover:text-white font-medium border-blue-500 bg-blue-500 hover:border-blue-600'
                            : 'border flex justify-center mt-5 text-center p-1 rounded-md text-blue-500 hover:bg-gray-50 font-medium border-blue-500 hover:border-blue-600 hover:text-blue-600'
                    }
                    end
                    to="/dashboard"
                >
                    <IconPhoto width="15" className="mr-3" />
                    Dashboard
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? 'border flex justify-center mt-5 text-center p-1 rounded-md text-white hover:text-white font-medium border-blue-500 bg-blue-500 hover:border-blue-600'
                            : 'border flex justify-center mt-5 text-center p-1 rounded-md text-blue-500 hover:bg-gray-50 font-medium border-blue-500 hover:border-blue-600 hover:text-blue-600'
                    }
                    to="settings"
                >
                    <IconPhoto width="15" className="mr-3" />
                    Settings
                </NavLink>
            </AppShell.Navbar>
            <AppShell.Main>
                <Outlet />
            </AppShell.Main>
        </AppShell>
    );
}
