import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { Login } from "./../pages/Login";
import { Register } from "./../pages/Register";
import { UserDash } from "./../pages/UserDash";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { StyledText } from "../styles/typography";

export const RoutesMain = () => {
  const { loadingUserdash } = useContext(UserContext);

  if (loadingUserdash) {
    return (
      <StyledText tag="h2" styleSize="title1" textColor="primary">
        Carregando...
      </StyledText>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/userdash" element={<UserDash />} />
      </Route>
    </Routes>
  );
};
