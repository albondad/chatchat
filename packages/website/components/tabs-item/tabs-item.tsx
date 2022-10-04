import { ComponentProps, useMemo } from "react";
import { StyledDiv } from "./tabs-item.styled-components";
import classNames from "classnames";

type TabsItemPropsType = {
  onClick: () => any;
  isActive?: boolean;
} & ComponentProps<typeof StyledDiv>;

export const TabsItem = ({
  className: classNameProp,
  isActive: isActiveProp,
  onClick: onClickProp,
  value: valueProp,
}: TabsItemPropsType) => {
  const classNameMemo = useMemo(() => {
    const newclassNameMemo = classNames("tabs-item", classNameProp, {
      "tabs-item--is-active": isActiveProp,
    });
    return newclassNameMemo;
  }, [classNameProp, isActiveProp]);

  return (
    <StyledDiv className={classNameMemo} tabIndex={0} onClick={onClickProp}>
      {valueProp}
    </StyledDiv>
  );
};
