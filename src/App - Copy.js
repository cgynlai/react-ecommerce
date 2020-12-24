import React from "react";
import Products from "./components/Products";
import data from "./product.json";


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products: data.products,
      cat_id: "",
      sort: ""
    }
  }
  render () {
  return (
    <div className="grid-container">
      <header>
          {/* <a href="/">React Shopping Cart</a> */}
          <img id="hd_bg" src="/Image/Grocery.png" alt="grocery image"></img>
      </header>
      
      <main>
          <div className="content">
            <div className="main">
               <Products products={this.state.products}></Products>
            </div>
            <div className="sidebar">cart items</div>
          </div>
          
      </main>
      <footer>
          All right reserved
      </footer>
      
    </div>
  );
}
}

export default App;
