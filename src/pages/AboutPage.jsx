import { useEffect } from "react";
import { About } from "../components/About/About";
import { Helmet } from "react-helmet"


export function AboutPage() {

  return (
    <>
    <Helmet>
      <title>About Lexiconline</title>
      <meta name='description' content='Online Dicktionary provided for you by Michmich16. Contains more than 1 million words'/>
      <meta name="keywords" content="Dictionary, Search, Meaning, English"/>
    </Helmet>
      <About />
    </>
  );
}