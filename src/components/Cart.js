import React, { Component } from 'react';
import convertcurr from '../convertcurr';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

export default class Cart extends Component {
    render() {
        const {cartItems} = this.props;
        return (
            <div>
            <div>
                {cartItems.length===0? <div className="cart cart-header">Cart is empty</div>:<div className="cart cart-header">You have {cartItems.length} items in cart.</div>}
            </div>
            <div className="cart">
                <Fade left cascade>
                <ul className="cart-items">
                    {cartItems.map(item=>(
                        <li key={item.name}>
                            <div>
                                <img src={item.image} alt={item.name}></img>
                            </div>
                            <div>
                                <div>{item.name}</div>
                                <div className="">
                                    {convertcurr(item.price)}  x {"  "}{item.count}  
                                </div>
                            </div>
                            <div className="right" >
                                <button className="removebtn" onClick={()=>this.props.removeFromCart(item)}>remove </button>
                            </div>
                           

                        </li>
                    ))}
                </ul>
                </Fade>
            </div>
            {cartItems.length!==0 && (
                <div className="cart">
                <div className="total">
                    Total :{" "}
                    {convertcurr(cartItems.reduce((acc,curr)=>acc + curr.price*curr.count,0))}
                </div>
                <Link to="/order">
                <button className="button primary">Proceed</button>
                </Link>
            </div>
            ) }
            
            </div>
            

        );
    }
}
