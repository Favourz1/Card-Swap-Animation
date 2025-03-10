document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Only enable the pinned scroll animation if the device width is >= 768px
  if (window.innerWidth >= 768) {
    // Create a GSAP timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cards-section",
        start: "top top",
        end: "+=2000", // Adjust scroll distance as needed
        scrub: true,
        pin: true,
        // markers: true, // Uncomment for debugging markers
      },
    });

    // STEP 1 (from 0% to ~33% of the scroll):
    // - Move Card1 to the left behind
    // - Move Card2 to center front
    tl.to(
      ".card-1",
      {
        left: "30%", // from 50% to 30%
        zIndex: 1, // behind
        duration: 1,
      },
      0
    )
      .to(
        ".card-2",
        {
          left: "50%", // from 70% to 50%
          zIndex: 3, // front
          duration: 1,
        },
        0
      )
      .to(
        ".card-3",
        {
          left: "70%",
          zIndex: 1, // behind card 1 and 2
          duration: 1,
        },
        0
      );

    // STEP 2 (from ~33% to ~66% of the scroll):
    // - Move Card2 to the left behind
    // - Move Card3 to center front
    tl.to(
      ".card-2",
      {
        left: "30%", // from 50% to 30%
        zIndex: 1,
        duration: 1,
      },
      1
    ) // Start at timeline position 1 (the end of step 1)
      .to(
        ".card-3",
        {
          left: "50%", // from 30% to 50%
          zIndex: 3,
          duration: 1,
        },
        1
      )
      .to(
        ".card-1",
        {
          left: "70%",
          zIndex: 2,
          duration: 1,
        },
        1
      );

    // STEP 3 (from ~66% to 100% of the scroll):
    // - Show all 3 cards in the center side-by-side
    tl.to(
      ".card-3",
      {
        left: "30%", // place card3 slightly right
        zIndex: 1,
        duration: 1,
      },
      2
    )
      .to(
        ".card-1",
        {
          left: "50%", // place card1 slightly left
          zIndex: 3,
          duration: 1,
        },
        2
      )
      .to(
        ".card-2",
        {
          left: "70%", // place card2 center
          zIndex: 2,
          duration: 1,
        },
        2
      );

    // As the user scrolls back up, the timeline will reverse automatically
    // because scrub is set to true.
  }
});
