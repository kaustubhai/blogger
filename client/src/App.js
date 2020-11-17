import './App.css';
import Navbar from './components/layouts/Navbar';
import  { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';
import BlogState from './context/Blogs/BlogState';
import AuthState from './context/auth/AuthState';
import setAuthToken from './context/utils/setAuthToken'
import BlogSingle from './components/pages/BlogSingle';
import AlertPop from './components/layouts/AlertPop';
import AddBlog from './components/pages/AddBlog';
import userDashboard from './components/pages/userDashboard';

if (localStorage.getItem('token'))
  setAuthToken(localStorage.getItem('token'))

function App() {  
  return (
    <div className="App">
      <AuthState>
        <BlogState>
          <Navbar />
          <AlertPop/>
          <Router>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/blog/read-one/:id" component={BlogSingle} />
            <Route exact path="/blog/add-new" component={AddBlog} />
            <Route exact path="/user/dashboard" component={userDashboard} />
          </Router>
        </BlogState>
      </AuthState>
    </div>
  );
}

export default App;
