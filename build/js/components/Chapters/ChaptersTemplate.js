import { CHAPTER } from "../Counters/Counter.js";
const ChaptersTemplate = () => {
    let chaptersList = [];
    for (let i = 1; i <= CHAPTER; i++) {
        chaptersList.push({
            key: i.toString(),
            value: localStorage.getItem(`chapter_${i}`)
        });
    }
    let AllChapters = "";
    for (let i = 0; i < CHAPTER; i++) {
        AllChapters += `<div class="chapter-card">
                        <h3>Chapter ${chaptersList[i].key}</h3>
                        <div class="column">
                            <span class="word ${chaptersList[i].value == "true" ? "completed-color" : "notCompleted-color"}">${chaptersList[i].value == "true" ? "Completed" : "Not Completed"}</span>
                            <img src="images/${chaptersList[i].value == "true" ? "checked" : "cancel"}.png" class="chapter" alt="chapter 1">
                        </div>
                    </div>`;
    }
    document.querySelector("#chapters").innerHTML +=
        `
        <div class="chapters-container">
            <h2>Chapters Progress</h2>
            <div class="chapters-list-parent">
                ${localStorage.getItem(`chapter_${CHAPTER}`)
            ?
                `
                       ${AllChapters}
                    `
            :
                `<span class="empty-text">Empty</span><img class="chapters-empty" alt="The chapters achievement is empty" src="https://i0.wp.com/www.huratips.com/wp-content/uploads/2019/04/empty-cart.png?fit=603%2C288&ssl=1">`}   
            </div>
            <div class="close">x</div>
        </div>
      `;
    const chaptersContainer = document.querySelector(".chapters-container");
    // for open animation
    const chapterAnimationOpen = setTimeout(() => {
        chaptersContainer.classList.add("chapter-scale");
        clearTimeout(chapterAnimationOpen);
    }, 50);
    // for closing the list
    const close = document.querySelector("#chapters .close");
    close.addEventListener("click", () => {
        chaptersContainer.classList.remove("chapter-scale");
        const chapterAnimationClose = setTimeout(() => {
            document.querySelector("#chapters").innerHTML = ``;
            clearTimeout(chapterAnimationClose);
        }, 1000);
    });
};
export default ChaptersTemplate;
//# sourceMappingURL=ChaptersTemplate.js.map