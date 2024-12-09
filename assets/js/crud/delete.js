(function deleteModel() {
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
})();
