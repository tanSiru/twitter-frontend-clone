import { Content, Img, Wrapper } from './MediaFeed.styles'
import TweetBox from '../TweetBox/TweetBox'

export default function MediaFeed() {
  return (
    <Wrapper>
      <Content>
          <TweetBox key ="key" user="user" content={<Img src={require('../images/test.jpeg')} alt="content"/>} handler="{user.handler}"/>
          <TweetBox key ="key" user="user" content={<Img src={require('../images/ikkun.jpeg')} alt="content"/>} handler="{user.handler}"/>
          <TweetBox key ="key" user="user" content={<Img src={require('../images/kaoru.png')} alt="content"/>} handler="{user.handler}"/>

        
      </Content>
    </Wrapper>
  )
}

