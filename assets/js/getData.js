let name = '';
let value = '';
if (currentFileName === 'accessories.html') {
  name = 'accessories';
  value = '.container';
} else if (currentFileName === 'mountain') {
  name = 'mountain';
  value = '.electric-bike';
} else {
  name = 'electric';
}

(async function getdetailsOfItems() {
  try {
    const response = await axios.get(getDataUrl, {
      headers: {
        category: name,
      },
    });
    // console.log(response);
    const data = response.data.products;
    for (const key in data) {
      const item = document.createElement('div');
      item.classList.add('card');
      item.innerHTML = `
      <div class="card-image">
          <img src="${key['image']}" alt="electric bike" />
        </div>
        <div class="card-content">
          <p id="product_id">${key['product_id']}</p>
          <ul class="card-list">
            <li class="card-name">
              <ion-icon name="bicycle-outline" class="card-icon"></ion-icon>
              <h3 class="card-title">${key['product_name']}</h3>
            </li>
          </ul>
          <div class="card-price">
            <span>${key['new_price']}</span>
          </div>
          <p class="card-description">${key['description']}</p>
          <p class="card-text">
            ${key['details']}
          </p>
          <a href="#">Add to cart</a>
        </div>
      `;
      document.querySelector(value).appendChild(item);
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
