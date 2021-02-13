const hamburger = document.querySelector(".hamburger");
const lineOne = document.querySelector(".line-one");
const lineTwo = document.querySelector(".line-two");
const lineThree = document.querySelector(".line-three");

const lines = [lineOne, lineTwo, lineThree];

var tl = gsap.timeline();

var toggleMenu = gsap.timeline({paused: true});
toggleMenu.reversed(true); //It is important to set init(initial) state to true

const nextStateMap = {
  true: () => {
    toggleMenu.play();
    toggleMenu.reversed(false);
  },
  false: () => {
    toggleMenu.reverse();
    toggleMenu.reversed(true);
  },
};

toggleMenu
.to(lineTwo, 0.25, {transformOrigin: "50% 50%", scale:0}, 0)
.to(lineThree, 0.25, {transformOrigin: "50% 50%"},"change")
.to(lineOne, 0.25, {transformOrigin: "50% 50%"}, "change")
.to(lineThree, 0.25, {y:-15}, 0)
.to(lineOne, 0.25, {y:15}, 0)
.to(lineThree, 0.25, {rotation: -45}, "cross")
.to(lineOne, 0.25, {rotation: 45}, "cross")

hamburger.addEventListener('click', () => {
  const isReversed = toggleMenu.reversed();
  hamburger.classList.toggle("js-x");
  nextStateMap[isReversed]();
})

