import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top:10px;
    display:flex;
    flex-direction: column;
    align-items: center;
`

export const SearchBar = styled.input.attrs({ type: 'text', value: 'Submit'})`
    background-color: darkgray;
    width:300px;
    height:45px;
    border-radius:15px;
`

export const Profile = styled.img`
    clip-path: circle();
    width:45px;
    height:45px;
    margin-left:5px;
`

export const Suggest = styled.div`
    width:300px;
    height:235px;
    display:flex;
    flex-direction:column;
    margin-top:50px;
    background-color:#15181c;
    border-radius:10px;
    border-color:white;
    border-style: solid;
    border-width:1px;


    .youmightlike{
        font-weight: bold;
        margin-top:5px;
        padding-left:5px;
        font-size:20px;
        color:white;
    }

    .suggested{
        width:100%;
        height:65px;
        display:flex;
        flex-direction: row;
        background:#15181c;
        align-items:center;
        :hover{
            background:rgb(199, 203, 209);
            opacity:0.75;
        }
    }
    

    .profile{
        display:flex;
        flex-direction:column;
        margin-left:10px;
        font-weight:bold;


        .username{
            font-size:15px;
            color:white;
        }
        .at{
            font-size:15px;
            color:lightgray;
            margin-top:-5px;
        }
    }

    .follow{
            width:75px;
            height:25px;
            background-color: white;
            border-radius:25px;
            text-align: center;
            font-size:15px;
            color: black;
            margin-left:25px;
        }
`

export const Happening = styled.div`
    width:300px;
    height:380px;
    display:flex;
    flex-direction:column;
    margin-top:50px;
    background-color:#15181c;
    border-radius:10px;
    border-color:white;
    border-style: solid;
    border-width:1px;

    .whatshappening{
        font-weight: bold;
        margin-top:5px;
        padding-left:5px;
        font-size:20px;
        color:white;
    }

    .event{
        width:100%;
        height:65px;
        display:flex;
        flex-direction: row;
        background:#15181c;
        align-items:center;
        :hover{
            background:rgb(199, 203, 209);
            opacity:0.75;
        }

        .content{
            display: flex;
            flex-direction:column;
            margin-left:15px;
            .trending{
                font-size:13px;
                color:darkgray;
            }


            .news{
                font-size:18px;
                color:white;
                margin-top:-5px;
                font-weight:bold;
            }
        }

    }

`