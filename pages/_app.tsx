import { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Component {...pageProps} />
    </MantineProvider>
  )
}