window.addEventListener("contextmenu", function(e) {
    console.log(e);
    })



var side=document.getElementById("side");
var navhead=document.getElementById("nav-head");
var btn=document.getElementById("switch-content");
var navlist=document.getElementById("d");
var container=document.querySelectorAll("container");


var container = document.querySelectorAll(".container");
var side = document.getElementById("side");
var btn = document.getElementById("switch-content");
var x = true;

btn.onclick = function() {
    if (x) {
      navlist.style.cssText=`
      display: none;
      `;
        side.style.cssText = `
            width: 60px;
            height: 100%;
            border-left: 1px solid #222;
            background-color: #111;
            top: 0;
            left: 150px;
            transition: all .4s;

        `;
        navhead.style.cssText=`
        -webkit-transform: translateX(0);
        transform: translateX(0);
        background-color: #111;
        width: 150px;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999999999999;
        `;

        for (var i = 0; i < container.length; i++) {
            container[i].style.cssText = `
                -webkit-transform-style: preserve-3d;
                transform-style: preserve-3d;
                -webkit-transform: perspective(10000px) translateZ(50px) rotateY(14deg);
                transform: perspective(10000px) translateZ(50px) rotateY(14deg);
                -webkit-perspective: 10000px;
                perspective: 10000px;
            `;
        }
    } else {
        navlist.style.cssText=`
            display: block;
      `;
        side.style.cssText = `
            position: fixed;
            top: 0;
            left: 0px;
            height: 100%;
            width: 70px;
            background-color: #111;
            border-radius: 4px 0 0 4px;
            box-shadow: 0 -1px 17px 1px rgba(0, 0, 0, .09);
            text-align: center;
            line-height: 20px;
            font-size: 22px;
            z-index: 111;
            transition: all .4s;

        `;
        navhead.style.cssText=`
        translateX(-150px);
        background-color: #111;
        width: 150px;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999999999999;
        transition: all .4s;

        `;
        for (var i = 0; i < container.length; i++) {
            container[i].style.cssText = `
                transform-style: initial;
                transform: initial;
                perspective: initial;
            `;
        }
    }
    x = !x;
};





// loading
const loading = document.querySelector('.loading');


window.addEventListener("contextmenu", function(e) {
    console.log(e);
    })


$('.switch-content').click(function(){
$('.nav-head').css("width","150px" );
});

window.addEventListener("load", function(){
    setTimeout(function() {
     loading.classList.add('opacity-0', 'invisible')
     document.body.style.overflow= 'auto'
    }, 800)
    })


// number counting
let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});





$(document).ready(function(){
    $("#myCarousel").carousel({interval: 2000});
      
    $(".item1").click(function(){
      $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
      $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
      $("#myCarousel").carousel(2);
    });
    $(".item4").click(function(){
      $("#myCarousel").carousel(3);
    });
      
    $(".left").click(function(){
      $("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
      $("#myCarousel").carousel("next");
    });
  });
  $(document).ready(function(){
    $("#carouselExampleRide").carousel({interval: 3000});
      
    $(".left").click(function(){
      $("#carouselExampleRide").carousel("prev");
    });
    $(".right").click(function(){
      $("#carouselExampleRide").carousel("next");
    });
  });

  //video
  var vid=document.getElementById("vid");
  var play=document.getElementsByClassName("fa-play");
  var xmark=document.getElementsByClassName("fa-xmark")[0];
  var span=document.querySelector('span');

   

  
for(var i=0; i<play.length; i++){
   play[i].addEventListener("click", function() {
   vid.style.cssText=`
      display: block !important;

      `;
      document.body.style.overflow= 'hidden'


    })
}
 

  vid.addEventListener("click", function() {
    document.body.style.overflow= 'auto'
    vid.style.cssText=`
    display: none !important;
    `;
  })
  xmark.addEventListener("click", function() {
    document.body.style.overflow= 'auto'
    vid.style.cssText=`
    display: none !important;
    `;
  })