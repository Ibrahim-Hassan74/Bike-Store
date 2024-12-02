window.addEventListener('DOMContentLoaded', () => {
  mainNav.innerHTML = `
            <div class="nav-logo">
              <a href="index.html">
                  <img src="assets/img/logo-img.png" alt="this is the logo navgation image" class="logo" />
              </a>
            </div>
            <div class="nav-link">
                <ul class="list-links">
                    <li class="list-item"><a href="index.html">Home</a></li>
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
});
