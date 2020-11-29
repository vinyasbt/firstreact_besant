import React from 'react';
import data from './data';

const str=JSON.stringify(data);
    var a=JSON.parse(str);
    console.log(a);
    class Productdetails extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                items:a
            }
            

        }
        addtocart=()=>{
            let crt = this.state.items;
            if(crt.quantity){
                crt.quantity += 1;
            }else{
                crt.quantity = 1;
            }
            this.setState({items:crt});
        }
        componentDidUpdate(){
            
        }
        componentWillMount(){
            console.log(this.props.match.params.id);
           const fiytem =  a.filter(item=>{
                return item.id == this.props.match.params.id
            })
            console.log("fffffffffffffffff",fiytem)
            this.setState({items : fiytem[0]})

        }
        render(){
            return(<div className="productdetails">
        
            {/* ID:{match.params.id}<br /> */}
           
            <div className="productdetails">
         
        {/* ID:{match.params.id}<br /> */}
        <h1>{this.state.items.name} Cart : {this.state.items.quantity}</h1><br />
        <div className="description">{this.state.items.desc}<br /><br />
       <h1>Discount price:{this.state.items.price}</h1></div><br />
     <img className="detailimg"src={this.state.items.img} /> 
     <button className="btn btn-warning" onClick={()=>{this.addtocart()}}>Add to Cart</button>
    
        
        </div>
   </div>     
        )

    }
}
    
// class Productdetails extends React.Component{
    
//     render()
//     {
//         // var first=data[0];
//         // console.log(first.id);
//         console.log(this.props);
        
//         console.log("inside pd")
//         const Productdetails=({match})=>(
//             <div>
//                 ID: {match.params.id}
//             </div>
//         )
//         return(
            
//             <div>
//                 {
                 
                   
                
//                 data.map((item=><div className="grid">
//                         <img className="product-img" src={item.img}></img>
//                         {item.name}
                        
                
                        
//             </div>))
//     }
//     </div>
           
//         )
//     }
    
// }
export default Productdetails;