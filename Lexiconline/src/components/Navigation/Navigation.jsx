import { Link } from "react-router-dom";
import style from './Navigation.module.scss';
import { useState, useEffect } from 'react';


export const Navigation = () => {
    useEffect(() => {
        console.log("Navigation Component has Mounted")
        return (
            () => {
                console.log("Navigation Component has Un-Mounted")
            }
        )
    }, [])

    return (
        <>
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">API</a></li>
                </ul>
            </nav>
                {/* <div>
                    <img width="48" height="48" color="white" src="https://img.icons8.com/parakeet-line/48/1A1A1A/book.png" alt="book" />
                </div> */}
        </>
    )
};