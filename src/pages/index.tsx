import { useState, useEffect, useCallback } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { About, Cover, Events, Partnerships, Projects, Vision } from 'sections';
import { Header, Footer } from 'containers';
import footerMenus from 'data/footerMenus';
import headerMenu from 'data/headerMenu';
import partners from 'data/partners';

const Home: NextPage = () => {
  const windowIsValid = typeof window !== 'undefined' ? window : undefined;
  const [fixedHeader, setFixedHeader] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [pageY, setPageY] = useState(windowIsValid?.pageYOffset);
  const [locked, setLocked] = useState(true);

  const handleHeader = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      setFixedHeader(true);
    } else {
      setFixedHeader(false);
    }
  };

  const handleScroll = useCallback(() => {
    if (locked) {
      return;
    }
    if (!locked) {
      if (pageY ? window.pageYOffset > pageY : undefined) {
        setLocked(true);
        setPageY(window.pageYOffset);
        setScroll(true);
      } else {
        setScroll(false);
      }
    }
  }, [pageY, locked]);

  useEffect(() => {
    window.addEventListener('scroll', handleHeader);

    return () => {
      window.removeEventListener('scroll', () => handleHeader);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <Head>
        <title>Todas as Letras</title>
      </Head>
      <Header fixedHeader={fixedHeader} scroll={scroll} menu={headerMenu} />
      <main>
        <Cover />
        <About />
        <Vision />
        <Projects />
        {/* <Team /> */}
        {partners ? <Partnerships partners={partners} /> : null}
        <Events />
      </main>
      <Footer menus={footerMenus} />
    </>
  );
};

export default Home;
