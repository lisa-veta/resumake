import styled from 'styled-components';
import { getTypographyStyles } from '@/shared/ui/Typography/helpers/getTypographyStyles';
import { defaultVariantStyle } from '@/shared/ui/Typography/helpers/constant';

export const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const TitleInput = styled.input`
    ${getTypographyStyles(defaultVariantStyle.subtitle4)};
    border: none;
    background: transparent;
    outline: none;
    display: inline-block;
    resize: none;
    overflow: hidden;
    color: ${({ theme }) => theme.color.text.primary};
    padding: 0;
`;
