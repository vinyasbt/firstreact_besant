import React from 'react';
export default class Employee extends React.Component 
{
constructor(props){
    super(props);
    this.state={
        employees:[],
        filteredemployees:[],
        name:'',
        age: null,
        salary:null,
        msg:'',
        error:{
            name:'',
            age:'',
            salary:''
        }
    }

    
}
componentWillMount(){
    fetch(`http://dummy.restapiexample.com/api/v1/employees`)
    .then(res=>res.json())
    .then(res=>{
        console.log("1111111111111111111",res)
        if(res.status=="success")
        {
        this.setState({employees:res.data,filteredemployees:res.data})
        }
    })

}

async componentDidMount(){
    const response = await fetch(`http://dummy.restapiexample.com/api/v1/employees`)
    console.log(response)
    const result = await response.json()
    console.log("aaaaaaaaaaaaaaaaaaaa",result.data)
}

inputHandler(event){
    console.log(event.target.name)
    console.log(event.target.value)
    
    const { target: { name, value } } = event

    switch(name){
        case 'name':

            if(value.length < 5){
                this.setState({error:{[name]:'Name must be greater than 5 letters'}})
            }else{
                this.setState({error:{[name]:''}})
            }
            break;
        case 'age':
            if(value > 21 && value < 55){
                this.setState({error:{[name]:'Age must be greater than 21 and less than 55'}})
            }
            break;
        case 'salary':
            break;
    }
    this.setState({[name]: value})
    console.log(this.state)
}

submitForm(event){
    
    event.preventDefault();
    fetch('http://dummy.restapiexample.com/api/v1/create',{method: 'post', body:JSON.stringify(this.state)})
    .then(res=>res.json())
    .then(response=>{

        if(response.status == 'success'){
            this.setState({msg:'Employee created successfully'})
        }else{
            this.setState({msg:'Employee not created successfully'})

        }
        
    })
    return false;
}
searchhandler(event)
{
    const searchtext=event.target.value;
    const filtereddata=this.state.employees.filter(item =>{
        return item.employee_name.indexOf(searchtext)>=0
    })
    this.setState({filteredemployees:filtereddata})
    
}
render()
{
    return(
        <div>
            <div>
                New Data:
                <div> 
                    <form onSubmit={(event)=>this.submitForm(event)} > 
                        Name:<input type="text" name="name" onChange={(event)=>this.inputHandler(event)} ></input><br />
                        <span className="red">{this.state.error.name}</span>
                        <br></br>Age:<input type="number" name="age"  onChange={(event)=>this.inputHandler(event)} ></input>  <br />
                        Salery:<input type="number" name="salary"  onChange={(event)=>this.inputHandler(event)}></input>  
                        <button >Submit</button>   <br/>
                        {this.state.msg} 
                    </form>
                </div>
            </div>
            Search:<input type="text" name="search" onChange={(event)=>this.searchhandler(event)}></input>
            {
                this.state.filteredemployees.map((emp, idx)=>(
                    <div key={idx}>{emp.employee_name}</div>
    ))
            }

        </div>
    )
}
}
