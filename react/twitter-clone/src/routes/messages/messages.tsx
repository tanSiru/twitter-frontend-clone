import Menu from '../../components/menus/menus'
import MessageUser from '../../components/messageUser/messageUser';
import Bar from '../../components/right-bar/bar';
import TopBar from '../../components/TopBar/TopBar';
import { Wrapper } from './messages.style';


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
          <MessageUser user="temp" recent="temp" handler="temp"/>

        </Wrapper>

      </div>
    </div>

  </div>
  )
}
