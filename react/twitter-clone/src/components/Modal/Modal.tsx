import ReactDOM from 'react-dom'
import {useState} from 'react';
import {  Audience, Button, Content, Input, Line, Media, Options, Profile, ProfileStuff, Reply, TweetBox, Wrapper } from './Modal.styled'
import Everyone from './Options/Options' 

//eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Props{
    isTweet:boolean
    setisTweet:()=>void
}

//ADD TEXT WHEN HOVERING OVER MEDIA BUTTONS 

export default function Modal({tweet,onClose}:any) {
    const [isEveryone,setIsEveryone] = useState(false);

    function close(){
        onClose();
        setIsEveryone(false)
    }

    if(!tweet) return null

    return ReactDOM.createPortal(
        
    <>
    <Wrapper/>
        <Content>
            <Button onClick={()=>close()}>X</Button>
            <ProfileStuff>
                <Profile src={require('../images/test.jpeg')} />
                <Audience onClick={isEveryone===false ? ()=> setIsEveryone(true) :()=> setIsEveryone(false)}>
                    Everyone
                    <img src={require('../images/downarrow.png')} alt="down arrow" width="10" height="10"/>
                    
                </Audience>
            </ProfileStuff>
            <TweetBox>
                <Input placeholder="type something"/>
            </TweetBox>
            <Options>
                <Reply>
                    Everyone
                    <img src={require('../images/earth2.png') } alt="earth" width="35" height="1" className='pl-2'/>
                </Reply>
                <Line/>
                <Media>
                    <img src={require('../images/image.png') } alt="" className="image"/>
                    <img src={require('../images/gif.png') } alt="GIF" className="gif"/>
                    <img src={require('../images/dots2.png') } alt="DOTS"  className="dots"/>
                    <img src={require('../images/emoji.png') } alt="EMOJI" className="emoji"/>
                    <img src={require('../images/calender.png') } alt="CALENDER" className="calender"/>
                    <div className="tweet">
                        Tweet
                    </div>

                </Media>

            </Options>
            {isEveryone && <Everyone onClose={()=>setIsEveryone(false)}/>}
        </Content>
    </>,
    document.getElementById('modal')!
    )
}
