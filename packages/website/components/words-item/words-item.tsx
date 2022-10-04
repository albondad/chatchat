import { StyledDiv } from "./words-item.styled-components";
import { ComponentProps } from "react";

type WordsItemPropsType = {
  value?: string;
  userName?: string;
} & ComponentProps<typeof StyledDiv>;

export const WordsItem = ({
  value: valueProp,
  count: countProp,
  ...restProps
}: WordsItemPropsType) => {
  return (
    <StyledDiv className="words-item" {...restProps}>
      <span className="words-item__value">{valueProp}</span>
      <span className="words-item__count">{countProp}</span>
    </StyledDiv>
  );
};
