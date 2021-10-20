import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Appoinment from './Pages/Appoinment/Appoinment';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Login from './Pages/Login/Login';
import Footer from './Pages/Footer/Footer';
import SingleServiceDetail from './Pages/singleServiceDetail/SingleServiceDetail';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Register from './Pages/Register/Register ';
function App() {
  return (
    <div className="App">
      <AuthProvider>
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
      <PrivateRoute path='/appointment'>
        <Appoinment></Appoinment>
      </PrivateRoute>
      <Route path='/login'>
        <Login></Login>
      </Route>
      <Route path='/register'>
        <Register></Register>
      </Route>
      <PrivateRoute path='/services/:serviceId'>
        <SingleServiceDetail></SingleServiceDetail>
      </PrivateRoute>
      <Route path='*'>
        <PageNotFound></PageNotFound>
      </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
