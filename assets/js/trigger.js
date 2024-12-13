// window.addEventListener('DOMContentLoaded', () => {
// add nav bar to all component in my components

if (currentFileName === 'index.html') {
  cart = 'my-component/' + cart;
  links[0] = 'index.html';
  links[6] = 'assets/img/logo-img.png';
  for (let i = 1; i < links.length - 1; i++) {
    links[i] = 'my-component/' + links[i];
  }
  for (let i = 0; i < adminPanelLinks.length; i++) {
    adminPanelLinks[i] = 'my-component/' + adminPanelLinks[i];
  }
}
//#region admin panel links
let component = ``;
let navIcon = `<a href="${links[5]}">
                    <ion-icon name="log-in" class="nav-bar-icon"></ion-icon>
                  </a>
                  `;

if (token && !isTokenExpired(token)) {
  // console.log(JSON.parse(atob(token.split('.')[1])));
  navIcon = `<a href="${cart}"> <ion-icon class="nav-icon-item" name="bag"></ion-icon></a>
              <a><ion-icon class="nav-icon-item admin-panel-show-section" name="ellipsis-vertical"></ion-icon></a>
              `;
  component = `<div class="admin-panel"> 
                <ul>
                <li class="admin-list-item">
                    <ion-icon class="admin-list-icon" name="person"></ion-icon>
                    <span>
                      <a href="#">Profile</a>
                    </span>
                    </li>
                  <li class="admin-list-item">
                    <ion-icon class="admin-list-icon" name="add-circle"></ion-icon>
                    <span> 
                      <a href=${adminPanelLinks[0]}>Add Model</a>
                    </span>
                  </li>
                  <li class="admin-list-item">
                    <ion-icon class="admin-list-icon" name="create"></ion-icon>
                    <span> 
                      <a href=${adminPanelLinks[1]}>Update Model</a>
                    </span>
                  </li>
                  <li class="admin-list-item">
                  <ion-icon class="admin-list-icon" name="trash"></ion-icon>
                  <span> 
                      <a href=${adminPanelLinks[2]}>Delete Model</a>
                    </span>
                  </li>
                  <li class="admin-list-item">
                    <ion-icon class="admin-list-icon" name="log-out"></ion-icon>
                    <span>
                      <a id="log-out">Logout</a>
                    </span>
                  </li>
                </ul>
              </div>`;
} else if (token && isTokenExpired(token)) {
  (async function handleToken() {
    try {
      const response = await axios.post(
        refreshTokenUrl,
        {},
        {
          withCredentials: true,
        }
      );
      const accessToken = response.data['access_token'];
      // console.log(accessToken);
      localStorage.setItem('accessToken', accessToken);
      // console.log(response);
      // if (!response && !window.location.pathname.includes('login.html')) {
      //   // window.location.href = links[5];
      // } else localStorage.setItem('accessToken', response.access_token);
    } catch (error) {
      console.error('Error refreshing access token:', error);
      if (!window.location.pathname.includes('login.html')) {
        window.location.href = links[5];
      }
    }
  })();
}
// else {
//   if (!window.location.pathname.includes('login.html'))
//     window.location.href = links[5];
// }

// if (document.cookie.contains('isAdmin=true')) {
//   component = `<div class="admin-panel">
//               <ul>
//                 <li><a href="#">Add Model</a></li>
//                 <li><a href="#">Update Model</a></li>
//                 <li><a href="#">Delete Model</a></li>
//               </ul>
//             </div>`;
// }

//#endregion

//#region  for admin component

//#endregion

// });

(function addNavBar() {
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
            <div>
              <div class="nav-icon">
                  ${navIcon}
              </div>
              ${component}
            </div>
  `;

  if (token && !isTokenExpired(token)) {
    const admin = document.querySelector('.admin-panel-show-section');
    const adminPanel = document.querySelector('.admin-panel');
    admin.addEventListener('click', (event) => {
      event.stopPropagation();
      adminPanel.classList.toggle('show-admin-panel');
    });

    window.addEventListener('click', () => {
      if (adminPanel.classList.contains('show-admin-panel')) {
        adminPanel.classList.remove('show-admin-panel');
      }
    });

    adminPanel.addEventListener('click', (event) => {
      event.stopPropagation();
    });
    const logOut = document.getElementById('log-out');
    // console.log(logOut);
    logOut.addEventListener('click', () => {
      localStorage.removeItem('accessToken');
      // window.location.href = links[5];
      window.location.href = currentFileName;
    });
  }
})();

(function addFooter() {
  // add nav footer to all component in my components
  footer.innerHTML = `
  <div class="container grid grid--footer">
        <div class="logo-col">
          <a href="#" class="footer-logo">
            <img
              class="logo"
              alt="bike store logo"
              src="${links[6]}"
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
              Minya Governorate, Egypt
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
})();

// function pinNavBar() {
//   const sectionEl = document.querySelector('.mountain-container');
//   const obs = new IntersectionObserver(
//     (entries) => {
//       const ent = entries[0];
//       console.log(ent);

//       if (!ent.isIntersecting) {
//         document.querySelector('.main-nav-container').id = 'main-nav-headler';
//       }
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
