import {Wrapper,  Display, Info, Pfp, Text, Messaging, Msg,Send, Form} from './Message.styles'
import {useState} from 'react'

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
    {"msg":"oiasjdiiadiaaisdasioahsashdasiohihsaiosh[idaisoihasiohasoidhas[oidhasdahsd]]","person":"self"},
    {"msg":"test message","person":"other"},
  ]}
]

export default function Message() {
  const [data,setData] = useState(MessageData[0]["phos"]);
  const [text,setText] = useState('')

  function addMessage(msg:string){
    let temp = {"msg":msg,"person":"self"}
    setData([...data,temp])
    console.log(data)
  }

  function handleChange(e:any){
    setText(e.target.value)
  }

  function handleSubmit(e:any){
    addMessage(text)
    setText('');
    e.preventDefault();
  }

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
          {data.map((msg:MsgProps)=><Msg check={msg["person"]}>{msg["msg"]}</Msg>)}
        </Messaging>

        <Form onSubmit={handleSubmit}>

          <Send value={text} onChange={handleChange}/>

        </Form>

          
    
      </Display>
      
    </Wrapper>
  )
}
