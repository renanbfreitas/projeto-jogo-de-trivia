import styled from 'styled-components';

const Container = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    .question-category {
        width: 375px;
        font-size: 16px;
        margin-left: 50px;
        font-weight: 400;
    }

    .question-text {
        width: 300px;
        height: 110px;
        font-weight: 200;
    }

    .answers {
        width: 313px;
        height: 142px;
        display: inline-block;
        text-align: left;
    }

    .answers button {
        text-align: left;
        margin-bottom: 14px;
        width: 300px;
        font-size: 14px;
        font-weight: 300;
    }

    .answers button img {
        margin-right: 6px;
    }

    .red {
        color: red;
    }

    .green {
        color: rgb(6, 240, 15);
    }
    
    hr {
        width: 290px;
        background: 
        linear-gradient(#C5C5C5, #C5C5C5)
        center bottom 1px /calc(100% - 20px) 1px no-repeat;
        margin-top: 15px;
        margin-bottom: 25px;
    }
`;

export default Container;
