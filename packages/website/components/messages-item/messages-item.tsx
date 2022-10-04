import { StyledDiv } from "./messages-item.styled-components";
import { ComponentProps } from "react";

type MessagesItemPropsType = {
  message?: string;
  userName?: string;
  date?: number;
} & ComponentProps<typeof StyledDiv>;

export const MessagesItem = ({
  message: messageProp,
  userName: userNameProp,
  date: dateProp,
  ...restProps
}: MessagesItemPropsType) => {
  return (
    <StyledDiv className="messages-item" {...restProps}>
      <div className="messages-item__header">
        <span className="messages-item__userName">{userNameProp}</span>
        <span className="messages-item__date">{dateProp}</span>
      </div>
      <div className="messages-item__message">{messageProp}</div>
    </StyledDiv>
  );
};
