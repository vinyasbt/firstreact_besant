
import React from'react'

class Login extends React.Component
{
    constructor(props){
        super(props)
        this.state={
            fname:'',
            timeval: new Date(),
            email:'',
            password:'',
            
            
        }

    }
    componentDidMount()
    {
        this.state.timeval=setInterval(this.tick(),1000)
    }
    inputHandler(event){
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({[event.target.name]: event.target.value})
        console.log(this.state);
    }


    tick()
    {
        this.setState({timeval:new Date()});
    }

    datapage()
    {
        if(this.state.email=="test@test.com" && (this.state.password)=="qwerty")
        {
            sessionStorage.setItem("logged",true)
            this.props.history.push(`employee`)
        }
    }
    componentWillMount()
    {
        if(sessionStorage.getItem("logged")==='true')
        {
            
            this.props.history.push(`employee`)
        }

    }
    registrationpage()
    {
        
    }
    render()
    {

        return(
            <div className="login">--{this.props.name}--{this.props.age}
            {this.state.timeval.toLocaleString}
                <span className="card card-body">
            Email: <input type="email" name="email"placeholder="enter your email" className="form-control" onChange={(event)=>this.inputHandler(event)}/><br />
            Password :<input type="password" name="password"placeholder="enter your password" className="form-control" onChange={(event)=>this.inputHandler(event)}/><br />
            <button className="btn btn-primary"onClick={()=>{this.datapage()}}>Submit</button><br />
            <button className="btn btn-secondary"onClick={()=>{this.registrationpage()}}>Sign in</button><br />
<button onClick={()=>window.location.href="register"}>Register</button>
            </span>
            
            </div>
        )
    }
}
export default Login;