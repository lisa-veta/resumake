import styled from 'styled-components';

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

export const Circle = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ active, theme }) => (active ? theme.pink : '#eaeaea')};
    cursor: pointer;
    transition: background-color 0.5s ease;
`;
