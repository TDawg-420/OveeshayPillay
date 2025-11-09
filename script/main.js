// Mobile nav toggle
function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("open");
}

document.addEventListener("click", (e) => {
    const menu = document.querySelector(".menu");
    const burger = document.querySelector(".burger");
    if (!menu.contains(e.target) && !burger.contains(e.target)) {
        menu.classList.remove("open");
    }
});


// FAQ accordion
function toggleFaq(el) {
    const item = el.parentElement;
    item.classList.toggle('open');
}

// Basic form handler (demo only)
function submitQuote(e) {
    e.preventDefault();
    const f = e.target;
    const name = f.name.value.trim() || 'Client';

    // Show a friendly inline message instead of alert
    const msg = document.createElement('p');
    msg.textContent = `Thanks ${name}! We will contact you shortly with a quote.`;
    msg.style.color = "green";
    msg.style.fontWeight = "600";

    f.appendChild(msg);

    setTimeout(() => msg.remove(), 5000); // remove after 5s
    f.reset();
}
