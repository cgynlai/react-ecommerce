import React, { Component } from 'react';
import convertcurr from '../convertcurr';
import Fade from 'react-reveal/Fade';

export default class Products extends Component {
    render() {
        return (
            <div>
                 <Fade bottom cascade> 
                  <ul> 
                    <div className="container-fluid">
                    <div className="row">
                    {this.props.products.map( (product) => (
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
}
