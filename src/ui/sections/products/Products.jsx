// import styled from "styled-components";
import Product from "../../components/product/Product";
import styles from "./products.module.css";
export default function Products() {
  return (
    <>
      <section className={styles.products}>
        <div className="container">
          <h3 className={styles.productHeading}>
            100% natural <br /> <span className={styles.product}>products</span>
          </h3>
          <ul className={styles.productsList}>
            <li className={styles.listItem}>
              <Product variant="mint">
                Soft ice cream with a <br /> delicate taste. Made with <br />{" "}
                milk, cream, sugar and <br /> natural stabilizer
              </Product>
            </li>
            <li className={styles.listItem}>
              <Product variant="peach">
                Fragrant invigorating drink <br /> created from 100% natural{" "}
                <br />
                ingredients without the use <br /> of preservatives and flavor
                <br /> enhancers
              </Product>
            </li>
            <li className={styles.listItem}>
              <Product variant="coffe">
                Sweet drinks based on milk <br /> and ice cream,
                <br /> supplemented with syrups <br />, fruits, berries and
                other <br /> sweets of your choice
              </Product>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
