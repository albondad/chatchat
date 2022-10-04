import { StyledDiv } from "./words.styled-components";
import { ComponentProps, ReactNode } from "react";

type Words = {} & ComponentProps<typeof StyledDiv>;

export const Words = ({
  children: childrenProp,
  heading: headingProp,
}: Words) => {
  return (
    <StyledDiv className="words">
      <div className="words__heading">{headingProp}</div>
      <div className="words__body">{childrenProp}</div>
    </StyledDiv>
  );
};
