import React, { useState } from "react";
import { useReactiveVar } from "@apollo/client";
import { Character } from "../../Intefaces/Interfaces";
import { searchResultsInfo } from "../NavBar/NavBar";
import { FiltersMainDiv } from "./FilterStyle";
import { makeVar } from "@apollo/client";

// Reactive variables for unique values of each select
export const selectedGendersVar = makeVar<string[]>([]);
export const selectedStatusesVar = makeVar<string[]>([]);
export const selectedSpeciesVar = makeVar<string[]>([]);

const Filters = () => {
  const searchCharactersData = useReactiveVar<Character[]>(searchResultsInfo);

  // Local state for selected options
  const [selectedGendersLocal, setSelectedGendersLocal] = useState<string[]>(
    []
  );
  const [selectedStatusesLocal, setSelectedStatusesLocal] = useState<string[]>(
    []
  );
  const [selectedSpeciesLocal, setSelectedSpeciesLocal] = useState<string[]>(
    []
  );

  // Function to extract unique values for a specific property
  const getUniqueValues = (data: Character[], property: keyof Character) => {
    const uniqueValues = new Set<string>();
    data.forEach((character) => {
      uniqueValues.add(character[property]);
    });
    return Array.from(uniqueValues);
  };

  // Get unique gender values
  const uniqueSearchGenders = getUniqueValues(searchCharactersData, "gender");

  // Get unique status values
  const uniqueSearchStatuses = getUniqueValues(searchCharactersData, "status");

  // Get unique species values
  const uniqueSearchSpecies = getUniqueValues(searchCharactersData, "species");

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGender = event.target.value;
    setSelectedGendersLocal([...selectedGendersLocal, selectedGender]);
    selectedGendersVar([...selectedGendersVar(), selectedGender]);
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStatus = event.target.value;
    setSelectedStatusesLocal([...selectedStatusesLocal, selectedStatus]);
    selectedStatusesVar([...selectedStatusesVar(), selectedStatus]);
  };

  const handleSpeciesChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSpecies = event.target.value;
    setSelectedSpeciesLocal([...selectedSpeciesLocal, selectedSpecies]);
    selectedSpeciesVar([...selectedSpeciesVar(), selectedSpecies]);
  };
  const handleRemoveGender = (gender: string) => {
    const updatedGenders = selectedGendersLocal.filter((g) => g !== gender);
    setSelectedGendersLocal(updatedGenders);
    selectedGendersVar(updatedGenders);
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

  return (
    <FiltersMainDiv>
      <div className="genderSelectdiv">
        <select id="genderSelect" onChange={handleGenderChange}>
          <option value="">All</option>
          {uniqueSearchGenders.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>
        {selectedGendersLocal.map((s) => (
          <div key={s}>
            <h6>{s}</h6>
            <h6 onClick={() => handleRemoveGender(s)}>X</h6>
          </div>
        ))}
      </div>
      <div className="statusSelectdiv">
        <select id="statusSelect" onChange={handleStatusChange}>
          <option value="">All</option>
          {uniqueSearchStatuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
        {selectedStatusesLocal.map((s) => (
          <div key={s}>
            <h6>{s}</h6>
            <h6 onClick={() => handleRemoveStatus(s)}>X</h6>
          </div>
        ))}
      </div>
      <div className="speciesSelectdiv">
        <select id="speciesSelect" onChange={handleSpeciesChange}>
          <option value="">All</option>
          {uniqueSearchSpecies.map((species) => (
            <option key={species} value={species}>
              {species}
            </option>
          ))}
        </select>
        {selectedSpeciesLocal.map((s) => (
          <div key={s}>
            <h6>{s}</h6>
            <h6 onClick={() => handleRemoveSpecies(s)}>X</h6>
          </div>
        ))}
      </div>
    </FiltersMainDiv>
  );
};

export default Filters;
