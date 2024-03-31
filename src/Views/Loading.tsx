import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { LoadingMainDiv } from "./LoadingStyle";

const fillAnimation = keyframes`
  0% {
    width: 0%;
    height: 1rem;
    border-radius: 8px;

  }
  100% {
    width: 100%;
    height: 1rem;
    border-radius: 8px;

  }
`;


export const LoadingBar = styled.div`
  width: 0%;
  height: 4px;
  background-color: #14453D;
  animation: ${fillAnimation} 15s linear forwards;
`;

const LoadingComponent = () => {
  return (
    <LoadingMainDiv>
      <h1>Loading Characters</h1>
      <LoadingBar />
    </LoadingMainDiv>
  );
};

export default LoadingComponent;
