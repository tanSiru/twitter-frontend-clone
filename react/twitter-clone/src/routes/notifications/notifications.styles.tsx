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