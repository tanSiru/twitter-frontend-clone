import TweetBox from '../TweetBox/TweetBox'
import {Content, Wrapper} from './Bookmark.styles'


export default function Bookmark() {
  const content = "dasdsdasdasdsdassdasdsdassdasdsdassdasdsdassdasdsdassdasdsdassdasdsdasss"
  return (
    <Wrapper>
        <Content>
          <TweetBox key ="key" user="user" content={<img src={require('../images/test.jpeg')}/>} handler="{user.handler}"/>
        </Content>
    </Wrapper>
  )
}
