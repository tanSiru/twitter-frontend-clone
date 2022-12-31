import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, .1);
    z-index: 1000;
`

export const Content = styled.div`
    position: fixed;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    background-color: black;
    padding:50px;
    z-index:1000; 
    color:black;
    display:flex;
    flex-direction: column;
    border-radius: 5%;
    color:blue;
`
