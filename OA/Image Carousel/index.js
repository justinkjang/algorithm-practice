// DOM_SELECTOR
const CAROUSEL_IMG_WRAPPER = document.querySelector('.carousel__img-wrapper');
const CAROUSEL_NEXT_BTN = document.querySelector('.next-btn');
const CAROUSEL_PREV_BTN = document.querySelector('.prev-btn');

let images = [];
let imgIndex = 0;
let slideImg;

// API
function fetchData() {
  return fetch('https://picsum.photos/v2/list').then((res) => res.json());
}

// FUNCTION

// prev&next btn controls
function prevBtnHandler() {
  if (imgIndex === 0) {
    imgIndex = images.length - 1;
  } else {
    imgIndex--;
  }

  clearInterval(slideImg);
  console.log('cleared interval');
  slideImg = setInterval(nextBtnHandler, 2000);

  render(imgIndex);
}
function nextBtnHandler() {
  if (imgIndex === images.length - 1) {
    imgIndex = 0;
  } else {
    imgIndex++;
  }

  clearInterval(slideImg);
  console.log('cleared interval');
  slideImg = setInterval(nextBtnHandler, 2000);

  render(imgIndex);
}

// create an invisible imgNode for every img data we get
function generateImgNode(data) {
  let { download_url } = data;

  const imgNode = document.createElement('img');

  imgNode.classList.add('carousel__img');
  imgNode.src = download_url;

  return imgNode;
}

// Generate image carousel
function generateImgCarousel(dataArr) {
  // push all imgNodes into images variable
  for (let i = 0; i < dataArr.length; i++) {
    let imgNode = generateImgNode(dataArr[i]);
    images.push(imgNode);
  }

  // push all imgNodes into HTML DOM SELECTOR
  CAROUSEL_IMG_WRAPPER.replaceChildren(...images);

  render(imgIndex);
}

function render(idx) {
  for (let img of images) {
    img.style.display = 'none';
  }

  images[idx].style.display = 'block';
}

// INIT
fetchData().then((jsonData) => {
  console.log(`Got array result below: `);
  console.log(jsonData);

  generateImgCarousel(jsonData);
  CAROUSEL_PREV_BTN.addEventListener('click', prevBtnHandler);
  CAROUSEL_NEXT_BTN.addEventListener('click', nextBtnHandler);
  // start auto img slide
  slideImg = setInterval(nextBtnHandler, 2000);
});
