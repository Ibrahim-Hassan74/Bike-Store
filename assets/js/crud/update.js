(function update() {
  document.getElementById('name').value =
    sessionStorage.getItem('product_name') || '';
  document.getElementById('old-price').value =
    sessionStorage.getItem('old_price') || '';
  document.getElementById('new-price').value =
    sessionStorage.getItem('new_price') || '';
  document.getElementById('description').value =
    sessionStorage.getItem('description') || '';
  document.getElementById('details').value =
    sessionStorage.getItem('details') || '';
  document.getElementById('category').value =
    sessionStorage.getItem('catagory') || '';
  updateForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name');
    const image = document.getElementById('image');
    const oldPrice = document.getElementById('old-price');
    const newPrice = document.getElementById('new-price');
    const description = document.getElementById('description');
    const details = document.getElementById('details');
    const category = document.getElementById('category');
    const data = new FormData(updateForm);
    data.append('product_id', sessionStorage.getItem('product_id'));
    try {
      if (
        checkRequired([
          name,
          newPrice,
          oldPrice,
          description,
          details,
          category,
        ])
      ) {
        const response = await axios.post(updatedModelUrl, data);
        // console.log(data.get('new_price'));
        alert('Model updated successfully');
        console.log(response);
        for (const key in sessionStorage) sessionStorage.removeItem(key);
        window.location.href = 'updateId.html';
      }
    } catch (e) {
      // alert('Error updating model');
      console.log('Error: ', e.message);
    }
  });
})();