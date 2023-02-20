import { StyledText } from "../../styles/typography";
import { StyledSelectDiv, StyledSelect } from "./style";

export const SelectInput = ({ label, id, options, register, firstOption }) => {
  return (
    <StyledSelectDiv>
      <label htmlFor={id}>
        <StyledText tag="span" textStyle="headline">
          {label}
        </StyledText>
      </label>
      <StyledSelect id={id} {...register}>
        <option value="">{firstOption}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </StyledSelect>
    </StyledSelectDiv>
  );
};
