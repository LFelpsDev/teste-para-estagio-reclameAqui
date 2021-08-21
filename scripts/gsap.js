document.addEventListener("DOMContentLoaded", () => {
  var t1 = gsap.timeline();

  t1.from("#efeito-gsap1", {
    duration: 1.4,
    y: 50,
    opacity: 0,
    delay: 0.6,
    ease: "power3.out",
  },
  "-=0.8"
  )
    .from(
      "#efeito-gsap2",
      {
        duration: 1.2,
        y: 50,
        opacity: 0,
        ease: "power3.out",
      },
      "-=0.8"
    )
    .from(
      ".efeito-gsap3",
      {
        duration: 1.4,
        y: 50,
        opacity: 0,
        ease: "power3.out",
      },
      "-=0.8"
    )
    .from(
      "#efeito-gsap4",
      {
        duration: 1.2,
        y: 50,
        opacity: 0,
        ease: "power3.out",
      },
      "-=0.8"
    )
    .from(
      "#efeito-gsap5",
      {
        duration: 1.2,
        y: 50,
        opacity: 0,
        ease: "power3.out",
      },
      "-=0.8"
    )
})