import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { techFormDetailsSchema } from "./techFormDetailsSchema";
import { SingleInput } from "../../Input";
import { StyledText } from "../../../styles/typography";
import { StyledTechForm, HelperTextDiv, StyledDetailsButtons } from "./style";
import { SelectInput } from "../../Select";
import { Container } from "../../../styles/containers";
import { Button } from "../../Button";
import { TechContext } from "../../../contexts/TechContext";
import { UserContext } from "../../../contexts/UserContext";

export const TechFormDetails = ({ techId }) => {
  const status = ["Iniciante", "Intermediário", "Avançado"];
  const { updateTechnology, removeTechnology } = useContext(TechContext);
  const { user } = useContext(UserContext);
  const { techLoading } = useContext(TechContext);
  const { deleteTechLoading } = useContext(TechContext);

  const userTech = user.techs.filter((item) => item.id === techId);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(techFormDetailsSchema),
  });

  useEffect(() => {
    const resetData = () => {
      reset({
        title: userTech[0].title,
        status: userTech[0].status,
      });
    };

    resetData();
  }, []);

  const submitActions = async (data) => {
    delete data.title;
    await updateTechnology(data, techId);
  };

  return (
    <Container>
      <StyledTechForm>
        <form onSubmit={handleSubmit(submitActions)} noValidate>
          <SingleInput
            label="Nome (não pode ser alterado)"
            id="registerName"
            type="text"
            placeholder="Digite a tecnologia"
            register={register("title")}
            disabled={true}
          />
          <HelperTextDiv>
            {errors.name?.message && (
              <StyledText tag="span" textStyle="headline" textColor="primary">
                {errors.name.message}
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
          <StyledDetailsButtons>
            <Button
              type="submit"
              buttonStyle="submitUpdate"
              disabled={!isDirty || !isValid || techLoading}
            >
              {techLoading ? "Salvando..." : "Salvar Alterações"}
            </Button>
            <Button
              type="delete"
              buttonStyle="delete"
              onclick={() => removeTechnology(techId)}
            >
              {deleteTechLoading ? "Excluindo..." : "Excluir"}
            </Button>
          </StyledDetailsButtons>
        </form>
      </StyledTechForm>
    </Container>
  );
};
