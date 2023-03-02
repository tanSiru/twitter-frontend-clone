import Menu from '../../components/menus/menus'
import Inbox from '../../components/Inbox/Inbox'
// import Bar from '../../components/right-bar/bar';
import TopBar from '../../components/TopBar/TopBar';
import { Wrapper } from './messages.style';
import  Message  from '../../components/Message/Message';


export default function Explore() {

  return (
    <div className="background flex flex-row w-screen overflow-y-scroll">

    <div className="flex-none w-2/6 h-screen float-left fixed">
        <Menu/>
    </div>
    
    <div className="flex-none w-1/4 h-screen middle">

      <span className="left-line"/>
      <span className="right-line"/>
      <div className='flex flex-col align-middle'>
        <Wrapper>
          <TopBar text={"Messages"}/>
          <Inbox user="temp" recent="temp" handler="temp"/>
        </Wrapper>

      </div>
    </div>

    <div className="flex w-full h-screen flex-col  items-center">
        <Message/>
      </div>

  </div>
  )
}
