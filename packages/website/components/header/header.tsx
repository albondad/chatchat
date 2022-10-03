import { ConstrainedContent } from "..";
import { StyledHeader } from "./header.styled-components";

export const Header = () => {
  return (
    <StyledHeader className="header">
      <ConstrainedContent className="header__constrained-content">
        CHATCHAT
      </ConstrainedContent>
    </StyledHeader>
  );
};
