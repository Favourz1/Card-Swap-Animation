// GSAP script.js
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Helper function to set which card is active (no overlay)
  // and which are inactive (overlay)
  function setActiveCard(activeSelector) {
    const allCards = document.querySelectorAll(".card");
    allCards.forEach((card) => card.classList.add("overlay-card"));
    const activeCard = document.querySelector(activeSelector);
    if (activeCard) {
      activeCard.classList.remove("overlay-card");
    }
  }

  // Helper function to update header text based on active card
  function updateHeaderText(cardNumber) {
    const headerElement = document.querySelector(".cards-section-header");
    if (!headerElement) return;

    // Define card-specific content
    const cardContent = {
      1: "Card 1: Project Planning & Scheduling",
      2: "Card 2: Cost Estimation & Quantity Surveying",
      3: "Card 3: Site Management & Safety Protocols",
      4: "Card 4: Construction Materials & Methods",
      5: "Card 5: Quality Control & Assurance",
      1000: "Card Mobile: Evaluation",
    };

    // Update the header text
    headerElement.textContent = cardContent[cardNumber] || "Cards Animation";
  }

  // Only enable pinned scroll animation on screens >= 768px
  if (window.innerWidth >= 768) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cards-section",
        start: "top top",
        end: "+=4000", // Adjust as needed for a longer/shorter pinned section
        scrub: true,
        pin: true,
        // markers: true, // Uncomment for debugging
        onUpdate: (self) => {
          // Determine which section we're in based on progress
          const progress = self.progress;
          if (progress < 0.2) {
            updateHeaderText(1);
          } else if (progress < 0.4) {
            updateHeaderText(2);
          } else if (progress < 0.6) {
            updateHeaderText(4);
          } else if (progress < 0.8) {
            updateHeaderText(5);
          } else {
            updateHeaderText(3);
          }
        },
      },
    });

    // -------------------------------------------------------------------------
    // We have 5 cards: card-1 (center initially), card-2, card-3, card-4, card-5.
    // The timeline has 4 major "steps" as we bring each new card from the right to center.
    // At each step, we adjust:
    //   - left (to move them left/center/right)
    //   - scale (1 for center, 0.8 for near behind, 0.6 for far behind)
    //   - z-index (3 for center, 2 for near behind, 1 for far behind)
    //   - overlay-card class (removed from the center card, added to others)
    // All cards remain at top: 50% so they stay vertically centered.
    // -------------------------------------------------------------------------

    // Immediately declare which card is active at the start (card-1)
    // This .call() fires at the very beginning (time=0)
    tl.call(
      () => {
        setActiveCard(".card-1");
        updateHeaderText(1);
      },
      null,
      0
    );

    // STEP 1:
    // Move Card 2 to center; Card 1 goes near-left behind; Card 3 far-left behind
    // Card 4 near-right behind; Card 5 far-right behind.
    tl.to(
      ".card-1",
      {
        top: "50%",
        left: "20%",
        transform: "translate(-50%, -50%) scale(0.8)",
        zIndex: 2,
        duration: 1,
      },
      0
    )
      .to(
        ".card-2",
        {
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) scale(1)",
          zIndex: 3,
          duration: 1,
        },
        0
      )
      .to(
        ".card-3",
        {
          top: "50%",
          left: "-5%",
          transform: "translate(-50%, -50%) scale(0.6)",
          zIndex: 1,
          duration: 1,
        },
        0
      )
      .to(
        ".card-4",
        {
          top: "50%",
          left: "70%",
          transform: "translate(-50%, -50%) scale(0.8)",
          zIndex: 2,
          duration: 1,
        },
        0
      )
      .to(
        ".card-5",
        {
          top: "50%",
          left: "80%",
          transform: "translate(-50%, -50%) scale(0.6)",
          zIndex: 1,
          duration: 1,
        },
        0
      )
      // After step 1 completes, card-2 is active
      .call(() => {
        setActiveCard(".card-2");
        updateHeaderText(2);
      });

    // STEP 2:
    // Move Card 4 to center; Card 2 goes near-left behind; Card 1 far-left behind
    // Card 5 near-right behind; Card 3 far-right behind.
    tl.to(".card-4", {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%) scale(1)",
      zIndex: 3,
      duration: 1,
    })
      .to(
        ".card-2",
        {
          top: "50%",
          left: "20%",
          transform: "translate(-50%, -50%) scale(0.8)",
          zIndex: 2,
          duration: 1,
        },
        "<"
      )
      .to(
        ".card-1",
        {
          top: "50%",
          left: "-5%",
          transform: "translate(-50%, -50%) scale(0.6)",
          zIndex: 1,
          duration: 1,
        },
        "<"
      )
      .to(
        ".card-5",
        {
          top: "50%",
          left: "70%",
          transform: "translate(-50%, -50%) scale(0.8)",
          zIndex: 2,
          duration: 1,
        },
        "<"
      )
      .to(
        ".card-3",
        {
          top: "50%",
          left: "80%",
          transform: "translate(-50%, -50%) scale(0.6)",
          zIndex: 1,
          duration: 1,
        },
        "<"
      )
      // After step 2 completes, card-4 is active
      .call(() => {
        setActiveCard(".card-4");
        updateHeaderText(4);
      });

    // STEP 3:
    // Move Card 5 to center; Card 4 goes near-left behind; Card 2 far-left behind
    // Card 3 near-right behind; Card 1 far-right behind.
    tl.to(".card-5", {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%) scale(1)",
      zIndex: 3,
      duration: 1,
    })
      .to(
        ".card-4",
        {
          top: "50%",
          left: "20%",
          transform: "translate(-50%, -50%) scale(0.8)",
          zIndex: 2,
          duration: 1,
        },
        "<"
      )
      .to(
        ".card-2",
        {
          top: "50%",
          left: "-5%",
          transform: "translate(-50%, -50%) scale(0.6)",
          zIndex: 1,
          duration: 1,
        },
        "<"
      )
      .to(
        ".card-3",
        {
          top: "50%",
          left: "70%",
          transform: "translate(-50%, -50%) scale(0.8)",
          zIndex: 2,
          duration: 1,
        },
        "<"
      )
      .to(
        ".card-1",
        {
          top: "50%",
          left: "80%",
          transform: "translate(-50%, -50%) scale(0.6)",
          zIndex: 1,
          duration: 1,
        },
        "<"
      )
      // After step 3 completes, card-5 is active
      .call(() => {
        setActiveCard(".card-5");
        updateHeaderText(5);
      });

    // STEP 4:
    // Move Card 3 to center; Card 5 goes near-left behind; Card 4 far-left behind
    // Card 1 near-right behind; Card 2 far-right behind.
    tl.to(".card-3", {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%) scale(1)",
      zIndex: 3,
      duration: 1,
    })
      .to(
        ".card-5",
        {
          top: "50%",
          left: "20%",
          transform: "translate(-50%, -50%) scale(0.8)",
          zIndex: 2,
          duration: 1,
        },
        "<"
      )
      .to(
        ".card-4",
        {
          top: "50%",
          left: "-5%",
          transform: "translate(-50%, -50%) scale(0.6)",
          zIndex: 1,
          duration: 1,
        },
        "<"
      )
      .to(
        ".card-1",
        {
          top: "50%",
          left: "70%",
          transform: "translate(-50%, -50%) scale(0.8)",
          zIndex: 2,
          duration: 1,
        },
        "<"
      )
      .to(
        ".card-2",
        {
          top: "50%",
          left: "80%",
          transform: "translate(-50%, -50%) scale(0.6)",
          zIndex: 1,
          duration: 1,
        },
        "<"
      )
      // After step 4 completes, card-3 is active
      .call(() => {
        setActiveCard(".card-3");
        updateHeaderText(3);
      });

    // Handle edge case: if user quickly scrolls or jumps to a specific section
    ScrollTrigger.addEventListener("scrollEnd", function () {
      const progress = tl.scrollTrigger.progress;
      if (progress < 0.2) {
        setActiveCard(".card-1");
        updateHeaderText(1);
      } else if (progress < 0.4) {
        setActiveCard(".card-2");
        updateHeaderText(2);
      } else if (progress < 0.6) {
        setActiveCard(".card-4");
        updateHeaderText(4);
      } else if (progress < 0.8) {
        setActiveCard(".card-5");
        updateHeaderText(5);
      } else {
        setActiveCard(".card-3");
        updateHeaderText(3);
      }
    });
  } else {
    // For mobile view, remove overlay and scale all cards to 1
    const allCards = document.querySelectorAll(".card");
    allCards.forEach((card) => {
      card.classList.remove("overlay-card");
      gsap.set(card, {
        scale: 1,
        transform: "none",
      });
    });

    // Set default header text for mobile
    updateHeaderText(1000);
  }
});
