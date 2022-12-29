import './menus.css';

export default function menus() {
    return (
    <div className="flex flex-col">

        <div className="text-white mb-5 ml-28">
            <img src={require("./images/blue_twitter.png")} alt="change" width="50" height="50"/>
        </div>


        <div className="text-white my-3 ml-28">
            <div className="flex flex-row">
                <img src={require("./images/home.png")} alt="change" width="25" height="25"/>
                Home
            </div>
            
        </div>


        <div className="text-white my-3 ml-28">
            <div className="flex flex-row">
                <img src={require("./images/hashtag.png")} alt="change" width="25" height="25"/>
                Explore
            </div>
            
        </div>

        
        <div className="text-white my-3 ml-28">
            <div className="flex flex-row">
                <img src={require("./images/bell.png")} alt="change" width="25" height="25"/>
                Notifications
            </div>
        </div>


        <div className="text-white my-3 ml-28">
            <div className="flex flex-row">
                <img src={require("./images/message.png")} alt="change" width="25" height="25"/>
                Messages
            </div>
            
        </div>


        <div className="text-white my-3 ml-28">
            <div className="flex flex-row">
                <img src={require("./images/bookmark.png")} alt="change" width="25" height="25"/>
                Bookmarks
            </div>
            
        </div>


        <div className="text-white my-3 ml-28">
            <div className="flex flex-row">
            <img src={require("./images/profile.png")} alt="change" width="25" height="25"/>
            Profile
            </div>
            
        </div>


        <div className="text-white my-3 ml-28">
            <div className="flex flex-row">
            <img src={require("./images/dots.png")} alt="change" width="25" height="25"/>
            More
            </div>
            
        </div>
    </div>
    )
}
