import './dropdown.css';

interface Props{
  onClose:()=>void
}

export default function Menu({onClose}:Props) {
  return (
    <div className="absolute w-64 h-72 -translate-y-2/3 translate-x-8 bg-black rounded-md p-4 overflow-hidden shadow-white shadow-[0px_0px_5px_1px] text-red-500 flex flex-col">
        <button onClick={onClose}>Close</button>
    </div>
  )
}
