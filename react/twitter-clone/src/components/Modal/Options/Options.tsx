import React from 'react'
import './styles.css'

interface Props{
  onClose:()=>void
}

export default function Options({onClose}:Props) {
  return (
    <div className="absolute w-64 z-auto h-72 bg-black rounded-md p-4 overflow-hidden shadow-white shadow-[0px_0px_5px_1px] text-red-500 flex flex-col">
        <button onClick={onClose} className="close">X</button>
    </div>
  )
}

