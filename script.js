// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    // console.log(top)
    if(top >=100) {
        header.classList.remove('displayNone')
    }
    else {
        header.classList.add('displayNone')
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

//get mouse location
let cursor_x = -1;
let cursor_y = -1;
document.onmousemove = function(event)
{
    cursor_x = event.pageX;
    cursor_y = event.pageY;
}
//shark
let shark = document.querySelector('.shark')
let i = 0;
// setInterval(() => {
//     i++;
//     shark.style.left = `${i}%`
//     shark.style.top = `${(cursor_y/window.innerHeight)*100}%`
//     if (i === 100){
//         i = 0;
//     }
//     // console.log(cursor_x, cursor_y)
// }, 1000);


// bubbles handler later
const bubbles = document.querySelectorAll('.wrapper > div:not(.container-fluid, .shark)');

bubbles.forEach(bubble=>{
    bubble.addEventListener('click', (e)=>{
        console.log(e.target);
    })
})


//scrollable appearance
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});

