import ShowButtons from "../components/ShowButtons.js";
import LevelsAction from "../components/LevelsAction.js";
import HomeTemplate from "../components/HomeTemplate.js";
import ResetLevels from "../components/ResetLevels.js";
import MoreInfoButton from "../components/MoreInfoButton.js";
import Counter from "../components/Counters/Counter.js";
import Theme from "../components/Themes/Theme.js";
import SetTheme from "../components/Themes/SetTheme.js";

// the end time for the countdown timer

const Home = async () => {
    // the root element [ dad ]
    const dad = <HTMLElement>document.getElementById("root");

    // method for set the buttons in levels variable
    await ShowButtons();

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
};

export default Home;