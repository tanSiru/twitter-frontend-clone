import styled from 'styled-components';

export const Wrapper = styled.div`
    width:100%;
    height:100%;
    color:white;
`;

export const Display = styled.div`
    margin-top:25px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-items:center;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    width:450px;
    height:300px;
    align-items: center;
    justify-items:center;
        :hover{
            background-color:grey;
        }

`

export const Pfp = styled.img`  
    clip-path: circle();
    height:80px;
    width:80px;

`;