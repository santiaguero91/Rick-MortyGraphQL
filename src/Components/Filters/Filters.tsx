import { useState, useEffect } from "react";
import { useReactiveVar } from "@apollo/client";
import { Character } from "../../Intefaces/Interfaces";
import { searchResultsInfo } from "../NavBar/NavBar";
import { FiltersMainDiv } from "./FilterStyle";
import { makeVar } from "@apollo/client";
import { CleaFilterButton } from "../Cards/CardStyle";
import Dropdown from "./Dropdown";

export const selectedGendersVar = makeVar<string[]>([]);
export const selectedStatusesVar = makeVar<string[]>([]);
export const selectedSpeciesVar = makeVar<string[]>([]);

interface CardsProps {
  setCurrentPage: (pageNumber: number) => void;
}

const Filters = ({ setCurrentPage }: CardsProps) => {
  const searchCharactersData = useReactiveVar<Character[]>(searchResultsInfo);

  const [selectedGendersLocal, setSelectedGendersLocal] = useState<string[]>([]);
  const [selectedStatusesLocal, setSelectedStatusesLocal] = useState<string[]>([]);
  const [selectedSpeciesLocal, setSelectedSpeciesLocal] = useState<string[]>([]);

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

      setUniqueGenders(uniqueSearchGenders.filter(g => !selectedGendersLocal.includes(g)));
      setUniqueStatuses(uniqueSearchStatuses.filter(s => !selectedStatusesLocal.includes(s)));
      setUniqueSpecies(uniqueSearchSpecies.filter(s => !selectedSpeciesLocal.includes(s)));
    },
    [searchCharactersData, selectedGendersLocal, selectedStatusesLocal, selectedSpeciesLocal]
  );

  const [uniqueGenders, setUniqueGenders] = useState<string[]>([]);
  const [uniqueStatuses, setUniqueStatuses] = useState<string[]>([]);
  const [uniqueSpecies, setUniqueSpecies] = useState<string[]>([]);

  const handleSelectGender = (gender: string) => {
    if (!selectedGendersLocal.includes(gender)) {
      setSelectedGendersLocal([...selectedGendersLocal, gender]);
      setCurrentPage(1);
    }
  };

  const handleStatusChange = (selectedStatus: string) => {
    if (!selectedStatusesLocal.includes(selectedStatus)) {
      setSelectedStatusesLocal([...selectedStatusesLocal, selectedStatus]);
      setCurrentPage(1);
    }
  };

  const handleSpeciesChange = (selectedSpecies: string) => {
    if (!selectedSpeciesLocal.includes(selectedSpecies)) {
      setSelectedSpeciesLocal([...selectedSpeciesLocal, selectedSpecies]);
      setCurrentPage(1);
    }
  };

  const handleRemoveGender = (gender: string) => {
    const updatedGenders = selectedGendersLocal.filter((g) => g !== gender);
    setSelectedGendersLocal(updatedGenders);
    setCurrentPage(1);
  };

  const handleRemoveStatus = (status: string) => {
    const updatedStatuses = selectedStatusesLocal.filter((s) => s !== status);
    setSelectedStatusesLocal(updatedStatuses);
    setCurrentPage(1);
  };

  const handleRemoveSpecies = (species: string) => {
    const updatedSpecies = selectedSpeciesLocal.filter((s) => s !== species);
    setSelectedSpeciesLocal(updatedSpecies);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setSelectedGendersLocal([]);
    setSelectedStatusesLocal([]);
    setSelectedSpeciesLocal([]);
  };

  return (
    <FiltersMainDiv>
      <div className="selectsDiv">
        <Dropdown
          text=" Select Gender"
          options={uniqueGenders}
          selectedItems={selectedGendersLocal}
          handleSelectChange={handleSelectGender}
          handleRemoveItem={handleRemoveGender}
        />
        <Dropdown
          text=" Select Status"
          options={uniqueStatuses}
          selectedItems={selectedStatusesLocal}
          handleSelectChange={handleStatusChange}
          handleRemoveItem={handleRemoveStatus}
        />
        <Dropdown
          text=" Select Species"
          options={uniqueSpecies}
          selectedItems={selectedSpeciesLocal}
          handleSelectChange={handleSpeciesChange}
          handleRemoveItem={handleRemoveSpecies}
        />
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
