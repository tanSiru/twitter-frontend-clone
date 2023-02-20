import Menu from '../../components/menus/menus'
import Bar from '../../components/right-bar/bar';
import TopBar from '../../components/TopBar/TopBar';
import { Wrapper, Select } from './notifications.styles';



export default function explore() {
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

            <div className="all">
              all
            </div>

            <div className="mentions">
              mentions
            </div>

          </Select>

        </Wrapper>


      </div>
    </div>
    <div className="flex w-2/6 h-screen flex-col  items-center fixed float-right right">
      <Bar/>
    </div>
  </div>
  )
}
