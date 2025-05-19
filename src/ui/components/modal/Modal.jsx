import { Component } from "react";
import styles from "./modal.module.css";
import Button from "../button/Button";
// import iconClose from "/public/images/modal/close.svg";
class Modal extends Component {
  defaultProps = {
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

          {isDetailedModal ? (
            <div className={styles.detailedModal}></div>
          ) : (
            <div className={styles.buyNow}>
              <h2 className={styles.title}>Buy now</h2>
              <ul className={styles.cardsList}>
                {data.map((item, index) => {
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

          <form className={styles.inputs}>
            <input
              type="text"
              className={styles.input}
              placeholder="Name"
              name="name"
            />
            <input
              type="text"
              className={styles.input}
              placeholder="Phone"
              name="phone"
            />
            <textarea
              name="message"
              className={styles.textarea}
              placeholder="Comment"
            ></textarea>
            <Button
              arrow={false}
              variant="primary"
              type="submit"
              text={"Submit"}
              className={styles.submitBtn}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
export default Modal;
