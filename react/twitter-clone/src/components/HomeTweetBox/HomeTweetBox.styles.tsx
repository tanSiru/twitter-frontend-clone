import styled from "styled-components"

type Props = {
    check:boolean;
}

export const Content = styled.div<Props>`
    display:flex;
    flex-direction: column;
    width:100%;
    height:${props=>props.check ? "200px" : "150px"};
    background-color: black;
`


export const Line = styled.hr`
    background-color: green;
    height:1px;
    width: 100%;
    border-top: 1px solid gray;
    line-height: 3px;
`
export const Line2 = styled.hr`
    background-color: green;
    height:1px;
    width: 100%;
    border-top: 1px solid gray;
    line-height: 3px;
    margin-top: 10px;
    margin-bottom: 10px;
    @media screen and (max-width:1450px){
        width:75%;
        }
`

export const Profile = styled.img`
    clip-path: circle();
    width:55px;
    height:55px;
    margin-left:5px;
`


export const TextContent = styled.div`
    color:white;
    margin-left:4px;
    height:100%;
`

export const ProfileStuff = styled.div`
    display:flex;
    flex-direction: row;
`

export const Audience = styled.div`
    display: flex;
    flex-direction: row;
    margin-left:5px;
    width:135px;
    height:35px;
    border-radius: 9999px;
    color:lightblue;
    border-width: 3px;
    border-color: white;
    justify-items: center;
    align-items:center;
    padding: auto auto;
    text-align: center;
    vertical-align: middle;
    line-height: 25px;    
    padding-left:20px;
    margin-top: 10px;
    :hover{
        background: rgba(255, 255, 255, .25) 
    }
`

export const TweetBox = styled.form<Props>`
    margin-top:${props=>props.check ? "0px" : "-40px"};
    margin-left:70px;
    width:90%;
    height:150px;
    @media screen and (max-width:1450px){
        width:85%;
        }
    background-color:transparent;
`

export const Input = styled.textarea`
    border-width: 0;
    background-color: black;
    :focus{
        outline-width: 0;
    }
    color:white;
    width:100%;
    height:100%;
    resize:none;
    display:flex;
    flex-wrap: wrap;
    justify-content: stretch;
`

export const Options =  styled.div`
    display: flex;
    flex-direction: column;
    width: 530px;
    height:  120px;
    padding-bottom: -15px;
    flex-shrink:2;
    margin-left: 65px;
    margin-bottom:5px;
`

export const Reply = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    width:125px;
    height:30px;
    border-radius: 9999px;
    color:lightblue;
    :hover{
        background-color: rgba(255,255,255,0.25);
    }
`

export const Media = styled.div`
    display:flex;
    flex-direction: row;
    gap: 10px;
    .image{
        width:35px;
        height:37px;
    }

    .gif{
        width:30px;
        height:28px;
        margin-top:5px;
    }

    .dots{
        width:25px;
        height:25px;
        margin-top:7px;
    }

    .emoji{
        width:28px;
        height:28px;
        margin-top:5px;
    }
    
    .calender{
        width:30px;
        height:28px;
        margin-top:5px;
    }

    .tweet{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding-bottom: 2px;
        margin-left:auto;
        @media screen and (max-width:1450px){
            margin-left:35px;
        }
        margin-top: 7px;
        width:120px;
        height:35px;
        color:white;
        background-color:darkcyan;
        :hover{
            background-color: rgba(255,255,255,0.25);
        }
        border-radius:9999px;
    }
`


