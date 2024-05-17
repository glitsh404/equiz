import Levels from "../pages/Levels.js";
import {timer} from "./Counters/Counter.js";

const LevelsAction = () => {
    const levelsButtons = document.querySelectorAll(".levels") as NodeListOf<HTMLButtonElement>;
    levelsButtons.forEach((btn: HTMLButtonElement) => {
        btn.addEventListener("click", () => {
            if (!btn.getAttribute("data-disable")) {
                clearInterval(timer);
                Levels(btn.getAttribute("data-level")!);
            }
        });
    });
};

export default LevelsAction;