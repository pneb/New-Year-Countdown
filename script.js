const demo = document.querySelector('#demo');

const countDownDate = new Date('Jan 1, 2024 00:00:00').getTime();

const updateClock = () => {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    if (distance < 0) {
        demo.innerHTML = 'HAPPY NEW YEAR';
    } else {
        demo.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
};

setInterval(updateClock, 1000);
