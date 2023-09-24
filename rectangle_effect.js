window.addEventListener("mousemove", function (details) {
  var rectSize = document.querySelector(".rect");
  var rangeMap = gsap.utils.mapRange(
    0,
    window.innerWidth,
    100 + rectSize.getBoundingClientRect().width / 2,
    window.innerWidth - (100 + rectSize.getBoundingClientRect().width / 2),
    details.clientX
  );

  gsap.to(".rect", {
    left: rangeMap,
    ease: Power3,
  });
});
