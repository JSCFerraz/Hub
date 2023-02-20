import { NavBar } from "../../components/NavBar";
import { LoginForm } from "../../components/Form/LoginForm";

export const Login = () => {
  return (
    <>
      <NavBar page="login" />
      <LoginForm />
    </>
  );
};
