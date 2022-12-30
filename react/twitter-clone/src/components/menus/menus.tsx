import './menus.css';
import {useState} from 'react';
import Dropdown from '../Dropdown/Dropdown';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Props{
    isOpen:false
    setIsopen:()=>void
}

const Menus = () => {
    const width = "30";
    const height = "30";

    const [isOpen,setIsOpen] = useState(false);
    return (

    <div className="flex flex-col">
        <div className="text-white mb-5 ml-28 w-44">
            <button className="flex items-center">
                <img src={require("./images/blue_twitter.png")} alt="Twitter" width="75" height="75" />
            </button>
        </div>


        <div className="text-white my-3 ml-28 w-44 ">
            <div className="flex flex-row ">
                <button className="flex items-center hover:bg-grey-300 hover:opacity-25 rounded-md" onClick={()=>console.log("home")}>
                    <img src={require("./images/home.png")} alt="Home" width={width} height={height}/>
                    <div className="ml-4 order-1">Home</div>
                </button>
                
            </div>
        </div>


        <div className="text-white my-3 ml-28 w-44">
            <div className="flex flex-row">
                <button className="flex items-center hover:bg-grey-300 hover:opacity-25 rounded-md" onClick={()=>console.log("explore")}>
                    <img src={require("./images/hashtag.png")} alt="Explore" width={width} height={height}/>
                    <div className="ml-4 order-1">Explore</div>
                </button>
            </div>
        </div>

        
        <div className="text-white my-3 ml-28 w-44">
                <div className="flex flex-row">
                    <button onClick={()=>console.log("bell")} className="flex items-center hover:bg-grey-300 hover:opacity-25 rounded-md">
                        <img src={require("./images/bell.png")} alt="Notifications" width={width} height={height}/>
                        <div className="ml-4 order-1">Notifications</div>
                    </button>
                </div>
        </div>


        <div className="text-white my-3 ml-28 w-44">
            <div className="flex flex-row">
                <button className="flex items-center hover:bg-grey-300 hover:opacity-25 rounded-md" onClick={()=>console.log("messages")}>
                    <img src={require("./images/message.png")} alt="Messages" width={width} height={height}/>
                    <div className="ml-4 order-1">Messages</div>
                </button>
            </div>
        </div>


        <div className="text-white my-3 ml-28 w-44">
            <div className="flex flex-row">
                <button className="flex items-center hover:bg-grey-300 hover:opacity-25 rounded-md" onClick={()=>console.log("Bookmarks")}>
                    <img src={require("./images/bookmarks.png")} alt="Bookmarks" width={width} height={height}/>
                    <div className="ml-4 order-1">Bookmarks</div>
                </button>
            </div>
            
        </div>


        <div className="text-white my-3 ml-28 w-44">
            <div className="flex flex-row">
                <button className="flex items-center hover:bg-grey-300 hover:opacity-25 rounded-md" onClick={()=>console.log("Profile")}>
                    <img src={require("./images/profile.png")} alt="Profile" width={width} height={height}/>
                    <div className="ml-4 order-1">Profile</div>
                </button>
            </div>
        </div>

        <div className="text-white my-3 ml-28 w-44" >
            <div className="flex flex-row">
                <button className="flex items-center hover:bg-grey-300 hover:opacity-25 rounded-md" onClick={()=>setIsOpen(!isOpen)}>
                    <img src={require("./images/dots.png")} alt="More" width={width} height={height}/>
                    <div className="ml-4 order-1">More</div>
                </button>
                {isOpen && <Dropdown onClose={()=>setIsOpen(false)}/>}
            </div>
        </div>


        <div className="flex text-white my-3 ml-28 w-52 h-14 bg-blue-400 rounded-full font-bold items-center justify-center hover:opacity-75">
                Tweet
        </div>

        <div className="flex text-white my-3 ml-28 w-44 h-14 bg-blue-400 rounded-full font-bold items-center justify-center absolute bottom-0 hover:opacity-75 flex-row">
                <img src={require("./images/test.jpeg")} alt="monogatari" width="50" height="50" className="circle-crop"/>
                Profile
                {/* <div className="absolute top-0 right-0 h-4 w-4 my-1 border-2 border-white rounded-full bg-red-400 z-2"></div> */}
        </div>

    </div>
    )
}


export default Menus;