import { useEffect } from "react";
import { Search } from "../components/Search/Search";
import { Fetch } from "../components/Fetch/Fetch";
import { Helmet, HelmetProvider } from 'react-helmet-async';


export function Home() {

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Lexiconline</title>
          <meta name='description' content='Online Dicktionary provided for you by Michmich16. Contains more than 1 million words' />
          <meta name="keywords" content="Dictionary, Search, Meaning, English" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
      </HelmetProvider>
      <Search />
      <Fetch />
    </>
  );
}