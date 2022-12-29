import './menus.css';

export default function menus() {
    const width = "30";
    const height = "30";
    return (

    <div className="flex flex-col">

        <div className="text-white mb-5 ml-28">
            <button className="flex items-center">
                <img src={require("./images/blue_twitter.png")} alt="Twitter" width="75" height="75" />
            </button>
        </div>


        <div className="text-white my-3 ml-28">
            <div className="flex flex-row" onClick={()=>console.log("home")}>
                <button className="flex items-center">
                    <img src={require("./images/home.png")} alt="Home" width={width} height={height}/>
                    <div className="ml-4 order-1">Home</div>
                </button>
                
            </div>
        </div>


        <div className="text-white my-3 ml-28">
            <div className="flex flex-row">
                <button className="flex items-center" onClick={()=>console.log("explore")}>
                    <img src={require("./images/hashtag.png")} alt="Explore" width={width} height={height}/>
                    <div className="ml-4 order-1">Explore</div>
                </button>
            </div>
        </div>

        
        <div className="text-white my-3 ml-28">
                <div className="flex flex-row">
                    <button onClick={()=>console.log("bell")} className="flex items-center">
                        <img src={require("./images/bell.png")} alt="Notifications" width={width} height={height}/>
                        <div className="ml-4 order-1">Notifications</div>
                    </button>
                </div>
        </div>


        <div className="text-white my-3 ml-28">
            <div className="flex flex-row">
                <button className="flex items-center" onClick={()=>console.log("messages")}>
                    <img src={require("./images/message.png")} alt="Messages" width={width} height={height}/>
                    <div className="ml-4 order-1">Messages</div>
                </button>
            </div>
        </div>


        <div className="text-white my-3 ml-28">
            <div className="flex flex-row">
                <button className="flex items-center" onClick={()=>console.log("Bookmarks")}>
                    <img src={require("./images/bookmarks.png")} alt="Bookmarks" width={width} height={height}/>
                    <div className="ml-4 order-1">Bookmarks</div>
                </button>
            </div>
            
        </div>


        <div className="text-white my-3 ml-28">
            <div className="flex flex-row">
                <button className="flex items-center" onClick={()=>console.log("Profile")}>
                    <img src={require("./images/profile.png")} alt="Profile" width={width} height={height}/>
                    <div className="ml-4 order-1">Profile</div>
                </button>
            </div>
        </div>


        <div className="text-white my-3 ml-28">
            <div className="flex flex-row">
                <button className="flex items-center" onClick={()=>console.log("More")}>
                    <img src={require("./images/dots.png")} alt="More" width={width} height={height}/>
                    <div className="ml-4 order-1">More</div>
                </button>
                
            </div>
        </div>
    </div>
    )
}
