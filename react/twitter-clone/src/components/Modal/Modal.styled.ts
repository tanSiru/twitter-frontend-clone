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
    top:30%;
    left:50%;
    transform:translate(-50%, -50%);
    background-color: black;
    padding:50px;
    z-index:1000; 
    color:black;
    display:flex;
    flex-direction: column;
    border-radius: 5%;
    width:600px;
    height:350px;
`

export const Button = styled.button`
    margin-top: -25px;;
    margin-left: -25px;
    width:30px;
    height:30px;
    position: absolute;
    color:white;
    font-size: 16px;
    border-radius: 9999px;
    :hover{
        background: rgba(255, 255, 255, .25) 
    }
    justify-items: center;
    align-items:center;
`

export const Profile = styled.img`
    clip-path: circle();
    width:55px;
    height:55px;
    margin-left:-30px;
`

export const ProfileStuff = styled.div`
    display:flex;
    flex-direction: row;
`

export const Audience = styled.div`
    display: flex;
    flex-direction: row;
    margin-left:5px;
    width:125px;
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
    :hover{
        background: rgba(255, 255, 255, .25) 
    }
`

export const TweetBox = styled.form`
    margin-left:30px;
    width:100%;
    height:150px;
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

export const Line = styled.hr`
    height: 1px;
    margin-top:10px;
    margin-bottom:10px;
    background: black;
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