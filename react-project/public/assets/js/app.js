// navbar
const getElemet = (selector) => {
  const element = document.querySelector(selector)
  console.log(links);
  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}

const links = getElemet('.nav-links')
const navBtnDOM = getElemet('.nav-btn')

navBtnDOM.addEventListener('click',()=>{
  links.classList.toggle('show-links')
})
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let slider = document.querySelector('.slider');
let slides = document.querySelectorAll('.slide');
let slide_img = document.querySelectorAll('.slide img');

// dot
let i = 1;
slides.forEach(() => {
  let dot = document.createElement('li');
  dot.classList.add('dot');
  dot.setAttribute('data-index', i++);
  document.querySelector('.slider-dot').appendChild(dot);
})
let dots = document.querySelectorAll('.dot');
dots[0].classList.add('active');


let width = slides[0].getBoundingClientRect().width;

window.addEventListener('resize', () => {
  width = slides[0].getBoundingClientRect().width;
});

let slide_length = slide_img.length;
let index = 0;

// refactor

function SlideMove(i) {
  slider.style.transform = `translate(-${width * i}px)`;
  dots.forEach((dot) => {
    dot.classList.remove('active');
  });
  dots[i].classList.add('active');
}

function slideTransition(yes) {
  if (yes) {
    slider.style.transition = 'transform 0.5s ease-in-out';
  } else {
    slider.style.transition = 'none';
  }
}

next.addEventListener('click', () => {
  if (index === slide_length - 1) {
    setTimeout(() => {
      index = 0;
      slider.style.transform = `translate(0px)`;
      dots.forEach((dot) => {
        dot.classList.remove('active');
      });
      dots[index].classList.add('active');
      slideTransition();
    }, 300);
  } else {
    index++;
    SlideMove(index);
    slideTransition("yes");
  }
});
prev.addEventListener('click', () => {
  if (index === 0) {
    setTimeout(() => {
      index = slide_length - 1;
      slideTransition();
      SlideMove(index);
    }, 300);
  } else {
    index--;
    slideTransition("yes");
    SlideMove(index);
  }
  console.log(links);
  console.log(navBtnDOM);
  console.log(prev);
  console.log(next);
  console.log(slider);
  console.log(slides);
  console.log(slide_img);
  console.log(dots);  
})
