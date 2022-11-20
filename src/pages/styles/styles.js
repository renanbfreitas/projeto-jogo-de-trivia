import styled from 'styled-components';

export const Container = styled.main`
    /* height: 100vh; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Form = styled.form`
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    input {
        padding: 5px;
        width: 300px;
        border: none;
        background: 
        linear-gradient(#C5C5C5, #C5C5C5)
        center bottom 1px /calc(100% - 20px) 1px no-repeat;
        font-size: 14px;
        margin-bottom: 22px;
    }

    .logo {
        margin-top: 67px;
        margin-bottom: 51px;
        width: 120px;
        height: 41.5px;
    }

    button:first-of-type {
        margin-top: 43px;
        margin-bottom: 17px;
        background-color: #020204;
        color: white;
        width: 305px;
        height: 45px;
        border-radius: 20px;
    }

    .gear {
        width: 29px;
        height: 29px;
        opacity: 80%;
    }
`;
