var arrows = document.querySelectorAll(".arrow");
var movielist = document.querySelectorAll(".movie-list")

arrows.forEach((arrow,i)=>{
    var itemNumber =movielist[i].querySelectorAll("img").length;
    var clickCounter = 0;
    arrow.addEventListener("click",() =>{
        clickCounter++;
        if(itemNumber - (5 + clickCounter) >= 0){
            movielist[i].style.transform = `translateX(${
                movielist[i].computedStyleMap().get("transform")[0].x.value
            -170}px)`;
        }else{
            movielist[i].style.transform = "translateX(0)"
            clickCounter = 0;
        }
        
    })
    //console.log(movielist[i].querySelectorAll("img").length);
    
})

var responsiveSlider = function() {

    var slider = document.getElementById("slider");
    var sliderWidth = slider.offsetWidth;
    var slideList = document.getElementById("slideWrap");
    var count = 1;
    var items = slideList.querySelectorAll("li").length;
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    
    window.addEventListener('resize', function() {
      sliderWidth = slider.offsetWidth;
    });
    
    var prevSlide = function() {
      if(count > 1) {
        count = count - 2;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = 1) {
        count = items - 1;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
    };
    
    var nextSlide = function() {
      if(count < items) {
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = items) {
        slideList.style.left = "0px";
        count = 1;
      }
    };
    
    slider.addEventListener("mouseout", function() {
      nextSlide();
    });
    
    prev.addEventListener("click", function() {
      prevSlide();
    });
    
    setInterval(function() {
      nextSlide()
    }, 4000);
    
    };
    
    window.onload = function() {
    responsiveSlider();  
    }