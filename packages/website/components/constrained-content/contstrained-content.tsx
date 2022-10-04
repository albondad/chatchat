import { StyledDiv } from "./constrained-content.styled-components";
import { ComponentProps, useMemo } from "react";
import classNames from "classnames";

type ConstrainedContentPropsType = ComponentProps<typeof StyledDiv> & {};

export const ConstrainedContent = ({
  className: classNameProp,
  ...restProps
}: ConstrainedContentPropsType) => {
  const classNameMemo = useMemo(() => {
    const newclassNameMemo = classNames("constrained-content", classNameProp);
    return newclassNameMemo;
  }, [classNameProp]);

  return <StyledDiv className={classNameMemo} {...restProps} />;
};
