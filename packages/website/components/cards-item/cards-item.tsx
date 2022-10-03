import { StyledDiv } from "./cards-item.styled-components";
import { ComponentProps } from "react";

type CardsItemPropsType = {
  detail?: string;
  heading?: string;
  value?: string | number;
} & ComponentProps<typeof StyledDiv>;

export const CardsItem = ({
  detail: detailProp,
  heading: headingProp,
  value: valueProp,
  ...restProps
}: CardsItemPropsType) => {
  return (
    <StyledDiv className="cards-item" {...restProps}>
      <div className="cards-item__icon" />
      <h3 className="cards-item__heading">{headingProp}</h3>
      <div className="cards-item__detail">{detailProp}</div>
      <div className="cards-item__value">{valueProp}</div>
    </StyledDiv>
  );
};
