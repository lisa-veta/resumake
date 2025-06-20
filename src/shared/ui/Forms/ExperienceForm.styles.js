import styled from 'styled-components';
import { getTypographyStyles } from '@/shared/ui/Typography/helpers/getTypographyStyles';
import { defaultVariantStyle } from '@/shared/ui/Typography/helpers/constant';

export const ExperienceFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    word-break: break-word;
`;

export const TextWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const TitleInput = styled.input`
    ${getTypographyStyles(defaultVariantStyle.subtitle5)};
    border: none;
    background: transparent;
    outline: none;
    display: inline-block;
    resize: none;
    overflow: hidden;
    color: ${({ theme }) => theme.pink};
    padding: 0;
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
    padding: 0;
    width: ${({ width }) => width || 'auto'};
`;

export const DateWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const TextSubInput = styled.textarea`
    ${getTypographyStyles(defaultVariantStyle.subtitle4)};
    border: none;
    background: transparent;
    outline: none;
    display: inline-block;
    resize: none;
    overflow: hidden;
    color: ${({ theme }) => theme.color.text.primary};
    padding: 0;
    width: ${({ width }) => width || 'auto'};
`;
