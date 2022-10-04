import { StyledDiv } from "./messages.styled-components";
import { ComponentProps } from "react";

type Messages = {} & ComponentProps<typeof StyledDiv>;

export const Messages = ({
  children: childrenProp,
  ...restProps
}: Messages) => {
  return (
    <StyledDiv className="messages" {...restProps}>
      <div className="messages__heading">Messages</div>
      <div className="messages__body">{childrenProp}</div>
    </StyledDiv>
  );
};
