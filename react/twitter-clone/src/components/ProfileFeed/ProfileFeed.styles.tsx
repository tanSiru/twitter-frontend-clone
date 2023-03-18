import styled from 'styled-components';

export const Wrapper = styled.div`
    width:100%;
    height:100%;
    /* margin-top:45px; */
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
    /* flex:1 1 0; */
    /* background-color: blue; */
    border-bottom: 1px solid grey;
`;

export const Option =  styled.button`
    /* flex-basis:0; */
    width:34%;
    /* min-width: 0; */
    height:100%;
    color:white;
    font-weight:bold;
    :hover{
    background-color: grey;
    }

`;