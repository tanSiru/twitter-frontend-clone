import HomeTweetBox from "../HomeTweetBox/HomeTweetBox";
import TweetBox from '../TweetBox/TweetBox'
import {useState} from 'react';
var randomSentence = require('random-sentence');


type Props = {
    user:string;
    content:string;
    handler:string;
}


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

    const [tweet,setTweet] = useState(tweets);
    

    function addTweet({user,content,handler}:Props){

      let temp = {
          "user":user,
          "content":content,
          "handler":handler,
      }
      

      setTweet([temp,...tweet])
      console.log({user,content,handler})
  
  }

  console.log(tweets)
  return (
    <div>
      <HomeTweetBox addTweet={addTweet}/>
      
      {tweet.map((user:any,index:any)=><TweetBox  key ={index} user={user.user} content={user.content} handler={user.handler}/>)}

    </div>
  )

}
