import styled from "styled-components";

export const StyledDiv = styled.div`
  &.words-item {
    border-bottom: 1px solid #dddddd;
    display: flex;
    font-size: 1rem;
    margin-bottom: 1rem;
    padding: 1rem;

    .words-item__value{
      font-weight700;
    }

    .words-item__count {
      margin-left: auto;
      color: #777777;
    }
  }
`;
