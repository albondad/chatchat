import { StyledDiv } from "./messages.styled-components";
import { ComponentProps } from "react";

type Messages = {} & ComponentProps<typeof StyledDiv>;

export const Messages = ({ ...restProps }: Messages) => {
  return <StyledDiv className="messages" {...restProps}></StyledDiv>;
};
