// Throttle giới hạn số lần gọi hàm trong một khoảng thời gian. Ví dụ khi một hàm dùng throttle, throttle sẽ gọi hàm này nhiều nhất 1 lần mỗi x mili giây 
// với x là khoảng thời gian mà ta cài đặt.

// Không giống như Throttle, Debounce sẽ giữ trigger rate của event listener là 0 kể cả khi event được thực hiện. Và sau một khoảng thời gian mà event 
// không được thực hiện, event listener mới được trigger và hàm được gọi.

//----------------------Debounce------------------

const debounce = (fn, delay) => {
    delay = delay || 0;
    let timeId;
    return () => {
        clearTimeout(timeId);
        timeId = null;
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
        if (currentTime - lastTime < delay) {
            return;
        }
        fn();
        lastTime = currentTime;
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
