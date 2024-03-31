import { makeVar } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { NavBarMainDiv } from "./NavBarStyle";
import { useReactiveVar } from "@apollo/client";
import { Character } from "../../Intefaces/Interfaces";
import { charactersInfo } from "../../Apollo";

export const searchResultsInfo = makeVar<Character[]>([]);

const NavBar = () => {
  const charactersData = useReactiveVar<Character[]>(charactersInfo);
  const [searchTerm, setSearchTerm] = useState("");
  const [count, setCount] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filteredResults = charactersData.filter((character) =>
      character.name.toLowerCase().includes(value.toLowerCase())
    );
    searchResultsInfo(filteredResults);
  };

  useEffect(() => {
    if (count === 0 && charactersData.length > 100) {
      searchResultsInfo(charactersData);
      setCount(count + 1);
    }
  }, [charactersData.length]);

  return (
    <NavBarMainDiv>
      <input
        type="text"
        placeholder="Search characters..."
        value={searchTerm}
        onChange={handleChange}
        className="search"
      />
    </NavBarMainDiv>
  );
};

export default NavBar;
