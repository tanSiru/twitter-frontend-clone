import styled from "styled-components"

export const Content = styled.div`
    display:flex;
    flex-direction: row;
    width:100%;
    min-height:90px;
    max-height:525px;
    height:auto;
    overflow:auto;
    background-color: black;
    border: 1px solid grey;
`

export const Line = styled.hr`
    background-color: green;
    height:1px;
    width: 100%;
    border-top: 1px solid gray;
    line-height: 3px;
`

export const Profile = styled.div`
    display:flex;
    flex-direction: row;
    margin-top:16px;
    margin-left:8px;
`

export const TweetContent = styled.div`
    overflow-x: hidden;
`

export const TextContent = styled.div`
    color:white;
    margin-left:4px;
    width:100%;
    /* min-height:70px;
    max-height:500px; */
    height:auto;
    overflow:auto;
    word-wrap: break-word;
`
export const LeftLine = styled.div`
    border-left: 1px solid white;
    display:black;
    height:100%;
    width:1px;
    float:left;
`

export const RightLine = styled.div`
    border-right: 1px solid white;
    display:black;
    height:100%;
    width:1px;
    float:right;
`
