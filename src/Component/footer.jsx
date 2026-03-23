function Footer() {
  return (
    <>
      <footer class="footer">
        <div class="footer-container">
          {/* <!-- Column 1 --> */}
          <div class="footer-column">
            <h4>ONLINE SHOPPING</h4>
            <ul>
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Home & Living</li>
              <li>Beauty</li>
              <li>Gift Cards</li>
            </ul>
          </div>

          {/* <!-- Column 2 --> */}
          <div class="footer-column">
            <h4>CUSTOMER POLICIES</h4>
            <ul>
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>T&C</li>
              <li>Terms Of Use</li>
              <li>Track Orders</li>
              <li>Shipping</li>
              <li>Returns</li>
            </ul>
          </div>

          {/* <!-- Column 3 --> */}
          <div class="footer-column">
            <h4>EXPERIENCE APP ON MOBILE</h4>
            <div class="app-links">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Play Store"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
              />
            </div>

            <h4>KEEP IN TOUCH</h4>
            <div class="social-icons">
              <i class="fab fa-facebook"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-youtube"></i>
            </div>
          </div>

          {/* <!-- Column 4 --> */}
          <div class="footer-column">
            <h4>100% ORIGINAL</h4>
            <p>Guarantee for all products at myntra.com</p>

            <h4>RETURN WITHIN 14 DAYS</h4>
            <p>of receiving your order</p>
          </div>
        </div>

        {/* <!-- Bottom --> */}
        <div class="footer-bottom">
          <p>© 2026 www.myntra.com clone. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
