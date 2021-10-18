import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import About from './Pages/About/About';
import Appoinment from './Pages/Appoinment/Appoinment';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Login from './Pages/Login/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Switch>
      <Route exact path='/'>
        <Home></Home>
      </Route>
      <Route path='/home'>
        <Home></Home>
      </Route>
      <Route path='/about'>
        <About></About>
      </Route>
      <Route path='/appointment'>
        <Appoinment></Appoinment>
      </Route>
      <Route path='/login'>
        <Login></Login>
      </Route>
      <Route path='*'>
        <PageNotFound></PageNotFound>
      </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
