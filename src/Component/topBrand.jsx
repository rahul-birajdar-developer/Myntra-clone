import style from "./topBrand.module.css";
function TopBrand() {
  return (
    <>
      <div className={style.imageContainer}>
        <img
          src="/src/assets/Top Brand/img1.webp"
          alt="image"
          className={style.image}
        ></img>
        <img
          src="/src/assets/Top Brand/img2.webp"
          alt="image"
          className={style.image}
        ></img>
        <img
          src="/src/assets/Top Brand/img3.webp"
          alt="image"
          className={style.image}
        ></img>
        <img
          src="/src/assets/Top Brand/img4.webp"
          alt="image"
          className={style.image}
        ></img>
        <img
          src="/src/assets/Top Brand/img5.webp"
          alt="image"
          className={style.image}
        ></img>
        <img
          src="/src/assets/Top Brand/img6.webp"
          alt="image"
          className={style.image}
        ></img>
      </div>
    </>
  );
}

export default TopBrand;
