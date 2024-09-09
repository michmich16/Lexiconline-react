import { NavLink } from "react-router-dom";
import style from './Navigation.module.scss';
import { useEffect } from 'react';

export const Navigation = () => {
    useEffect(() => {
        console.log("Navigation Component has Mounted");
        return () => {
            console.log("Navigation Component has Un-Mounted");
        };
    }, []);

    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/about'}>About</NavLink></li>
                    <li><NavLink to={'https://dictionaryapi.dev/'}>API</NavLink></li>
                </ul>
            </nav>
            <div className={style.navLogo}>
                <img width="48" height="48" src="https://img.icons8.com/parakeet-line/48/book.png" alt="book" />
            </div>
        </>
    );
};
