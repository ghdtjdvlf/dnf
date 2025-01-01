const bgElements = [
  document.querySelector('.bg1'),
  document.querySelector('.bg2'),
  document.querySelector('.bg3'),
  document.querySelector('.bg4')
];

const cElements = [
  [document.querySelector('.c1'), document.querySelector('.c2')],
  [document.querySelector('.c3'), document.querySelector('.c4')],
  [document.querySelector('.c5'), document.querySelector('.c6')],
  [document.querySelector('.c7'), document.querySelector('.c8')]
];

const tElements = [
  [document.querySelector('.t1'), document.querySelector('.t2')],
  [document.querySelector('.t3'), document.querySelector('.t4')],
  [document.querySelector('.t5'), document.querySelector('.t6')],
  [document.querySelector('.t7'), document.querySelector('.t8')]
];

const buttons = [
  document.querySelector('#btn1'),
  document.querySelector('#btn2'),
  document.querySelector('#btn3'),
  document.querySelector('#btn4')
];

const rightBtn = document.querySelector('.right_btn');
const leftBtn = document.querySelector('.left_btn');

let currentImage = 0;

// Helper function to update the UI
function updateUI(index) {
  // Hide all elements
  bgElements.forEach(bg => bg.classList.remove('show'));
  cElements.flat().forEach(c => c.classList.remove('show'));
  tElements.flat().forEach(t => t.classList.remove('show'));
  buttons.forEach(btn => btn.classList.remove('on'));

  // Show elements for the current index
  bgElements[index].classList.add('show');
  cElements[index].forEach(c => c.classList.add('show'));
  tElements[index].forEach(t => t.classList.add('show'));
  buttons[index].classList.add('on');
}

// Initialize buttons
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    currentImage = index;
    updateUI(currentImage);
  });
});

// Right button event
rightBtn.addEventListener('click', () => {
  currentImage = (currentImage + 1) % bgElements.length;
  updateUI(currentImage);
});

// Left button event
leftBtn.addEventListener('click', () => {
  currentImage = (currentImage - 1 + bgElements.length) % bgElements.length;
  updateUI(currentImage);
});

// Initialize UI
updateUI(currentImage);
