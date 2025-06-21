import styled from 'styled-components';

export const SideContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 205px;
    height: auto;
    padding: 150px 20px 20px 20px;
    background-color: #22223b;
    border-radius: 10px;
    gap: 30px;
    box-sizing: border-box;
`;

export const BlockWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Wrapper = styled.div`
    position: relative;
    width: fit-content;
`;

export const UploadContainer = styled.label`
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    width: 160px;
    height: 160px;
    border-radius: 20%;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.background.secondary};
    &:hover {
        background-color: ${({ theme }) => theme.pink};
    }
    transition: background-color 0.3s ease;
    input {
        display: none;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const SkillWrapper = styled.div`
    position: relative;

    &:hover button {
        opacity: 1;
    }
`;

export const DeleteButton = styled.button`
    position: absolute;
    top: 1px;
    right: 1px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    color: ${({ theme }) => theme.color.text.primary};
    border-radius: 20px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.2s ease;

    &:hover {
        background: ${({ theme }) => theme.pink};
    }
`;

export const AddButton = styled.button`
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: ${({ theme }) => theme.color.text.primary};
    padding: 4px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 12px;
    border: none;
    opacity: 0;
    &:hover {
        background: ${({ theme }) => theme.pink};
    }
`;

export const TitleWithAction = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    &:hover button {
        opacity: 1;
    }
`;

