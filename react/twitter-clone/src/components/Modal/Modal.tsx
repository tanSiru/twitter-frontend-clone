import ReactDOM from 'react-dom'
import {  Audience, Button, Content, Input, Profile, ProfileStuff, TweetBox, Wrapper } from './Modal.styled'

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
                </Audience>
            </ProfileStuff>
            <TweetBox>

                <Input placeholder="type something"/>

            </TweetBox>
        </Content>
    </>,
    document.getElementById('modal')!
    )
}
