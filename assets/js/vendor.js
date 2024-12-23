const mainNav = document.querySelector('.main-nav-container');
const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const phoneNumber = document.getElementById('phone');
const button = document.getElementById('submit--btn');
const footer = document.querySelector('.footer');
const details = document.getElementById('main-details');
const addForm = document.querySelector('.add-form');
const updateFormId = document.querySelector('.update-form-id');
const updateForm = document.querySelector('.update-form');
const deleteForm = document.querySelector('.delete-form-id');
let Cookies = document.cookie
  .split(';')
  .map((cookie) => cookie.split('='))
  .reduce(
    (accumlator, [key, value]) => ({
      ...accumlator,
      [key.trim()]: decodeURIComponent(value),
    }),
    {}
  );
const currentFileName =
  window.location.pathname.split('/').pop() || 'index.html';
let links = [
  '../index.html',
  'accessories.html',
  'mountain.html',
  'electric.html',
  'about.html',
  'login.html',
  '../assets/img/logo-img.png',
];
let footerLinks = [
  'register.html',
  'about.html',
  'Privacy Policy.html',
  'login.html',
  'feedback.html',
];
let profile = 'profile_detalis.html';
let cart = 'cartdetails.html';
const token = localStorage.getItem('accessToken');
const adminPanelLinks = ['addModel.html', 'updateId.html', 'deleteModel.html'];
const registerUrl = 'http://localhost/Bike-store/src/auth/register';
const loginUrl = 'http://localhost/Bike-store/src/auth/login.php';
const forgotpassUrl = 'http://localhost/Bike-store/src/auth/forgetPassword';
const verifyUrl = 'http://localhost/Bike-store/src/auth/verifyOTP';
const setpassUrl = 'http://localhost/Bike-store/src/auth/resetNewPassword';
const addModelUrl = 'http://localhost/Bike-store/src/AdminPanel/AddProduct.php';
const udateModelIdUrl =
  'http://localhost/Bike-store/src/AdminPanel/CheckFind.php';
const updatedModelUrl =
  'http://localhost/Bike-store/src/AdminPanel/UpdateProduct.php';
const deleteModelUrl =
  'http://localhost/Bike-store/src/AdminPanel/DeleteProduct.php';
const addcart = 'http://localhost/bike-store/src/Orders/addToCart.php';

const refreshTokenUrl = 'http://localhost/bike-store/src/auth/RefreshToken.php';

const logoutUrl = 'http://localhost/Bike-store/src/auth/logout.php';
const cartDetailsUrl =
  'http://localhost/Bike-store/src/Orders/RetrieveCart.php';

const deleteCartItemUrl =
  'http://localhost/bike-store/src/Orders/removeFromCart.php';
const getDataUrl =
  'http://localhost/bike-store/src/ProductsMangment/Retrieve.php';

const profileUrl = '';
const feedbackUrl = '';
