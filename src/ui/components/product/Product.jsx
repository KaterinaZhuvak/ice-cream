import styles from "./product.module.css";
export default function Product({
  variant = "mint",
  children,
  src = "",
  title = "",
}) {
  if (variant === "mint") {
    title = "ice cream";
    src = "/images/products/mint.png";
  }
  if (variant === "peach") {
    title = "ice coffe";
    src = "/images/products/coffe.png";
  }
  if (variant === "coffe") {
    title = "milkshake";
    src = "/images/products/milkshake.png";
  }
  return (
    <>
      <div className={` ${styles.productItem} ${styles[variant]}`}>
        <div className={styles.picOverlay}>
          <div className={styles.imgOverlay}>
            <img className={styles.img} src={src} alt="img" />
          </div>
        </div>
        <div className={styles.productInfo}>
          <h3 className={styles.productTitle}>{title}</h3>
          <p className={styles.productDes}>{children}</p>
          <img className={styles.arrow} src="/icons/Arrow.svg" alt="arrow" />
        </div>
      </div>
      ;
    </>
  );
}
