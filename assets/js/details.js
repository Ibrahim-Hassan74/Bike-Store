function create() {
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
          <a href="#" class="btn-cart">Add to cart</a>
          <p class="description">
            ${sessionStorage.getItem('cardText')}
          </p>
        </div>
    `;
}

create();
