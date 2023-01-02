import ReactDOM from 'react-dom'
import {  Audience, Button, Content, Input, Options, Profile, ProfileStuff, Reply, TweetBox, Wrapper } from './Modal.styled'

//eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Props{
    isTweet:boolean
    setisTweet:()=>void
}

export default function Modal({tweet,onClose}:any) {
    if(!tweet) return null

    return ReactDOM.createPortal(
    <>
    <Wrapper/>
        <Content>
            <Button onClick={onClose}>X</Button>
            <ProfileStuff>
                <Profile src={require('../menus/images/test.jpeg')}/>
                <Audience>
                    Everyone
                    <img src={require('../menus/images/downarrow.png')} alt="down arrow" width="10" height="10" />
                </Audience>
            </ProfileStuff>
            <TweetBox>
                <Input placeholder="type something"/>
            </TweetBox>
            <Options>
                <Reply>
                    Everyone
                    <img src={require('../menus/images/earth2.png') } alt="earth" width="35" height="1" className='pl-2'/>
                </Reply>

            </Options>
        </Content>
    </>,
    document.getElementById('modal')!
    )
}
