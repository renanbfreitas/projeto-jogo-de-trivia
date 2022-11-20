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

    .loginGreeting {
        width: 300px;
        display: inline-block;

    }

    h1 {
        font-size: 18px;
        font-weight: 500;
    }

    h3 {
        font-size: 10px;
        font-weight: 200;
        margin-bottom: 20px;
    }

    input {
        padding: 5px;
        width: 300px;
        border: none;
        background: 
        linear-gradient(#C5C5C5, #C5C5C5)
        center bottom 1px /calc(100% - 20px) 1px no-repeat;
        font-size: 14px;
        margin-bottom: 22px;
        transition: all .25 ease-in-out;
    }

    input:focus {
        outline: none;
        background: 
        linear-gradient(#C5C5C5, #C5C5C5)
        center bottom 1px /calc(100% - 5px) 2px no-repeat;
    }
    
    input::placeholder {
        color: #646464;
        font-weight: 300;
        opacity: 70%;
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

        button:disabled {
        color: gray;
        background-color: #6B6B6B;
    }


    .gear {
        width: 29px;
        height: 29px;
        opacity: 80%;
    }

    p {
        padding-top: 34px;
        font-size: 12px;
        color: #6B6B6B;
    }

    .logoSocial {
        margin-top: 34px;
        width: 45px;
        height: 45px;
    }

    div {
        width: 200px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .logoSocial:first-child {
        width: 34px;
        height: 34px;
    }
`;
