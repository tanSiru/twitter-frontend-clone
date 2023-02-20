import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top:3px;
    display: flex;
    flex-direction: column;
    justify-self: center;
`;

export const MainEvent = styled.div`
    width:100%;
    height:200px;
    display: inline-block;

    .event{
        width:100%;
        height:100%;
    }

    .description{
        color:white;
        font-weight:bold;
        font-size:30px;
        position:relative;
        /* z-index: 999; */
        margin-top:-40px;
        margin-left:5px;
    }
`;



export const Event = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    height:80px;
    gap:-3px;
    background-color: black;
    color:white;
    font-size:20px;
    padding-left:5px;
    font-weight:bold;

    :hover{
        background-color: #505050;
    }

    .details{
        font-weight:normal;
        font-size:15px;
        color:gray;
    }

`

