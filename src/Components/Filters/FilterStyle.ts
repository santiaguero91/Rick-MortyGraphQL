import styled from "@emotion/styled";
import { Colors } from "../../assets/Colors";

export const FiltersMainDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .selectsDiv {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
  }
  .genderSelectdiv,
  .statusSelectdiv,
  .speciesSelectdiv {
    width: 100%;
  }
  .optionSelected {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 16px;
    background-color: ${Colors.greenButton};
    height: 3rem;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const DeleteDiv = styled.svg`
  cursor: pointer;
  path {
    stroke: white;
    transition: stroke 0.3s;
  }
  /*  :hover {
    background-color: ${Colors.greenButton};
    path {
      stroke: ${Colors.lightBlueText};
    }
  } */
`;
