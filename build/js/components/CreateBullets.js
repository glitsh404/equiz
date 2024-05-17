import { questionsCount } from "../pages/Levels.js";
const CreateBullets = () => {
    const countSpan = document.querySelector(".count span");
    const bulletsContainer = document.querySelector(".bullets .spans");
    countSpan.innerHTML = " " + questionsCount;
    // create spans
    for (let i = 0; i < +questionsCount; i++) {
        // create bullet
        let bullet = document.createElement("span");
        if (i === 0) {
            bullet.className = "on";
        }
        // append bullets to main bullet container
        bulletsContainer.appendChild(bullet);
    }
};
export default CreateBullets;
//# sourceMappingURL=CreateBullets.js.map