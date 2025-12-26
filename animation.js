// Initialize Lenis Smooth Scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Update ScrollTrigger on Lenis scroll
lenis.on("scroll", ScrollTrigger.update);


// ============ STACKED SCROLL EFFECT ============

// Select all sections that should stack
const sections = gsap.utils.toArray("section");

// document.querySelectorAll("section h1").forEach(h1 => {
//   const text = h1.innerText;
//   h1.innerHTML = "";
//   [...text].forEach(letter => {
//     const span = document.createElement("span");
//     span.classList.add("char");
//     span.textContent = letter;
//     h1.appendChild(span);
//   });
// });

// document.querySelectorAll("section h1").forEach(h1 => {
//   gsap.to(h1.querySelectorAll(".char"), {
//     y: 10,                // final position
//     opacity: 1,          // final opacity
//     stagger: 0.05,
//     ease: "power3.out",
//     repeat: -1,
//     scrollTrigger: {
//       trigger: h1,
//       start: "top bottom",      // when h1 top reaches bottom of viewport
//       end: "bottom top",        // when h1 bottom leaves top of viewport
//       scrub: true,              // link animation to scroll
//       // markers: true          // enable for debugging
//     }
//   });
// });
// sections.forEach((section, index) => {
//   // Skip the first section (hero) as it will be the base
//   if (index === 0) return;

//   // const heading = section.querySelector("a"); // or whatever element acts as heading
//   // const clonedHeading = heading.cloneNode(true);

//   // ScrollTrigger.create({
//   //   trigger: section,
//   //   start: "top top",
//   //   markers: true,
//   //   pin: true,
//   //   // pinSpacing: false,
//   //   scrub: true,
//   // });

//   // Add scale and opacity animation as sections stack
//   gsap.to(section, {
//     // scale: 0.95,
//     // opacity: 0.95,
//     scrollTrigger: {
//       trigger: section,
//       start: "top top", // Top of section   Viewport
//       end: "bottom top",
//       pin: true,
//       pinSpacing: false,
//       scrub: true,
//     },
//   });
// });



// Hero Section Animations
// gsap.from("#aspire-role span", {
//   y: -50,
//   opacity: 0,
//   stagger: 0.06,
//   duration: 0.6,
//   ease: "power2.out",
//   scrollTrigger: {
//     trigger: ".reveal",
//     start: "top 80%",
//   },
// });

// gsap.from("#first-name", {
//   x: -100,
//   opacity: 0,
//   duration: 1,
//   delay: 0.4,
// });

// gsap.from("#last-name", {
//   x: 100,
//   opacity: 0,
//   duration: 1,
//   delay: 0.4,
// });

// gsap.from(".meta li", {
//   y: 50,
//   opacity: 0,
//   duration: 0.8,
//   stagger: 0.2,
//   delay: 0.8,
// });

// gsap.from(".hero-subtitle", {
//   y: 30,
//   opacity: 0,
//   duration: 1,
//   delay: 1.2,
// });

// gsap.from(".quick-links button", {
//   y: 30,
//   opacity: 0,
//   duration: 0.8,
//   stagger: 0.2,
//   delay: 1.4,
// });

// // Project Cards Animation
// gsap.from(".project-card", {
//   scrollTrigger: {
//     trigger: ".projects-grid",
//     start: "top 80%",
//     end: "bottom 20%",
//     toggleActions: "play none none reverse",
//   },
//   y: 100,
//   // opacity: 0,
//   duration: 0.8,
//   stagger: 0.2,
// });

document.querySelectorAll(".skill-icons li").forEach((container) => {
  // const heading = querySelectorAll()
  const skill = container.querySelector("i");
  container.addEventListener("mouseenter", () => {
    if (skill.classList.contains("fa-stripe")) skill.style.color = "#635BFF";
    if (skill.classList.contains("devicon-nextjs-plain")) skill.style.color = "#fff";

    skill.classList.add("colored", "custom-skills-bg");
    skill.classList.remove("custom-skills-white");
  });
  container.addEventListener("mouseleave", () => {
    if (skill.classList.contains("fa-stripe")) skill.style.color = "#888888";  
    if (skill.classList.contains("devicon-nextjs-plain")) skill.style.color = "#888";

      skill.classList.remove("colored");
    skill.classList.add("custom-skills-white");
  });

  const tip = container.querySelector(".tooltip");
  container.addEventListener("mouseenter", () => {
    gsap.to(tip, {
      y: -2,
      opacity: 1,
      duration: 0.1,
      ease: "power1.out",
    });
  });
  container.addEventListener("mouseleave", () => {
    gsap.to(tip, {
      y: 2,
      opacity: 0,
      duration: 0.1,
      ease: "power2.in",
    });
  });
});

// White glow of each category
document.querySelectorAll(".skill-category").forEach((cat) => {
  const h3 = cat.querySelector("h3");
  cat.addEventListener("mouseenter", () => {
    h3.classList.add("hover-glow-text");
  });
  cat.addEventListener("mouseleave", () => {
    h3.classList.remove("hover-glow-text");
  });
});

document.querySelectorAll(".skill-icons li").forEach((container) => {
  // const heading = querySelectorAll()
  const skill = container.querySelector("i");
  container.addEventListener("mouseenter", () => {
    if (skill.classList.contains("fa-stripe")) skill.style.color = "#635BFF";
    if (skill.classList.contains("devicon-nextjs-plain")) skill.style.color = "#fff";

    skill.classList.add("colored", "custom-skills-bg");
    skill.classList.remove("custom-skills-white");
  });
  container.addEventListener("mouseleave", () => {
    if (skill.classList.contains("fa-stripe")) skill.style.color = "#888888";  
    if (skill.classList.contains("devicon-nextjs-plain")) skill.style.color = "#888";

      skill.classList.remove("colored");
    skill.classList.add("custom-skills-white");
  });

  const tip = container.querySelector(".tooltip");
  container.addEventListener("mouseenter", () => {
    gsap.to(tip, {
      y: -2,
      opacity: 1,
      duration: 0.1,
      ease: "power1.out",
    });
  });
  container.addEventListener("mouseleave", () => {
    gsap.to(tip, {
      y: 2,
      opacity: 0,
      duration: 0.1,
      ease: "power2.in",
    });
  });
});

// White glow of each category
document.querySelectorAll(".skill-category").forEach((cat) => {
  const h3 = cat.querySelector("h3");
  cat.addEventListener("mouseenter", () => {
    h3.classList.add("hover-glow-text");
  });
  cat.addEventListener("mouseleave", () => {
    h3.classList.remove("hover-glow-text");
  });
});

// Glow effect for Experience and Education titles, subtitles, YOE ,and dates
// Each element glows according the its darkness level, so whiter glow lighter where as those with bg-500 glow but slightly darker and so on
// Colors also change to white on hover on div experience box and education box, not individual
document.querySelectorAll(".experience-box, .education-box").forEach((box) => {
  box.addEventListener("mouseenter", () => {
    box.querySelectorAll(".experience-title, .education-title, .yoe-title").forEach((title) => {
      title.classList.add("hover-glow-text");
    });
    box.querySelectorAll(".experience-subtitle, .education-subtitle, .yoe span, .date").forEach((subtitle) => {
      subtitle.classList.add("hover-glow-text-sub");
    });
  });
  box.addEventListener("mouseleave", () => {
    box.querySelectorAll(".experience-title, .education-title, .yoe-title").forEach((title) => {
      title.classList.remove("hover-glow-text");
    });
    box.querySelectorAll(".experience-subtitle, .education-subtitle, .yoe span, .date").forEach((subtitle) => {
      subtitle.classList.remove("hover-glow-text-sub");
    });
  });
});




// Smooth Navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      lenis.scrollTo(target, { duration: 2 });
    }
  });
});

// Quick links functionality
document.querySelector(".contact-link")?.addEventListener("click", () => {
  lenis.scrollTo("#contact", { duration: 2 });
});

document.querySelector(".projects-btn")?.addEventListener("click", () => {
  lenis.scrollTo("#projects", { duration: 2 });
});

gsap.to(follower, { x: x, y: y, duration: 0.2 });
