const open = document.querySelector('.bar');
const close  = document.querySelector('.close_bar');

var tl =  new TimelineMax();

tl.to('nav' , 1 , {
    right : 0
}).to('nav' , 1 , {
    height: '100vh',
    ease: Back.easeOut
}).staggerTo('nav ul li' , 1 , {
    opacity : 1,
}, .2).to('.close_bar' , 1 , {
    opacity: 1,
    delay : -.7
    // pointerEvents : 'all'
});

tl.stop();

open.addEventListener('click' , function(){
    tl.play();
})

close.addEventListener('click' , function () {
    tl.reverse();
})



