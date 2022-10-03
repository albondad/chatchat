import styled from "styled-components";

export const StyledDiv = styled.div`
  &.cards-item {
    background-color; #ffffff;
    border-radius: 0.5rem;
    border: 1px solid #eeeeee;
    flex-grow: 1;
    padding: 1.5rem;
    position: relative;
    
    .cards-item__heading {
      color: #6176e5;
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.5em;
      margin: 0;
    }

    .cards-item__icon {
      background-color: #6176e5;
      border-radius: 1.5rem;
      height: 1.5rem;
      position: absolute;
      right: 1.5rem;
      top: 1.5rem;
      width: 1.5rem;
    }

    .cards-item__detail {
      color: #aaaaaa;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.5em;
    }

    .cards-item__value {
      color: #000000;
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.5em;
      margin-top: 1rem;
    }
  }
`;
