// working

// Start/Stop Animation for Slide Show Japan
let imageList = document.getElementById("imageList")
imageList.setAttribute("onmousedown","triggerAnimationSlideShowJapan()")
function triggerAnimationSlideShowJapan(){
  const running = imageList.style.animationPlayState === 'running'
  imageList.style.animationPlayState = running ? 'paused' : 'running'
}
imageList.addEventListener("mousedown", triggerAnimationSlideShowJapan())

//Thailand

const track = document.getElementById("image-track");
track.style.cursor = "grab"

   const handleOnDown = (e) => {
    track.dataset.mouseDownAt = e.clientX
    track.style.cursor = "grabbing"
   }
  const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";  
    track.dataset.prevPercentage = track.dataset.percentage;
    track.style.cursor = "grab"
  }
  

  const handleOnMove = e => {
    if(track.dataset.mouseDownAt === "0") return;
    
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
          maxDelta = window.innerWidth / 2.2;
    
    const percentage = (mouseDelta / maxDelta) * -100,
          nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
          nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
          nextPercentage2 = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
    
    track.dataset.percentage = nextPercentage;
    
    track.animate({
      transform: `translate(${50 + nextPercentage2}%, 0%)`
    }, { duration: 1200, fill: "forwards" });
    
    for(const image of track.getElementsByClassName("image")) {
      image.animate({
        objectPosition: `${100 + nextPercentage}% center`
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




  /* Fade in */

 /*  //Vietnam

  const track_vietnam = document.getElementById("image-track-vietnam");
  track_vietnam.style.cursor = "grab"

   const handleOnDown_vietnam = (e) => {
    track_vietnam.dataset.mouseDownAt = e.clientX
    track_vietnam.style.cursor = "grabbing"
   }
  const handleOnUp_vietnam = () => {
    track_vietnam.dataset.mouseDownAt = "0";  
    track_vietnam.dataset.prevPercentage = track.dataset.percentage;
    track_vietnam.style.cursor = "grab"
  }
  

  const handleOnMove_vietnam = e => {
    if(track_vietnam.dataset.mouseDownAt === "0") return;
    
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
          maxDelta = window.innerWidth / 2.2;
    
    const percentage = (mouseDelta / maxDelta) * -100,
          nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
          nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
          nextPercentage2 = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
    
    track_vietnam.dataset.percentage = nextPercentage;
    
    track_vietnam.animate({
      transform: `translate(${50 + nextPercentage2}%, 0%)`
    }, { duration: 1200, fill: "forwards" });
    
    for(const image of track_vietnam.getElementsByClassName("image")) {
      image.animate({
        objectPosition: `${100 + nextPercentage}% center`
      }, { duration: 1200, fill: "forwards" });
    }
  }

  /* -- Had to add extra lines for touch events -- 
  const vietnam_div = document.getElementById("vietnam-div")
  
  track_vietnam.onmousedown = e => handleOnDown_vietnam(e);
  
  track_vietnam.ontouchstart = e => handleOnDown_vietnam(e.touches[0]);
  
  window.onmouseup = e => handleOnUp_vietnam(e);
  
  window.ontouchend = e => handleOnUp_vietnam(e.touches[0]);
  
  track_vietnam.onmousemove = e => handleOnMove_vietnam(e);
  
  track_vietnam.ontouchmove = e => handleOnMove_vietnam(e.touches[0]);
 */