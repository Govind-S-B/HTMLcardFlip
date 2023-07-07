const card = document.querySelector('.card');
const body = document.querySelector('body');

card.addEventListener('mouseenter', () => {
  body.style.backgroundImage = "url('image.jpg')"; // Replace with your image URL
})

card.addEventListener('mouseleave', () => {
  body.style.backgroundImage = "none";
});
