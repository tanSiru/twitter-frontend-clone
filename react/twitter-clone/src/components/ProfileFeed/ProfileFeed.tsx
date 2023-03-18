import TweetFeed from '../TweetFeed/TweetFeed'
import { Content, Select, Wrapper,Option } from './ProfileFeed.styles'
import {useState} from 'react'
import RepliesFeed from '../RepliesFeed/RepliesFeed'
import MediaFeed from '../MediaFeed/MediaFeed'

export default function ProfileFeed() {
  const [content,setContent] = useState("tweets")

  return (
    <Wrapper>
      <Select>
                <Option onClick={()=>setContent("tweets")}>Tweets</Option>
                <Option onClick={()=>setContent("replies")}>Replies</Option>
                <Option onClick={()=>setContent("media")}>Media</Option>
            </Select>
        <Content>
            {content === "tweets" &&<TweetFeed/>}
            {content === "replies" &&<RepliesFeed/>}
            {content === "media" &&<MediaFeed/>}

                
        </Content>
    </Wrapper>
  )
}
