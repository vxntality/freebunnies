// ===== EDIT THESE SETTINGS =====
const intervalSeconds = 2;
const bunnyLinks = [
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
        // Open first tab in a NEW window
        const newWindow = window.open(bunnyLinks[currentIndex], "_blank");

        // Open 2 more tabs in the SAME window
        for (let i = 1; i < 3; i++) {
            currentIndex = (currentIndex + 1) % bunnyLinks.length;
            newWindow.open(bunnyLinks[currentIndex], "_blank");
        }

        // Move index forward for next cycle
        currentIndex = (currentIndex + 1) % bunnyLinks.length;

    }, intervalSeconds * 1000);
});
