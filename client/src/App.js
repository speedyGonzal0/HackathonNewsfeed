import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Navbar from './components/Navbar/Navbar';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';   
import Write from "./pages/write/Write";
import { useState } from 'react';          

function App() {
  const [currentUser, setCurrentUser] = useState('false');

  return (
    <Router>
    <Navbar currentUser={currentUser} curState={setCurrentUser}/>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/posts">
        <Home />
      </Route>
      <Route path="/register">
        {currentUser ? <Home /> : <Register />}
      </Route>
      <Route path="/login">{currentUser ? <Home /> : <Login currentUser={currentUser} curState={setCurrentUser}/>}</Route>
      <Route path="/post/:id">
        <Single />
      </Route>
      <Route path="/write">{currentUser ? <Write /> : <Login currentUser={currentUser} curState={setCurrentUser}/>}</Route>
      <Route path="/settings">
        {currentUser ? <Settings /> : <Login currentUser={currentUser} curState={setCurrentUser}/>}
      </Route>
    </Switch>
  </Router>
);
}


export default App;