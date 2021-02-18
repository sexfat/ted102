console.log('打包webpack');
//套件引入
import $ from "jquery";
import { TweenMax } from "gsap";

// jquery
$('body').css('background' , '#f25');


//gsap
TweenMax.to('.box' , 1 ,{
    x: 500,
    y : 100,
    rotation : 180,
    backgroundColor : '#eee'
})



