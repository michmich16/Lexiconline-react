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
        <Header />
        <Outlet />
        <Footer />
      </HelmetProvider>
    </>
  );
};