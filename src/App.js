import logo from './logo.svg';
import './App.css';
import MyApp from './MyApp'
import MyApp2 from './MyApp2'
import MyApp3 from './MyApp3'
import TopNav from './components/TopNav'
import TopNav2 from './components/TopNav2'
import {HashRouter, Switch, Route} from "react-router-dom";


function App() {
  return (
    <HashRouter>
      <TopNav2></TopNav2>
      <Switch>
          <Route path="/page1" exact>
            <div>This is page 1</div>
          </Route>
          <Route path="/page2" exact>
            <div>This is page 2</div>
          </Route>
          <Route path="/" exact>
            <div>This is when nothing is specified</div>
          </Route>
          <Route path="*" exact>
            <div>This is a catch all path for non-existent link</div>
          </Route>
        </Switch>                  
      
    </HashRouter>
  );
}

export default App;
