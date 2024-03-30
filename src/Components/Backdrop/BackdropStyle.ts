import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const BackdropMainDiv = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh; 
  width: 100%;
  background: #000000e1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;
