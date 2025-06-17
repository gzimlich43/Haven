const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
}, {
  threshold: 0.2 // adjust if needed (0 = any visible, 1 = fully visible)
});

document.querySelectorAll(".fade-in").forEach((section) => {
  observer.observe(section);
});
const taglines = [
  "It’s 2am. You’re exhausted. Haven’s still here.",
  "Caregiver support, when no one else is awake."
];

const chosen = taglines[Math.floor(Math.random() * taglines.length)];
document.getElementById("tagline-bar").textContent = chosen;
