let name = '';
let value = '';
if (currentFileName === 'accessories.html') {
  name = 'accessories';
  value = '.container';
} else if (currentFileName === 'mountain.html') {
  name = 'mountain';
  value = '.electric-bike';
} else {
  name = 'electric';
  value = '.electric-bike'; // Set a default value for 'electric'
}

(async function getdetailsOfItems() {
  try {
    const response = await axios.get(`${getDataUrl}?category=${name}`);
    console.log(response);
    const data = response.data.products;
    for (const item of response.data.products) {
      // Change this to iterate over the array items
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      cardElement.innerHTML = `
      <div class="card-image">
          <img src="${item.image}" alt="bike" />
        </div>
        <div class="card-content">
          <p id="product_id">${item.product_id}</p>
          <ul class="card-list">
            <li class="card-name">
              <ion-icon name="bicycle-outline" class="card-icon"></ion-icon>
              <h3 class="card-title">${item.product_name}</h3>
            </li>
          </ul>
          <div class="card-price">
            <span>${item.new_price}</span>
          </div>
          <p class="card-description">${item.description}</p>
          <p class="card-text">
            ${item.details}
          </p>
          <a href="#">Add to cart</a>
        </div>
      `;
      if (document.querySelector(value)) {
        document.querySelector(value).appendChild(cardElement);
        cardElement.addEventListener('click', () => {
          const imageUrl = cardElement.querySelector('.card-image img').src;
          const cardTitle = cardElement.querySelector('.card-title').innerHTML;
          const cardPrice =
            cardElement.querySelector('.card-price span').innerHTML;
          const cardDescription =
            cardElement.querySelector('.card-description').innerHTML;
          const cardText = cardElement.querySelector('.card-text').innerHTML;
          const productId = cardElement.querySelector('#product_id').innerHTML;

          console.log(productId);
          sessionStorage.setItem('productId', productId);
          sessionStorage.setItem('imageUrl', imageUrl);
          sessionStorage.setItem('cardTitle', cardTitle);
          sessionStorage.setItem('cardPrice', cardPrice);
          sessionStorage.setItem('cardDescription', cardDescription);
          sessionStorage.setItem('cardText', cardText);
          window.location.href = 'details.html';
        });
      } else {
        console.error(`Element with selector '${value}' not found`);
      }
    }
  } catch (e) {
    console.log('Error:', e.message);
  }
})();
/* 

                "product_id" => $result['product_id'],
                'prodict_name' => $result['product_name'],
                "category" => $result["category"],
                "old_price" => $result["old_price"],
                "new_price" => $result["new_price"],
                "details" => $result["details"],
                "description" => $result["description"],
                "image" => $result["image"],
                "stock" => $result['stock'],


<div class="card">
        <div class="card-image">
          <img src="../assets/img/accessories/bike1.jpg" alt="electric bike" />
        </div>
        <div class="card-content">
          <p id="product_id">10</p>
          <ul class="card-list">
            <li class="card-name">
              <ion-icon name="bicycle-outline" class="card-icon"></ion-icon>
              <h3 class="card-title">Bike Lock Heavy Duty</h3>
            </li>
          </ul>
          <div class="card-price">
            <span>$39.99</span>
          </div>
          <p class="card-description">Secure bike lock</p>
          <p class="card-text">
            The Bike Lock Heavy Duty is designed to provide maximum security for
            your bicycle. Made from hardened steel, it’s resistant to cutting
            and tampering, ensuring your bike stays safe when parked.
          </p>
          <a href="#">Add to cart</a>
        </div>
      </div>

      */
