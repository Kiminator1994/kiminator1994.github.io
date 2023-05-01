/* const track  = document.getElementById("image-track")

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
  }
  window.onmousemove = e => {
    if(track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX
    maxDelta = window.innerWidth / 2;
    const percentage = (mouseDelta / maxDelta) * -100;
    nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
    nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track.dataset.percentage = nextPercentage

    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
    }, {duration: 1200, fill: "forwards"})
  }

  window.onmouseup = () => {
    track.dataset.mouseDownAt = "0"
    track.dataset.prevPercentage = track.dataset.percentage
  }
 */
  // buttons

  var sliderControl = document.querySelector(".slider-control");

  // slides informations

  var slides = document.querySelectorAll(".slide"),
      slidesLength = slides.length;

  // slides array

  var slidesArr = [].slice.call(slides);

  // reverse array sorting

  slidesArr = slidesArr.reverse();


  // slide current
  var slideCurrent = 0;

  sliderControl.addEventListener("click", function(e){
    target = e.target;

    // Get next button
    if(target.classList.contains("next")){
      next = e.target,
      prev = next.previousElementSibling,
      nextSlide = slidesArr[slideCurrent + 1],
      slide = slidesArr[slideCurrent];

      slide.classList.add("slide-on");
      slide.classList.remove("text-on");
      nextSlide.classList.add("text-on");

      slideCurrent += 1;        
      if(slideCurrent > 0) {
        prev.classList.remove("disabled");
      }         
      if(slideCurrent === slidesLength - 1){
        next.classList.add("disabled");
      }
 }     

 // get prev button
     if(target.classList.contains("prev")){

      slideCurrent -= 1;

      prev = e.target,
      next = prev.nextElementSibling,
      prevSlide = slidesArr[slideCurrent + 1],
      slidesArr[slideCurrent];
      prevSlide.classList.remove("text-on");
      slide.classList.remove("slide-on");
      slide.classList.add("text-on");

      if(slideCurrent === slidesLength - 2){
        next.classList.add("disabled");
      }
      if(slideCurrent === 0){
      prev.classList.add("disabled");}

     }        
});
