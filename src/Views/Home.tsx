import { charactersInfo, getCharactersMultipleTimes } from "../Apollo";
import { client } from "../Apollo/client";
import { HomeMainDiv } from "./HomeStyle";
import { useEffect, useState } from "react";
import Cards from "../Components/Cards/Cards";
import NavBar from "../Components/NavBar/NavBar";
import Filters from "../Components/Filters/Filters";
import Modal from "../Components/Modal/Modal";
import { useReactiveVar } from "@apollo/client";
import { Character } from "../Intefaces/Interfaces";
import LoadingComponent from "./Loading";

function Home() {
  const charactersData = useReactiveVar<Character[]>(charactersInfo);
  const numberOfPagesToFetch = 42;
  const [modalOpen, setModalOpen] = useState(false);
  const [cardClicked, setCardClicked] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getCharactersMultipleTimes(client, numberOfPagesToFetch);
  }, []);

  return (
    <HomeMainDiv>
      {charactersData.length !== 0 ? (
        <>
          {modalOpen && (
            <Modal
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              cardClicked={cardClicked}
            />
          )}
          <NavBar />
          <Filters setCurrentPage={setCurrentPage} />
          <Cards
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            setCardClicked={setCardClicked}
          />
        </>
      ) : (
        <div>
          <LoadingComponent />
        </div>
      )}
    </HomeMainDiv>
  );
}

export default Home;
