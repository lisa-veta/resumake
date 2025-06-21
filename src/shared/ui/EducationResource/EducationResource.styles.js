import styled from 'styled-components';
import { getTypographyStyles } from '@/shared/ui/Typography/helpers/getTypographyStyles';
import { defaultVariantStyle } from '@/shared/ui/Typography/helpers/constant';

export const EducationResource = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2px;
`;

export const LineWrapper = styled.div`
    display: flex;
    gap: 3px;
`;

export const TitleInput = styled.input`
    ${getTypographyStyles(defaultVariantStyle.subtitle3)};
    border: none;
    background: transparent;
    outline: none;
    padding: 0;
    display: inline-block;
    resize: none;
    overflow: hidden;
    color: ${({ theme }) => theme.pink};
`;

export const TextInput = styled.input`
    ${getTypographyStyles(defaultVariantStyle.subtitle4)};
    border: none;
    padding: 0;
    background: transparent;
    outline: none;
    display: inline-block;
    resize: none;
    overflow: hidden;
    color: ${({ theme }) => theme.color.text.primary};
    width: ${({ width }) => width || 'auto'};
`;
