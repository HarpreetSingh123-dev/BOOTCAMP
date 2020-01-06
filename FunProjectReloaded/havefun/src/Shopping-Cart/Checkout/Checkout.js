import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";
import CheckoutCart from "./CheckoutCart";

class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phoneNumber: "",
      email: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      allProducts: []
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    //this.props.cart.map =( product =>{
    //  this.setState({productName: product.name})
    //  this.setState({productUnitPrice:product.price})
    //})
  }

  onChangeName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangePhoneNumber(e) {
    this.setState({ phoneNumber: e.target.value });
  }

  onChangeAddress1(e) {
    this.setState({ address1: e.target.value });
  }

  onChangeAddress2(e) {
    this.setState({ address2: e.target.value });
  }

  onChangeCity(e) {
    this.setState({ city: e.target.value });
  }

  onChangeState(e) {
    this.setState({ state: e.target.value });
  }

  onChangeZipCode(e) {
    this.setState({ zip: e.target.value });
  }

  cartHandler() {
    console.log(this.props.cart.length);
    //console.log(this.state.productName.length)
    // COMMENTS ARE FOR TESTING CODE , YOU MAY DELETE THEM
    for (var i = 0; i < this.props.cart.length; i++) {
      // this.setState(Object.assign(this.state.productName,{productName:this.props.cart[i].name}))
      //this.setState(Object.assign(this.state.productUnitPrice,{productUnitPrice:this.props.cart[i].price}))
      //  this.setState(Object.assign(this.state.totalProductUnits,{totalProductUnits:this.props.cart[i].units.units}))

      //  this.setState(Object.assign(this.state.exercises,{First_Exercise:e.target.value}))

      //this.setState({productName:[this.state.productName.push(this.props.cart)]})
      this.setState({ allProducts: this.props.cart });
    }

    //   this.props.cart.map = (cart) =>{

    //  for(var i = 0 ; i<this.props.cart.length ; i++){
    //  this.setState({productName:[...this.state.productName,this.props.cart[i].name]})
    //  }

    // }

    //for( var i =0 ; i<this.props.cart.length ; i++){

    //console.log(this.state.productName[i])

    // }

    // console.log(this.state)
  }

  onSubmit(e) {
    //console.log(this.props.cart[0].name)
    //this.props.cart.map =  (product) => {

    // this.setState({productName: product.name})
    //this.setState({productUnitPrice:product.price})

    // console.log("ji")

    //}
    e.preventDefault();
    // console.log(this.state)
    //for( var i =0 ; i<this.props.cart.length ; i++){
    //console.log(this.state.allProducts[i].name)
    // }
    //console.log(this.state.allProducts.length)

    const userOrder = {
      name: this.state.name,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      address1: this.state.address1,
      address2: this.state.address2,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      products: this.state.allProducts
    };

    console.log(userOrder);
    axios
      .post("http://localhost:8000/order/", userOrder) // to connect front end to backend "we write backend api"
      .then(res => {
        alert("Order Added Successfully to Database");
      })

      .catch(err => {
        alert("There was Error");
      });
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Checkout</h1>
        <h5 className="text-center">Fill Following Details</h5>

        <form className="container" onSubmit={this.onSubmit}>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="name">Name</label>
              <input
                type="name"
                class="form-control"
                id="name"
                placeholder="Name"
                value={this.state.name}
                onChange={this.onChangeName.bind(this)}
              ></input>
            </div>

            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                class="form-control"
                id="inputEmail4"
                placeholder="Email"
                value={this.state.email}
                onChange={this.onChangeEmail.bind(this)}
              ></input>
            </div>
          </div>

          <div class="form-group">
            <label for="inputAddress">Phone Number</label>
            <input
              type="text"
              class="form-control"
              id="inputNumber"
              placeholder="8146854088"
              value={this.state.phoneNumber}
              onChange={this.onChangePhoneNumber.bind(this)}
            ></input>
          </div>

          <div class="form-group">
            <label for="inputAddress">Address 1</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              value={this.state.address1}
              onChange={this.onChangeAddress1.bind(this)}
            ></input>
          </div>
          <div class="form-group">
            <label for="inputAddress2">Address 2</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
              value={this.state.address2}
              onChange={this.onChangeAddress2.bind(this)}
            ></input>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input
                type="text"
                class="form-control"
                id="inputCity"
                value={this.state.city}
                onChange={this.onChangeCity.bind(this)}
              ></input>
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select
                id="inputState"
                class="form-control"
                onChange={this.onChangeState.bind(this)}
              >
                <option selected>Choose...</option>

                <option> Punjab</option>
                <option>Harayana</option>
                <option>Delhi</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input
                type="text"
                class="form-control"
                id="inputZip"
                value={this.state.zip}
                onChange={this.onChangeZipCode.bind(this)}
              ></input>
            </div>
          </div>

          <h6>Total Price :{this.props.total}</h6>
          <div className="container">
            <div className="row">
              {this.props.cart.map(item => (
                <CheckoutCart
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  img={item.img}
                  price={item.price}
                  units={item.units.units}
                ></CheckoutCart>
              ))}
            </div>
          </div>

          <button
            type="submit"
            class="btn btn-primary"
            onClick={this.cartHandler.bind(this)}
          >
            Order Now!
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
    total: state.total
  };
};

export default connect(mapStateToProps, null)(Checkout);
