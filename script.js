// ===== EDIT THESE SETTINGS =====
const intervalSeconds = 1; // time between batches
const bunnyLinks = [
    "https://image2url.com/r2/default/videos/1771271255539-6e2c1370-85c0-4dc0-8769-7829a5b772c5.mp4",
    "https://image2url.com/r2/default/videos/1771271255539-6e2c1370-85c0-4dc0-8769-7829a5b772c5.mp4",
    "https://image2url.com/r2/default/videos/1771271255539-6e2c1370-85c0-4dc0-8769-7829a5b772c5.mp4",
    "https://image2url.com/r2/default/videos/1771271255539-6e2c1370-85c0-4dc0-8769-7829a5b772c5.mp4"
];
// ===============================

let intervalId = null;

document.getElementById("bunnyBtn").addEventListener("click", () => {
    // Prevent multiple runs
    if (intervalId !== null) return;

    intervalId = setInterval(() => {
        bunnyLinks.forEach(link => {
            window.open(link, "_blank");
        });
    }, intervalSeconds * 1000);
});
