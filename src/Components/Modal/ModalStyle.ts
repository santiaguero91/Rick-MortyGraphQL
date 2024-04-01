import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Colors } from "../../assets/Colors";

export const ModalMainDiv = styled(motion.div)`
  position: relative; 
  border-radius: 16px;
  box-shadow: rgba(255, 255, 255, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  .closeButton {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    color: ${Colors.lightBlueText};
    font-size: 20px;
    font-weight: bold;
    z-index: 999;
    transition: all 0.5s;
    :hover {
      color: white;
    }
  }

  .imageDiv {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
  }

  .imageDiv img {
    max-height: 100%;
    max-width: 100%;
    height: auto;
    width: auto;
  }

  .propertiesDiv {
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: larger;
    font-weight: 700;

    .modalName {
      color: white;
      font-weight: 700;
    }
    .property {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 2rem;
    }
    .propertyName {
      color: ${Colors.lightBlueText};
      padding-right: 4px;
    }
  }
`;
