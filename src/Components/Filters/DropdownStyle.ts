import styled from "@emotion/styled";

export const DropdownMainDiv = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .selectDiv {
    width: 20%;
    max-width: 10rem;

  }
  .select {
    border: 1px solid white;
    padding: 0.5rem;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    max-width: 10rem;
  }
  .dropdown-menu {
    background-color: gray;
    overflow: hidden;
    position: absolute;
    height: auto;
    width: 25%;
    z-index: 10;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 10rem;
  }
  .dropdown-item {
    cursor: pointer;
    width: 10rem;
  }
`;


export const SelectedOptionsDiv = styled.div`

  width: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: start;
  gap: 1%;
  .optionSelected {
    width: 8rem;
    margin: auto 0;
  }
`;
