
import './App.css';
import Profile from './components/Profile';
import Login from './components/Login';
import ChangeColor from './components/ChangeColor';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
     <Profile/>
     <br/>
     <Login/>
     <br/>
     <br/>
     <ChangeColor/>
     <br/>
     <Counter/>
    </div>
  );
}

export default App;
