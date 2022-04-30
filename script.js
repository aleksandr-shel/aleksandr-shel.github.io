let divs = document.querySelectorAll('.section-item')

let resume = document.querySelector('.section-item-resume')

divs.forEach(div=>{
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