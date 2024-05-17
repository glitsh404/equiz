import Levels from "../pages/Levels.js";
import { timer } from "./Counters/Counter.js";
const LevelsAction = () => {
    const levelsButtons = document.querySelectorAll(".levels");
    levelsButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (!btn.getAttribute("data-disable")) {
                clearInterval(timer);
                Levels(btn.getAttribute("data-level"));
            }
        });
    });
};
export default LevelsAction;
//# sourceMappingURL=LevelsAction.js.map