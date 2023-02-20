import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Container } from "../../styles/containers";
import { StyledText } from "../../styles/typography";
import { StyledHeader, StyledHeaderContents } from "./style";

export const Header = ({ page }) => {
  const { user } = useContext(UserContext);
  return (
    <StyledHeader>
      <Container page={page}>
        <StyledHeaderContents>
          <StyledText tag="h3" textStyle="title1">
            {user.name}
          </StyledText>
          <StyledText tag="h3" textStyle="headlineBold">
            {user.course_module}
          </StyledText>
        </StyledHeaderContents>
      </Container>
    </StyledHeader>
  );
};
