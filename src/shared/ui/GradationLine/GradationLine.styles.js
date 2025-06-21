import styled from 'styled-components';
import { getTypographyStyles } from '@/shared/ui/Typography/helpers/getTypographyStyles';
import { defaultVariantStyle } from '@/shared/ui/Typography/helpers/constant';

export const GradationLineContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
`;

export const CircleWrapper = styled.div`
    display: flex;
    gap: 5px;
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

export const Circle = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ active, theme }) =>
        active ? theme.pink : '#eaeaea'};
    cursor: pointer;
    transition: background-color 0.5s ease;
`;
