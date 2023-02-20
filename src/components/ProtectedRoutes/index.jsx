import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { StyledText } from "../../styles/typography";

export const ProtectedRoutes = () => {
  const { user, loadingUserdash } = useContext(UserContext);
  const location = useLocation();

  if (loadingUserdash) {
    return (
      <StyledText tag="h2" styleSize="title1" textColor="primary">
        Carregando...
      </StyledText>
    );
  }

  return user ? <Outlet /> : <Navigate to="/" state={{ from: location }} />;
};
