import styled from 'styled-components';

export const Wrapper = styled.div`
    width:100%;
    height:250px;
    background-color: red;
`;

export const Content = styled.div`
    width:100%;
    height:70%;
    display:flex;
    flex-direction:column;
`;

export const Banner = styled.img`
    width:100%;
    height:100%;
    overflow:hidden;
`;

export const ProfileStuff = styled.div`
    display: flex;
    flex-direction:row;
    width:100%;
    height:30%;
    position: relative;
    top:-50px;
    margin-left:15px;
`;

export const ProfilePic = styled.img`
    clip-path: circle();
    width:100px;
    height:100px;
`;

export const Edit = styled.div``;

