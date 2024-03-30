import { getCharactersMultipleTimes } from "../Apollo";
import { client } from "../Apollo/client";
import { HomeMainDiv } from "./HomeStyle";
import { useEffect, useState } from "react";
import Cards from "../Components/Cards/Cards";
import NavBar from "../Components/NavBar/NavBar";
import Filters from "../Components/Filters/Filters";
import Modal from "../Components/Modal/Modal";

function Home() {
  const numberOfPagesToFetch = 42;
  const [modalOpen, setModalOpen] = useState(false);
  const [cardClicked, setCardClicked] = useState(false);

  useEffect(() => {
    getCharactersMultipleTimes(client, numberOfPagesToFetch);
  }, []);

  return (
    <HomeMainDiv>
      {modalOpen && <Modal 
      modalOpen={modalOpen}
      setModalOpen={setModalOpen}
      cardClicked={cardClicked}
      />}
      <NavBar />

      <Filters />
      <Cards 
      modalOpen={modalOpen} 
      setModalOpen={setModalOpen}
      setCardClicked={setCardClicked}
      />
    </HomeMainDiv>
  );
}

export default Home;
