import HomeTweetBox from "../HomeTweetBox/HomeTweetBox";
import TweetBox from '../TweetBox/TweetBox'

var randomSentence = require('random-sentence');

const tweets:any = []

for(let i = 0;i<41;i++){
  let tweet = {
    "user":randomSentence({words: 1}),
    "content":randomSentence({min: 4, max: 9}),
    "handler":randomSentence({words: 1}),
  }
  tweets.push(tweet)
}

export default function Tweets() {
  console.log(tweets)
  return (
    <div>
      <HomeTweetBox/>
      
      {tweets.map((user:any)=><TweetBox user={user.user} content={user.content} handler={user.handler}/>)}

    </div>
  )

}
