import style from "./shoppingCategory.module.css";
function ShoppingCategory() {
  return <>
    <div className={style.imageContainer}>
            <img
              src="/src/assets/Shopping Category/img4.webp"
              alt="image"
              className={style.image}
            ></img>
            <img
              src="/src/assets/Shopping Category/img2.webp"
              alt="image"
              className={style.image}
            ></img>
            <img
              src="/src/assets/Shopping Category/img1.webp"
              alt="image"
              className={style.image}
            ></img>
            <img
              src="/src/assets/Shopping Category/img3.webp"
              alt="image"
              className={style.image}
            ></img>
            <img
              src="/src/assets/Shopping Category/img5.webp"
              alt="image"
              className={style.image}
            ></img>
            <img
              src="/src/assets/Shopping Category/img6.webp"
              alt="image"
              className={style.image}
            ></img>
          </div>
  </>;
}

export default ShoppingCategory;
