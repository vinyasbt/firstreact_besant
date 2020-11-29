import React from 'react'


//function Link(){
 
   
//     return(
//         <div>
//             Name:<input type="text" />
//  <button onClick={()=>getData()}>click me</button>

//         </div>
//     )
// }

class Link extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'ravi',
            age:887
        }
    }



    getData()
    {
alert(0)
console.log(100)
    }
    render(){
        const a=100;
        return (<div>
            Name:<input type="text" value={this.state.name}  />
{a}
            {this.state.name}

            <button onClick={()=>this.getData()}>click me</button>
        </div>)
    }

}
export default Link;