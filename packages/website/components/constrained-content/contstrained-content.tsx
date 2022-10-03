import { StyledDiv } from "./constrained-content.styled-components";
import { ComponentProps, useMemo } from "react";
import classNames from "classnames";

type ConstrainedContentPropsType = ComponentProps<typeof StyledDiv> & {};

export const ConstrainedContent = ({
  className: classNameProp,
  ...restProps
}: ConstrainedContentPropsType) => {
  const classNamesMemo = useMemo(() => {
    const newClassNamesMemo = classNames("constrained-content", classNameProp);
    return newClassNamesMemo;
  }, [classNameProp]);

  return <StyledDiv className={classNamesMemo} {...restProps} />;
};
