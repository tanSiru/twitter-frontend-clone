import styled from 'styled-components';

export const Wrapper = styled.div`
    width:100%;
    height:350px;
`;

export const Content = styled.div`
    width:100%;
    height:45%;
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
    height:20%;
    position: relative;
    top:-50px;
    margin-left:15px;
`;

export const ProfilePic = styled.img`
    clip-path: circle();
    width:125px;
    height:125px;
    /* border: 8px black solid; */
`;

export const Edit = styled.button`
    float:right;
    width:125px;
    height:40px;
    color:white;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    border-radius: 30px;
    border:solid white;
    position: relative;
    top:-60px;
    margin-right: 20px;;
`;

export const Info = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
    height:30%;
    padding-left:25px;
    border-bottom: 1px solid grey;
`;

export const Name = styled.div`
    color:white;
    font-size: 32px;
    font-weight:bold;
`;

export const Handler = styled.div`  
    color:grey;
    font-size: 16px;
    font-weight:bold;
`;
