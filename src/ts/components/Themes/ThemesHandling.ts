import {ChangeTheme} from "./Theme.js";
import SetTheme from "./SetTheme.js";

const ThemesHandling = () => {
    let theme = localStorage.getItem("theme");
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        !theme && localStorage.setItem("theme", "dark");
    } else {
        !theme && localStorage.setItem("theme", "light");
    }
    const themeBtn = document.querySelector("#theme") as HTMLButtonElement;
    themeBtn.addEventListener("click", () => {
        ChangeTheme();
        SetTheme();
    });
};

export default ThemesHandling;
