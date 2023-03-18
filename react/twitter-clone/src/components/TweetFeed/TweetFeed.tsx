import { Content, Wrapper } from './TweetFeed.styles'
import {tweets} from '../Tweets/tweets'
import {useState} from 'react';
import TweetBox from '../TweetBox/TweetBox';


export default function TweetFeed(props:any) {
    const [tweet,setTweet] = useState(tweets)

    return (
    <Wrapper>
        <Content>
        {tweet.map((user:any,index:any)=><TweetBox  key ={index} user={user.user} content={user.content} handler={user.handler}/>)}

        </Content>
    </Wrapper>
    )
}
