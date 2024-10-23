import { Outlet, useLocation, useNavigate } from "react-router-dom";
import style from './MainLayout.module.scss'
import { useEffect } from "react";
import { Navigation } from '../components/Navigation/Navigation';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export const MainLayout = () => {

  const location = useLocation();

  // Effekt der opdaterer vores page title når location skifter
  useEffect(() => {
    // Vi "slicer" det første tegn væk som er en skråstreg ("/").
    document.title = location.pathname.slice(1);
  }, [location]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Lexiconline</title>
          <meta name='description' content='Online Dicktionary provided for you by Michmich16. Contains more than 1 million words' />
          <meta name="keywords" content="Dictionary, Search, Meaning, English" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property='og:title' content='Lexiconline' />
          <meta property='og:url' content='https://lexiconline.netlify.app/' />
          <meta property="og:description" content="Online Dicktionary provided for you by Michmich16. Contains more than 1 million words' " />
          <meta property="og:locale" content="en_GB" />
        </Helmet>
      </HelmetProvider>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};