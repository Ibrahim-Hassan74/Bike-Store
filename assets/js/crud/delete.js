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
        // showCustomAlert('Successfully deleted model');
        showCustomAlert(
          'Success',
          'Model deleted successfully',
          'success',
          'Sucessfully deleted'
        );
        window.location.href = 'deleteModel.html';
      }
    } catch (e) {
      // showCustomAlert('the Model Id not found');
      showCustomAlert(
        'Error',
        'the Model Id not found',
        'error',
        'Failed to delete model'
      );
      console.log('Error: ', e.message);
    }
  });
})();
