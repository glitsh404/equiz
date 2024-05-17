var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import ShowButtons from "../components/ShowButtons.js";
import LevelsAction from "../components/LevelsAction.js";
import HomeTemplate from "../components/HomeTemplate.js";
import ResetLevels from "../components/ResetLevels.js";
import MoreInfoButton from "../components/MoreInfoButton.js";
import Counter from "../components/Counters/Counter.js";
import Theme from "../components/Themes/Theme.js";
import SetTheme from "../components/Themes/SetTheme.js";
// the end time for the countdown timer
const Home = () => __awaiter(void 0, void 0, void 0, function* () {
    // the root element [ dad ]
    const dad = document.getElementById("root");
    // method for set the buttons in levels variable
    yield ShowButtons();
    // Home Template (first thing in home page)
    HomeTemplate(dad);
    // Theme Mode
    Theme();
    // set the theme
    SetTheme();
    // for the counter
    Counter(dad, "We will go to the next chapter after");
    // levels buttons
    LevelsAction();
    // more button
    MoreInfoButton();
    // reset buttons
    ResetLevels();
});
export default Home;
//# sourceMappingURL=Home.js.map