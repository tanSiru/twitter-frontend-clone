import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;

`;

export const Select = styled.div`
    margin-top:-15px;
    display:flex;
    flex-direction:row;
    width:100%;
    height:50px;

    .all{
        display:flex;
        justify-content: center;
        align-items:center;
        flex:50%;
        color:white;

        :hover{
            background-color: grey;
        }
    }

    .mentions{
        display:flex;
        justify-content: center;
        align-items:center;
        flex:50%;
        color:white;

        :hover{
            background-color: grey;
        }
    }

`;

export const Line = styled.hr`
    background-color: green;
    height:1px;
    width: 100%;
    border-top: 1px solid gray;
    line-height: 3px;
`

export const Notification = styled.div`
    width:100%;
    height:100%;
    display: flex;
    flex-direction:column;

`;

export const All = styled.div`
    width:100%;
    height:100px;
    color:white;
    display:flex;
    flex-direction:column;
    padding-top: 10px;
    padding-left: 10px;

    .user{
        font-weight:bold;
    }

    img{
        clip-path: circle();
        width:40px;
        height:40px;
    }

`;

export const Mentions = styled.div`

    width:100%;
    height:100px;
    color:white;
    display:flex;
    flex-direction:column;
    padding-top: 10px;
    padding-left: 10px;

    .user{
        font-weight:bold;
    }

    img{
        clip-path: circle();
        width:40px;
        height:40px;
    }


`;
