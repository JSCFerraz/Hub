import logo from "./../../assets/img/Logo.svg";
import { Container } from "../../styles/containers";
import { StyledNavBar, StyledNavBarContents } from "./style";
import { Button } from "../Button";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const NavBar = ({ page }) => {
  const { setUser } = useContext(UserContext);
  const handleLinkClick = (currentPage) => {
    if (currentPage === "userdash") {
      window.localStorage.clear();
      setUser(null);
    }
  };
  return (
    <StyledNavBar page={page}>
      <Container page={page}>
        <StyledNavBarContents page={page}>
          <img src={logo} alt="Imagem do logo" />
          <Button type="navButton" page={page} onclick={handleLinkClick}>
            {page === "register" ? "Voltar" : "Sair"}
          </Button>
        </StyledNavBarContents>
      </Container>
    </StyledNavBar>
  );
};
