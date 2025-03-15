// function addEventToDeletebuttons() {
//   const deleteButtons = document.querySelectorAll('.delete-btn');
//   deleteButtons.forEach((button) => {
//     button.addEventListener('click', async (event) => {
//       const cnt = document.querySelectorAll('.delete-btn');
//       const deleteFromCart = event.target.parentElement.parentElement;
//       try {
//         const response = await axios.post(
//           deleteCartItemUrl,
//           {
//             cart_item_id:
//               +deleteFromCart.querySelector('.cart-item-id').textContent,
//           },
//           {
//             withCredentials: true,
//           }
//         );
//         event.target.parentElement.parentElement.remove();
//         if (cnt.length === 1) {
//           const emptyCart = document.createElement('p');
//           emptyCart.textContent = 'Your cart is empty.';
//           emptyCart.classList.add('empty-cart');
//           document.querySelector('.cart-container').innerHTML = '';
//           document.querySelector('.cart-container').appendChild(emptyCart);
//         }
//       } catch (error) {
//         console.log('Error:', error.message);
//       }
//     });
//   });
// }
function addEventToDeletebuttons() {
  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', async (event) => {
      event.preventDefault();
      const deleteFromCart = event.target.parentElement.parentElement;
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      });
      if (result.isConfirmed) {
        try {
          const response = await axios.post(
            deleteCartItemUrl,
            {
              cart_item_id:
                +deleteFromCart.querySelector('.cart-item-id').textContent,
            },
            {
              withCredentials: true,
            }
          );
          const cnt = document.querySelectorAll('.delete-btn');
          deleteFromCart.remove();
          if (cnt.length === 1) {
            const emptyCart = document.createElement('p');
            emptyCart.textContent = 'Your cart is empty.';
            emptyCart.classList.add('empty-cart');
            document.querySelector('.cart-container').innerHTML = '';
            document.querySelector('.cart-container').appendChild(emptyCart);
          }
          Swal.fire('Deleted!', 'Your item has been removed.', 'success');
        } catch (error) {
          console.log('Error:', error.message);
          Swal.fire('Error!', 'Failed to delete the item.', 'error');
        }
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
    const table = document.createElement('table');
    table.classList.add('cart-table');
    const tableHeader = document.createElement('tr');
    tableHeader.classList.add('header-table');
    tableHeader.innerHTML = `
            <th class="cart-item-id">Cart ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th></th>`;
    table.appendChild(tableHeader);
    let ok = false;
    for (const item of response.data.cart_items) {
      ok = true;
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
      table.appendChild(cartItem);
    }
    if (ok) {
      document.querySelector('.cart-container').appendChild(table);
      document.querySelector(
        '.cart-container'
      ).innerHTML += `<div class="btn-check">
          <a href="checkout.html" class="login-button">Check out</a>
        </div>`;
      addEventToDeletebuttons();
    } else {
      const emptyCart = document.createElement('p');
      emptyCart.textContent = 'Your cart is empty.';
      emptyCart.classList.add('empty-cart');
      document.querySelector('.cart-container').appendChild(emptyCart);
    }
  } catch (err) {
    console.log(err.message);
  }
})();
