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
  };
  handleModal = () => {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
    }));
    console.log(this.state.isModalOpen);
  };

  render() {
    return (
      <div className="App">
        <Header handleModal={this.handleModal} />
        <Hero />
        <Products data={data} />
        {this.state.isModalOpen && (
          <Modal data={data} handleModal={this.handleModal} />
        )}
      </div>
    );
  }
}

export default App;
