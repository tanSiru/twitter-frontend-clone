import './App.css';
import Menu from '../src/components/menus/menus'
import HomeBar from '../src/components/HomeBar/HomeBar';
import Bar from './components/right-bar/bar';
import Tweet from './components/Tweets/tweets'

function App() {
  return (
    <div className="background flex flex-row w-screen overflow-y-scroll">

      <div className="flex-none w-2/6 h-screen float-left fixed">
          <Menu/>
      </div>
      
      <div className="flex-none w-2/6 h-screen middle">

        <span className="left-line"/>
        <span className="right-line"/>
        <div className='flex flex-col'>

          <HomeBar/>
          <Tweet/>

        </div>
      </div>
      <div className="flex w-2/6 h-screen flex-col  items-center fixed float-right right">
        <Bar/>
      </div>
    </div>
  );
}

export default App;
