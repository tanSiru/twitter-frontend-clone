import {Wrapper,  Display, Info, Pfp, Text, Messaging, Msg,Send} from './Message.styles'

/*
Msg data structure:
Main array/object holding the messages->each object within the main arrray/object will contain the sender + msg
*/

// type MsgProps={
//   msg:string;
//   person:"self" | "other";
// }

type MsgProps={
  msg:string;
  person:string;
}

var MessageData = [
  {"phos":[
    {"msg":"test message","person":"self"},
    {"msg":"test message","person":"other"},
  ]}
]

export default function Message() {
  return (
    <Wrapper>
      <Display>


        <Info>
          <Pfp src={require('../images/test.jpeg')}/>
          <Text check={true}>bruh moment</Text>
          <Text check={false}>test moment</Text>
          <div className="bio">FML</div>
          <Text check={false}>March 2, 2023</Text>
          <Text check={false}>ajsidjaisdas</Text>
        </Info>

        <Messaging>
          {MessageData[0]["phos"].map((msg:MsgProps)=><Msg check={msg["person"]}>{msg["msg"]}</Msg>)}
        </Messaging>

        <Send>
          
        </Send>
      </Display>
      
    </Wrapper>
  )
}
