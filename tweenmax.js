//物件選取 秒數 位移
TweenMax.to('.box1', 2, {
    x: 600,
    // width: '100%',
    //y: 600,
    // repeat: -1, 
    yoyo: true,
    //delay : 1,
    repeatDelay: 1,
    // rotation : 360,
    // scale : 3,
    opacity : 0,
    backgroundColor : '#fff', 
    //ease: Elastic.easeOut //補間
    // ease: Bounce.easeOut
});


var tl = new TimelineMax({
  repeat: 1,
  yoyo: true,
  onComplete : alerts //callback

});

tl.stop();

function alerts(){

    TweenMax.to('body' , 1 ,{
        backgroundColor : '#f20'
    });
    // alert('背景變色');  
}

tl.to('.box2' , 1 , {
    x: 600
}).to('.box2' ,1 , {
    y: 200
}).to('.box2',1 , {
    x: 400
}).to('.box3' , 1 , {
    rotation : 360
});

document.getElementById('play').onclick = function () {
   tl.play();
}









