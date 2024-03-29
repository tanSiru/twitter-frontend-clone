import styled from 'styled-components';

export const Wrapper = styled.div`
    width:100%;
    margin-top:5px;
    display: flex;
    flex-direction:row;
`;

export const Feed  = styled.div` 
    display:flex;
    :hover{
        background-color: #505050;
        color:white;
    }
    height:50px;
    color:white;
    flex-basis: 50%;
    align-items: center;
    justify-content: center;
`;


export const Line = styled.hr`
    height:1px;
    width:100%;
    border: 1px solid red;
    position:absolute;
    bottom:0;
`
