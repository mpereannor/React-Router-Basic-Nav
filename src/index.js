import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

ReactDOM.render(
<Router>
    <App />
    {/* <Route exact path='/' component={Home}/>
    <Route path='/about' component={About}/>
    <Route path='/contact' component={Contact}/> */}

    {/* <Link to='/'> Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/contact'>Contact</Link> */}
</Router>, document.getElementById('root'));
