(function create() {
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
})();
