function addEventToDeletebuttons() {
  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.target.parentElement.parentElement.remove();
    });
  });
}

(async function getCartItems() {
  try {
    const response = await axios.post(
      cartDetailsUrl,
      {},
      {
        withCredentials: true,
      }
    );
    for (const item of response.data) {
      const cartItem = document.createElement('tr');
      cartItem.innerHTML = `
          <td>${item['product_name']}</td>
          <td>${item['new_price']}</td>
          <td>${item['quantity']}</td>
          <td>${item['new_price']}</td>
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
