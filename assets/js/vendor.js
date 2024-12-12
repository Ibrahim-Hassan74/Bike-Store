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
const cards = document.querySelectorAll('.card');
const addForm = document.querySelector('.add-form');
const updateFormId = document.querySelector('.update-form-id');
const updateForm = document.querySelector('.update-form');
const deleteForm = document.querySelector('.delete-form-id');
const registerUrl = 'http://localhost/Bike-store/src/auth/register';
const loginUrl = 'http://localhost/Bike-store/src/auth/login.php';
const forgotpassUrl = 'http://localhost/Bike-store/src/auth/forgetPassword';
const verifyUrl = 'http://localhost/Bike-store/src/auth/verifyOTP';
const setpassUrl = 'http://localhost/Bike-store/src/auth/resetNewPassword';
const addModelUrl = 'http://localhost/Bike-store/src/AdminPanel/AddProduct.php';
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
const udateModelIdUrl =
  'http://localhost/Bike-store/src/AdminPanel/CheckFind.php';
const updatedModelUrl =
  'http://localhost/Bike-store/src/AdminPanel/UpdateProduct.php';
const deleteModelUrl =
  'http://localhost/Bike-store/src/AdminPanel/DeleteProduct.php';
const addcart = '';

const refreshTokenUrl = 'http://localhost/bike-store/src/auth/RefreshToken.php';
