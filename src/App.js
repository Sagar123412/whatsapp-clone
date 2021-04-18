import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user? (
        <Login />
      ):(
        <div className="app-body">
      <Router>
        <Sidebar />
      <Switch>
        <Route path="/rooms/:roomId">
          <Chat />
        </Route>

        <Route path="/">
          <h1>Home Screen</h1>
          <Chat />
          <Sidebar />
        </Route>
      </Switch>
      </Router>
      </div>
      )}
      </div>
      
  );
}

export default App;
