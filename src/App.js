import './App.css';
import Coin from './features/Coin/Coin';
import Counter from './features/Counter/Counter';
import Users from './features/Users/Users';

function App() {
  return (
    <div className="App">
      <h1>Learning React and Redux</h1>
      <Counter />
      <h1>Value Comming From Coin Component</h1>
      <Coin />
      <h1>Fetch Users</h1>
      <Users />
    </div>
  );
}

export default App;
