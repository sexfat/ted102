//物件選取 秒數 位移
TweenMax.to('.box1', 2, {
    x: 600,
    // width: '100%',
    y: 600,
    repeat: 1, 
    delay : 1,
    repeatDelay: 1,
    rotation : 360,
    scale : 3,
    opacity : 1, 
    ease: Elastic.easeOut //補間
    // ease: Bounce.easeOut
});