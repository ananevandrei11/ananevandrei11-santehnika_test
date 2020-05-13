import 'bootstrap';
import './style.scss';
import '@fortawesome/fontawesome-free';
import 'jquery';


// images
import './images/logo-min.png'
import './images/logo-shop-min.png'
import './images/banner-min.png'
import './images/faucet-min.png'
import './images/bath-min.png'
import './images/sink-min.png'
import './images/towel-dryer-min.png'
import './images/rozmari-min.png'
import './images/suon-min.png'
import './images/claida-min.png'
import './images/contemporari-min.png'
import './images/shower-min.jpg'
import './images/bathtub-min.jpg'
import './images/toilet-bowl-min.jpg'
import './images/toilet-bowl-2-min.jpg'
import './images/cz.png'
import './images/ch.png'
import './images/tr.png'
import './images/ru.png'
import './images/sink-articles-min.png'

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        dots:false,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:false,
                loop:false
            }
        }
    })
});