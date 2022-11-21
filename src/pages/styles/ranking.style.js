import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;

    .logo {
        width: 75px;
        height: 25.94;
        opacity: 80%;
        margin-top: 15px;
    }

    .ranking-text {
        margin-top: 70px;
        font-size: 32px;
        color: #6F6F6F;
        font-weight: 300;
        margin-bottom: 30px;
    }

    .img-score {
        width: 375px;
        display: flex;
        justify-content: space-between;
        img {
            width: 60;
            height: 60px;
            border-radius: 30px;
            margin-left: 35px;
        }

        .score {
            margin-right: 35px;
            text-align: right;
            h4 {
                padding-top: 5px;
                font-size: 10px;
                font-weight: 200;
            }
        }
        .scoreTotal {
            font-size: 26px;
            color: #575757;
        }
    }

    .name {
        text-align: left;
        margin-left: 40px;
        margin-top: 5px;
        margin-bottom: 15px;
        font-size: 14px;
        font-weight: 200;
        color: #646464;
    }


    button {
        margin-top: 15px;
        background-color: #020204;
        color: white;
        width: 100px;
        height: 30px;
        border-radius: 20px;
        margin-bottom: 20px;
    }

    hr {
        width: 220px;
        background: 
        linear-gradient(#C5C5C5, #C5C5C5)
        center bottom 1px /calc(100% - 20px) 1px no-repeat;
        margin-top: 15px;
        margin-bottom: 25px;
        margin-left: 80px;
        opacity: 40%;
    }
`;

export const Form = styled.form`

`;
