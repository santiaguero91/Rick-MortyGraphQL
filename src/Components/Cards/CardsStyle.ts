import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const CardsMainDiv = styled(Box)`
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
