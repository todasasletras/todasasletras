/* eslint-disable no-console */
import React, { useState, useEffect, useCallback } from 'react';
import { hot } from 'react-hot-loader/root';

import {
  About,
  Cover,
  Events,
  Partnerships,
  Projects,
  Team,
  Vision,
} from 'sections';
import { Header, Footer } from 'containers';
import footerMenus from 'data/footerMenus';
import headerMenu from 'data/headerMenu';
import partners from 'data/partners';

const App = () => {
  const [fixedHeader, setFixedHeader] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [pageY, setPageY] = useState(window.pageYOffset);
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
      console.log('a');
      if (window.pageYOffset > pageY) {
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
      <Header
        fixedHeader={fixedHeader}
        scroll={scroll}
        menu={headerMenu}
      />
      <main>
        <Cover />
        <About />
        <Vision />
        <Projects />
        <Team />
        <Events />
        <Partnerships partners={partners} />
      </main>
      <Footer menus={footerMenus} />
    </>
  );
};

export default hot(App);
