import "./App.css";
import Header from "./ui/sections/Header.jsx";
import Hero from "./ui/sections/hero/Hero.jsx";
import Products from "./ui/sections/products/Products.jsx";
import Modal from "./ui/components/modal/Modal.jsx";
import data from "./products.json";
import { Component } from "react";

class App extends Component {
  state = {
    isModalOpen: false,
    isDetailedModal: false,
    productData: null,
  };

  handleModal = () => {
    console.log("click");
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
    }));
    console.log(this.state.isModalOpen);
  };

  choseModal = () => {
    this.setState((prevState) => ({
      isDetailedModal: !prevState.isDetailedModal,
    }));
  };

  selectedProduct = (product) => {
    this.setState(() => ({
      productData: product,
    }));
  };

  render() {
    return (
      <div className="App">
        <Header handleModal={this.handleModal} />
        <Hero />
        <Products
          data={data}
          selectedProduct={this.selectedProduct}
          handleModal={this.handleModal}
        />
        {this.state.isModalOpen && (
          <Modal
            data={this.state.productData}
            handleModal={this.handleModal}
            isDetailedModal={this.state.isDetailedModal}
          />
        )}
      </div>
    );
  }
}

export default App;
