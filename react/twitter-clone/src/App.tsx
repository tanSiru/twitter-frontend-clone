import './App.css';
import Menu from '../src/components/menus/menus'
import TweetBox from './components/TweetBox/TweetBox';
import HomeBar from '../src/components/HomeBar/HomeBar';
import HomeTweetBox from './components/HomeTweetBox/HomeTweetBox';
import Bar from './components/right-bar/bar'

function App() {
  return (
    <div className="background flex flex-row w-screen">

      <div className="flex-none w-2/6 h-screen">
          <Menu/>
      </div>
      
      <div className="flex-none w-2/6 h-screen">

        <span className="left-line"/>
        <span className="right-line"/>
        <div className='flex flex-col'>

          <HomeBar/>
          <HomeTweetBox/>
          <TweetBox/>

        </div>
      </div>
      <div className="flex-none w-2/6 h-screen">
      <Bar/>
      </div>
    </div>
  );
}

export default App;
