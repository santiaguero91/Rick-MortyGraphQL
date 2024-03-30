import { useState, useEffect } from "react";
import { useReactiveVar } from "@apollo/client";
import Card from "./Card";
import { CardsMainDiv } from "./CardsStyle";
import { Character } from "../../Intefaces/Interfaces";
import { charactersInfo } from "../../Apollo";
import Pagination from "./Pagination";
import { searchResultsInfo } from "../NavBar/NavBar";
import {
  selectedGendersVar,
  selectedSpeciesVar,
  selectedStatusesVar,
} from "../Filters/Filters";
import { motion, AnimatePresence } from "framer-motion";

function Cards() {
  const charactersData = useReactiveVar<Character[]>(charactersInfo);
  const searchCharactersData = useReactiveVar<Character[]>(searchResultsInfo);
  const selectedGenders = useReactiveVar<string[]>(selectedGendersVar);
  const selectedStatuses = useReactiveVar<string[]>(selectedStatusesVar);
  const selectedSpecies = useReactiveVar<string[]>(selectedSpeciesVar);

  const [currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 20;

  const dataset =
    searchCharactersData.length > 0 ? searchCharactersData : charactersData;

  let charactersToDisplay = dataset;
  if (selectedGenders.length > 0) {
    charactersToDisplay = charactersToDisplay.filter((character) =>
      selectedGenders.includes(character.gender)
    );
  }
  if (selectedStatuses.length > 0) {
    charactersToDisplay = charactersToDisplay.filter((character) =>
      selectedStatuses.includes(character.status)
    );
  }
  if (selectedSpecies.length > 0) {
    charactersToDisplay = charactersToDisplay.filter((character) =>
      selectedSpecies.includes(character.species)
    );
  }

  const chunkArray = (arr: any[], chunkSize: number) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const charactersChunks = chunkArray(charactersToDisplay, charactersPerPage);
  charactersToDisplay = charactersChunks[currentPage - 1] || [];

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchCharactersData.length]);

  return (
    <CardsMainDiv>
      <div className="Cards">
        {charactersToDisplay.map((character: Character) => (
          <AnimatePresence>
            <motion.div key={character.id}>
              <Card {...character} />
            </motion.div>
          </AnimatePresence>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPageCount={charactersChunks.length}
        handlePageChange={handlePageChange}
      />
    </CardsMainDiv>
  );
}

export default Cards;
