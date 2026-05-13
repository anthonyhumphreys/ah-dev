'use client';

import {
  ActionIcon,
  Box,
  Burger,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  rem,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconMoon, IconSun } from '@tabler/icons-react';
import cx from 'clsx';
import Link from 'next/link';
import classes from './Header.module.css';

const navItems = [
  { label: 'Experience', href: '/#experience' },
  { label: 'Products', href: '/#products' },
  { label: 'Platforms', href: '/#platforms' },
  { label: 'Writing', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export function HeaderWithProjectsMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <Box className={classes.shell}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Link href="/" className={classes.brand}>
            Anthony Humphreys
          </Link>

          <Group h="100%" gap={0} visibleFrom="sm">
            {navItems.map((item) => (
              <Link href={item.href} className={classes.link} key={item.label}>
                {item.label}
              </Link>
            ))}
          </Group>

          <Group visibleFrom="sm">
            <ActionIcon
              onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
              variant="default"
              size="lg"
              aria-label="Toggle color scheme"
            >
              <IconSun className={cx(classes.icon, classes.light)} stroke={1.7} />
              <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.7} />
            </ActionIcon>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          {navItems.map((item) => (
            <Link href={item.href} className={classes.link} key={item.label} onClick={closeDrawer}>
              {item.label}
            </Link>
          ))}
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
