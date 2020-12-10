import React from 'react'
import './App.css';
import TodoList from './Components/TodoList'
import DoneListContainer from './Containers/DoneListContainer';
import NotFound from './Components/NotFound'
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Navigation from './Components/Navigation';
import { Layout } from 'antd';
import ManageLabelContainer from './Containers/ManageLabelContainer';

function App() {
  const { Header, Sider, Content } = Layout;

  return (
    <React.Fragment>
      <Layout style={{minHeight:'100vh'}}>
      <BrowserRouter>
        <Header className='App-header'>
          Hello React!
        </Header>
        <Layout>
          <Sider style={{background: '#001529'}}>
            <Navigation />
          </Sider>
          <Content>
            <Switch>
              <Route path='/done' component={DoneListContainer}></Route>
              <Route path='/list' component={TodoList}></Route>
              <Route path='/labels' component={ManageLabelContainer}></Route>
              <Route path='/' component={NotFound}></Route>
            </Switch>
          </Content>
        </Layout>
      </BrowserRouter>
      </Layout>
    </React.Fragment>
  );
}

export default App;
