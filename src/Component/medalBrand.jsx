import style from "./medalBrand.module.css";
function MedalBrand() {
  return (
    <>
      <div className={style.imageContainer}>
        <img
          src="/src/assets/medal Brands/img1.webp"
          alt="image"
          className={style.image}
        ></img>
        <img
          src="/src/assets/medal Brands/img2.webp"
          alt="image"
          className={style.image}
        ></img>
        <img
          src="/src/assets/medal Brands/img3.webp"
          alt="image"
          className={style.image}
        ></img>
        <img
          src="/src/assets/medal Brands/img4.webp"
          alt="image"
          className={style.image}
        ></img>
        <img
          src="/src/assets/medal Brands/img5.webp"
          alt="image"
          className={style.image}
        ></img>
        <img
          src="/src/assets/medal Brands/img6.webp"
          alt="image"
          className={style.image}
        ></img>
      </div>
    </>
  );
}

export default MedalBrand;
