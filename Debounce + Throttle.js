//----------------------Debounce------------------

const debounce = (fn, delay = 0) => {
    let timeId;
    return () => {
        clearTimeout(timeId)
        timeId = setTimeout(() => {
            fn();
        }, delay)
    }
}

//----------------------Throttle------------------

const throttle = (fn, delay) => {
    delay = delay || 0;
    let lastTime = 0;
    return () => {
        const currentTime = new Date().getTime();
        if (currentTime - lastTime >= delay) {
            lastTime = currentTime;
            fn();
        }
    }
}

//----------------------Throttle Implement------------------

let normalScrollTimes = 0;
let throttleScrollTimes = 0;

const normalScrollNumber = document.getElementById('normalScroll');
const throttleScrollNumber = document.getElementById('throttleScroll');

normalScrollNumber.textContent = "0";
throttleScrollNumber.textContent = "0";

const normalScroll = () => {
    normalScrollTimes++;
    normalScrollNumber.textContent = normalScrollTimes;
}

const throttleScroll = () => {
    throttleScrollTimes++;
    throttleScrollNumber.textContent = throttleScrollTimes;
}

window.addEventListener('scroll', throttle(throttleScroll, 1000));
window.addEventListener('scroll', normalScroll);

//----------------------Debounce Implement-------------------

const searchBar = document.getElementById('searchBar');
const normalText = document.getElementById('normalText');
const debounceText = document.getElementById('debounceText');

normalText.textContent = '';
debounceText.textContent = '';

searchBar.addEventListener('input', (e) => {
    normalText.textContent = e.target.value;
});

searchBar.addEventListener('input', (e) => debounce(() => {
    debounceText.textContent = e.target.value;
}, 2000)(e));
