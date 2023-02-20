import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
    width:100%;
    text-decoration: none;
    display: inline-flex;
    justify-content: center;
    align-content: stretch;
    align-items: center;
    border-radius: var(--radius-1);
    padding: 0.5rem 1rem;
    height: 2.5rem;
    color: var(--color-grey-0);
    background-color: var(--color-grey-1);

    &:hover {
        background-color: var(--color-grey-2);
    }

    @media (min-width: 370px) {
        max-width: 370xp;
    }   
`

export const StyledNavLink = styled(Link)`
    text-decoration: none;
    width: fit-content;
    font-size: var(--font-size-14);
    padding: 0.4rem 1rem;
    border-radius: var(--radius-1);
    background-color: var(--nav-button-background);
    border: 1px solid var(--nav-button-background);
    color: var(--nav-button-color);

    &:hover {
        background-color: var(--nav-button-background-hover);
        border: 1px solid var(--nav-button-background-hover);
    }
`