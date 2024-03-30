import { getCharactersMultipleTimes } from "../Apollo";
import { client } from "../Apollo/client";
import { HomeMainDiv } from "./HomeStyle";
import { useEffect } from "react";
import Cards from "../Components/Cards/Cards";
import NavBar from "../Components/NavBar/NavBar";
import Filters from "../Components/Filters/Filters";

function Home() {
  const numberOfPagesToFetch = 42;

  useEffect(() => {
    getCharactersMultipleTimes(client, numberOfPagesToFetch);
  });

  return (
    <HomeMainDiv>
      <NavBar/>
      <Filters />
      <Cards />
    </HomeMainDiv>
  );
}

export default Home;
