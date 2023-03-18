import Menu from '../../components/menus/menus'
import Profile from '../../components/Profile/Profile';
import Bar from '../../components/right-bar/bar';
import TopBar from '../../components/TopBar/TopBar';



export default function Explore() {

  return (
    <div className="background flex flex-row w-screen overflow-y-scroll">

      <div className="flex-none w-2/6 h-screen float-left fixed">
          <Menu/>
      </div>
      
      <div className="flex-none w-2/6 h-screen middle">

        <span className="left-line"/>
        <span className="right-line"/>
        <div className='flex flex-col align-middle h-full'>
          <TopBar text={"Phos"}/> 
          <Profile/>

        </div>
      </div>
      <div className="flex w-2/6 h-screen flex-col  items-center fixed float-right right">
        <Bar/>
      </div>
  </div>
  )
}
