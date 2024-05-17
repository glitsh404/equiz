import Question from "../interfaces/Question.js";
import {curr, questionsCount} from "../pages/Levels.js";
import UpperFirst from "./UpperFirst.js";

const AddQuestions = (question: Question) => {
    if (curr < +questionsCount) {
        // heading area
        const quizArea = <HTMLElement>document.querySelector(".quiz-area");
        quizArea.innerHTML = `<h2>${question.title}</h2>`;
        // handling answers
        let answers = [];
        answers.push({"a_1": question.a_1});
        answers.push({"a_2": question.a_2});
        answers.push({"a_3": question.a_3});
        answers.push({"a_4": question.a_4});
        answers.sort(() => Math.random() - 0.5);

        // the answers
        const quizAnswers = <HTMLElement>document.querySelector(".custom_radio");
        for (let i = 0; i < answers.length; i++) {
            for (let key in answers[i]) {
                // @ts-ignore
                let value = answers[i][key];
                let checked = i == 0 && "checked";
                quizAnswers.innerHTML +=
                    `
                <input id="${key}" data-answer="${value}" ${checked} name="answer" type="radio">
                <label for="${key}"> ${UpperFirst(value)} </label>
                <br>
            `;
            }
        }
    }
};

export default AddQuestions;