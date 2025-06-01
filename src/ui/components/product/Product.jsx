// import styled from "styled-components";
// import styles from "./product.module.css";
// const ProductContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   position: relative;
//   height: 536px;
//   border-radius: 30px;
// `;
// const ProductInnerContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 165px 64px 60px;
//   margin: 0 auto;
//   width: 242px;
// `;
// const ProductTitle = styled.h3`
//   margin: 0;
//   color: #131313;
//   font-size: 30px;
//   font-family: "Montserrat", sans-serif;
//   font-weight: 700;
//   letter-spacing: 1px;
//   text-transform: uppercase;
// `;
// const ProductDescription = styled.p`
//   margin: 0;
//   color: #131313;
//   font-size: 16px;
//   font-family: "Montserrat", sans-serif;
//   line-height: 28px;
//   letter-spacing: 1px;
//   margin-top: 66px;
//   margin-bottom: 50px;
// `;

// export default function Product({
//   title,
//   img,
//   variant,
//   description,
//   isFirst,
//   handleModal,
//   selectedProduct,
//   choseModal,
// }) {
//   const handleClick = () => {
//     choseModal();
//     handleModal();
//     selectedProduct();
//   };
//   return (
//     <ProductContainer
//       onClick={handleClick}
//       style={{ backgroundColor: `${variant}` }}
//     >
//       <div
//         className={styles.round}
//         style={{
//           backgroundColor: `${variant}`,
//         }}
//       ></div>
//       <img className={styles.img} src={img} alt={title} />
//       <ProductInnerContainer>
//         <ProductTitle>{title}</ProductTitle>
//         <ProductDescription>{description}</ProductDescription>
//         <a href="#">
//           <img
//             className={`${styles.arrow} ${isFirst ? styles.firstArrow : ""}`}
//             src="/images/products/arrow.svg"
//             alt="arrow"
//           />
//         </a>
//       </ProductInnerContainer>
//     </ProductContainer>
//   );
// }

// import styles from "./product.module.css";
// // import {Component} from "react"
// export default function Product({
//   variant = "",
//   description = "",
//   src = "",
//   title = "",
// }) {
//   if (variant === "mint") {
//     title = "ice cream";
//     src = "/images/products/mint.png";
//     description =
//       "Soft ice cream with a delicate taste. Made with milk, cream, sugar and natural stabilizer";
//   }
//   if (variant === "peach") {
//     title = "ice coffe";
//     src = "/images/products/coffe.png";
//     description =
//       "Fragrant invigorating drink created from 100% natural ingredients without the use of preservatives and flavorenhancers";
//   }
//   if (variant === "coffe") {
//     title = "milkshake";
//     src = "/images/products/milkshake.png";
//     description =
//       "Sweet drinks based on milk and ice cream, supplemented with syrups, fruits, berries and other sweets of your choice";
//   }
//   const variants = ["coffe", "peach, mint"];

//   variants.map((variant) => {
//     return (
//       <div className={styles.productContainer}>
//         <div className={` ${styles.productItem} ${styles[variant]}`}>
//           <div className={styles.picOverlay}>
//             <div className={styles.imgOverlay}>
//               <img className={styles.img} src={src} alt="img" />
//             </div>
//           </div>
//           <div className={styles.productInfo}>
//             <h3 className={styles.productTitle}>{title}</h3>
//             <p className={styles.productDes}>{description}</p>
//             <img className={styles.arrow} src="/icons/Arrow.svg" alt="arrow" />
//           </div>
//         </div>
//       </div>
//     );
//   });
// }
import styles from "./product.module.css";

export default function Product({
  variant = "mint",
  description = "",
  src = "",
  title = "",
  handleModal,
  choseModal,
  selectedProduct,
  item,
}) {
  if (variant === "mint") {
    title = "ice cream";
    src = "/images/products/mint.png";
    description =
      "Soft ice cream with a delicate taste. Made with milk, cream, sugar and natural stabilizer";
  }
  if (variant === "peach") {
    title = "ice coffee";
    src = "/images/products/coffe.png";
    description =
      "Fragrant invigorating drink created from 100% natural ingredients without the use of preservatives and flavorenhancers";
  }
  if (variant === "coffe") {
    title = "milkshake";
    src = "/images/products/milkshake.png";
    description =
      "Sweet drinks based on milk and ice cream, supplemented with syrups, fruits, berries and other sweets of your choice";
  }

  const handleClick = () => {
    const currentProduct = {
      title,
      image: src,
      variant,
      description,

      macronutrients: item?.macronutrients || [],
      ingredients: item?.ingredients || [],
    };

    selectedProduct(currentProduct);

    // choseModal();

    handleModal();
  };

  return (
    <div
      className={` ${styles.productItem} ${styles[variant]}`}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className={styles.picOverlay}>
        <div className={styles.imgOverlay}>
          <img className={styles.img} src={src} alt="img" />
        </div>
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>{title}</h3>
        <p className={styles.productDes}>{description}</p>
        <img className={styles.arrow} src="/icons/Arrow.svg" alt="arrow" />
      </div>
    </div>
  );
}
