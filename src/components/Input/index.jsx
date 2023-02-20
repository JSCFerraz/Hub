import { StyledText } from "../../styles/typography";
import { StyledInputDiv, StyledInput } from "./style";

export const SingleInput = ({
  label,
  id,
  type,
  placeholder,
  register,
  disabled,
}) => {
  return (
    <StyledInputDiv>
      <label htmlFor={id}>
        <StyledText tag="span" textStyle="title3">
          {label}
        </StyledText>
      </label>
      <StyledInput
        type={type}
        id={id}
        disabled={disabled}
        placeholder={placeholder}
        {...register}
      />
    </StyledInputDiv>
  );
};
