import styled from "styled-components";

export const StyledRegForm = styled.div`
    width:100%;
    max-width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: stretch;
    gap: 0.5rem;
    padding: 1rem;
    background-color: var(--color-grey-3);
    border-radius: var(--radius-1);

    @media (min-width:400px) {
        max-width: 370px;
    }

`
export const HelperTextDiv = styled.div`
    width: 100%;
    max-width: 320px;
    gap: 0.5rem;
    min-height: 1.5rem;
    text-align: end;
    background-color: var(--color-grey-3);
    border-radius: var(--radius-1);

    @media (min-width:370px) {
        max-width: 370px;
    }
`

export const StyledRegisterTitle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 0.5rem 0;
    margin: 1rem 0;   
`