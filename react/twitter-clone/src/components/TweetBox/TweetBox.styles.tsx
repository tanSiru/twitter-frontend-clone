import styled from "styled-components"

export const Content = styled.div`
    display:flex;
    flex-direction: row;
    width:100%;
    height:96px;
    background-color: black;
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
    overflow-y: auto;
    overflow-x: hidden;
`

export const TextContent = styled.div`
    color:white;
    margin-left:4px;
    height:100%;
`
export const LeftLine = styled.div`
    border-left: 1px solid white;
    display:black;
    height:100%;
    width:1px;
    float:right;
`

export const RightLine = styled.div`
    border-left: 1px solid white;
    display:black;
    height:100%;
    width:1px;
    float:left;
`
