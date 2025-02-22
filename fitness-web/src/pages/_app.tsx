// src/pages/_app.tsx
import '../styles/globals.css';
import Layout from '../components/Layout';
import type { AppProps } from 'next/app'; // **DŮLEŽITÉ: Import AppProps typ**

function MyApp({ Component, pageProps }: AppProps) { // **DŮLEŽITÉ: Přidání typování `: AppProps`**
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;