import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { Container } from "../../styles/containers";
import { StyledText } from "../../styles/typography";
import { Button } from "../Button";
import { TechModal } from "../TechModal";
import { StyledUserDashMain, StyledTechHeader } from "./style";
import { TechList } from "../TechList";

export const DashMain = ({ page }) => {
  const { actionOverTech } = useContext(TechContext);

  return (
    <Container page={page}>
      <StyledUserDashMain>
        <StyledTechHeader>
          <StyledText tag="h2" textStyle="title1">
            Tecnologias
          </StyledText>
          <Button type="addTechButton" buttonStyle="icon">
            +
          </Button>
        </StyledTechHeader>
        <TechList />
        {actionOverTech !== "" ? (
          <TechModal techAction={actionOverTech} />
        ) : (
          <></>
        )}
      </StyledUserDashMain>
    </Container>
  );
};
