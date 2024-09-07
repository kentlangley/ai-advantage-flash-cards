'use client'

import { MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  // Your theme customizations here
});

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MantineProvider theme={theme}>
      {children}
    </MantineProvider>
  );
}