// ===== EDIT THESE SETTINGS =====
const intervalSeconds = 5; // 🔧 Change this number (seconds between new windows)
const bunnyLinks = [
    "https://image2url.com/r2/default/videos/1771271255539-6e2c1370-85c0-4dc0-8769-7829a5b772c5.mp4",
    "https://image2url.com/r2/default/videos/1771271255539-6e2c1370-85c0-4dc0-8769-7829a5b772c5.mp4",
    "https://image2url.com/r2/default/videos/1771271255539-6e2c1370-85c0-4dc0-8769-7829a5b772c5.mp4",
    "https://image2url.com/r2/default/videos/1771271255539-6e2c1370-85c0-4dc0-8769-7829a5b772c5.mp4"
];
// ===============================

let currentIndex = 0;
let intervalId = null;

document.getElementById("bunnyBtn").addEventListener("click", function () {

    // Prevent multiple intervals if button is clicked again
    if (intervalId !== null) return;

    intervalId = setInterval(() => {
        window.open(bunnyLinks[currentIndex], "_blank");

        currentIndex++;
        if (currentIndex >= bunnyLinks.length) {
            currentIndex = 0; // loop back to start
        }

    }, intervalSeconds * 1000);
});
