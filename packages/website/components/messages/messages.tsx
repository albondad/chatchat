import { ReactNode, ComponentProps } from "react";
import { StyledDiv } from "./messages.styled-components";

type Messages = { children: ReactNode; heading: string } & ComponentProps<
  typeof StyledDiv
>;

export const Messages = ({
  children: childrenProp,
  heading: headingProp,
}: Messages) => {
  return (
    <StyledDiv className="messages">
      <div className="messages__heading">{headingProp}</div>
      <div className="messages__body">{childrenProp}</div>
    </StyledDiv>
  );
};
