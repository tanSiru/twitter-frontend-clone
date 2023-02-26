import {  Audience, Content, Input, Line, Line2, Media, Options, Profile, ProfileStuff, Reply, TweetBox } from './HomeTweetBox.styles'
import {useState} from 'react';
import Everyone from './Options/Options' 

type Props={
    addTweet:Function;
}


export default function HomeTweetBox({addTweet}:Props) {
    const [isEveryone,setIsEveryone] = useState(false);
    const [isLine,setIsLine] = useState(false);
    const [text,setText] = useState('')

    function handleChange(event:any) {
        setText(event.target.value)
    }


    return (
    <>
        <Line/>
            <Content check={isLine}>
                <ProfileStuff>
                    <Profile src={require('../images/test.jpeg')} />
                    {isLine && <Audience onClick={isEveryone===false ? ()=> setIsEveryone(true) :()=> setIsEveryone(false)}>
                        Everyone
                        <img src={require('../images/downarrow.png')} alt="down arrow" width="10" height="10"/>
                        
                    </Audience>}
                </ProfileStuff>
            <TweetBox check={isLine} onClick={()=>setIsLine(true)} >
                <Input placeholder="What's up?" value={text} onChange={handleChange}/>
            </TweetBox>
            <Options>
                {isLine && <Reply>
                    Everyone
                    <img src={require('../images/earth2.png') } alt="earth" width="35" height="1" className='pl-2'/>
                </Reply>}
                {isLine && <Line2/>}
                <Media >
                    <img src={require('../images/image.png') } alt="" className="image"/>
                    <img src={require('../images/gif.png') } alt="GIF" className="gif"/>
                    <img src={require('../images/dots2.png') } alt="DOTS"  className="dots"/>
                    <img src={require('../images/emoji.png') } alt="EMOJI" className="emoji"/>
                    <img src={require('../images/calender.png') } alt="CALENDER" className="calender"/>
                    <button className="tweet" onClick={()=>addTweet({user:'tsubasa',handler:'hanekawa',content:text})}>
                        Tweet
                    </button>

                </Media>

            </Options>
            {isEveryone && <Everyone onClose={()=>setIsEveryone(false)}/>}
            </Content>
        <Line/>
    </>
    
    )
}
