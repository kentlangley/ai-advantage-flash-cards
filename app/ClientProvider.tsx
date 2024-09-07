'use client'

import { MantineProvider } from '@mantine/core';

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {children}
    </MantineProvider>
  );
}