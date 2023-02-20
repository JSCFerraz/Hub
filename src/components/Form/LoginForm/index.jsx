import React from "react";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormSchema } from "./loginFormSchema";
import { SingleInput } from "../../Input";
import { StyledText } from "../../../styles/typography";
import {
  StyledLoginForm,
  StyledDivToRegister,
  StyledLoginTitle,
} from "./style";
import { Container } from "../../../styles/containers";
import { HelperTextDiv } from "../RegisterForm/style";
import { Button } from "../../Button";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

export const LoginForm = () => {
  const { signInUser, loading } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(loginFormSchema),
  });

  return (
    <Container>
      <StyledLoginForm>
        <StyledLoginTitle>
          <StyledText tag="h3" textStyle="title1">
            Login
          </StyledText>
        </StyledLoginTitle>
        <form onSubmit={handleSubmit(signInUser)} noValidate>
          <SingleInput
            label="E-mail"
            id="loginEmail"
            type="email"
            placeholder="Digite seu email"
            register={register("email")}
          />
          <HelperTextDiv>
            {errors.email?.message && (
              <StyledText tag="span" textStyle="headline" textColor="primary">
                {errors.email.message}
              </StyledText>
            )}
          </HelperTextDiv>

          <SingleInput
            label="Senha"
            id="registerPassword"
            type="password"
            placeholder="Digite sua senha"
            register={register("password")}
          />
          <HelperTextDiv>
            {errors.password?.message && (
              <StyledText tag="span" textStyle="headline" textColor="primary">
                {errors.password.message}
              </StyledText>
            )}
          </HelperTextDiv>

          <Button
            type="submit"
            buttonStyle="submit"
            disabled={!isDirty || !isValid || loading}
          >
            {loading ? "Entrando..." : "Entrar"}
          </Button>
        </form>
        <StyledDivToRegister>
          <StyledText tag="span" textStyle="headline">
            Ainda não possui uma conta?
          </StyledText>
          <Button type="toRegister">Cadastre-se</Button>
        </StyledDivToRegister>
      </StyledLoginForm>
    </Container>
  );
};
