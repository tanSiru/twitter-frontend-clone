import TweetBox from '../TweetBox/TweetBox'
import {Content, Img, Wrapper} from './Bookmark.styles'


export default function Bookmark() {
  const content = "dasdsdasdasdsdassdasdsdassdasdsdassdasdsdassdasdsdassdasdsdassdasdsdasss"
  return (
    <Wrapper>
        <Content>
          <TweetBox key ="key" user="user" content={<Img src={require('../images/test.jpeg')} alt="content"/>} handler="{user.handler}"/>
        </Content>
    </Wrapper>
  )
}
