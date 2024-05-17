import { LEVELSCOUNT } from "./ShowButtons.js";
const ClearAllLevels = () => {
    for (let i = 1; i <= LEVELSCOUNT; i++) {
        localStorage.removeItem(`progress${i}`);
    }
};
export default ClearAllLevels;
//# sourceMappingURL=ClearAllLevels.js.map