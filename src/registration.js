import React from'react'
class Registration extends React.Component
{
    constructor 
    (props){
        super(props)
        this.state={
            name:"",
            password:"",
            enable:false
        }
    }
    datapage()
    {
        alert("same page")
    }
    componentDidMount(){
        this.setState()
    }
    changed(e){
        console.log("dddddddddddddddd", e.target.value, e.target.name);
        let val = e.target.value;
        switch(e.target.name){
            case "name":
                this.setState({name: val})
                break;
            case "password":
                this.setState({password:val})
                break;
        }
        console.log(this.state.name)
        let fields = Object.values(this.state);
        
        let resAry = fields.filter((item, idx)=>{

            console.log("item ", idx, item, item === "")

            return item === "";
        })
        console.log(resAry)

        if(resAry.length ==1){
            this.setState({enable:true});
        }else{
            this.setState({enable:false});
        }
    }
   
    render()
    {
const cl = "enable";
        return(
            <div className="registration">
                <span className="card card-body">
                Name: <input name="name" onChange={(e)=>this.changed(e)} type="name" placeholder="enter your name" className="form-control"/><br />
                Phone NO: <input name="number" type="number" placeholder="enter your number" className="form-control"/><br />
            Email: <input name="email" type="email" placeholder="enter your email" className="form-control"/><br />
            Password :<input name="password" onChange={(e)=>this.changed(e)}  type="password" placeholder="enter your password" className="form-control"/><br />
            <button  className={`btn btn-primary ${this.state.enable?'':cl}`} onClick={()=>{this.datapage()}}>Submit</button><br />
            

            </span>
            </div>
        )
    }
}
export default Registration;