import { ComponentProps } from "react";
import { StyledHeading } from "./heading.styled-components";

type HeadingPropsType = ComponentProps<typeof StyledHeading> & {};

export const Heading = ({
  children: childrenProp,
  ...restProps
}: HeadingPropsType) => {
  return (
    <StyledHeading className="heading" {...restProps}>
      {childrenProp}
    </StyledHeading>
  );
};
