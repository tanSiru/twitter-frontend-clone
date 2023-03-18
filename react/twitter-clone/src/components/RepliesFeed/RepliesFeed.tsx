import { useState } from 'react'
import TweetBox  from '../TweetBox/TweetBox'
import { Content, Wrapper } from './RepliesFeed.styles'
const randomSentence = require('random-sentence');

export const tweets:any = []

    for(let i = 0;i<20;i++){
        let tweet = {
            "user":randomSentence({words: 1}),
            "content":randomSentence({min: 4, max: 9}),
            "handler":randomSentence({words: 1}),
        }
        tweets.push(tweet)
    }

export default function RepliesFeed() {
  const [tweet,setTweet] = useState(tweets)

  return (
    <Wrapper>
      <Content>
        {tweet.map((user:any,index:any)=><TweetBox  key ={index} user={user.user} content={user.content} handler={user.handler}/>)}

      </Content>
    </Wrapper>
  )
}
