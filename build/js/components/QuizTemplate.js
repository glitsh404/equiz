import Home from "../pages/Home.js";
import { curr, Level, questionsCount, resetAllVariables } from "../pages/Levels.js";
import { rightAnswers } from "./NextQuestion.js";
const QuizTemplate = (level) => {
    const dad = document.getElementById("root");
    dad.innerHTML =
        `
        <div class="quiz-parent parent-center">
            <p class="exit">Exit Quiz</p>
            <div class="quiz-info">
                <div class="level">Level: <span>${level}</span></div>
                <div class="count">Questions: <span>10</span></div>
            </div>
            <div class="quiz-area">
                <h2></h2>
            </div>
            <div class="custom_radio"></div>
            <button class="submit-btn"> 
                <div class="svg-wrapper-1">
                    <div class="svg-wrapper">
                        <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                  fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
                <span>Next</span>
            </button>
            <div class="bullets">
                <div class="count-down"></div>
                <div class="spans"></div>
            </div>
            <div class="results"></div>
        </div>
        `;
    const exitBtn = document.querySelector(".exit");
    exitBtn.addEventListener("click", () => {
        if (curr >= 1) {
            // to save the result
            const result = ((rightAnswers / +questionsCount) * 100).toFixed(1);
            window.localStorage.setItem(`progress${Level}`, result.toString());
            // to reset variables
            resetAllVariables();
            // to add home page
            Home();
        }
        else {
            // @ts-ignore
            cuteToast({
                type: "warning",
                message: "You can't exit at the first question",
                img: "img/warning.svg",
                timer: 5000
            });
        }
    });
};
export default QuizTemplate;
//# sourceMappingURL=QuizTemplate.js.map