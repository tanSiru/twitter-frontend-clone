import './styles.css'
import {useState} from 'react';

interface Props{
  onClose:()=>void
}

export default function Options({onClose}:Props) {
  const[isPublic,setIsPublic] = useState(true);
  const[isPrivate,setIsPrivate] = useState(false);

  function makePublic(){
    setIsPrivate(false);
    setIsPublic(true);
    onClose();

  }

  function makePrivate(){
    setIsPrivate(true);
    setIsPublic(false);
    onClose();
  }


  const width = "50";
  const height = "50";
  return (
    <div className="absolute translate-y-10 translate-x-8 z-auto h-40 w-72 bg-black rounded-2xl p-4 overflow-hidden shadow-white shadow-[0px_0px_5px_1px] flex flex-col">
        <div className="text-white">
          Choose an audience
        </div>

        <div className="choices" onClick={makePublic}>
        
          <img src={require('../../images/earth.png')} alt="EVERYONE" width={width} height={height} className="pl-4"/>
            <div className="pl-4">
              Everyone
            </div>
            {isPublic && <img src={require('../../images/tick.png')} alt="CHECK" width={width} height={height} className="pl-4"/>}
        </div>

        <div className="choices" onClick={makePrivate}>
          <img src={require('../../images/profile.png')} alt="PROFILE" width={width} height={height} className="pl-4"/>
            <div className="pl-4">
              Twitter Circle
            </div>
            {isPrivate && <img src={require('../../images/tick.png')} alt="CHECK" width={width} height={height} className="pl-4"/>}
        </div>
    </div>
  )
}


// ../../images/eath.png
// ../images/tick.png