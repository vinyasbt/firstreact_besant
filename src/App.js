import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import logo from './logo.svg';
import './App.css';
//import Link from './Link'
import Login from './Login'
import Registration from './registration'
import Products from './Products';
import productdetails from'./Productdetails';
import pagenotfound from'./pagenotfound';
import Employee from'./Employee';
import Loggedout from './loggedout'

import 'bootstrap/dist/css/bootstrap.min.css';




class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      logged:false,
      name:'test',
      age:10
    }
    this.getChildData = this.getChildData.bind(this)
  }

componentDidMount(){
  this.setState();
}
componentDidUpdate(){

}

getChildData(a)
{
  if(a){

   this.setState({logged:a});
  }
}

  render(){
    const logged=sessionStorage.getItem("logged");
  return (
    <div className="App">
      <Router>
        <div className="header">
          { this.state.logged != 'true' && <Link className="navbar-toggler"to="/">Login</Link>}
          
      <Link className="navbar-toggler" to="/register">Register</Link>
      <Link className="navbar-toggler" to="/products">Products</Link>
      <Link className="navbar-toggler" to="/employee">Employee</Link>
      { this.state.logged == 'true' && <Link className="navbar-toggler" to="/logout">Logout</Link>}
      </div>
       {/* <Link to="/products/:id">productdetails</Link>  */}
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/register" component={Registration}></Route>
        <Route exact path="/products" component={Products}></Route>
        <Route  exact path="/products/:id" component={productdetails}></Route>
        <Route   path="/employee" component={Employee}></Route>
        <Route path="/logout" component={Loggedout}></Route>
        <Route  path="*" component={pagenotfound}></Route>
      </Switch>

     {/* {if()} */}

     {/* !this.state.logged &&  <Login getdata={this.getChildData} name={this.state.name} age={this.state.age}></Login>*/}
    {/*this.state.logged && <Registration></Registration>*/}

      {/* <Registration></Registration> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link></Link>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React first project
        </a>
      </header> */}
      </Router>
    </div>
  )
    };
}

export default App;
