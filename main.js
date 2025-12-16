// const navLinks = document.querySelectorAll(".nav-links a");

// // const sectionColors = Array.from(sections).map(section => {
// //     window.getComputedStyle(section).backgroundColor
// // })

// // [#-bg-100 - #eef3f9, bg-200 - #b3cde4, bg-600 - #1d3f58, bg-700 - #001b2e]

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         const bgColor = window.getComputedStyle(entry.target).backgroundColor;

//         // Decide nav link color
//         navLinks.forEach((link) => {
//           switch (bgColor) {
//             case "rgb(249, 248, 246)":
//               link.style.color = "rgb(0, 0, 0)";
//               break;
//             case "rgb(0, 0, 0)":
//               link.style.color = "rgb(249, 248, 246)";
//             // break;
//             // case "rgb(29, 63, 88)":
//             //   link.style.color = "rgb(238, 243, 249)";
//             //   break;
//             // case "rgb(0, 27, 46)":
//             //   link.style.color = "rgb(179, 205, 228)";
//             //   break
//             default:
//           }
//         });
//       }
//     });
//   },
//   { threshold: 0.5 } // fires when 50% of section is visible
// );

// sections.forEach((section) => observer.observe(section));


const blobs = document.querySelectorAll(".cursor-blob");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const isTouchDevice = 'ontouchstart' in window && window.matchMedia("(pointer: coarse)").matches;

let mouseX = 0;
let mouseY = 0;

// Only enable cursor on non-touch devices
if (!isTouchDevice) {
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const blobPositions = Array.from(blobs).map(() => ({ x: 0, y: 0 }));

  function animate() {
    if (prefersReducedMotion.matches || blobs.length === 0) {
      return;
    }

    blobs.forEach((blob, index) => {
      const pos = blobPositions[index];
      const speed = Math.max(0.08, 0.24 - index * 0.04);
      pos.x += (mouseX - pos.x) * speed;
      pos.y += (mouseY - pos.y) * speed;
      blob.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
    });

    requestAnimationFrame(animate);
  }

  if (!prefersReducedMotion.matches) {
    animate();
  }

  prefersReducedMotion.addEventListener("change", (event) => {
    if (!event.matches) {
      blobs.forEach((blob) => (blob.style.opacity = ""));
      requestAnimationFrame(animate);
    } else {
      blobs.forEach((blob) => (blob.style.opacity = 0));
    }
  });
} else {
  // Hide cursor container on touch devices
  const cursorContainer = document.querySelector('.cursor-container');
  if (cursorContainer) {
    cursorContainer.style.display = 'none';
  }
}

// ================== EmailJS ==================

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')


const serviceID = "YOUR_SERVICE_ID";
const templateID = "YOUR_TEMPLATE_ID";
const publicKey = "YOUR_PUBLIC_KEY";


const sendEmail = async (e) => {
  e.preventDefault()

  fetch("/.netlify/functions/sendEmail", {
    method: "POST",
    body: JSON.stringify({ name, email, message })
  });

  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;

  const response = await fetch("/.netlify/functions/sendEmail", {
    method: "POST",
    body: JSON.stringify({ name, email, message })
  });

  const result = await response.json();


  // serviceID - templateID - #form - publicKey
  // emailjs.sendForm(serviceID, templateID, '#contact-form', publicKey)
  // .then(() => {
  if (result.staus === 'success') {
    contactMessage.textContent = 'Message Sent Successfully'
    setTimeout(() => {
      contactMessage.textContent = ''
    }, 5000)
    contactForm.reset()
  } else {
    contactMessage.textContent = 'Message not sent (service error)'
  }
  // })
}

contactForm.addEventListener('submit', sendEmail)

// const h1 = document.querySelector(".projects h1");
// const text = h1.innerText;
// h1.innerHTML = "";
// [...text].forEach((letter) => {
//   const span = document.createElement("span");
//   span.classList.add("char");
//   span.textContent = letter;
//   h1.appendChild(span);
// });

// ==================== Role Animation Transition ====================
const role = document.getElementById("role-text");

const fonts = [
  '"Garamond", serif',
  '"Pacifico", cursive',
  '"Inter", sans-serif',
  '"Didot", serif',
  '"JetBrains Mono", monospace',
];

let index = 0;

// initial delay
setTimeout(() => {
  setInterval(() => {
    // fade out
    role.style.opacity = 0;

    setTimeout(() => {
      // change font when invisible
      index = (index + 1) % fonts.length;
      role.style.fontFamily = fonts[index];

      // fade back in
      role.style.opacity = 1;
    }, 200);
  }, 1000); // total cycle time
}, 2);
