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
          <BrowserRouter>
            <Routes>
              <Route path={"/"} element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path={`/about`} element={<AboutPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Helmet>
      </HelmetProvider>
    </>
  )
}

export default App
