//Thailand

const track = document.getElementById("image-track");
track.style.cursor = "grab"

   const handleOnDown = (e) => {
    track.dataset.mouseDownAt = e.clientX
    track.style.cursor = "grabbing"
   }
  const handleOnUp = () => {
    track.dataset.mouseDownAt = "0"; 
    if(isNaN(track.dataset.percentage))
    track.dataset.prevPercentage = 0;
    else
    track.dataset.prevPercentage = track.dataset.percentage;
    track.style.cursor = "grab"
  }
  

  const handleOnMove = e => {
    if(track.dataset.mouseDownAt === "0") return;
    
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
          maxDelta = window.innerWidth / 2;
    
    const percentage = (mouseDelta / maxDelta) * -100,
          nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
          nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 50), -50);
          nextPercentage2 = Math.max(Math.min(nextPercentageUnconstrained, 50), -50);
    
    track.dataset.percentage = nextPercentage;
    
    track.animate({
      transform: `translate(${nextPercentage2}%, 0%)`
    }, { duration: 1200, fill: "forwards" });
    
    for(const image of track.getElementsByClassName("image")) {
      image.animate({
        objectPosition: `${50 + nextPercentage}% center`
      }, { duration: 1200, fill: "forwards" });
    }
  }

  /* -- Had to add extra lines for touch events -- */
  const thai_div = document.getElementById("thailand-div")
  
  track.onmousedown = e => handleOnDown(e);
  
  track.ontouchstart = e => handleOnDown(e.touches[0]);
  
  window.onmouseup = e => handleOnUp(e);
  
  window.ontouchend = e => handleOnUp(e.touches[0]);
  
  track.onmousemove = e => handleOnMove(e);
  
  track.ontouchmove = e => handleOnMove(e.touches[0]);


// Start/Stop Animation for Slide Show Vietnam
let imageList = document.getElementById("imageList")
imageList.setAttribute("onmousedown","triggerAnimationSlideShowJapan()")
function triggerAnimationSlideShowJapan(){
  const running = imageList.style.animationPlayState === 'running'
  imageList.style.animationPlayState = running ? 'paused' : 'running'
}
imageList.addEventListener("mousedown", triggerAnimationSlideShowJapan())

//Japan
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "flex";
}