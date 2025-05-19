import styles from "./hero.module.css";
import Button from "../../components/button/Button";
import styled from "styled-components";

const Title = styled.h1`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 38px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-align: left;
  color: var(--fon-color);
`;
const Link = styled.a`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 14px;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  text-align: center;
  color: #f8d24e;
  margin-left: 34px;
`;
export default function Hero() {
  return (
    <>
      <section className={`hero ${styles.hero}`} id="home">
        <div className={`container ${styles.heroContainer}`}>
          <div className="content">
            <Title>
              ice cream <br />
              made with <br /> passion
            </Title>
            <div className={styles.downContent}>
              <Button arrow={false} variant="outline">
                Products
              </Button>
              <Link href="#made">How it's made?</Link>
            </div>
          </div>
          <div className={styles.heroContent}>
            <p className={styles.heroDes}>
              Indulge in a scoop of ice <br /> cream made with passion and{" "}
              <br /> treat your taste buds to an <br /> unforgettable
              experience!
            </p>
            <img
              className={styles.arrow}
              src="./images/hero/arrow.svg"
              alt="arrow"
            />
          </div>
        </div>
      </section>
    </>
  );
}
