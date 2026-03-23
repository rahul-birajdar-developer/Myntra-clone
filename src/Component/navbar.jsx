import styles from "./navbar.module.css";
import { CiSearch } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";

function AppNavbar() {
  return (
    <>
      <header className={styles.headercontainer}>
        <div className={styles.logocontainer}>
          <img
            src="/src/assets/myntra_logo.webp"
            alt="Logo"
            className={styles.logo}
          ></img>
        </div>
        <nav className={styles.nav_bar}>
          <a href="#">MEN</a>
          <a href="#">WOMAN</a>
          <a href="#">KIDS</a>
          <a href="#">HOME</a>
          <a href="#">BEAUTY</a>
          <a href="#">GENZ</a>
          <a href="#">
            STUDIO<sup>New</sup>
          </a>
        </nav>
        <div className={styles.search_bar}>
          <span className={styles.search_icon}>
            <CiSearch />
          </span>
          <input
            className={styles.search_input}
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className={styles.cart_section}>
          <div className={styles.profile}>
            <BsPerson className={styles.icon}/>
            <span>Profile</span>
          </div>
          <div className={styles.wishlist}>
            <CiHeart className={styles.icon} />
            <span>Wishlist</span>
          </div>
          <div className={styles.add_cart}>
            <IoBagOutline className={styles.icon} />
            <span>Bag</span>
          </div>
        </div>
      </header>
    </>
  );
}

export default AppNavbar;
