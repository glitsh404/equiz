import Home from "../pages/Home.js";
import ClearAllLevels from "./ClearAllLevels.js";
import { timer } from "./Counters/Counter.js";
const ResetLevels = () => {
    const resetBtn = document.querySelector(".reset-btn");
    resetBtn.addEventListener("click", () => {
        // @ts-ignore
        cuteAlert({
            type: "question",
            title: "Are you sure?",
            message: "You want to reset all the progress of quizzes",
            img: "img/question.svg",
            confirmText: "Reset all",
            cancelText: "Cancel"
        }).then((e) => {
            if (e == ("confirm")) {
                // if the user is confirmed
                ClearAllLevels();
                Home();
                clearInterval(timer);
                // @ts-ignore
                cuteToast({
                    type: "success",
                    message: "The progresses of all levels reset successfully",
                    img: "img/success.svg",
                    timer: 5000
                });
            }
        });
    });
};
export default ResetLevels;
//# sourceMappingURL=ResetLevels.js.map