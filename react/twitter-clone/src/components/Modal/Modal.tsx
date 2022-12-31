import ReactDOM from 'react-dom'
import {  Button, Content, Profile, Wrapper } from './Modal.styled'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// interface Props{
//     children:?ReactNode
//     isTweet:boolean
//     setisTweet:()=>void
// }

export default function Modal({children,tweet,onClose}:any) {
    if(!tweet) return null

    return ReactDOM.createPortal(
    <>
    <Wrapper/>
        <Content>
            <Button onClick={onClose}>X</Button>
            {children}
            <Profile src={require('../menus/images/test.jpeg')}>
                
            </Profile>
        </Content>
    </>,
    document.getElementById('modal')!
    )
}
