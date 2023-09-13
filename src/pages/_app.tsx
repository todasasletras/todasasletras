import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Todas as Letras</title>
        <meta charSet="utf-8" />
        {/* <!-- Primary Meta Tags --> */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/* <!-- General Meta Tags --> */}
        <meta name="theme-color" content="#5A08FC" />
        <meta name="description" content="Inserimos talentos LGBTI+ na área de tecnologia." />
        <meta name="keywords" content="lgbt, lgbtqi, tech, tecnologia, desenvolvimento, design, pride" />
        <meta name="robots" content="follow" />
        <meta name="revisit-after" content="1 day" />
        <meta name="language" content="Portuguese" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta httpEquiv="content-language" content="pt-br, en-US" />
        <meta name="application-name" content="Todas as Letras" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5A08FC" />
        <meta name="apple-mobile-web-app-title" content="Todas as Letras" />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://todasasletras.org" />
        <meta property="og:title" content="Todas as Letras" />
        <meta property="og:site_name" content="Todas as Letras" />
        <meta property="og:description" content="Inserimos talentos LGBTI+ na área de tecnologia." />
        <meta property="og:image" content="https://todasasletras.netlify.app/social-share.png" />
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://todasasletras.org" />
        <meta property="twitter:title" content="Todas as Letras" />
        <meta property="twitter:description" content="Inserimos talentos LGBTI+ na área de tecnologia." />
        <meta name="twitter:image:alt" content="Inserimos talentos LGBTI+ na área de tecnologia." />
        <meta name="twitter:site" content="@todasasletras_" />
        <meta property="twitter:image" content="https://todasasletras.netlify.app/social-share.png" />
      </Head>

      <GlobalStyles />

      <Component {...pageProps} />
    </>
  );
}

export default App;
