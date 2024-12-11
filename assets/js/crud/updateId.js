(function updateId() {
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
})();