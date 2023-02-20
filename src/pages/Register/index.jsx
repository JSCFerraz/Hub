import { NavBar } from "../../components/NavBar";
import { RegisterForm } from "../../components/Form/RegisterForm";

export const Register = () => {
  return (
    <>
      <NavBar page="register" />
      <RegisterForm />
    </>
  );
};
