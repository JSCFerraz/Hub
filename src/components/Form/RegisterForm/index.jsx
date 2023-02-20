import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerFormSchema } from "./registerFormSchema";
import { SingleInput } from "../../Input";
import { StyledText } from "../../../styles/typography";
import { StyledRegForm, HelperTextDiv, StyledRegisterTitle } from "./style";
import { SelectInput } from "../../Select";
import { Container } from "../../../styles/containers";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Button";
import { UserContext } from "../../../contexts/UserContext";

export const RegisterForm = () => {
  const modules = [
    "Primeiro módulo (Introdução ao Frontend)",
    "Segundo módulo (Frontend Avançado)",
    "Terceiro módulo (Introdução ao Backend)",
    "Quarto módulo (Backend Avançado)",
  ];
  const navigate = useNavigate();
  const { registerUser, loading, setLoading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(registerFormSchema),
  });

  const submitActions = async (data) => {
    delete data.passwordConfirmation;
    setLoading(true);
    await registerUser(data, reset);
  };

  return (
    <Container>
      <StyledRegForm>
        <StyledRegisterTitle>
          <StyledText tag="h3" textStyle="title1">
            Crie sua conta
          </StyledText>
          <StyledText tag="span" textStyle="headline" textColor="grey">
            Rápido e grátis, vamos nessa?
          </StyledText>
        </StyledRegisterTitle>
        <form onSubmit={handleSubmit(submitActions)} noValidate>
          <SingleInput
            label="Nome *"
            id="registerName"
            type="text"
            placeholder="Digite o seu nome"
            register={register("name")}
          />
          <HelperTextDiv>
            {errors.name?.message && (
              <StyledText tag="span" textStyle="headline" textColor="primary">
                {errors.name.message}
              </StyledText>
            )}
          </HelperTextDiv>

          <SingleInput
            label="E-mail *"
            id="registerEmail"
            type="email"
            placeholder="Digite seu e-mail"
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
            label="Senha * (Mínimo de 6 caracteres, contendo pelo menos: 1 maiúsculo, 1 minúsculo, 1 digito e 1 caractere especial)"
            id="registerPwd"
            type="password"
            placeholder="Digite aqui sua senha"
            register={register("password")}
          />
          <HelperTextDiv>
            {errors.password?.message && (
              <StyledText tag="span" textStyle="headline" textColor="primary">
                {errors.password.message}
              </StyledText>
            )}
          </HelperTextDiv>

          <SingleInput
            label="Confirmar Senha *"
            id="registerConfirmPwd"
            type="password"
            placeholder="Digite novamente a senha"
            register={register("passwordConfirmation")}
          />
          <HelperTextDiv>
            {errors.passwordConfirmation?.message && (
              <StyledText tag="span" textStyle="headline" textColor="primary">
                {errors.passwordConfirmation.message}
              </StyledText>
            )}
          </HelperTextDiv>

          <SingleInput
            label="Bio *"
            id="registerBio"
            type="text"
            placeholder="Fale sobre você"
            register={register("bio")}
          />
          <HelperTextDiv>
            {errors.bio?.message && (
              <StyledText tag="span" textStyle="headline" textColor="primary">
                {errors.bio.message}
              </StyledText>
            )}
          </HelperTextDiv>

          <SingleInput
            label="Contato *"
            id="registerContact"
            type="text"
            placeholder="Opção de contato"
            register={register("contact")}
          />
          <HelperTextDiv>
            {errors.contact?.message && (
              <StyledText tag="span" textStyle="headline" textColor="primary">
                {errors.contact.message}
              </StyledText>
            )}
          </HelperTextDiv>

          <SelectInput
            label="Módulo *"
            id="registerModules"
            options={modules}
            register={register("course_module")}
            firstOption="Selecione um módulo"
          />
          <HelperTextDiv>
            {errors.course_module?.message && (
              <StyledText tag="span" textStyle="headline" textColor="primary">
                {errors.course_module.message}
              </StyledText>
            )}
          </HelperTextDiv>

          <StyledText tag="span" textStyle="title3" textColor="grey">
            * Campos obrigatórios
          </StyledText>
          <Button
            type="submit"
            buttonStyle="submit"
            disabled={!isDirty || !isValid || loading}
          >
            {loading ? "Cadastrando..." : "Cadastrar"}
          </Button>
        </form>
      </StyledRegForm>
    </Container>
  );
};
