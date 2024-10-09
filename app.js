
gsap.registerPlugin(ScrollTrigger);


const sections = document.querySelectorAll(".section");

sections.forEach((section, i) => {
  gsap.fromTo(section, 
    { opacity: 0 }, 
    {
      opacity: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: section,
        start: "top center", 
        end: "bottom center",
        scrub: true,
        onEnter: () => fadeInText(section),
      }
    });
});


function fadeInText(section) {
  gsap.fromTo(
    section.querySelector("h1"),
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
  );
}
