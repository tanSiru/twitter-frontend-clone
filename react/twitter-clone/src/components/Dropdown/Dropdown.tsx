import React from 'react'
import './dropdown.css';

interface Props{
  onClose:()=>void
}

export default function Menu({onClose}:Props) {
  return (
    <div className="absolute w-64 bg-black rounded-md p-4 overflow-hidden shadow-white shadow-[0px_0px_5px_1px] text-red-500">
        Menu
        <button onClick={onClose}>Close</button>
    </div>
  )
}
