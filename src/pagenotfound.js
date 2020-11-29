import React from 'react';
class pagenotfound extends React.Component{
render(){
return(<div className="jumbotron">
  <h1 className="display-3">Page not Found</h1>
  <p className="lead">The Url you have entered is wrong</p>
  
  <p>Please go back to home page</p>
  <p className = "lead">
  <a className="btn btn-primary btn-lg" href="/" role="button">back to HOME</a>
  </p>
</div>)}}
export default pagenotfound;


