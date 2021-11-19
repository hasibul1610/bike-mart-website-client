import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './pages/Shared/Navigation/Navigation';
import Home from './pages/Home/Home/Home';
import AllProducts from './pages/AllProducts/AllProducts';
import Login from './pages/Home/Login/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Register from './pages/Home/Login/Register/Register';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard/AdminDashboard';
import Booking from './pages/Booking/Booking';
import UserDashboard from './pages/UserDashboard/UserDashboard/UserDashboard';
import PrivateRoute from './pages/Home/Login/PrivateRoute/PrivateRoute';
import AdminRoute from './pages/Home/Login/AdminRoute/AdminRoute';



function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/allProducts'>
            <AllProducts />
          </Route>
          <PrivateRoute exact path="/booking/:singleProductId">
            <Booking></Booking>
          </PrivateRoute>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <AdminRoute path='/adminDashboard'>
            <AdminDashboard></AdminDashboard>
          </AdminRoute>
          <PrivateRoute path='/userDashboard'>
            <UserDashboard></UserDashboard>
          </PrivateRoute>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
