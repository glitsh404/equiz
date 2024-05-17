const MoreInfoButton = () => {
    const moreBtns = document.querySelectorAll(".what");
    moreBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // @ts-ignore
            cuteAlert({
                type: "info",
                title: "Locked Levels",
                message: `Locked levels mean you must complete all the levels to continue to this level`,
                img: "img/question.svg",
                buttonText: "Understood"
            });
        });
    });
};
export default MoreInfoButton;
//# sourceMappingURL=MoreInfoButton.js.map