// script.js
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Only enable pinned scroll animation on screens >= 768px
  if (window.innerWidth >= 768) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cards-section",
        start: "top top",
        // Adjust this end distance if you want a shorter/longer pinned scroll
        end: "+=4000",
        scrub: true,
        pin: true,
        // markers: true, // Uncomment for debugging
      },
    });

    // -------------------------------------------------------------------------
    // Each "step" in this timeline brings the next card from the right to center
    // and shifts all other cards accordingly (left behind, far left, right behind, far right).
    // Positions, scales, z-index, and overlay classes are updated for each step.
    // -------------------------------------------------------------------------

    // STEP 1 (time=0 to time=1):
    // Move Card 2 to center; Card 1 goes to left behind; Card 3 goes far left;
    // Card 4 goes right behind; Card 5 goes far right.
    tl.to(
      ".card-1",
      {
        top: "40%",
        left: "20%",
        scale: 0.8,
        zIndex: 2,
        duration: 1,
        onStart: () => {
          document.querySelector(".card-1").classList.add("overlay-card");
        },
      },
      0
    )
      .to(
        ".card-2",
        {
          top: "50%",
          left: "50%",
          scale: 1,
          zIndex: 3,
          duration: 1,
          onStart: () => {
            document.querySelector(".card-2").classList.remove("overlay-card");
          },
        },
        0
      )
      .to(
        ".card-3",
        {
          top: "30%",
          left: "-5%",
          scale: 0.6,
          zIndex: 1,
          duration: 1,
          onStart: () => {
            document.querySelector(".card-3").classList.add("overlay-card");
          },
        },
        0
      )
      .to(
        ".card-4",
        {
          top: "40%",
          left: "70%",
          scale: 0.8,
          zIndex: 2,
          duration: 1,
          onStart: () => {
            document.querySelector(".card-4").classList.add("overlay-card");
          },
        },
        0
      )
      .to(
        ".card-5",
        {
          top: "30%",
          left: "80%",
          scale: 0.6,
          zIndex: 1,
          duration: 1,
          onStart: () => {
            document.querySelector(".card-5").classList.add("overlay-card");
          },
        },
        0
      );

    // STEP 2 (time=1 to time=2):
    // Move Card 4 to center; Card 5 to right behind; Card 3 far right;
    // Card 2 left behind; Card 1 far left.
    tl.to(".card-4", {
      top: "50%",
      left: "50%",
      scale: 1,
      zIndex: 3,
      duration: 1,
      onStart: () => {
        document.querySelector(".card-4").classList.remove("overlay-card");
      },
    })
      .to(
        ".card-5",
        {
          top: "40%",
          left: "70%",
          scale: 0.8,
          zIndex: 2,
          duration: 1,
          onStart: () => {
            document.querySelector(".card-5").classList.add("overlay-card");
          },
        },
        "<"
      ) // "<" means start at the same time as the previous tween
      .to(
        ".card-3",
        {
          top: "30%",
          left: "80%",
          scale: 0.6,
          zIndex: 1,
          duration: 1,
          onStart: () => {
            document.querySelector(".card-3").classList.add("overlay-card");
          },
        },
        "<"
      )
      .to(
        ".card-2",
        {
          top: "40%",
          left: "20%",
          scale: 0.8,
          zIndex: 2,
          duration: 1,
          onStart: () => {
            document.querySelector(".card-2").classList.add("overlay-card");
          },
        },
        "<"
      )
      .to(
        ".card-1",
        {
          top: "30%",
          left: "-5%",
          scale: 0.6,
          zIndex: 1,
          duration: 1,
          onStart: () => {
            document.querySelector(".card-1").classList.add("overlay-card");
          },
        },
        "<"
      );

    // STEP 3 (time=2 to time=3):
    // Move Card 5 to center; Card 3 to right behind; Card 1 far right;
    // Card 4 left behind; Card 2 far left.
    tl.to(".card-5", {
      top: "50%",
      left: "50%",
      scale: 1,
      zIndex: 3,
      duration: 1,
      onStart: () => {
        document.querySelector(".card-5").classList.remove("overlay-card");
      },
    })
      .to(
        ".card-3",
        {
          top: "40%",
          left: "70%",
          scale: 0.8,
          zIndex: 2,
          duration: 1,
          onStart: () => {
            document.querySelector(".card-3").classList.add("overlay-card");
          },
        },
        "<"
      )
      .to(
        ".card-1",
        {
          top: "30%",
          left: "80%",
          scale: 0.6,
          zIndex: 1,
          duration: 1,
          onStart: () => {
            document.querySelector(".card-1").classList.add("overlay-card");
          },
        },
        "<"
      )
      .to(
        ".card-4",
        {
          top: "40%",
          left: "20%",
          scale: 0.8,
          zIndex: 2,
          duration: 1,
          onStart: () => {
            document.querySelector(".card-4").classList.add("overlay-card");
          },
        },
        "<"
      )
      .to(
        ".card-2",
        {
          top: "30%",
          left: "-5%",
          scale: 0.6,
          zIndex: 1,
          duration: 1,
          onStart: () => {
            document.querySelector(".card-2").classList.add("overlay-card");
          },
        },
        "<"
      );

    // STEP 4 (time=3 to time=4):
    // Move Card 3 to center; Card 1 to right behind; Card 2 far right;
    // Card 5 left behind; Card 4 far left.
    tl.to(".card-3", {
      top: "50%",
      left: "50%",
      scale: 1,
      zIndex: 3,
      duration: 1,
      onStart: () => {
        document.querySelector(".card-3").classList.remove("overlay-card");
      },
    })
      .to(
        ".card-1",
        {
          top: "40%",
          left: "70%",
          scale: 0.8,
          zIndex: 2,
          duration: 1,
          onStart: () => {
            document.querySelector(".card-1").classList.add("overlay-card");
          },
        },
        "<"
      )
      .to(
        ".card-2",
        {
          top: "30%",
          left: "80%",
          scale: 0.6,
          zIndex: 1,
          duration: 1,
          onStart: () => {
            document.querySelector(".card-2").classList.add("overlay-card");
          },
        },
        "<"
      )
      .to(
        ".card-5",
        {
          top: "40%",
          left: "20%",
          scale: 0.8,
          zIndex: 2,
          duration: 1,
          onStart: () => {
            document.querySelector(".card-5").classList.add("overlay-card");
          },
        },
        "<"
      )
      .to(
        ".card-4",
        {
          top: "30%",
          left: "-5%",
          scale: 0.6,
          zIndex: 1,
          duration: 1,
          onStart: () => {
            document.querySelector(".card-4").classList.add("overlay-card");
          },
        },
        "<"
      );

    // As the user scrolls back up, the timeline reverses these steps automatically.
  }
});
