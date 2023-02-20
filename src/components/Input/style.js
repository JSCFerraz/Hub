import styled from "styled-components";

export const StyledInput = styled.input`
    width: 100%;
    height: 2.5rem;
    color: var(--color-grey-1);
    background-color: var(--color-grey-2) ;
    border-radius: var(--radius-1);
    border: 1px solid var(--color-grey-2);
    padding: 0 1rem;

    &:focus{
        outline: 1px solid var(--color-grey-0);
        color: var(--color-grey-0);
    }

    @media (min-width:370px) {
        max-width: 370px;
    }
`

export const StyledInputDiv = styled.fieldset`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
`