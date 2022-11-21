import styled from 'styled-components';

export const Container = styled.section`
    /* height: 100vh; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    .textLarge {
        text-align: center;
        font-size: 14px;
        margin-top: 120px;
        opacity: 80%;
    }

    .textLarge-2 {
        text-align: center;
        font-size: 14px;
        opacity: 80%;
    }

    p {
        text-align: center;
        font-size: 35px;
        padding: 10px;
    }

    .msg {
        margin-top: 20px;
        margin-bottom: 25px;
    }

    button {
        margin-top: 15px;
        background-color: #020204;
        color: white;
        width: 100px;
        height: 30px;
        border-radius: 20px;
    }
`;

export const Form = styled.form`

`;
