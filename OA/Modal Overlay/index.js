// GET MODAL
const modal = document.querySelector('.modal');
// GET BTN
const openBtn = document.querySelector('.open-btn');
// GET CLOSE BTN
const closeBtn = document.querySelector('.modal__close-btn');
// GET ACCEPT BTN
const acceptBtn = document.querySelector('.modal__accept-btn');
// GET LANDING PAGE DIV
const landingPage = document.querySelector('.landing-page');

// Open Modal
openBtn.onclick = function () {
  modal.style.display = 'block';
};
// Close Modal with btn
closeBtn.onclick = function () {
  modal.style.display = 'none';
};
// Close Modal with background click
window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
};
// Close Modal on ESC key press
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modal.style.display = 'none';
  }
});

// Click Accept Btn
acceptBtn.onclick = function () {
  let textNode = document.createElement('h1');
  textNode.innerHTML = 'Offer Accepted';
  textNode.style.textAlign = 'center';

  landingPage.replaceChildren(textNode);

  modal.style.display = 'none';
};
