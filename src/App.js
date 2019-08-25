import React from "react";
import { Card, Button } from "@shopify/polaris";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  INIT_PRODUCTS = [
    { id: 1, no_delivery_option: true, initState: true },
    { id: 2, no_delivery_option: true, initState: true },
    { id: 3, no_delivery_option: true, initState: true },
    { id: 4, no_delivery_option: true, initState: true }
  ];

  handleClick = e => {
    const id = e.currentTarget.id;
    const msg = "handleClick: set State Enable Delivery => " + id;
    console.log(msg);
    console.log(this.state.products);
    this.setState(
      // { products: [...this.state.products, ...products] },
      (prevState, props) => this.addProduct(prevState, props, id)
    );
  };

  handleInitLoad = e => {
    this.INIT_PRODUCTS.forEach(element => {
      console.log("handleInitLoad: set Init State => ");
      console.log(element);
      this.setState(
        (prevState, props) => this.addProduct(prevState, props, element),
        () => console.log(this.state.products)
      );
    });
    console.log("handleInitLoad: this.state.products");
    console.log(this.state.products);
  };

  addProduct = (prevState, props, product) => {
    console.log("addProduct => ");
    console.log(product);
    return {
      products: [...prevState, product]
    };
  };

  updateProduct = (prevState, props, parm) => {
    return {
      products: parm
    };
  };

  componentDidUpdate = () => {
    console.log("componentDidUpdate: this.state.products");
    console.log(this.state.products);
  };

  componentDidMount = () => {
    console.log("componentDidMount");
  };

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    const zz = this.state.products;
    return (
      <Card>
        <Button id="99" onClick={this.handleInitLoad}>
          Init Load
        </Button>
        <Button id="100" onClick={this.handleClick}>
          Add product
        </Button>
        <div>{zz.toString()}</div>
      </Card>
    );
  }
}
