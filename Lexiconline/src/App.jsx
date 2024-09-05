import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from './components/Navigation/Navigation';
import { Search } from './components/Search/Search';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Fetch } from './components/Fetch/Fetch';

import './App.scss'

function App() {


  return (
    <>
      <Header />
      <Search />
      <Fetch />
      <Footer />
    </>
  )
}

export default App
