const slides = document.querySelectorAll(".slides");
var counter = 0 ;
var slideTimeSpeed = 8000; //speed of slides
slides.forEach(
    (slide,index)=>{
        slide.style.left = `${index * 110}%`
    }
)
const goPrev =()=>{
    if (counter == 0) {
        counter = slides.length - 1;
        slideImage();
        activeDotAnimation();
    } else {
        counter--;
        slideImage();
        activeDotAnimation();
    }
    console.log(counter);
}
const goNext =()=>{
    if (counter == slides.length - 1) {
        document.getElementById('reload-button').style.display='flex';
        document.getElementById('pause-button').style.display='none';
        document.getElementById('play-button').style.display='none';
    } else {
        counter++;
        slideImage();
        activeDotAnimation();
    }
}
const slideImage = () =>{
    slides.forEach(
        (slide) =>{
            slide.style.transform = `translateX(-${counter * 110}%)`
        }
    )
}
// creates the dots according to number of images
function createControllerDots(){ 
    var NumberOfImages=slides.length;
    var CarouselController=document.getElementById('MyCarouselControllerContainer');
    for(var i=0;i<NumberOfImages;i++){
    var new_dot = document.createElement("div");
    new_dot.className = "ControllerDot";
    new_dot.setAttribute("id","Controller-dot-"+i);
    new_dot.setAttribute("onclick",`slideTo(${i})`);
    CarouselController.appendChild(new_dot);
    }
}
//manages the dot animation
function activeDotAnimation(){
    const controllerDots = document.querySelectorAll(".ControllerDot");
    for(var x=0;x<slides.length;x++){
        if(x==counter){
            controllerDots[x].style.width='60px';
            controllerDots[x].style.backgroundColor='#29292A';
        }
        else{
            controllerDots[x].style.width='10px';
            controllerDots[x].style.backgroundColor='#656B64';
        }
    }
}
function slideTo(ImageNumber){
    counter=ImageNumber;
    slideImage();
    activeDotAnimation();
}
var timer = setInterval(goNext, slideTimeSpeed);
function pauseSlider(){
    clearInterval(timer);
    document.getElementById('pause-button').style.display='none';
    document.getElementById('play-button').style.display='flex';
}
function resumeSlider(){
    document.getElementById('pause-button').style.display='flex';
    document.getElementById('play-button').style.display='none';
    timer = setInterval(goNext, slideTimeSpeed);
}
function restartTimer(){
    counter = 0;
    slideImage();
    activeDotAnimation();
    document.getElementById('reload-button').style.display='none';
    document.getElementById('pause-button').style.display='flex';
}
createControllerDots();
activeDotAnimation();
