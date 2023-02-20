import styled from "styled-components"


export const StyledTechForm = styled.div`
    width:100%;
    max-width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: stretch;
    gap: 0.5rem;

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
    border-radius: var(--radius-1);

    @media (min-width:370px) {
        max-width: 370px;
    }
`

export const StyledDetailsButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

`

