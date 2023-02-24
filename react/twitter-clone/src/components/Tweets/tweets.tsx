import HomeTweetBox from "../HomeTweetBox/HomeTweetBox";
import TweetBox from '../TweetBox/TweetBox'
var randomSentence = require('random-sentence');


type Props = {
    user:string;
    content:string;
    handler:string;
}

export default function Tweets() {
    const tweets:any = []

    for(let i = 0;i<41;i++){
        let tweet = {
            "user":randomSentence({words: 1}),
            "content":randomSentence({min: 4, max: 9}),
            "handler":randomSentence({words: 1}),
        }
        tweets.push(tweet)
    }

    function addTweet({user,content,handler}:Props){

      let tweet = {
          "user":user,
          "content":content,
          "handler":handler,
      }
  
      tweets.push(tweet)
  
  }

  console.log(tweets)
  return (
    <div>
      <HomeTweetBox add={addTweet}/>
      
      {tweets.map((user:any)=><TweetBox user={user.user} content={user.content} handler={user.handler}/>)}

    </div>
  )

}
