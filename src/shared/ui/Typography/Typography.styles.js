import styled from 'styled-components';
import { getTypographyStyles } from './helpers/getTypographyStyles';

export const StyledTypography = styled.span`
    ${({ variant }) => getTypographyStyles(variant)};
    ${({ color, theme }) =>
        `color: ${color ? theme.color.text[color] || color : theme.color.text.primary};`};
    margin: 0;
`;
