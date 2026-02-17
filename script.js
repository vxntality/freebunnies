// ===== EDIT THESE SETTINGS =====
const intervalSeconds = 0.5;
const urls = [
    "https://image2url.com/r2/default/videos/1771271255539-6e2c1370-85c0-4dc0-8769-7829a5b772c5.mp4",
    "https://image2url.com/r2/default/videos/1771271255539-6e2c1370-85c0-4dc0-8769-7829a5b772c5.mp4",
    "https://image2url.com/r2/default/videos/1771271255539-6e2c1370-85c0-4dc0-8769-7829a5b772c5.mp4",
    "https://image2url.com/r2/default/videos/1771271255539-6e2c1370-85c0-4dc0-8769-7829a5b772c5.mp4"
];
// ===============================

let currentIndex = 0;
let intervalId = null;

document.getElementById("bunnyBtn").addEventListener("click", () => {
    if (intervalId !== null) return; // run once

    intervalId = setInterval(() => {
        // Open new browser window with ONE tab
        window.open(urls[currentIndex], "_blank", "popup=yes");

        // Move to next URL (loop back to start)
        currentIndex = (currentIndex + 1) % urls.length;
    }, intervalSeconds * 1000);
const url = "https://image2url.com/r2/default/videos/1771271255539-6e2c1370-85c0-4dc0-8769-7829a5b772c5.mp4";

document.getElementById("bunnyBtn").addEventListener("click", () => {
    window.location.href = url;
});




