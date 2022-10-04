import styled from "styled-components";

export const StyledDiv = styled.div`
  &.messages-item {
    margin-bottom: 2rem;
    padding: 1rem;
    border-bottom: 1px solid #dddddd;

    .messages-item__header {
      display: flex;
      aling-items: center;

      .messages-item__userName {
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.5em;
      }
    }

    .messages-item__message {
      font-size: 1.125rem;
      line-height: 1.5em;
      margin-top: 1rem;
    }
  }
`;
