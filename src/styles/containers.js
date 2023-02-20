import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 295px;
    margin: 0 auto;
    padding: 10px;
    
    @media (min-width: 330px) {
        max-width: 370px;
    }

    ${({ page }) => {
        if (page === "userdash") {
            return css`
                @media (min-width: 700px) {
                    max-width: 900px;
                }
            `
        }
    }}
`