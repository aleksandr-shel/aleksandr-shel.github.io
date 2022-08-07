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

console.log('hello')