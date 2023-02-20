import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { StyledButton } from "../../styles/buttons";
import { StyledLink, StyledNavLink } from "./style";

export const Button = ({
  children,
  type,
  buttonStyle,
  page,
  disabled,
  onclick,
}) => {
  const { setActionOverTech } = useContext(TechContext);

  if (type === "submit") {
    return (
      <StyledButton type="submit" buttonSize={buttonStyle} disabled={disabled}>
        {children}
      </StyledButton>
    );
  } else if (type === "toRegister") {
    return <StyledLink to="/register">{children}</StyledLink>;
  } else if (type === "navButton") {
    return (
      <StyledNavLink to="/" onClick={() => onclick(page)}>
        {children}
      </StyledNavLink>
    );
  } else if (type === "addTechButton") {
    return (
      <StyledButton
        type="button"
        buttonSize={buttonStyle}
        onClick={() => setActionOverTech("create")}
        disabled={false}
      >
        {children}
      </StyledButton>
    );
  } else if (type === "delete") {
    return (
      <StyledButton type="button" buttonSize={buttonStyle} onClick={onclick}>
        {children}
      </StyledButton>
    );
  } else if (type === "closeModal") {
    return (
      <StyledButton
        type="button"
        buttonSize={buttonStyle}
        onClick={() => setActionOverTech("")}
        btnPosition="modal"
      >
        {children}
      </StyledButton>
    );
  }
};
