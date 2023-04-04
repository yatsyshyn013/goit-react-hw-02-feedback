import styled from "@emotion/styled";

export const ButtonsStyled = styled.button`
    
    width: 80px;
    margin-top: 30px;
    background-color: #fff;
    outline: none;
    border: 1px grey solid;
    border-radius: 4px;
    cursor: pointer;
    
    :not(:last-child) {
        margin-right: 10px;
    }

    :hover {
        background-color: #1852b1;
        color: white;
    }
`