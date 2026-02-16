// ===== EDIT THESE SETTINGS =====
const intervalSeconds = 2;
const url = "https://image2url.com/r2/default/videos/1771271255539-6e2c1370-85c0-4dc0-8769-7829a5b772c5.mp4";
// ===============================

let intervalId = null;

document.getElementById("bunnyBtn").addEventListener("click", () => {
    if (intervalId !== null) return; // run once

    intervalId = setInterval(() => {
        // Each call opens a NEW browser window with ONE tab
        window.open(url, "_blank", "popup=yes");
    }, intervalSeconds * 1000);
});
