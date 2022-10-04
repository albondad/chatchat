import { StyledDiv } from "./tabs.styled-components";
import { ComponentProps } from "react";

type TabsPropsType = {} & ComponentProps<typeof StyledDiv>;

export const Tabs = ({ ...restProps }: TabsPropsType) => {
  return <StyledDiv className="tabs" {...restProps} />;
};
