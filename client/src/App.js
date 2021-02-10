import './App.css';
import Navbar from './components/layouts/Navbar';
import  { Route, Switch } from 'react-router-dom'
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';
import BlogState from './context/Blogs/BlogState';
import AuthState from './context/auth/AuthState';
import setAuthToken from './context/utils/setAuthToken'
import BlogSingle from './components/pages/BlogSingle';
import AlertPop from './components/layouts/AlertPop';
import AddBlog from './components/pages/AddBlog';
import UserDashboard from './components/pages/userDashboard';
import UpdateBlog from './components/pages/UpdateBlog';
import Footer from './components/layouts/Footer';
import PrivateRoute from './components/Routing/PrivateRoute'
import ComingSoon from './components/pages/ComingSoon';
import NotFound from './components/pages/NotFound';

if (localStorage.getItem('token'))
  setAuthToken(localStorage.getItem('token'))

function App() {  
  return (
    <div className="App">
      <AuthState>
        <BlogState>
          <Navbar />
          <AlertPop/>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/blog/read-one/:id" component={BlogSingle} />
            <Route exact path="/coming-soon" component={ComingSoon} />
            <PrivateRoute exact path="/blog/add-new" component={AddBlog} />
            <PrivateRoute exact path="/blog/update-one/:id" component={UpdateBlog} />
            <PrivateRoute exact path="/user/dashboard" component={UserDashboard} />
            <Route component={NotFound} />
          </Switch>
          <Footer/>
        </BlogState>
      </AuthState>
    </div>
  );
}

export default App;
