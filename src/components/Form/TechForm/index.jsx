import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { techFormSchema } from "./techFormSchema";
import { SingleInput } from "../../Input";
import { StyledText } from "../../../styles/typography";
import { StyledTechForm, HelperTextDiv } from "./style";
import { SelectInput } from "../../Select";
import { Container } from "../../../styles/containers";
import { Button } from "../../Button";
import { TechContext } from "../../../contexts/TechContext";

export const TechForm = () => {
  const status = ["Iniciante", "Intermediário", "Avaçado"];
  const { techLoading } = useContext(TechContext);
  const { addTechnology } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(techFormSchema),
  });

  const submitActions = async (data) => {
    await addTechnology(data);
    reset();
  };

  return (
    <Container>
      <StyledTechForm>
        <form onSubmit={handleSubmit(submitActions)} noValidate>
          <SingleInput
            label="Nome *"
            id="registerName"
            type="text"
            placeholder="Digite a tecnologia"
            register={register("title")}
          />
          <HelperTextDiv>
            {errors.title?.message && (
              <StyledText tag="span" textStyle="headline" textColor="primary">
                {errors.title.message}
              </StyledText>
            )}
          </HelperTextDiv>

          <SelectInput
            label="Selecione o nível *"
            id="techStatus"
            options={status}
            register={register("status")}
            firstOption="Selecionar status"
          />
          <HelperTextDiv>
            {errors.status?.message && (
              <StyledText tag="span" textStyle="headline" textColor="primary">
                {errors.status.message}
              </StyledText>
            )}
          </HelperTextDiv>

          <StyledText tag="span" textStyle="title3" textColor="grey">
            * Campos obrigatórios
          </StyledText>
          <Button
            type="submit"
            buttonStyle="submit"
            disabled={!isDirty || !isValid || techLoading}
          >
            {techLoading ? "Cadastrando tecnologia..." : "Cadastrar tecnologia"}
          </Button>
        </form>
      </StyledTechForm>
    </Container>
  );
};
