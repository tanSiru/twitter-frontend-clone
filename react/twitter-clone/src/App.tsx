import './App.css';
import Menu from '../src/components/menus/menus'

function App() {
  return (
    <div className="background flex flex-row w-screen">
      <div className="flex-none w-2/6 h-screen">
          <Menu/>
      </div>
      <div className="flex-none w-2/6 h-screen">
        <span className="left-line"/>
        <span className="right-line"/>
      </div>
      <div className="flex-none w-2/6 h-screen">
      </div>
    </div>
  );
}

export default App;
