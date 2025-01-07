// Select modal elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");

// Add click event to all expandable images
document.querySelectorAll(".expandable-image").forEach((img) => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

// Close the modal when the close button is clicked
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close the modal when clicking outside the image
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// JavaScript to handle redirection
document.getElementById("Appstore").addEventListener("click", () => {
    const appleLink = "https://apps.apple.com/us/app/customer-insight/id6499186817";
    const googleLink = "https://play.google.com/store/apps/details?id=io.customerinsight.app";

    // Detect device user-agent
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/iPhone|iPad|iPod/i.test(userAgent)) {
        // Redirect to Apple App Store if iOS device
        window.location.href = appleLink;
    } else if (/Android/i.test(userAgent)) {
        // Redirect to Google Play Store if Android device
        window.location.href = googleLink;
    } else {
        // Default fallback for other devices
        alert("App is only available for iOS and Android devices.");
    }
});
