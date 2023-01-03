import './styles.css'

interface Props{
  onClose:()=>void
}

export default function Options({onClose}:Props) {
  return (
    <div className="absolute  translate-y-10 translate-x-8 z-auto h-40 w-72 bg-black rounded-2xl p-4 overflow-hidden shadow-white shadow-[0px_0px_5px_1px] flex flex-col">
        <div className="text-white">
          Choose an audience
        </div>
        <div className="text-white bg-blue-500 h-1/2">
          Everyone
        </div>
        <div className="text-white w-full h-1/2 bg-red-500">
          Twitter Circle
        </div>
    </div>
  )
}

