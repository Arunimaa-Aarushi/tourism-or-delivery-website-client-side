
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './components/Context/AuthProvider';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Booking from './components/Booking/Booking';
import MyOrder from './components/MyOrder/MyOrder';



function App() {
  return (
    <div className="App">

<AuthProvider>
    <BrowserRouter>
    <Switch>
      <Route  exact path="/">
         <Home></Home>
      </Route>
      <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/about">
            <About></About>
          </PrivateRoute>
          <PrivateRoute path="/contact">
            <Contact></Contact>
          </PrivateRoute>
          <PrivateRoute path="/myOrder">
            <MyOrder></MyOrder>
          </PrivateRoute>
          <PrivateRoute path="/booking/:id">
            <Booking></Booking>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
    </Switch>
    </BrowserRouter>
    </AuthProvider>

    </div>
  );
}

export default App;
