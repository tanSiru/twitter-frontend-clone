import styled from 'styled-components';

export const Wrapper = styled.div`
    width:100%;
    height:90px;
    display: flex;
    flex-direction: row;
    /* background-color: red; */
    /* justify-content: center; */
    align-items: center;
    :hover{
        background-color: grey;
    }
`;

export const Display = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height:70px;
    overflow: hidden;
`;

export const User = styled.div`  
    display: flex;
    flex-direction: row;
    .username{
        font-weight: bold;
        color:white;
        overflow: hidden;
        font-size:20px;
    }
    .handler{
        margin-left:5px;
        margin-top:5px;
        color:white;
        overflow: hidden;
        font-size:16px;
    }
`;

export const Message = styled.div`
    color:grey;
    font-size: 18px;
    margin-left:5px;
`;


export const Pfp = styled.img`
    width:50px;
    height: 50px;
    clip-path: circle();
`;
