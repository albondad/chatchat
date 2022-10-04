import { StyledDiv } from "./messages-item.styled-components";
import { ComponentProps } from "react";

type MessagesItemPropsType = {
  message?: string;
  userName?: string;
} & ComponentProps<typeof StyledDiv>;

export const MessagesItem = ({
  message: messageProp,
  userName: userNameProp,
}: MessagesItemPropsType) => {
  return (
    <StyledDiv className="messages-item">
      <div className="messages-item__header">
        <span className="messages-item__userName">{userNameProp}</span>
      </div>
      <div className="messages-item__message">{messageProp}</div>
    </StyledDiv>
  );
};
