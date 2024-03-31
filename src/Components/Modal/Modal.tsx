import { AnimatePresence, motion } from "framer-motion";
import Backdrop from "../Backdrop/Backdrop";
import { useReactiveVar } from "@apollo/client";
import { Character } from "../../Intefaces/Interfaces";
import { charactersInfo } from "../../Apollo";
import { ModalMainDiv } from "./ModalStyle";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ modalOpen, setModalOpen, cardClicked }) => {
  const charactersData = useReactiveVar<Character[]>(charactersInfo);
  const characterDetail = charactersData[cardClicked - 1];
  return (
    <Backdrop>
      <AnimatePresence>
        <ModalMainDiv
          onClick={(e) => e.stopPropagation()}
          className="modal"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <h2 className="modalName">{characterDetail.name}</h2>
          <div className="flexRow">
            <div className="imageDiv">
              <img src={characterDetail.image} />
            </div>
            <div className="propertiesDiv">
              <div className="property">
                <p className="propertyName">Specie:</p>
                <p>{characterDetail.species}</p>
              </div>
              <div className="property">
                <p className="propertyName">Status:</p>
                <p>{characterDetail.status}</p>
              </div>
              <div className="property">
                <p className="propertyName">Gender:</p>
                <p>{characterDetail.gender}</p>
              </div>
              <div className="property">
                <p className="propertyName">Location:</p>
                <p>{characterDetail.location.name}</p>
              </div>
            </div>
          </div>
          <button onClick={() => setModalOpen(!modalOpen)}>Close</button>
        </ModalMainDiv>
      </AnimatePresence>
    </Backdrop>
  );
};

export default Modal;