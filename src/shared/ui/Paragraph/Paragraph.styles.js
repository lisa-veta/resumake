import styled from 'styled-components';
import { getTypographyStyles } from '@/shared/ui/Typography/helpers/getTypographyStyles';
import { defaultVariantStyle } from '@/shared/ui/Typography/helpers/constant';

export const ParagraphContainer = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
`;

export const Circle = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #eaeaea;
    cursor: pointer;
`;

export const TextInput = styled.input`
    ${getTypographyStyles(defaultVariantStyle.subtitle4)};
    border: none;
    background: transparent;
    outline: none;
    display: inline-block;
    resize: none;
    overflow: hidden;
    color: ${({ theme }) => theme.color.text.primary};
`;
