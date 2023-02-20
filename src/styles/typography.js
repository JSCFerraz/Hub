import styled, { css } from "styled-components";
import BaseText from "./components/BaseText/index"

export const StyledText = styled(BaseText)`

    ${({ textColor }) => {
        switch (textColor) {
            case "primary":
                return css`
                    color: var(--color-primary);
                `;
            case "grey":
                return css`
                    color: var(--color-grey-1);
                `;
            default:
                return css`
                    color: var(--color-grey-0);
                `;
        }
    }}
    ${({ textStyle }) => {
        switch (textStyle) {
            case "title1":
                return css`
                font-size: var(--font-size-20);
                font-weight: 700;
                `;
            case "title2":
                return css`
                font-size: var(--font-size-16);
                font-weight: 700;
                 `;
            case "title3":
                return css`
                font-size:  var(--font-size-12);
                font-weight: 500;
                `;
            case "headline":
                return css`
                font-size:  var(--font-size-12);
                font-weight: 400;
                `;
            case "headlineBold":
                return css`
                font-size: var(--font-size-12);
                font-weight: 700;
                `;
            case "HeadlineItalic":
                return css`
                font-size: var(--font-size-12);
                font-style: italic;
                font-weight: 400;
                `;
            default:
                return css`
                font-size: var(--font-size-12);
                font-weight: 400;
                `;
        }
    }}
`;