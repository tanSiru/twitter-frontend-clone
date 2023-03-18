import TweetFeed from '../TweetFeed/TweetFeed'
import { Content, Select, Wrapper,Option } from './ProfileFeed.styles'

export default function ProfileFeed() {
  return (
    <Wrapper>
        <Content>
            <Select>
                <Option>Tweets</Option>
                <Option>Replies</Option>
                <Option>Media</Option>
            </Select>
            <TweetFeed>
                
            </TweetFeed>
        </Content>
    </Wrapper>
  )
}
