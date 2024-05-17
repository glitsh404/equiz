import { curr, increaseCurrPageBy1, Level, questionsCount, resetAllVariables } from "../pages/Levels.js";
import AddQuestions from "./AddQuestions.js";
import RemoveAll from "./RemoveAll.js";
import { CountDownQuiz, counter } from "./Counters/CountDown.js";
import Home from "../pages/Home.js";
export let rightAnswers = 0;
export const resetRightAnswers = () => {
    rightAnswers = 0;
};
const NextQuestion = (questions) => {
    const quizArea = document.querySelector(".quiz-area");
    const quizAnswers = document.querySelector(".custom_radio");
    const submit = document.querySelector(".submit-btn");
    submit.addEventListener("click", eo => {
        eo.preventDefault();
        // Get right answer
        let rightAnswer = questions[curr].right_a;
        // increase current index
        increaseCurrPageBy1();
        // check the answer
        checkAnswers(rightAnswer);
        // make CountDownQuiz
        clearInterval(counter);
        if (+Level > 4) {
            CountDownQuiz(30);
        }
        else {
            CountDownQuiz(50);
        }
        // show results
        showResults();
    });
    const checkAnswers = (answer) => {
        let bullets = document.querySelectorAll(".bullets .spans span");
        const submit = document.querySelector(".submit-btn");
        const answers = document.getElementsByName("answer");
        let chosenAnswer = "";
        answers.forEach((el) => {
            if (el.checked) {
                chosenAnswer = el.dataset.answer;
                if (chosenAnswer == answer) {
                    el.setAttribute("data-correct", "true");
                }
            }
        });
        if (answer == chosenAnswer) {
            rightAnswers++;
            document.querySelectorAll(".custom_radio label").forEach(el => {
                el.classList.add("not");
            });
            bullets.forEach((bullet, index) => {
                if (curr === index + 1) {
                    bullet.className = "on goodChoose";
                }
            });
        }
        else {
            answers.forEach(a => {
                if (a.dataset.answer == answer) {
                    a.setAttribute("data-correct", "true");
                    a.nextElementSibling.classList.add("not");
                }
                a.parentElement.querySelectorAll("label").forEach(el => {
                    el.classList.add("not");
                });
                bullets.forEach((bullet, index) => {
                    if (curr === index + 1) {
                        bullet.className = "on badChoose";
                    }
                });
            });
        }
        submit.disabled = true;
        const timer = setTimeout(() => {
            // Remove Previous Question
            removePreviousAddNew();
            clearTimeout(timer);
            submit.disabled = false;
            submit.onmouseleave;
        }, 2500);
    };
    const removePreviousAddNew = () => {
        quizArea.innerHTML = ``;
        quizAnswers.innerHTML = ``;
        AddQuestions(questions[curr]);
    };
    const showResults = () => {
        let results = "";
        if (curr === +questionsCount) {
            RemoveAll();
            const result = Math.floor((rightAnswers / +questionsCount) * 100);
            window.localStorage.setItem(`progress${Level}`, result.toString());
            if (rightAnswers > (+questionsCount / 2) && rightAnswers < +questionsCount) {
                results =
                    `
                    <div class="msg good">
                        <div>
                            <span>Great your answers is good, but you need to study more harder</span>
                            <p class="result">Your result is <strong>${rightAnswers}</strong> from <strong>${questionsCount}</strong></p>
                        </div>
                        <img alt="Good"
                            src="images/checked.png">
                   </div>
                    `;
            }
            else if (rightAnswers === +questionsCount) {
                results =
                    `
                    <div class="msg perfect">
                        <div>
                            <span>Perfect you are a <strong>Mosnter</strong> in level ${Level}</span>
                            <p class="result">Your result is <strong>${rightAnswers}</strong> from <strong>${questionsCount}</strong></p>
                        </div>
                        <img alt="Perfect"
                             src="images/excellence.png">
                   </div>
                    `;
            }
            else {
                results =
                    `
                    <div class="msg bad">
                        <div>
                            <span>You need to study hard, please study and try again</span>
                            <p class="result">Your result is <strong>${rightAnswers}</strong> from <strong>${questionsCount}</strong></p>
                        </div>
                        <img alt="Bad"
                             src="images/cancel.png">
                   </div>
                    `;
            }
            const resultsParent = document.querySelector(".results");
            resultsParent.innerHTML = results;
            resultsParent.parentElement.innerHTML +=
                `
              <button class="submit-btn" id="goHome"> 
                <div class="svg-wrapper-1">
                    <div class="svg-wrapper">
                        <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                  fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
                <span>Home</span>
            </button>
            `;
            const goHomeBtn = document.getElementById("goHome");
            goHomeBtn.addEventListener("click", () => {
                resetAllVariables();
                Home();
            });
        }
    };
};
export default NextQuestion;
//# sourceMappingURL=NextQuestion.js.map