import React from 'react'
import './App.css';
import TodoList from './Components/TodoList'
import DoneListContainer from './Containers/DoneListContainer';
import NotFound from './Components/NotFound'
import { BrowserRouter, Link, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <header className="App-header">
        Hello React!
      </header>
      <BrowserRouter>
        <ul>
          <li>
            <Link to='/list'>go to list page</Link>
          </li>
          <li>
            <Link to='/done'>go to done page</Link>
          </li>
        </ul>
        <Switch>
          <Route path='/done' component={DoneListContainer}></Route>
          <Route path='/list' component={TodoList}></Route>
          <Route path='/' component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
