import Menu from '../../components/menus/menus'
import Bar from '../../components/right-bar/bar';
import TopBar from '../../components/TopBar/TopBar';
import { Wrapper, Select, Notification, All, Mentions, Line } from './notifications.styles';
import {useState} from 'react';



export default function Explore() {
  const [noti,setNoti] = useState("all")

  return (
    <div className="background flex flex-row w-screen overflow-y-scroll">

    <div className="flex-none w-2/6 h-screen float-left fixed">
        <Menu/>
    </div>
    
    <div className="flex-none w-2/6 h-screen middle">

      <span className="left-line"/>
      <span className="right-line"/>
      <div className='flex flex-col align-middle'>
        <Wrapper>
          <TopBar text={"Messages"}/>

          <Select>
            <div className="all" onClick={()=>setNoti("all")}>
              all
            </div>
            <div className="mentions" onClick={()=>setNoti("mentions")}>
              mentions
            </div>

          </Select>
            <Line/>
              <Notification>

                {noti === "all" && 
                  <>

                  <Line/>
                  <All>
                    <img src={require("../../components/images/test.jpeg")} alt="PFP"/>
                    New notifications for <div className="user">134</div>
                  </All>
                  <Line/>

                  <Line/>
                  <All>
                    <img src={require("../../components/images/test.jpeg")} alt="PFP"/>
                    New notifications for <div className="user">134</div>
                  </All>
                  <Line/>

                  <Line/>
                  <All>
                    <img src={require("../../components/images/test.jpeg")} alt="PFP"/>
                    New notifications for <div className="user">134</div>
                  </All>
                  <Line/>

                  <Line/>
                  <All>
                    <img src={require("../../components/images/test.jpeg")} alt="PFP"/>
                    New notifications for <div className="user">134</div>
                  </All>
                  <Line/>

                  <Line/>
                  <All>
                    <img src={require("../../components/images/test.jpeg")} alt="PFP"/>
                    New notifications for <div className="user">134</div>
                  </All>
                  <Line/>

                  <Line/>
                  <All>
                    <img src={require("../../components/images/test.jpeg")} alt="PFP"/>
                    New notifications for <div className="user">134</div>
                  </All>
                  <Line/>

                  <Line/>
                  <All>
                    <img src={require("../../components/images/test.jpeg")} alt="PFP"/>
                    New notifications for <div className="user">134</div>
                  </All>
                  <Line/>

                  <Line/>
                  <All>
                    <img src={require("../../components/images/test.jpeg")} alt="PFP"/>
                    New notifications for <div className="user">134</div>
                  </All>
                  <Line/>


                  <Line/>
                  <All>
                    <img src={require("../../components/images/test.jpeg")} alt="PFP"/>
                    New notifications for <div className="user">134</div>
                  </All>
                  <Line/>


                  <Line/>
                  <All>
                    <img src={require("../../components/images/test.jpeg")} alt="PFP"/>
                    New notifications for <div className="user">134</div>
                  </All>
                  <Line/>
                  
                  </>
                  
                  }

                {noti === "mentions" && 
                  <Mentions>
                    <img src={require("../../components/images/kaoru.png")} alt="PFP"/>
                    New notifications for <div className="user">134</div>
                  </Mentions>
                  
                  }

              </Notification>
            <Line/>

        </Wrapper>


      </div>
    </div>
    <div className="flex w-2/6 h-screen flex-col  items-center fixed float-right right">
      <Bar/>
    </div>
  </div>
  )
}
