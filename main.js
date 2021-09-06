import ScrollMagic from "scrollmagic";

const scrollSpyEls = document.querySelectorAll(".scroll-spy");

function setScrollSpy() {
  scrollSpyEls.forEach((spyEl) => {
    new ScrollMagic.Scene({
        triggerElement: spyEl,
        triggerHook: .8
      })
      .setClassToggle(spyEl, "show")
      .addTo(new ScrollMagic.Controller());
  });
}

function init() {
  setScrollSpy();
}

init();