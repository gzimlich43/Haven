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
function toggleMenu() {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('active');
}

const chosen = taglines[Math.floor(Math.random() * taglines.length)];
document.getElementById("tagline-bar").textContent = chosen;
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("newsletter-form");

  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const formData = new FormData(form);
      const query = new URLSearchParams(formData).toString();

      const url = `https://assets.mailerlite.com/jsonp/1605423/forms/157583851394172004/subscribe?${query}`;

      try {
        const res = await fetch(url, {
          method: "GET",
          mode: "no-cors"
        });

        // Show a success message
        form.innerHTML = `<p style="font-size:1.2em; color: green;">Thanks for subscribing!</p>`;
      } catch (err) {
        console.error("Error:", err);
        alert("Something went wrong. Please try again.");
      }
    });
  }
});

