function locoSroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("  #main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
locoSroll();

function cursorEffect(){
    const page1Content=document.querySelector('#page1-content');
    const cursor=document.querySelector('#cursor');
// page1Content.addEventListener("mousemove",function(e){
//     cursor.style.left=e.x+"px";
//     cursor.style.top=e.y+"px";

// });


page1Content.addEventListener("mousemove",function(e){
   gsap.to(cursor,{
    x:e.x,
    y:e.y
   });
});

page1Content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1 
     })
 });
 page1Content.addEventListener("mouseleave",function(){
     gsap.to(cursor,{
        scale:0,
        opacity:0
     })
});


}
cursorEffect();

function page2animation() {
  gsap.from(".ele h4",{
    y:60,
    stagger: .5,
    duration: 2,
    opacity:0,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      // start: "top 30%",
      // end: "bottom 80%",
      delay:0.5,
      scrub: 2,
      // markers:true,
    }
  });
}
page2animation();

function page2elementanimation(){
gsap.from("#page2-content h1", {
  opacity: 0, 
  y: 80, 
  duration: 2, 
  scrollTrigger: {
    trigger: "#page2-content", 
    scroller: "#main",
    // start: "top 30%", 
    // end: "bottom 80%", 
    scrub: 2, 
    // markers:true,
    
  }
});
}
page2elementanimation();

function page3animation1(){
  gsap.from("#page3-top h4",{
    opacity:0,
    y:-100,
    duration:1,
    stagger:0.9,
    scrollTrigger:{
      trigger:"#page3-top",
      scroller:"#main",
      // start: "top 30%", 
      // end: "bottom 80%", 
      scrub: 2, 
      // markers:true,
    }
  });
}
page3animation1();

function page3animation2(){
  gsap.from("#page3-top h2",{
    opacity:0,
    y:100,
    duration:1,
    stagger:0.9,
    scrollTrigger:{
      trigger:"#page3-top",
      scroller:"#main",
      // start: "top 30%", 
      // end: "bottom 80%", 
      scrub: 2, 
      // markers:true,
    }
  });
}
page3animation2();


function page3afteranimation(){
  gsap.from("#page3top h4",{
    opacity:0,
    y:70,
    duration:2,
    
    scrollTrigger:{
      trigger:"#page3top",
      scroller:"#main",
      // start: "top 30%", 
      // end: "bottom 80%", 
      scrub: 2, 
      // markers:true,
    }
  });
}
page3afteranimation();

function page3after1animation(){
gsap.from("#page3last h1",{
  opacity:0,
  y:70,
  duration:0.5,
  stagger:1,
  scrollTrigger:{
    trigger:"#page3top",
    scroller:"#main",
    // start: "top 30%", 
    // end: "bottom 80%", 
    scrub: 2, 
    // markers:true,
  }
});
}
page3after1animation();

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
function slideranimation(){
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay:{
    delay:2500,
    disableOnInteraction:true,
  },
});
}
slideranimation()

var t1=gsap.timeline()
t1.from("#loader h3",{
  x:40,
  duration:1,
  opacity:0,
  stagger:0.1
})

t1.to("#loader h3",{
  opacity:0,
  x:-40,
  duration:1,
  stagger:0.2
})

t1.to("#loader",{
  opacity:0
})

t1.from("#page1-content h1 span",{
  y:100,
  
  opacity:0,
  stagger:0.5,
  duration:0.5,
  delay:-0.1
})

t1.to("#loader",{
  display:"none"
})


function page6animation(){
  gsap.from("#page6-content h4",{
    opacity:0,
    y:70,
    duration:0.5,
    stagger:1,
    scrollTrigger:{
      trigger:"#page6",
      scroller:"#main",
      // start: "top 20%", 
      // end: "bottom 80%", 
      scrub:5, 
      // markers:true,
    }
  });
  }
  page6animation();


  function page6animation1(){
    gsap.from("#page6-content h2",{
      opacity:0,
      y:70,
      duration:1,
      stagger:1,
      scrollTrigger:{
        trigger:"#page6",
        scroller:"#main",
        // start: "top 20%", 
        // end: "bottom 80%", 
        scrub: 5, 
        // markers:true,
      }
    });
    }
    page6animation1();


    function page7animation(){
      gsap.from("#page7-content nav",{
        opacity:0,
        y:-70,
        duration:1,
        stagger:0.2,
        scrollTrigger:{
          trigger:"#page7",
          scroller:"#main",
          // start: "top 20%", 
          // end: "bottom 90%", 
          scrub: 5, 
          // markers:true,
        }
      });
    }
    page7animation();

    function page7animation1(){
      gsap.from("#page7-content section",{
        opacity:0,
        y:-40,
        duration:0.3,
        stagger:0.2,
        scrollTrigger:{
          trigger:"#page7",
          scroller:"#main",
          // start: "top 20%",  
          scrub: 5, 
          
        }
      });
    }
    page7animation1();

    function page7animation2(){
      gsap.from("#page7-content span",{
        opacity:0,
        y:-100,
        duration:0.9,
        stagger:0.6,
        scrollTrigger:{
          trigger:"#page7",
          scroller:"#main",
          // start: "top 20%",
          // end: "bottom 100%",   
          scrub: 5, 
          
        }
      });
    }
    page7animation2();



