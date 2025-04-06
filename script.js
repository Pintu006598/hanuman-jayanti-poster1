// Bengali numbers
const bengaliNumbers = ["০","১","২","৩","৪","৫","৬","৭","৮","৯"];

function toBengaliDigits(num) {
  return num.toString().split('').map(d => bengaliNumbers[d] || d).join('');
}

// Set target Hanuman Jayanti date (change if needed)
const eventDate = new Date("2025-04-23T00:00:00");

function updateCountdown() {
  const now = new Date();
  const distance = eventDate - now;

  if (distance < 0) {
    document.getElementById("countdown").innerText = "শুভ হনুমান জয়ন্তী!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("countdown").innerText =
    `দিন: ${toBengaliDigits(days)} ঘণ্টা: ${toBengaliDigits(hours)} মিনিট: ${toBengaliDigits(minutes)} সেকেন্ড: ${toBengaliDigits(seconds)}`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
