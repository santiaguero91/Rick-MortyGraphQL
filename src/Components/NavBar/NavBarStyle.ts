import styled from "@emotion/styled";

export const NavBarMainDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  .search {
    height: 40px;
    background-color: white;
    width: 60%;
    color: black;
    border-radius: 16px;
    padding-left: 8px;
  }
  .searchButton {
  }
  @media (max-width: 1000px) {
    width: 75%;
  }
`;
