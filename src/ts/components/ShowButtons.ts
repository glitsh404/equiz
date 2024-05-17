import LevelAvailable from "./LevelAvailable.js";

export let levels = "";
export const LEVELSCOUNT = 6;
const ShowButtons = async () => {
    levels = "";
    for (let i = 1; i <= LEVELSCOUNT; i++) {
        const progress = localStorage.getItem(`progress${i}`);
        const check = !!progress;
        await fetch(`https://monster-quiz-english-default-rtdb.firebaseio.com/level${i}.json`)
            .then(res => res.json())
            .then(data => {
                let LevelIsNotAvailable = i > 2 ? !LevelAvailable(i) : false;
                let count = data.length;
                levels +=
                    `
            <div class='buttons-grandfather'>
                ${LevelIsNotAvailable ? "<p class=\"what\" title=\"what is locked level !?\">?</p>" : ""}
                <div ${
                        LevelIsNotAvailable
                        && `data-disable="true"`} 
                        data-level="${i}" class="main-btn levels"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <p class="txt">Level ${i}</p>
                    <p class="questions-count">Questions: ${count}</p>
                    <div class="box">
                         ${
                        check && +progress === 100
                            ? "<img alt='completed' class='completed' src='images/checked.png' >"
                            : `
                            <div class="percent">
                                <svg>
                                    <circle cx="70" cy="70" r="70"></circle>
                                    <!--  put the percent value in this place calc( 440 - (440 * value) / 100) -->
                                    <circle style="stroke-dashoffset: calc(440 - (440 * ${check ? progress : 0}) / 100);" cx="70" cy="70" r="70"></circle>
                                </svg>
                                <div class="number">
                                    ${
                                LevelIsNotAvailable
                                    ? "<img class='locked' alt='Locked' src='images/locked.png'"
                                    : check ? "<h2>" + progress + "<p>%<p/> </h2>" : "<h2>0.0<p>%<p/></h2>"
                            }
                                </div>
                            </div>
                            `

                    }
                    </div>
                </div>
            </div>
            `;
            });
    }
};

export default ShowButtons;