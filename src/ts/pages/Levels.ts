import createBullets from "../components/CreateBullets.js";
import QuizTemplate from "../components/QuizTemplate.js";
import AddQuestions from "../components/AddQuestions.js";
import NextQuestion, {resetRightAnswers} from "../components/NextQuestion.js";
import {CountDownQuiz, counter} from "../components/Counters/CountDown.js";

export let questionsCount: string;
export let curr = 0;
export let Level: string;
export const increaseCurrPageBy1 = () => {
    ++curr;
};

export const resetAllVariables = () => {
    questionsCount = "";
    curr = 0;
    Level = "";
    resetRightAnswers();
};
const Levels = (level: string) => {
    // add quiz html template
    Level = level;
    QuizTemplate(level);
    fetch(`https://monster-quiz-english-default-rtdb.firebaseio.com/level${Level}.json`)
        .then(res => res.json())
        .then(data => {
            questionsCount = data.length;
            data.sort(() => Math.random() - 0.5);
            // create bullets + set questions count
            createBullets();

            // Add Questions Data
            AddQuestions(data[curr]);

            // Start Countdown
            clearInterval(counter);
            if (+Level > 4) {
                CountDownQuiz(30);
            } else {
                CountDownQuiz(50);
            }

            // check right answer
            NextQuestion(data);
        });
};

export default Levels;
