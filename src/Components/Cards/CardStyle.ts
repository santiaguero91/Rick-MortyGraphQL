import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Colors } from "../../assets/Colors";

export const CardMainDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  padding: 0 5%;
  align-items: center;
  border-radius: 25px;
  margin: 0.5% 0;
  background-color: ${Colors};
  overflow: hidden;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.2);
  }

  img {
    border-radius: 999px;
    transition: transform 0.5s;
    cursor: pointer;
  }

  h1 {
    color: white;
  }

  &.special {
    background-color: ${Colors.greyCards};
    color: black;
    text-decoration: line-through;
  }
`;

export const CleaFilterButton = styled(motion.button)`
  background-color: ${Colors.greenButton};
  border-radius: 16px;
  margin-top: 16px;
  max-width: 200px;
`;
