import { ReactNode } from 'react'
import ReactDOM from 'react-dom'
import {  Content, Wrapper } from './Modal.styled'

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
    <Wrapper></Wrapper>
        <Content>
            <button onClick={onClose}>Close Modal</button>
            {children}
        </Content>
    </>,
    document.getElementById('modal')!
    )
}
