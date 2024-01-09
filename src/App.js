import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main'

function App() {
  return (
    <div className="flex max-w-[2400px] w-full mx-auto">
      <div className='basis-1/5'>
        <Sidebar />
      </div>
      <div className='basis-4/5'>
        <Main />
      </div>
    </div>
  );
}

export default App;
