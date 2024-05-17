const SetTheme = () => {
    const theme = localStorage.getItem("theme");
    const darkBtn = document.querySelector("#theme");
    const grandRoot = document.querySelector("html");
    if (theme === "light") {
        grandRoot.classList.remove("dark");
        darkBtn.textContent = "Dark Mode";
    }
    else {
        grandRoot.classList.add("dark");
        darkBtn.textContent = "Light Mode";
    }
};
export default SetTheme;
//# sourceMappingURL=SetTheme.js.map