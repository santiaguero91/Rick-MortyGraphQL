import styled from "@emotion/styled";

export const DropdownMainDiv = styled.div`
  position: relative;
  .select {
    border: 1px solid white;
    padding: 0.5rem;
    border-radius: 8px;
    cursor: pointer;
  }
  .dropdown-menu {
    background-color: gray;
    overflow: hidden;
    position: absolute;
    height: auto;
    width: 100%;
    z-index: 10;
  }
  .dropdown-item {
    cursor: pointer;
  }
`;
