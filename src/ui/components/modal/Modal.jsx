import { Component } from "react";
import styles from "./modal.module.css";
import Button from "../button/Button";

class Modal extends Component {
  static defaultProps = {
    isDetailedModal: false,
  };

  render() {
    const { data, isDetailedModal, handleModal } = this.props;

    return (
      <div className={styles.backdrop}>
        <div className={styles.modal}>
          <button className={styles.closeBtn} onClick={handleModal}>
            <img
              className={styles.close}
              src="/images/modal/close.svg"
              alt="close-btn"
            />
          </button>

          {data ? (
            <div className={styles.detailedModal}>
              <h2 className={styles.detailedTitle}>Product Details</h2>

              <div key={data.id}>
                <div className={styles.productOverlay}>
                  <img
                    className={styles.cardImg}
                    src={data.image || "/images/default.png"}
                    alt={data.title || "Product"}
                  />
                </div>

                <h3>{data.title}</h3>
                <p>{data.description}</p>

                {data.macronutrients && data.macronutrients.length > 0 && (
                  <>
                    <h4>Macronutrients</h4>
                    <ul>
                      {data.macronutrients.map((macro, i) => (
                        <li key={i}>
                          <div>
                            <p>
                              {macro.name}: {macro.value}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {data.ingredients && data.ingredients.length > 0 && (
                  <>
                    <h4>Ingredients</h4>
                    <ul>
                      {data.ingredients.map((ingredient, i) => (
                        <li key={i}>
                          <p>{ingredient.name}</p>
                          <p>{ingredient.amount}</p>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          ) : (
            <div className={styles.buyNow}>
              <h2 className={styles.title}>Buy now</h2>
              <ul className={styles.cardsList}>
                {data &&
                  data.map((item, index) => {
                    const { title, image } = item;
                    return (
                      <li key={index} className={styles.card}>
                        <div className={styles.outline}>
                          <img
                            className={styles.cardImg}
                            src={image}
                            alt={title}
                          />
                          <h3 className={styles.itemTitle}>{title}</h3>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Modal;
