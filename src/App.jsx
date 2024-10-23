import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from './layouts/MainLayout';
import { Navigation } from './components/Navigation/Navigation';
import { Search } from './components/Search/Search';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Fetch } from './components/Fetch/Fetch';
import { Home } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import './App.scss'

function App() {


  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Lexiconline by Michael P</title>
          <meta name='description' content='Online Dictionary provided for you by Michmich16. Contains more than 1 million words' />
          <meta name="keywords" content="Dictionary, Search, Meaning, English" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property='og:title' content='Lexiconline by Michael P' />
          <meta property='og:url' content='https://lexiconline.netlify.app/' />
          <meta property="og:description" content="Online Dicktionary provided for you by Michmich16. Contains more than 1 million words' " />
          <meta property="og:locale" content="en_GB" />
        </Helmet>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path={`/about`} element={<AboutPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </>
  )
}

export default App
