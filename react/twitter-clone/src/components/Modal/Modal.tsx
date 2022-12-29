import ReactDOM from 'react-dom'
import {  Wrapper } from './Modal.styled'

export default function Modal({children,open,onClose}:any) {
    if(!open) return null
    return ReactDOM.createPortal(
    <>
    <Wrapper>
        <button onClick={onClose}>Close Modal</button>
        {children}
    </Wrapper>
    </>,
    document.getElementById('more')!
    )
}
