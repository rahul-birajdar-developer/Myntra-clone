import style from "./risingContainer.module.css";

function RisingContainer() {
  return (
    <>
      <div className={style.imageContainer}>
        <img
          src="/src/assets/risingData/img1.webp"
          alt="image"
          className={style.image}
        ></img>
        <img
          src="/src/assets/risingData/img2.webp"
          alt="image"
          className={style.image}
        ></img>
        <img
          src="/src/assets/risingData/img3.webp"
          alt="image"
          className={style.image}
        ></img>
        <img
          src="/src/assets/risingData/img4.webp"
          alt="image"
          className={style.image}
        ></img>
        <img
          src="/src/assets/risingData/img5.webp"
          alt="image"
          className={style.image}
        ></img>
      </div>
    </>
  );
}

export default RisingContainer;
