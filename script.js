document.addEventListener("DOMContentLoaded", () => {
  // Sticky header transition on scroll
  const header = document.querySelector(".site-header");
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  };

  // Run scroll handler once on load to set initial state
  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });

  // Scroll reveal trigger using Intersection Observer
  const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          // Stop observing once reveal animation has played
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px", // triggers slightly before entering the full screen
    }
  );

  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });
});
