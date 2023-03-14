import Bookmark from '../../components/Bookmark/Bookmark';
import Menu from '../../components/menus/menus'
import TopBar from '../../components/TopBar/TopBar';


export default function Explore() {

  return (
    <div className="background flex flex-row w-screen overflow-y-scroll">

    <div className="flex-none w-2/6 h-screen float-left fixed">
        <Menu/>
    </div>
    
    <div className="flex-none w-1/3 h-screen middle">

      <span className="left-line"/>
      <span className="right-line"/>
      <div className='flex flex-col align-middle'>
          <TopBar text={"Bookmark"}/>
      <Bookmark></Bookmark>

      </div>
    </div>

    <div className="flex w-full h-screen flex-col  items-center">
      </div>

  </div>
  )
}
