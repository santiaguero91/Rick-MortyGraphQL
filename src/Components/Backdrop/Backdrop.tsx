import { BackdropMainDiv } from "./BackdropStyle";
import React from "react";

interface BackdropProps {
  children: React.ReactNode;
}

const Backdrop: React.FC<BackdropProps> = ({ children }) => {
  return (
    <BackdropMainDiv
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </BackdropMainDiv>
  );
};

export default Backdrop;
