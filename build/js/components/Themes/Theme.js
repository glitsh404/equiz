import ThemesHandling from "./ThemesHandling.js";
export let ThemeMode = localStorage.getItem("theme") !== null
    ? !localStorage.getItem("theme") : "light";
export const ChangeTheme = () => {
    ThemeMode = ThemeMode == "light" ? "dark" : "light";
    localStorage.setItem("theme", ThemeMode);
};
const Theme = () => {
    ThemesHandling();
};
export default Theme;
//# sourceMappingURL=Theme.js.map