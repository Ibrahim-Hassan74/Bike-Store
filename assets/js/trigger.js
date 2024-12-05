window.addEventListener('DOMContentLoaded', () => {
  // add nav bar to all component in my components
  mainNav.innerHTML = `
            <div class="nav-logo">
              <a href="index.html">
                  <img src="../assets/img/logo-img.png" alt="this is the logo navgation image" class="logo" />
              </a>
            </div>
            <div class="nav-link">
                <ul class="list-links">
                    <li class="list-item"><a href="../index.html">Home</a></li>
                    <li class="list-item"><a href="accessories.html">Accessories</a></li>
                    <li class="list-item"><a href="mountain.html">Mountain Collection</a></li>
                    <li class="list-item"><a href="electric.html">Electric Bikes</a></li>
                    <li class="list-item"><a href="about.html">About</a></li>
                </ul>
            </div>
            <div class="nav-icon">
                <a href="login.html">
                    <ion-icon name="person"></ion-icon>
                </a>
                <a href="#">
                    <ion-icon name="bag"></ion-icon>
                </a>
            </div>
  `;
  // add nav footer to all component in my components
  footer.innerHTML = `
  <div class="container grid grid--footer">
        <div class="logo-col">
          <a href="#" class="footer-logo">
            <img
              class="logo"
              alt="Omnifood logo"
              src="../assets/img/logo-img.png"
            />
          </a>

          <ul class="social-links">
            <li>
              <a class="footer-link" href="#"
                ><ion-icon class="social-icon" name="logo-instagram"></ion-icon
              ></a>
            </li>
            <li>
              <a class="footer-link" href="#"
                ><ion-icon class="social-icon" name="logo-facebook"></ion-icon
              ></a>
            </li>
            <li>
              <a class="footer-link" href="#"
                ><ion-icon class="social-icon" name="logo-twitter"></ion-icon
              ></a>
            </li>
          </ul>

          <p class="copyright">
            Copyright &copy; <span class="year">2027</span> by Bike Store, Inc.
            All rights reserved.
          </p>
        </div>

        <div class="address-col">
          <p class="footer-heading">Contact us</p>
          <address class="contacts">
            <p class="address">
              Beni Imran, Dermawas, Minya Governorate, Egypt
            </p>
            <p>
              <a class="footer-link" href="tel:415-201-6370">111-222-333</a
              ><br />
              <a class="footer-link" href="mailto:hello@omnifood.com"
                >bikestore@gmail.com</a
              >
            </p>
          </address>
        </div>

        <nav class="nav-col">
          <p class="footer-heading">Account</p>
          <ul class="footer-nav">
            <li><a class="footer-link" href="#">Create account</a></li>
            <li><a class="footer-link" href="#">Sign in</a></li>
            <li><a class="footer-link" href="#">iOS app</a></li>
            <li><a class="footer-link" href="#">Android app</a></li>
          </ul>
        </nav>

        <nav class="nav-col">
          <p class="footer-heading">Company</p>
          <ul class="footer-nav">
            <li><a class="footer-link" href="#">About Bike Store</a></li>
            <li><a class="footer-link" href="#">For Business</a></li>
            <li><a class="footer-link" href="#">Bike Buddies</a></li>
            <li><a class="footer-link" href="#">Careers</a></li>
          </ul>
        </nav>

        <nav class="nav-col">
          <p class="footer-heading">Resources</p>
          <ul class="footer-nav">
            <li><a class="footer-link" href="#">Cycling Guide </a></li>
            <li><a class="footer-link" href="#">Help center</a></li>
            <li><a class="footer-link" href="#">Privacy & terms</a></li>
          </ul>
        </nav>
      </div>
  `;
  const year = footer.querySelector('.year');
  year.innerHTML = new Date().getFullYear();
});
