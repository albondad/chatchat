import { StyledDiv } from "./tabs-item.styled-components";
import { ComponentProps } from "react";

type TabsItemPropsType = {
  valueProp?: string;
} & ComponentProps<typeof StyledDiv>;

export const TabsItem = ({
  value: valueProp,
  ...restProps
}: TabsItemPropsType) => {
  const handleClick = () => {
    const baseEvent = new Event("click");
    const formattedEvent = {
      ...baseEvent,
      target: {
        ...baseEvent.target,
        value: valueProp,
      },
    };
    return formattedEvent;
  };

  return (
    <StyledDiv className="tabs-item" tabIndex={0} onClick={handleClick}>
      {valueProp}
    </StyledDiv>
  );
};
