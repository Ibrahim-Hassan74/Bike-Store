const stars = document.querySelectorAll('.star-rating input');
const feedbackform = document.querySelector('.form-container');
const name = document.getElementById('name');
const interest = document.getElementById('interest');
const commet = document.getElementById('Comment');
// console.log(name, interest, commet);
let rating = 3;
stars.forEach((star) => {
  star.addEventListener('change', function () {
    const clickedStar = this.value;
    rating = clickedStar;
  });
});

feedbackform.addEventListener('submit', async function (event) {
  event.preventDefault();
  const ok = [
    checkRequired([name, interest, commet]),
    checkLength(name, 3, 15),
    checkLength(interest, 3, 10000),
    checkLength(commet, 50, 10000000),
  ];
  if (ok.includes(false)) {
    return;
  }
  const data = {
    name: name.value,
    interest: interest.value,
    comment: commet.value,
    rating: rating,
    token: sessionStorage.getItem('accessToken'),
  };
  try {
    const response = await axios.post(feedbackUrl, data, {
      withCredentials: true,
    });
    alert('Feedback submitted successfully!');
    setTimeout(() => {}, 30000);
    window.location.href = '../index.html';
  } catch (e) {
    alert('Failed to submit feedback');
    console.log('Error: ', e.message);
  }
});
