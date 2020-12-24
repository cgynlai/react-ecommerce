import React, { Component } from 'react'
import convertcurr from '../convertcurr'

export default class Orderlist extends Component {
    render() {
       const {cartItems} = this.props;
       var sn=0;
        return (
            <div>
                <div className="orderlist">
                <div className="container">
                    <div><h2>Order Confirmation</h2></div>
                    <br></br>
                    
                    <div className="row ordercolumn">
                    <div className="col-10 mx-auto col-lg-4">
                        <p className="text-uppercase">S/N</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-4">
                        <p className="text-uppercase">products</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-4">
                        <p className="text-uppercase text-right">amount</p>
                    </div>
                    </div>
                    <div>
                        
                            {cartItems.map(item => (
                                <div className="row">
                    <div className="col-10 mx-auto col-lg-4">
                        <p className="text-uppercase">{++sn}</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-4">
                        <p className="text-uppercase">{item.name}</p>
                    </div>
                    <div className="col-10 mx-a col-lg-4">
                        <p className="text-uppercase text-right">{convertcurr(item.price)}</p>
                    </div>
                    </div>
                             ) )}
                    

                    
                    </div>
                    {cartItems.length!==0 && (
                
                <div className="ordertotal text-right">
                    Total :{" "}
                    {convertcurr(cartItems.reduce((acc,curr)=>acc + curr.price*curr.count,0))}
                
            </div>
            ) }
              </div> 
             </div>
            </div>
        )
    }
}
