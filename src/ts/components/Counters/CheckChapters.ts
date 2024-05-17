import {CHAPTER} from "./Counter.js";
import LevelAvailable from "../LevelAvailable.js";
import {LEVELSCOUNT} from "../ShowButtons.js";
import ClearAllLevels from "../ClearAllLevels.js";

const CheckChapters = () => {
    const checkForProgress = LevelAvailable(LEVELSCOUNT, true);
    // for clearing all the levels
    ClearAllLevels();
    let keys: string[] = [];
    console.log(localStorage.length);
    for (let i = 0; i < localStorage.length; i++) {
        keys.push(localStorage.key(i)!.toString());
    }
    const localLength = localStorage.length;
    // to check the chapters
    for (let i = 0; i < localLength; i++) {
        let key = keys[i];
        if (+key.split("_")[1] > CHAPTER) {
            localStorage.removeItem(key.toString());
        }
    }
    for (let i = 1; i <= CHAPTER; i++) {
        if (!localStorage.getItem(`chapter_${i}`)) {
            localStorage.setItem(`chapter_${i}`, "false");
        }
        if (i === CHAPTER) {
            localStorage.setItem(`chapter_${CHAPTER}`, checkForProgress ? "true" : "false");
        }
    }
};

export default CheckChapters;