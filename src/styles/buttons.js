import styled, { css } from "styled-components";

export const StyledButton = styled.button`
    display: inline-flex;
    align-items: center;
    border-radius: var(--radius-1);
    padding: 0.5rem 1rem;
    height: 2.5rem;

    ${({ backgroundImage }) => {
        if (backgroundImage) {
            return css`
                background-image: ${(backgroundImage) => `url(${backgroundImage})`}; 
                background-repeat: no-repeat;
                object-fit: cover;
                color: var(--color-grey-0);
           `
        }
    }}

${({ btnPosition }) => {
        if (btnPosition === "modal") {
            return css`
                position: absolute;
                /* top: -0.5rem; */
                right: 1rem;
           `
        }
    }}

    ${({ buttonSize }) => {
        switch (buttonSize) {
            case "submit":
                return css`
                    min-width: 100%;
                    height: 2.5rem;
                    padding: 0 1.2rem;
                    display: flex;
                    justify-content: center;
                    margin-top: 1rem;
                    line-height: 3.5rem;
                    font-size: var(--font-size-16);
                    color: var(--color-grey-0);
                    background-color: var(--color-primary);
                    border: 1px solid var(--color-primary);

                    ${({ disabled }) => {
                        if (disabled) {
                            return css`
                                background-color: var(--color-primary-negative);
                                border: 1px solid var(--color-primary-negative);
                                cursor: none;
                                & :hover {
                                    background-color: var(--color-primary-negative);
                                    border: 1px solid var(--color-primary-negative);
                                }
                        `
                        } else {
                            return css`
                            background-color: var(--color-primary);
                            border: 1px solid var(--color-primary);

                            &:hover {
                                background-color: var(--color-primary-hover);
                                border: 1px solid var(--color-primary-hover);
                                cursor: pointer;
                            }
                            `
                        }
                    }}
                `;
            case "submitUpdate":
                return css`
                    max-width: 100%;
                    min-width: 65%;
                    height: 2.5rem;
                    padding: 0 1.5rem;
                    display: flex;
                    justify-content: center;
                    margin-top: 1rem;
                    line-height: 3.5rem;
                    font-size: var(--font-size-16);
                    color: var(--color-grey-0);
                    background-color: var(--color-primary);
                    border: 1px solid var(--color-primary);

                    ${({ disabled }) => {
                        if (disabled) {
                            return css`
                                background-color: var(--color-primary-negative);
                                border: 1px solid var(--color-primary-negative);
                                cursor: none;
                                & :hover {
                                    background-color: var(--color-primary-negative);
                                    border: 1px solid var(--color-primary-negative);
                                }
                        `
                        } else {
                            return css`
                            background-color: var(--color-primary);
                            border: 1px solid var(--color-primary);

                            &:hover {
                                background-color: var(--color-primary-hover);
                                border: 1px solid var(--color-primary-hover);
                                cursor: pointer;
                            }
                            `
                        }
                    }}
                `;
            case "delete":
                return css`
                    width: fit-content;
                    max-width: 100%;
                    min-width: 30%;
                    height: 2.5rem;
                    padding: 0 1.5rem;
                    display: flex;
                    justify-content: center;
                    margin-top: 1rem;
                    line-height: 3.5rem;
                    font-size: var(--font-size-16);
                    color: var(--color-grey-3);
                    background-color: var(--color-grey-1);
                    border: 1px solid var(--color-grey-1);

                    &:hover {
                        color: var(--color-grey-0);
                        background-color: var(--color-grey-2);
                        border: 1px solid var(--color-grey-2);
                    }

                `;
            case "icon":
                return css`
                    width: 1.5rem;
                    height: 2rem;
                    padding: 0 0.8rem;
                    display: flex;
                    justify-content: center;
                    margin-top: 1rem;
                    line-height: 3.5rem;
                    font-size: var(--font-size-20);
                    color: var(--color-grey-0);
                    background-color: var(--color-grey-3);
                    border: 1px solid var(--color-grey-3);
                    cursor: pointer;

                    `;
            default:
                return css`
                    display: flex;
                    justify-content: center;
                    height: 2.75rem;
                    padding: 0 2rem;
                    font-size: var(--font-size-14);
                    color: var(--color-grey0);
                    background-color: var(--color-primary);
                    &:hover {
                        background-color: var(--color-primary-hover);
                    }
                    &:focus {
                        background-color: var(--color-primary-hover);
                    }
                `;
        }
    }}
`