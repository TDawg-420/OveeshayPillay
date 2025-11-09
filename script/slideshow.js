let slideIndex = 0;
const slides = document.querySelectorAll(".mySlides");
const dots = document.querySelectorAll(".dot");
const modal = document.getElementById("slideModal");
const modalImg = document.getElementById("modalImage");

function showSlide(n) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active", "prevSlide");
        if (i === n) slide.classList.add("active");
        else if (i === slideIndex) slide.classList.add("prevSlide");
    });
    dots.forEach((dot, i) => dot.classList.toggle("active-dot", i === n));
    slideIndex = n;
}

// Prev/Next buttons
function plusSlides(n) {
    showSlide((slideIndex + n + slides.length) % slides.length);
}

// Dot controls
function currentSlide(n) {
    showSlide(n - 1);
}

// Auto-scroll every 6 seconds
setInterval(() => {
    plusSlides(1);
}, 6000);

// Initialize first slide
showSlide(slideIndex);

// Click-to-view
slides.forEach(slide => {
    const img = slide.querySelector("img");
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

// Close modal
function closeModal() {
    modal.style.display = "none";
}

// Optional: Close modal on outside click
modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});
