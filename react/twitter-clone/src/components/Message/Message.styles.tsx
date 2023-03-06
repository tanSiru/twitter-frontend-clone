import styled from 'styled-components';

type Props = {
    check:boolean;
}

type Type = {
    check:string;
}

export const Wrapper = styled.div`
    width:100%;
    height:1000px;
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
    .bio{
        font-size:20px;
        color:"white";
        margin-top:10px;
        margin-bottom:10px;
        font-weight:bold;
    }
    border-bottom:2px solid grey;
`

export const Text = styled.div<Props>`
    font-size:20px;
    color:${props=>props.check ? "white" : "darkgrey"};
    font-weight:${props=>props.check ? "bold" : ""};
`;

export const Pfp = styled.img`  
    clip-path: circle();
    height:65px;
    width:65px;
`;

export const Messaging = styled.div`
    display:flex;
    flex-direction: column;
    width:450px;
    height:450px;
    max-height: 1000px;
    /* :hover{
        background-color: grey;
    } */
    overflow:auto;
`;

export const Msg = styled.div<Type>`
    width:250px;
    min-height:45px;
    max-height: 300px;
    height:auto;
    overflow:auto;
    background-color: #43b4f6;
    border-radius: 20px;
    margin-left: ${props=> props.check==="self" ? "195px" : "5px"};
    margin-top:10px;
    word-wrap: break-word;
    padding-left: 5px;
`;

export const SendWrapper = styled.div`
    width:450px;
    min-height:50px;
    max-height: 300px;
    height:auto;
    overflow:auto;
`;

export const Send = styled.input.attrs({ type: 'text' })`
    width:450px;
    height:50px;
    border-radius:15px;
    background-color: #212328;
    padding:8px;
`;

export const Form  = styled.form``