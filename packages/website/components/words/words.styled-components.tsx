import styled from "styled-components";

export const StyledDiv = styled.div`
  &.words {
    background-color: #ffffff;
    border-radius: 0.5rem;
    border: 1px solid #dddddd;
    flex-grow: 1;
    padding: 1.5rem;
    position: relative;
    margin-bottom: 2rem;

    .words__heading {
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 1.5em;
      margin-bottom: 2rem;
    }

    .words__body {
      max-height: 40vh;
      overflow-y: auto;
    }
  }
`;
