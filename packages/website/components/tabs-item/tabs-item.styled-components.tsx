import styled from "styled-components";

export const StyledDiv = styled.div`
  &.tabs-item {
    align-items: center;
    border-bottom: 1ps soild #dddddd;
    cursor: pointer;
    display: flex;
    flex-grow: 1;
    font-size: 1.125rem;
    height: 4rem;
    justify-content: center;

    :hover {
      background-color: #6176e5;
      color: #ffffff;
      opacity: 0.5;
    }
  }

  &.tabs-item.tabs-item--is-active {
    background-color: #6176e5;
    color: #ffffff;
    pointer-events: none;
  }
`;
