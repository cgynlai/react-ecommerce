import React from 'react';
import convertcurr from '../convertcurr';
import data from '../product.json';
import Fade from 'react-reveal/Fade';

export default function categoryscreen(props) {
    
    const cat_product = data.products.filter(x=>x.cat_id == props.match.params.id);
   
    if (!cat_product){
        return <div>No Product Found in this Category.</div>
    }
    return (
        <div>
            <Fade bottom cascade> 
                  <ul> 
                    <div className="container-fluid">
                    <div className="row">
                    {cat_product.map( (product) => (
                        <div className="card col-6 col-sm-4">
                       <li key={product.name}>
                      
                       <a href={`/product/${product.name}`}>
                       <img className="card-img-top list_img img-responsive" src={product.image} alt={product.name}></img>
                       </a>
                       <h3 className="card-header text-center">{product.name}</h3>
                       <div className="card-footer text-center">
                       <div>{convertcurr(product.price)}</div>
                       <button onClick={()=>this.props.addToCart(product)} className="btn btn-info">add to cart</button>

                       </div>
                       </li> 
                       </div>     
                    )
                    )
                }   
              
                    </div>
                    </div>
                </ul>
                </Fade>
        </div>
    )
}
