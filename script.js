function locoScroll() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
  });

  locoScroll.on('scroll', ScrollTrigger.update);

  ScrollTrigger.scrollerProxy('#main', {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector('#main').style.transform
      ? 'transform'
      : 'fixed',
  });

  ScrollTrigger.addEventListener('refresh', () => locoScroll.update());

  ScrollTrigger.refresh();
}
locoScroll();

function cursorEffect() {
  var page1Content = document.querySelector('#page1-content');
  var cursor = document.querySelector('#cursor');

  page1Content.addEventListener('mousemove', function (dets) {
    // console.log(dets.x);
    // cursor.style.left = dets.x + "px";
    // cursor.style.top = dets.y + "px";
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
    });
  });
  page1Content.addEventListener('mouseenter', function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });
  page1Content.addEventListener('mouseleave', function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}
cursorEffect();

function page2Animation() {
  gsap.from('.elem h1', {
    y: 120,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: '#page2',
      scroller: '#main',
      start: 'top 40%',
      end: 'top 37%',
      // markers:"true",
      scrub: 2,
    },
  });
}
// page2Animation();
// function page3Animation(){
//     gsap.from(".elem h1",{
//         y:120,
//         stagger:0.2,
//         duration:1,
//         scrollTrigger:{
//             trigger:"#page3",
//             scroller:"#main",
//             start:"top 40%",
//             end:"top 37%",
//             // markers:"true",
//             scrub:2
//         }
//     })
// }
// page3Animation();
function cursorEffect2() {
    var page4 = document.querySelector('#page4');
    var cursor2 = document.querySelector('#cursor2');
  
    page4.addEventListener('mousemove', function (dets) {
    //   console.log(dets.x);
    //   cursor2.style.left = dets.x + "px";
    //   cursor2.style.top = dets.y + "px";
      gsap.to(cursor2, {
        x: dets.x,
        y: dets.y,
      });
    });
    page4.addEventListener('mouseenter', function () {
      gsap.to(cursor2, {
        scale: 1,
        opacity: 1,
      });
    });
    page4.addEventListener('mouseleave', function () {
      gsap.to(cursor2, {
        scale: 0,
        opacity: 0,
      });
    });
  }
cursorEffect2();

function sliderAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
          },
      });
}
sliderAnimation();

var tl = gsap.timeline();
tl.from("#loader h3",{
    x:40,
    opacity:0,
    duration:1,
    stagger:0.1,
})
tl.to("#loader h3",{
    opacity:0,
    x:-40,
    duration:1,
    stagger:0.1,
})
tl.to("#loader",{
    opacity:0,
    display:"none",
})
tl.from("#page1-content h1 span",{
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.1,
    delay:-0.1,
})