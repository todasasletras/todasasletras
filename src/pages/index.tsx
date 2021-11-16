import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { About, Cover, Events, Partnerships, Projects, Team, Vision } from 'sections';
import { Footer } from 'containers';
import footerMenus from 'data/footerMenus';
// import headerMenu from 'data/headerMenu';
// import partners from 'data/partners';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <Cover />
        <About />
        {/* <Vision /> */}
        {/* <Projects /> */}
        {/* <Team /> */}
        {/* <Events /> */}
        {/* <Partnerships partners={partners} /> */}
      </main>
      <Footer menus={footerMenus} />
    </>
  );
};

export default Home;
