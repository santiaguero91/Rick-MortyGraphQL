import styled from "@emotion/styled";

export const CardsMainDiv = styled.div`
  width: 100%;
  .Cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    width: 100%;
    margin: 5% auto 0 auto;
    grid-auto-flow: row;
  }
  .paginationControls {
    width: 100%;
  }
`;
