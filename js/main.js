// Carousel 1
const carousel1 = document.getElementById('carousel');
const items1 = carousel1.children;
const totalItems1 = items1.length;
let index1 = 0;

function showNextImage1() {
    index1 = (index1 + 1) % totalItems1;
    const offset1 = -index1 * 425;
    carousel1.style.transform = `translateX(${offset1}px)`;
}

setInterval(showNextImage1, 2000);