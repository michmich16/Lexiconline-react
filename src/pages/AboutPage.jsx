import { useEffect } from "react";
import { About } from "../components/About/About";
import { Helmet, HelmetProvider } from 'react-helmet-async';


export function AboutPage() {

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>About Lexiconline</title>
          <meta name='description' content='Online Dicktionary provided for you by Michmich16. Contains more than 1 million words' />
          <meta name="keywords" content="Dictionary, Search, Meaning, English" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Helmet>
      </HelmetProvider>
      <About />
    </>
  );
}