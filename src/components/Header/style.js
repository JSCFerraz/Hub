import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    min-height: 5rem;
    background-color: var(--color-background);
    border-bottom: 1px solid var(--color-border);
    margin-top: 1.25rem;
`
export const StyledHeaderContents = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items: center;
    align-content: center;
    gap: 1rem;
    padding: 0.5rem 0;

    @media (min-width: 700px) {
        flex-direction: row;
        justify-content: space-between;
        align-content: center;
    }
`