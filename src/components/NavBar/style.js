import styled, { css } from "styled-components";

export const StyledNavBar = styled.nav`
    width: 100%;
    height: 100px;
    height: fit-content;
    margin: 1rem 0;
    background-color: var(--color-background);

    ${({ page }) => {
        if (page === "userdash") {
            return css`
                border-bottom: 1px solid var(--color-border);
            `
        }
    }}
`
export const StyledNavBarContents = styled.div`
    width: 100%;
    gap: 1rem;

    ${({ page }) => {
        if (page === "login") {
            return css`
                display: flex;
                justify-content:center;
                align-items: center;
           `
        } else {
            return css`
                display: flex;
                justify-content:space-between;
                align-items: center;
           `
        }
    }}

    @media (min-width: 700px) {
        flex-direction: row;
    }

    & > img {
        height: 1rem;
        margin: 0.5rem 0;

        @media (min-width: 700px) {
            height: 1.125rem;
        }
    }

    & > a {
        ${({ page }) => {
        if (page === "login") {
            return css`
                display: none;
                `
        }
    }}
    }
`