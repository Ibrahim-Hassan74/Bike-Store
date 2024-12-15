function addEventToDeletebuttons() {
  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', async (event) => {
      const deleteFromCart = event.target.parentElement.parentElement;
      try {
        const response = await axios.post(
          deleteCartItemUrl,
          {
            cart_item_id:
              +deleteFromCart.querySelector('.cart-item-id').textContect,
          },
          {
            withCredentials: true,
          }
        );
        event.target.parentElement.parentElement.remove();
      } catch (error) {
        console.log('Error:', error.message);
      }
    });
  });
}

(async function getCartItems() {
  try {
    const response = await axios.post(
      cartDetailsUrl,
      {
        token: localStorage.getItem('accessToken'),
      },
      {
        withCredentials: true,
      }
    );
    for (const item of response.data.cart_items) {
      const cartItem = document.createElement('tr');
      cartItem.innerHTML = `
          <td class="cart-item-id">${item['cart_item_id']}</td>
          <td>${item['product_name']}</td>
          <td>${item['new_price']}</td>
          <td>${item['quantity']}</td>
          <td>${parseInt(item['new_price']) * parseInt(item['quantity'])}</td>
          <td class="delete">
              <ion-icon class="delete-btn" name="trash"></ion-icon>
          </td>
        `;
      document.querySelector('.cart-table').appendChild(cartItem);
    }
    addEventToDeletebuttons();
  } catch (err) {
    console.log(err.message);
  }
})();

/*


<tr>
            <td>Electric Cruiser 200</td>
            <td>$974.99</td>
            <td>1</td>
            <td>$974.99</td>
            <td class="delete">
              <ion-icon class="delete-btn" name="trash"></ion-icon>
            </td>
          </tr>
          <tr>
            <td>Electric Cruiser 200</td>
            <td>$974.99</td>
            <td>2</td>
            <td>$1800.99</td>
            <td class="delete">
              <ion-icon class="delete-btn" name="trash"></ion-icon>
            </td>
          </tr>
          <tr>
            <td>Electric Cruiser 200</td>
            <td>$100</td>
            <td>3</td>
            <td>$300</td>
            <td class="delete">
              <ion-icon class="delete-btn" name="trash"></ion-icon>
            </td>
          </tr>

*/
