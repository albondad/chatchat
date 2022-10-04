import styled from "styled-components";

export const StyledDiv = styled.div`
  &.messages {
    background-color: #ffffff;
    border-radius: 0.5rem;
    border: 1px solid #dddddd;
    flex-grow: 1;
    margin-bottom: 2rem;
    padding: 1.5rem;
    position: relative;

    .messages__heading {
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 1.5em;
      margin-bottom: 2rem;
    }

    .messages__body {
      max-height: 40vh;
      overflow-y: auto;
    }
  }
`;
