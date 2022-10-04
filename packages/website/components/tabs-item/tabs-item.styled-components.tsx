import styled from "styled-components";

export const StyledDiv = styled.div`
  &.tabs-item {
    align-items: center;
    border-bottom: 1ps soild #dddddd;
    display: flex;
    flex-grow: 1;
    font-size: 1.125rem;
    height: 4rem;
    justify-content: center;
    cursor: pointer;

    :hover {
      opacity: 0.5;
      background-color: #6176e5;
      color: #ffffff;
    }
  }

  &.tabs-item.tabs-item--is-active {
    background-color: #6176e5;
    color: #ffffff;
    pointer-events: none;
  }
`;
