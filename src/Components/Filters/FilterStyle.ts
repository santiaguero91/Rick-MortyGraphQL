import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const FiltersMainDiv = styled(Box)`
  width: 50%;
  display: flex;
  flex-direction: row;
  select {
    width: 100%;
    height: 40px;
  }

  .genderSelectdiv,
  .statusSelectdiv {
    width: 50%;
  }
`;
