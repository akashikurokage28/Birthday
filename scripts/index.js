/**
 * BIRTHDAY COUNTDOWN SCRIPT
 * Target: Akii's Birthday - March 21, 2026 @ 7:00 AM
 */

const config = {
    birthdate: "March 21, 2026 07:45:00",
    name: "Akii"
};

const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

const countElem = document.getElementById('count');
const headElem = document.getElementById('head');

// Calculate the final timestamp
const countDownDate = new Date(config.birthdate).getTime();

const timerLogic = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // --- SCENARIO 1: THE WAIT ---
    if (distance > 0) {
        // Ensure elements are visible
        if (headElem) headElem.style.display = 'block';
        if (countElem) countElem.style.display = 'block';

        // Update the UI
        document.getElementById('day').innerText = Math.floor(distance / day);
        document.getElementById('hour').innerText = Math.floor((distance % day) / hour);
        document.getElementById('minute').innerText = Math.floor((distance % hour) / minute);
        document.getElementById('second').innerText = Math.floor((distance % minute) / second);
    } 
    
    // --- SCENARIO 2: THE REVEAL (7:00 AM HIT!) ---
    else {
        clearInterval(timerLogic);
        
        // Prevent infinite loops by checking current URL
        if (!window.location.href.includes("index.html")) {
            window.location.href = "index.html";
        }
    }
}, 1000);

// Initialize Confetti if the library is loaded
if (typeof ConfettiGenerator !== 'undefined') {
    const confetti = new ConfettiGenerator({ target: 'confetti' });
    confetti.render();
}