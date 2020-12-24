import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import Orderlist from "./components/Orderlist";
import Products from "./components/Products";
import data from "./product.json";
import Categoryscreen from "./screens/Categoryscreen";
import Productscreen from "./screens/Productscreen";
//import categoryscreen from "./screens/categoryscreen";
//import homescreen from "./screens/homescreen";
//import productscreen from "./screens/productscreen";


class App extends React.Component {
    
    constructor(){
        super();
        this.state = {
          products: data.products,
          cartItems: (localStorage.getItem("cartItems"))? (JSON.parse(localStorage.getItem("cartItems"))):[],
          cat_id: "",
          sort: ""
        }
      }
    
      removeFromCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        this.setState({
          cartItems: cartItems.filter(x=>x.name !== product.name)
        });
        localStorage.setItem("cartItems", JSON.stringify(cartItems.filter(x=>x.name !== product.name)));
      }
    
      addToCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        let alreadyInCart = false;
        cartItems.forEach((item)=> {
          if(item.name === product.name) {
            item.count++;
            alreadyInCart = true;
          }
        });
        if (!alreadyInCart) {
          cartItems.push({...product, count: 1});
        }
         this.setState({cartItems});
         localStorage.setItem("cartItems", JSON.stringify(cartItems));
      }


  
  render () {
  return (

<BrowserRouter>
<div>
    <section id="for_img" class="">
    <img src="/Image/Grocery.png" alt="grocery image"></img>
</section>

<nav class="navbar bg-dark navbar-dark navbar-expand-sm sticky-top sticky-top">
    <a class="navbar-brand d-none d-sm-inline-block" href="#">
        <img id="logo" src="Image/icon-72x72.png"></img>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#toggleNavbar"
        aria-controls="toggleNavbar" aria-expanded="false" aria-label="toggleNavbar">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="toggleNavbar">
        <div class="navbar-nav mr-sm-auto">

            <a class="nav-item nav-link" href="/">Home</a>
            <a class="nav-item nav-link" href="/product/Udon">Delivery Slot</a>
            <a class="nav-item nav-link" href="#">Member</a>
            <a class="nav-item nav-link" href="#">Registration</a>
            <div class="dropdown">
                <a class="nav-item nav-link dropdown-toggle" data-toggle="dropdown" id="serviceDropDown"
                    aria-haspopup="true" aria-expanded="false" href="#">Category</a>
                <div class="dropdown-menu" aria-labelledby="serviceDropDown">
                    <a class="dropdown-item" href="/">Vegetables</a>
                    <a class="dropdown-item" href="#">Fruits</a>
                    <a class="dropdown-item" href="#">Meat and Seafoods</a>
                    <a class="dropdown-item" href="#">Drinks</a>
                    <a class="dropdown-item" href="#">Others</a>
                </div>
            </div>
        </div>
    </div>
    
</nav>
<section className="content" id="W_sales">
      
      <h1 className="text-sm-left text-md-center text-danger border">Weekly Sales</h1>
      <div className="container">
      <div className="row">
          <section className="col-sm-5">
              <figure>
                  <img className="crs_img img-responsive" src="/Image/Sales1.png" alt=""></img>
              </figure>
          </section>


          
          <section className="content col-sm-7">
              <div id="demo" className="carousel slide" data-ride="carousel">
                 
                  <div className="carousel-inner">
                      <div className="carousel-item active">
                          <img className="crs_img" src="/Image/Tuna.jpg" alt="banana"></img>
                      </div>
                      <div className="carousel-item">
                          <img className="crs_img" src="/Image/Cracker.jpg" alt="lychee"></img>
                      </div>
                      <div className="carousel-item">
                          <img className="crs_img" src="/Image/knife cooking oil.jpg" alt="apple"></img>
                      </div>
                  </div>


                  
                  <a className="carousel-control-prev" href="#demo" data-slide="prev">
                      <span className="carousel-control-prev-icon"></span>
                  </a>
                  <a className="carousel-control-next" href="#demo" data-slide="next">
                      <span className="carousel-control-next-icon"></span>
                  </a>
              </div>
          </section>
      </div>
      </div>
  </section>

  <div className="container-fluid"> 
  <div className="row">
     <div className="col-sm-9">
     <Switch>
     <Route path="/product/:id" render={(props)=>(<Productscreen addToCart={this.addToCart} {...props}/>)}  ></Route> 
<Route path="/" render={()=>(<Products products={this.state.products} addToCart={this.addToCart} />)} exact></Route>
<Route path="/cat/:id" render={(props)=>(<Categoryscreen addToCart={this.addToCart} {...props}/>)}></Route> 
<Route path="/order" render={()=>(<Orderlist cartItems={this.state.cartItems} />)}></Route>
</Switch>

        
     </div>
     <div className="col-sm-3">
       <div className="sidebar">
           <h3>Cart Items</h3>
         <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} />
       </div>
     </div>
   </div>
</div>




   
  </div>



  </BrowserRouter>

 );
// <div className="grid-container">
//   <header>
//       {/* <a href="/">React Shopping Cart</a> */}
//       <img id="hd_bg" src="/Image/Grocery.png" alt="grocery image"></img>
//   </header>
  
//    <main> 
//       <div className="content">
//         <div className="main">
//            <Products products={this.state.products}></Products>
//         </div>
//         <div className="sidebar">cart items</div>
//       </div>
      
//   </main>
//   <footer>
//       All right reserved
//   </footer>
  
// </div>

}
}



export default App;
