// import styled from "styled-components";
import Product from "../../components/product/Product";
import styles from "./products.module.css";
import { Component } from "react";

class Products extends Component {
  render() {
    const { data, handleModal, selectedProduct } = this.props;

    return (
      <section className={styles.products}>
        <div className="container">
          <h3 className={styles.productHeading}>
            100% natural <br /> <span className={styles.product}>products</span>
          </h3>
          <ul className={styles.productsList}>
            {data.map((item, id) => {
              return (
                <Product
                  key={id}
                  selectedProduct={selectedProduct}
                  item={item}
                  handleModal={handleModal}
                />
              );
            })}
          </ul>
        </div>
      </section>
    );
  }
}

export default Products;
