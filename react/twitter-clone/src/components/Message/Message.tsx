import {Wrapper,  Display, Info, Pfp} from './Message.styles'

export default function Message() {
  return (
    <Wrapper>
      <Display>
        <Info>
          <Pfp src={require('../images/test.jpeg')}/>
          
        </Info>
      </Display>
    </Wrapper>
  )
}
