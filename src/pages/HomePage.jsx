import { useEffect } from "react";
import { Search } from "../components/Search/Search";
import { Fetch } from "../components/Fetch/Fetch";


export function Home() {

  return (
  <>
  <Search/>
  <Fetch/>
  </>
  );
}