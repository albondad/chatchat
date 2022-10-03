import { StyledDiv } from "./cards.styled-components";
import { ComponentProps } from "react";

type CardsPropsType = {} & ComponentProps<typeof StyledDiv>;

export const Cards = ({ ...restProps }: CardsPropsType) => {
  return <StyledDiv className="cards" {...restProps} />;
};
