import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const PaginationMainDiv = styled(motion.div)`
  .activePage,
  .paginationPage {
    background-color: #14453D;
    border: none;
    outline: none;
    -webkit-tap-highlight-color: transparent; 
  }

  .activePage {
    background-color: #3D7068;
  }
`;
