import { AppShell, Burger, Group, Menu, Skeleton, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconLogout, IconSettings } from '@tabler/icons-react';
import { Outlet } from 'react-router-dom';

type Props = {};

export default function DashboardLayout({ }: Props) {
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
                    <div className='ml-auto mr-4'>
                        <Menu shadow="md" width={180}>
                            <Menu.Target>
                                <Button>Toggle menu</Button>
                            </Menu.Target>
                            <Menu.Dropdown>
                                <Menu.Label>Account</Menu.Label>
                                <Menu.Item leftSection={<IconSettings style={{ width: 14 }} />}>
                                    Settings
                                </Menu.Item>
                                <Menu.Divider />

                                <Menu.Item color="red" leftSection={<IconLogout style={{ width: 14 }} />}>
                                    Log out
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                    </div>

                </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">
                Navbar
                {Array(15)
                    .fill(0)
                    .map((_, index) => (
                        <Skeleton key={index} h={28} mt="sm" animate={false} />
                    ))}
            </AppShell.Navbar>
            <AppShell.Main>
                <Outlet />
            </AppShell.Main>
        </AppShell>
    );
}
