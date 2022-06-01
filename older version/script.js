let sectiondivs = document.querySelectorAll('.section-item')

let resume = document.querySelector('.section-item-resume')

let navitems = document.querySelectorAll('.nav-link');

function onVisisble(element, callback){
    new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry => {
            if(entry.intersectionRatio > 0) {
              callback(element);
            //   observer.disconnect();
            }
          });
    }).observe(element);
}

function changeActiveLink(navitemId){
    navitems.forEach(item => {
        item.classList.remove('active')
        if (item.getAttribute("href").substring(1) === navitemId){

            item.classList.add('active')
        }
    })
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    console.log(rect.top + rect.bottom)
    return (
        rect.top + rect.bottom >= 0.5 * window.innerHeight
    );
}

sectiondivs.forEach(div=>{
    onVisisble(div, (div)=>{
        div.classList.add('animation-fadein')
        setTimeout(() => {
            div.classList.remove('animation-fadein')
        }, 1000);
    })
})

onVisisble(resume, (resume)=>{
    resume.classList.add('animation-fadein')
    setTimeout(() => {
        resume.classList.remove('animation-fadein')
    }, 1000);
})