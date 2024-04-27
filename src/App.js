import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
{/* <div className='text-red-700'>helllllllllllllllllllllllllllllllllllllllll</div> */}
      <Navigation/>
      <div>
      <HomePage/>
      </div>
    </div>
  );
}

export default App;
