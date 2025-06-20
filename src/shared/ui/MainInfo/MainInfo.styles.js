import styled from 'styled-components';
import { getTypographyStyles } from '@/shared/ui/Typography/helpers/getTypographyStyles';
import { defaultVariantStyle } from '@/shared/ui/Typography/helpers/constant';

export const MainInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    word-break: break-word;
`;

export const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const TitleInput = styled.input`
    ${getTypographyStyles(defaultVariantStyle.h4)};
    border: none;
    background: transparent;
    outline: none;
    display: inline-block;
    resize: none;
    overflow: hidden;
    color: ${({ theme }) => theme.color.text.primary};
    padding: 0;
    width: 100%;
`;

export const TextInput = styled.input`
    ${getTypographyStyles(defaultVariantStyle.subtitle2)};
    border: none;
    background: transparent;
    outline: none;
    display: inline-block;
    resize: none;
    overflow: hidden;
    color: ${({ theme }) => theme.pink};
    padding: 0;
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
`;
