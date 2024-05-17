import { CHAPTERFORTITLE } from "./Counters/Counter.js";
import { levels } from "./ShowButtons.js";
import ChaptersDegrees from "./Chapters/ChaptersDegrees.js";
const HomeTemplate = (dad) => {
    document.querySelector("title").innerText = `Monster Tests | Chapter ${CHAPTERFORTITLE}`;
    dad.innerHTML = `
    <div id="counter"></div>
    <div id="chapters"></div>
    <div class="parent-center">
        <h2 class="head1">English Tests Chapter ${CHAPTERFORTITLE}</h2>
         <button id="theme" class="custom-btn btn-5"><span>Dark Mode</span></button>
        <div class="reset-btn">Reset Progress</div>
        <div class="chapters-btn">Chapters Progress</div>
        ${levels}
    </div>
    `;
    const chaptersBtn = document.querySelector(".chapters-btn");
    chaptersBtn.addEventListener("click", () => {
        ChaptersDegrees();
    });
};
export default HomeTemplate;
//# sourceMappingURL=HomeTemplate.js.map