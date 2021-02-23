console.log('打包webpack');
//套件引入
// import $ from "jquery";
import Vue from 'vue';
import { TweenMax } from "gsap";

// css 引入
// import './style.css';

//scss 引入
import './style.scss';

// jquery
$('body').css('background' , '#eee');


//gsap
TweenMax.to('.box' , 1 ,{
    x: 500,
    y : 400,
    rotation : 360,
    // backgroundColor : '#999'
});

const num = (a , b ) => a * b ;

console.log(num(40 , 10));



