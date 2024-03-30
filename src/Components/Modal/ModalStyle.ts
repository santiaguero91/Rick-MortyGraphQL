import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Colors } from "../../assets/Colors";

export const ModalMainDiv = styled(motion.div)`
  border-radius: 16px;
  padding: 5rem;
  box-shadow: rgba(255, 255, 255, 0.24) 0px 3px 8px;

  .modalName {
    color: yellow;
    font-weight: 700;
  }

  .flexRow {
    display: flex;
    flex-direction: row;
  }

  .propertiesDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5rem;
    color: white;
    font-size: larger;
    font-weight: 700;

    .property {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    .propertyName {
      color: ${Colors.purpleShadows};
      padding-right: 4px;
    }
  }
`;
