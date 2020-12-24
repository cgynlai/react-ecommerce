import React, { Component } from 'react'
import convertcurr from '../convertcurr'

export default class Products extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    <div className="container">
                    <div className="row">
                    {this.props.products.map( (product) => (
                        <div className="col-sm-3">
                        <li key={product.name}>
                            <div className="product">
                            <a href={"#" + product.name}>
                                   <img src={product.image} alt="product.name"></img>
                                   <p>{product.name}</p>
                                </a>
                                <div className="product-price">
                                    <div>{convertcurr(product.price)}</div>
                                    <button onClick={()=>this.props.addToCart(product)} className="button primary">add to cart</button>
                                </div>
                            </div>
                        </li>
                        </div>
                    ))

                    }
                    </div>
                    </div>
                </ul>
            </div>
        )
    }
}
