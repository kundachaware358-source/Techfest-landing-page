const items = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  }),
  { threshold: 0.12 }
);

items.forEach(item => observer.observe(item));

const pulseBtn = document.getElementById("pulseBtn");
pulseBtn.addEventListener("click", () => {
  document.body.classList.add("pulse");
  const message = document.getElementById("systemMessage");
  message.textContent = "SIGNAL ACTIVATED. SYSTEM RESPONDING.";
  setTimeout(() => {
    document.body.classList.remove("pulse");
    message.textContent = "THE FUTURE IS A COLLECTIVE PROTOTYPE.";
  }, 1200);
});

const signalPanel = document.getElementById("signalPanel");
const signalStrength = document.getElementById("signalStrength");
const statusText = document.getElementById("statusText");
const systemMessage = document.getElementById("systemMessage");

function updateSignal() {
  const value = Math.floor(92 + Math.random() * 8);
  signalStrength.textContent = value + "%";
}

setInterval(updateSignal, 1800);

signalPanel.addEventListener("click", () => {
  statusText.textContent = "SCANNING";
  systemMessage.textContent = "SCANNING FUTURE SIGNALS...";

  setTimeout(() => {
    statusText.textContent = "ONLINE";
    systemMessage.textContent = "THE FUTURE IS A COLLECTIVE PROTOTYPE.";
  }, 1500);
});