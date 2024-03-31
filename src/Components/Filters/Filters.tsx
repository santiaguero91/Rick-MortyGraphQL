import React, { useState, useEffect } from "react";
import { useReactiveVar } from "@apollo/client";
import { Character } from "../../Intefaces/Interfaces";
import { searchResultsInfo } from "../NavBar/NavBar";
import { FiltersMainDiv } from "./FilterStyle";
import { makeVar } from "@apollo/client";
import { motion } from "framer-motion";
import { CleaFilterButton } from "../Cards/CardStyle";

export const selectedGendersVar = makeVar<string[]>([]);
export const selectedStatusesVar = makeVar<string[]>([]);
export const selectedSpeciesVar = makeVar<string[]>([]);

interface CardsProps {
  setCurrentPage: (pageNumber: number) => void;
}

const Filters = ({ setCurrentPage }: CardsProps) => {
  const searchCharactersData = useReactiveVar<Character[]>(searchResultsInfo);

  const [selectedGendersLocal, setSelectedGendersLocal] = useState<string[]>(
    []
  );
  const [selectedStatusesLocal, setSelectedStatusesLocal] = useState<string[]>(
    []
  );
  const [selectedSpeciesLocal, setSelectedSpeciesLocal] = useState<string[]>(
    []
  );

  useEffect(
    function () {
      const uniqueValues = (data: Character[], property: keyof Character) => {
        const uniqueValues = new Set<string>();
        data.forEach((character) => {
          uniqueValues.add(String(character[property]));
        });
        return Array.from(uniqueValues);
      };

      const uniqueSearchGenders = uniqueValues(searchCharactersData, "gender");
      const uniqueSearchStatuses = uniqueValues(searchCharactersData, "status");
      const uniqueSearchSpecies = uniqueValues(searchCharactersData, "species");

      setUniqueGenders(uniqueSearchGenders);
      setUniqueStatuses(uniqueSearchStatuses);
      setUniqueSpecies(uniqueSearchSpecies);
    },
    [searchCharactersData]
  );

  const [uniqueGenders, setUniqueGenders] = useState<string[]>([]);
  const [uniqueStatuses, setUniqueStatuses] = useState<string[]>([]);
  const [uniqueSpecies, setUniqueSpecies] = useState<string[]>([]);

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGender = event.target.value;
    if (!selectedGendersLocal.includes(selectedGender)) {
      setSelectedGendersLocal([...selectedGendersLocal, selectedGender]);
      selectedGendersVar([...selectedGendersVar(), selectedGender]);
      setCurrentPage(1);
    }
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStatus = event.target.value;
    if (!selectedStatusesLocal.includes(selectedStatus)) {
      setSelectedStatusesLocal([...selectedStatusesLocal, selectedStatus]);
      selectedStatusesVar([...selectedStatusesVar(), selectedStatus]);
      setCurrentPage(1);
    }
  };

  const handleSpeciesChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSpecies = event.target.value;
    if (!selectedSpeciesLocal.includes(selectedSpecies)) {
      setSelectedSpeciesLocal([...selectedSpeciesLocal, selectedSpecies]);
      selectedSpeciesVar([...selectedSpeciesVar(), selectedSpecies]);
      setCurrentPage(1);
    }
  };

  const handleRemoveGender = (gender: string) => {
    const updatedGenders = selectedGendersLocal.filter((g) => g !== gender);
    setSelectedGendersLocal(updatedGenders);
    selectedGendersVar(updatedGenders);
    setCurrentPage(1);
  };

  const handleRemoveStatus = (status: string) => {
    const updatedStatuses = selectedStatusesLocal.filter((s) => s !== status);
    setSelectedStatusesLocal(updatedStatuses);
    selectedStatusesVar(updatedStatuses);
  };

  const handleRemoveSpecies = (species: string) => {
    const updatedSpecies = selectedSpeciesLocal.filter((s) => s !== species);
    setSelectedSpeciesLocal(updatedSpecies);
    selectedSpeciesVar(updatedSpecies);
  };

  const handleClearFilters = () => {
    setSelectedGendersLocal([]);
    setSelectedStatusesLocal([]);
    setSelectedSpeciesLocal([]);
    selectedGendersVar([]);
    selectedStatusesVar([]);
    selectedSpeciesVar([]);
  };

  return (
    <FiltersMainDiv>
      <div className="selectsDiv">
        <div className="genderSelectdiv">
          <select id="genderSelect" onChange={handleGenderChange}>
            <option disabled selected>
              Select Gender
            </option>
            {uniqueGenders.map((gender) => (
              <option key={gender} value={gender}>
                {gender}
              </option>
            ))}
          </select>
          {selectedGendersLocal.map((s) => (
            <motion.div
              className="optionSelected"
              key={s}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h5>{s}</h5>
              <div className="deleteDiv">
                <h6 onClick={() => handleRemoveGender(s)}>X</h6>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="statusSelectdiv">
          <select id="statusSelect" onChange={handleStatusChange}>
            <option disabled selected>
              Select Status
            </option>
            {uniqueStatuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
          {selectedStatusesLocal.map((s) => (
            <div className="optionSelected" key={s}>
              <h5>{s}</h5>
              <div className="deleteDiv">
                <h6 onClick={() => handleRemoveStatus(s)}>X</h6>
              </div>
            </div>
          ))}
        </div>
        <div className="speciesSelectdiv">
          <select id="speciesSelect" onChange={handleSpeciesChange}>
            <option disabled selected>
              Select Species
            </option>
            {uniqueSpecies.map((species) => (
              <option key={species} value={species}>
                {species}
              </option>
            ))}
          </select>
          {selectedSpeciesLocal.map((s) => (
            <div className="optionSelected" key={s}>
              <h5>{s}</h5>
              <div className="deleteDiv">
                <h6 onClick={() => handleRemoveSpecies(s)}>X</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
      {(selectedGendersLocal.length !== 0 ||
        selectedStatusesLocal.length !== 0 ||
        selectedSpeciesLocal.length !== 0) && (
        <CleaFilterButton onClick={handleClearFilters}>
          Clear Filters
        </CleaFilterButton>
      )}
    </FiltersMainDiv>
  );
};

export default Filters;
