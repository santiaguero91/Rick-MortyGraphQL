import { useState, useEffect } from "react";
import { useReactiveVar } from "@apollo/client";
import Card from "./Card";
import { CardsMainDiv } from "./CardsStyle";
import { Character } from "../../Intefaces/Interfaces";
import { charactersInfo } from "../../Apollo";
import Pagination from "./Pagination";
import { searchResultsInfo } from "../NavBar/NavBar";

function Cards() {
  const charactersData = useReactiveVar<Character[]>(charactersInfo);
  const searchCharactersData = useReactiveVar<Character[]>(searchResultsInfo);
  const [currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 20;

  const dataset =
    searchCharactersData.length > 0 ? searchCharactersData : charactersData;
  const chunkArray = (arr: any[], chunkSize: number) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const charactersChunks = chunkArray(dataset, charactersPerPage);
  const charactersToDisplay = charactersChunks[currentPage - 1] || [];

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
          <div key={character.id}>
            <Card {...character} />
          </div>
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
