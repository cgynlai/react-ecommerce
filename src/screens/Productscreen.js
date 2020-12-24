import React, { Component } from 'react';
import convertcurr from '../convertcurr';
import data from '../product.json';

export default class Productscreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const product = data.products.find(x => x.name == this.props.match.params.id);
        if (!product) {
            return <div> Product not found</div>;
        }
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <img src={product.image} alt={product.name}></img>
                        image here
                        </div>
                        <div className="col-sm-6">
                            <div className="row">
                                <div col-sm-6>
                                    <h1>{product.name}</h1>
                                    <div style={{ height: "25rem", fontSize: "1.5rem" }}>
                                        <div>{product.description}</div>
                                        <br></br>
                                        <div>{product.weight}</div>
                                    </div>
                                </div>
                                <div col-sm-6>action hre
                         <div>{convertcurr(product.price)}</div>
                                    <button onClick={() => this.props.addToCart(product)} className="btn btn-info">add to cart</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}
