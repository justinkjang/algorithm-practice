// initially show a 'Show Offer' button
// when clicked, display an overlay, transparent grey,
// x box and accept offer btn
// everything centered
// when x btn clicked, modal dismiss and ui stays show offer
// when accept offer clicked, ui change to offer accepted

const openBtn = document.querySelector('#offer button');
const modal = document.querySelector('#modal');
const accept = document.querySelector('#modal .accept');
const accepted = document.querySelector('#accepted');
openBtn.onclick = () => {
  modal.style.display = 'block';
};
accept.onclick = () => {
  openBtn.style.display = 'none';
  modal.style.display = 'none';
  accepted.style.display = 'block';
};
