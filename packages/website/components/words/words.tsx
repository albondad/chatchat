import { StyledDiv } from "./words.styled-components";
import { ComponentProps } from "react";

type Words = {} & ComponentProps<typeof StyledDiv>;

export const Words = ({ children: childrenProp, ...restProps }: Words) => {
  return (
    <StyledDiv className="words" {...restProps}>
      <div className="words__heading">Words</div>
      <div className="words__body">{childrenProp}</div>
    </StyledDiv>
  );
};
