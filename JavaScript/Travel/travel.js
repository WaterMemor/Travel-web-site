/*Smooth scroll*/
function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0,run); 
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if(t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}
var scroll1 = document.querySelector('.scroll1');
scroll1.addEventListener('click', function(){
    smoothScroll('.section2', 1000);
});


/* CHOICE MENU PHONE */
$(document).ready(function(){
    $(".choiceMenuPhone").on("click", ".tabPhone", function(){
        //удаляем классы active
        $(".choiceMenuPhone").find('.active').removeClass("active");

        
        //Добавляем класс active 
        $(this).addClass("active");
        $(".formPhone").eq($(this).index()).addClass("active");
    });
});
/* CHOICE MENU */
$(document).ready(function(){
    $(".dwsForm").on("click", ".tab", function(){
        //удаляем классы active
        $(".dwsForm").find('.active').removeClass("active");

        
        //Добавляем класс active 
        $(this).addClass("active");
        $(".form").eq($(this).index()).addClass("active");
    });
});





/* SLIDER*/
const carouselSlider = document.querySelector('.Slider');
const carouselImages = document.querySelectorAll('.Slider img');

//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');


//counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlider.style.transform = 'translateX(' +(-size * counter + 'px');

//buttom listeners
nextBtn.addEventListener('click', ()=> {
    if (counter >= carouselImages.length -1) return;
    carouselSlider.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlider.style.transform = 'translateX(' +(-size * counter + 'px');
});

prevBtn.addEventListener('click', ()=> {
    if (counter <= 0) return;
    carouselSlider.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlider.style.transform = 'translateX(' +(-size * counter + 'px');
});

carouselSlider.addEventListener('transitionend', ()=>{
    if (carouselImages[counter].id === 'lastClone'){
        carouselSlider.style.transition= "none";
        counter = carouselImages.length -2;
        carouselSlider.style.transform = 'translateX(' +(-size * counter + 'px');
    }
    if (carouselImages[counter].id === 'firstClone'){
        carouselSlider.style.transition= "none";
        counter = carouselImages.length - counter;
        carouselSlider.style.transform = 'translateX(' +(-size * counter + 'px');
    }
});
