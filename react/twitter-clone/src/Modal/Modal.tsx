import React from 'react'
import {  Wrapper } from './Modal.styled'

export default function Modal({children,open,onClose}:any) {
    if(!open) return null
    return (

    <>
    <Wrapper>
        <button onClick={onClose}>Close Modal</button>
        {children}
    </Wrapper>
    </>
    
    )
}
