const open = document.querySelector('.bar');
const close  = document.querySelector('.close_bar');

var tl =  new TimelineMax();

tl.to('nav' , .5, {
    right : 0,
    ease: Power4.easeOut
    
}).to('nav' , .5 , {
    height: '100vh',
    ease: Power3.easeOut
}).staggerTo('nav ul li' , .3 , {
    opacity : 1, 
    delay : -.7
}, .2).to('.close_bar' , .5 , {
    opacity: 1,
    delay : -.5
    // pointerEvents : 'all'
});

tl.stop();

open.addEventListener('click' , function(){
    tl.play();
})

close.addEventListener('click' , function () {
    tl.reverse();
})



