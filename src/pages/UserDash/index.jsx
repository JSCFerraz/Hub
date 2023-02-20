import { NavBar } from "../../components/NavBar";
import { Header } from "../../components/Header";
import { DashMain } from "./../../components/DashMain";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";
import { TechProvider } from "../../contexts/TechContext";

export const UserDash = () => {
  const { user } = useContext(UserContext);

  return user ? (
    <>
      <NavBar page="userdash" />
      <Header page="userdash" />
      <TechProvider>
        <DashMain page="userdash" />
      </TechProvider>
    </>
  ) : (
    <Navigate to="/" />
  );
};
