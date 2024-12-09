(function create() {
  details.innerHTML = `
        <div class="img-box">
          <img src="${sessionStorage.getItem('imageUrl')}" alt="bike image" />
        </div>
        <div class="content">
          <h3 class="name-bike">${sessionStorage.getItem('cardTitle')}</h3>
          <h4 class="price-bike">${sessionStorage.getItem('cardPrice')}</h4>
          <p class="degree-bike">${sessionStorage.getItem(
            'cardDescription'
          )}</p>
          <div class="quantity-box">
            <label for="quantity">Quantity:</label>
            <input
              type="number"
              min="1"
              max="1000"
              value="1"
              name="quantity"
              id="quantity"
            />
          </div>
          <button class="btn-cart" id="add-to-cart">Add to cart</button>
          <p class="description">
            ${sessionStorage.getItem('cardText')}
          </p>
        </div>
    `;
  const quantity = document.getElementById('quantity');
  quantity.addEventListener('input', (e) => {
    if (e.target.value > 100) {
      e.target.value = 100;
    }
    if (e.target.value < 1) {
      e.target.value = 1;
    }
  });
  const btn = document.querySelector('.btn-cart');
  btn.addEventListener('click', (e) => {
    let data = {
      name_bike: sessionStorage.getItem('cardTitle'),
      quantity: quantity.value,
    };
    console.log(data);
    try {
      const response = axios.post(addcart, data, {
        withCredentials: true,
      });
      alert(`${quantity.value} bike has been added to the cart successfully`);
      console.log(response);
    } catch (error) {
      console.log('Error:', error.message);
    }
  });
})();
