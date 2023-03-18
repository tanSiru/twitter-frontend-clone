import styled from 'styled-components';

export const Wrapper = styled.div`
    width:100%;
    height:100%;
`;

export const Content = styled.div`
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
`;

export const Select = styled.div`
    width:100%;
    height:60px;
    display: flex;
    flex-direction:row;
    border-bottom: 1px solid grey;

`;

export const Option =  styled.button`
    width:34%;
    height:100%;
    color:white;
    font-weight:bold;
    :hover{
    background-color: grey;
    }
`;

export const Ged = styled.div`
    height:50px;
    width:100%;
    background-color: green;
`