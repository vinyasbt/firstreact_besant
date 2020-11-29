import React from 'react';
import data from './data';
class Products extends React.Component {
    



    render(){

        
        
        return (
            <div className="productlist">
                {
                    data.map((item=><div className="grid">
                        <img className="product-img" src={item.img}></img>
                        {item.name}
                        <a href={`/products/${item.id}`}>view</a>
                        </div>))
                }

            </div>

        )
    }
}


export default Products;