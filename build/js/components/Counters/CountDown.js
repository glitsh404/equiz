import { curr, questionsCount } from "../../pages/Levels.js";
export let counter;
export const CountDownQuiz = (duration) => {
    if (curr < +questionsCount) {
        let min, sec;
        const countdownEle = document.querySelector(".count-down");
        const submit = document.querySelector(".submit-btn");
        counter = setInterval(function () {
            min = Math.floor(duration / 60);
            sec = Math.floor(duration % 60);
            min = min < 10 ? `0${min}` : min;
            sec = sec < 10 ? `0${sec}` : sec;
            countdownEle.innerHTML = `${min}:${sec}`;
            if (--duration < 0) {
                clearInterval(counter);
                submit.click();
            }
        }, 1000);
    }
};
export const Countdown = (endDate) => {
    let countdown = new Date(endDate).getTime();
    let now = new Date().getTime();
    let dateDiff = countdown - now;
    let isEnd = false;
    if (dateDiff <= 0) {
        isEnd = true;
    }
    // get time units
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let min = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.floor((dateDiff % (1000 * 60)) / 1000);
    return {
        days,
        hours,
        min,
        sec,
        isEnd,
    };
};
//# sourceMappingURL=CountDown.js.map