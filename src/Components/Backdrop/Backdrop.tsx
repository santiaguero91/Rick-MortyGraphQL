import { BackdropMainDiv } from "./BackdropStyle";

const Backdrop = ({ children, }) => {
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
