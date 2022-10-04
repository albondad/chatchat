import styled from "styled-components";

export const StyledDiv = styled.div`
  &.tabs {
    background-color: #ffffff;
    border-radius: 0.5rem;
    border: 1px solid #dddddd;
    display: flex;
    flex-basis: 0;
    flex-direction: column;
    margin-bottom: 2rem;

    @media only screen and (min-width: 50rem) {
      flex-direction: row;
    }
  }
`;
