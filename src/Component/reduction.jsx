import style from "./reduction.module.css"
function ReductionImage() {
  return (
    <>
      <div className={style.imageContainer}>
        <img
          src="/src/assets/reduction Store/img1.webp"
          alt="image"
          className={style.image}
        ></img>
        <img
          src="/src/assets/reduction Store/img2.webp"
          alt="image"
          className={style.image}
        ></img>
        <img
          src="/src/assets/reduction Store/img3.webp"
          alt="image"
          className={style.image}
        ></img>
        <img
          src="/src/assets/reduction Store/img4.webp"
          alt="image"
          className={style.image}
        ></img>
        <img
          src="/src/assets/reduction Store/img5.webp"
          alt="image"
          className={style.image}
        ></img>
      </div>
    </>
  );
}

export default ReductionImage;
