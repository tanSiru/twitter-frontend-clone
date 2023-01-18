import {  Audience, Content, Input, Line, Line2, Media, Options, Profile, ProfileStuff, Reply, TweetBox } from './HomeTweetBox.styles'
import {useState} from 'react';
import Everyone from './Options/Options' 


export default function HomeTweetBox() {
    const [isEveryone,setIsEveryone] = useState(false);
    const [isLine,setIsLine] = useState(false);


    return (
    <>
        <Line/>
            <Content check={isLine}>
                <ProfileStuff>
                    <Profile src={require('../menus/images/test.jpeg')} />
                    {isLine && <Audience onClick={isEveryone===false ? ()=> setIsEveryone(true) :()=> setIsEveryone(false)}>
                        Everyone
                        <img src={require('../menus/images/downarrow.png')} alt="down arrow" width="10" height="10"/>
                        
                    </Audience>}
                </ProfileStuff>
            <TweetBox check={isLine} onClick={()=>setIsLine(true)}>
                <Input placeholder="type something"/>
            </TweetBox>
            <Options>
                {isLine && <Reply>
                    Everyone
                    <img src={require('../menus/images/earth2.png') } alt="earth" width="35" height="1" className='pl-2'/>
                </Reply>}
                {isLine && <Line2/>}
                <Media >
                    <img src={require('../menus/images/image.png') } alt="" className="image"/>
                    <img src={require('../menus/images/gif.png') } alt="GIF" className="gif"/>
                    <img src={require('../menus/images/dots2.png') } alt="DOTS"  className="dots"/>
                    <img src={require('../menus/images/emoji.png') } alt="EMOJI" className="emoji"/>
                    <img src={require('../menus/images/calender.png') } alt="CALENDER" className="calender"/>
                    <div className="tweet">
                        Tweet
                    </div>

                </Media>

            </Options>
            {isEveryone && <Everyone onClose={()=>setIsEveryone(false)}/>}
            </Content>
        <Line/>
    </>
    
    )
}
