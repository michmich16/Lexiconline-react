import { Outlet, useLocation, useNavigate } from "react-router-dom";
import style from './MainLayout.module.scss'
import { useEffect } from "react";
import { Navigation } from '../components/Navigation/Navigation';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

export const MainLayout = () =>{

    const location = useLocation();

    // Effekt der opdaterer vores page title når location skifter
    useEffect(() => {
      // Vi "slicer" det første tegn væk som er en skråstreg ("/").
      document.title = location.pathname.slice(1);
    }, [location]);

    return(
        <>
        <Navigation/>
        <Header/>
        <Outlet />
        <Footer/>
        </>
    );
};