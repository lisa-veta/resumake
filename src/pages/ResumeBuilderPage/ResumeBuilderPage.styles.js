import styled from 'styled-components';

export const ResumeContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px;
    gap: 20px;
    flex-direction: column;
`;

export const ExportWrapper = styled.div`
    display: flex;
`;

export const ExportButton = styled.button`
    border: none;
    background-color: ${({ theme }) => theme.pink};
    border-radius: 50px;
    padding: 10px 20px;
    cursor: pointer;
`;
