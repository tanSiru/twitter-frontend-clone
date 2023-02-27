import styled from 'styled-components';

export const Wrapper = styled.div`
    width:100%;
    height:100px;
    
`;

export const Content = styled.div`

    display: flex;
    flex-direction: column;
    background-color: red;

    :hover{
        background-color: grey;
    }

`;

export const Pfp = styled.img`

    clip-path: circle();

`;