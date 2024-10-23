import { useEffect } from "react";
import { About } from "../components/About/About";
import { Helmet, HelmetProvider } from 'react-helmet-async';


export function AboutPage() {

  return (
    <>
        <Helmet>
        <title>Lexiconline - About</title> 
            <meta name='description' content='Online Dictionary provided for you by Michmich16. Contains more than 1 million words' />
            <meta name="keywords" content="Dictionary, Search, Meaning, English" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property='og:title' content='Lexiconline by Michael P' />
            <meta property='og:url' content='https://lexiconline.netlify.app/' />
            <meta property="og:description" content="Online Dicktionary provided for you by Michmich16. Contains more than 1 million words' " />
            <meta property="og:locale" content="en_GB" />
        </Helmet>
      <About />
    </>
  );
}