const currentFileName = window.location.pathname.split('/').pop();
// console.log(currentFileName);

if (currentFileName === 'updateId.html') {
  updateFormId.addEventListener('submit', async (e) => {
    e.preventDefault();
    const modelId = document.getElementById('id');
    const updatedModel = {
      product_id: modelId.value,
    };
    // console.log(checkRequired([modelId]));
    try {
      if (checkRequired([modelId])) {
        const response = await axios.post(udateModelIdUrl, updatedModel);
        for (const key in response.data)
          sessionStorage.setItem(key, response.data[key]);
        window.location.href = 'updateModel.html';
      }
    } catch (e) {
      alert('the Model Id not found');
      console.log('Error: ', e.message);
    }
  });
} else if (currentFileName === 'updateModel.html') {
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
} else if (currentFileName === 'deleteModel.html') {
  deleteForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const modelId = document.getElementById('id');
    const deleteId = {
      product_id: modelId.value,
    };
    try {
      if (checkRequired([modelId])) {
        const response = await axios.post(deleteModelUrl, deleteId);
        alert('Successfully deleted model');
        window.location.href = 'deleteModel.html';
      }
    } catch (e) {
      alert('the Model Id not found');
      console.log('Error: ', e.message);
    }
  });
} else if (currentFileName === 'addModel.html') {
  addForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name');
    const image = document.getElementById('image');
    const oldPrice = document.getElementById('old-price');
    const newPrice = document.getElementById('new-price');
    const description = document.getElementById('description');
    const details = document.getElementById('details');
    const category = document.getElementById('category');
    const data = new FormData(addForm);
    try {
      if (
        checkRequired([
          name,
          image,
          oldPrice,
          newPrice,
          description,
          details,
          category,
        ])
      ) {
        const response = await axios.post(addModelUrl, data);
        alert('Model added successfully');
        window.location.href = '/my-component/addModel.html';
      }
    } catch (e) {
      alert('Failed to add model');
      console.log(e.message);
    }
  });
}
