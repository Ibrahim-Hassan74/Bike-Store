window.addEventListener('DOMContentLoaded', () => {
  // add nav bar to all component in my components

  const currentFileName = window.location.pathname.split('/').pop();
  let links = [
    '../index.html',
    'accessories.html',
    'mountain.html',
    'electric.html',
    'about.html',
    'login.html',
    '../assets/img/logo-img.png',
  ];
  console.log(currentFileName);
  if (currentFileName === 'index.html') {
    // pinNavBar();
    links[0] = 'index.html';
    links[6] = 'assets/img/logo-img.png';
    for (let i = 1; i < links.length - 1; i++) {
      links[i] = 'my-component/' + links[i];
    }
  }

  mainNav.innerHTML = `
            <div class="nav-logo">
              <a href="${links[0]}">
                  <img src="${links[6]}" alt="this is the logo navgation image" class="logo" />
              </a>
            </div>
            <div class="nav-link">
                <ul class="list-links">
                    <li class="list-item"><a href="${links[0]}">Home</a></li>
                    <li class="list-item"><a href="${links[1]}">Accessories</a></li>
                    <li class="list-item"><a href="${links[2]}">Mountain Collection</a></li>
                    <li class="list-item"><a href="${links[3]}">Electric Bikes</a></li>
                    <li class="list-item"><a href="${links[4]}">About</a></li>
                </ul>
            </div>
            <div class="nav-icon">
                <a href="${links[5]}">
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
  // Get the current file name

  const year = footer.querySelector('.year');
  year.innerHTML = new Date().getFullYear();
});

// function pinNavBar() {
//   const sectionEl = document.querySelector('.black-bike-box-2');
//   const obs = new IntersectionObserver(
//     (entries) => {
//       const ent = entries[0];
//       console.log(ent);

//       // if (!ent.isIntersecting) {
//       //   document.querySelector('.main-nav-container').id = 'main-nav-headler';
//       // }
//       if (ent.isIntersecting) {
//         document.querySelector('.main-nav-container').id = '';
//       }
//     },
//     {
//       root: null,
//       threshold: 0,
//       rootMargin: '-700px',
//     }
//   );
//   obs.observe(sectionEl);
// }
