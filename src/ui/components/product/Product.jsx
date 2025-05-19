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
        <div className={styles.imgOverlay}>
          <img className={styles.img} src={src} alt="img" />
        </div>
        <h3 className={styles.productTitle}>{title}</h3>
        <p className={styles.productDes}>{children}</p>
        {/* <use href="../../../../public/icons/> </use> */}
      </div>
      ;
    </>
  );
}
