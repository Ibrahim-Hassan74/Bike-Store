const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
  card.addEventListener('click', (event) => {
    const clickedCard = event.currentTarget;
    const imageUrl = clickedCard.querySelector('.card-image img').src;
    const cardTitle = clickedCard.querySelector('.card-title').innerHTML;
    const cardPrice = clickedCard.querySelector('.card-price span').innerHTML;
    const cardDescription =
      clickedCard.querySelector('.card-description').innerHTML;
    const cardText = clickedCard.querySelector('.card-text').innerHTML;
    const productId = clickedCard.querySelector('#product_id').innerHTML;
    // console.log('Clicked Card Details:');
    console.log(productId);
    sessionStorage.setItem('productId', productId);
    sessionStorage.setItem('imageUrl', imageUrl);
    sessionStorage.setItem('cardTitle', cardTitle);
    sessionStorage.setItem('cardPrice', cardPrice);
    sessionStorage.setItem('cardDescription', cardDescription);
    sessionStorage.setItem('cardText', cardText);
    window.location.href = 'details.html';
    // console.log('Image URL:', imageUrl);
    // console.log('Card Title:', cardTitle);
    // console.log('Card Price:', cardPrice);
    // console.log('Card Description:', cardDescription);
    // console.log('Card Text:', cardText);

    // You can now use the extracted data as needed
  });
});
