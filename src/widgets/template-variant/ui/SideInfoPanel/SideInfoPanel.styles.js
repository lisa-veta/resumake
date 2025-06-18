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

    input {
        display: none;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
