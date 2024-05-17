const RemoveAll = () => {
    const quizArea = <HTMLElement>document.querySelector(".quiz-area");
    const quizAnswers = <HTMLElement>document.querySelector(".custom_radio");
    const submit = <HTMLButtonElement>document.querySelector(".submit-btn");
    const bullets = <HTMLButtonElement>document.querySelector(".bullets");
    quizArea.remove();
    quizAnswers.remove();
    submit.remove();
    bullets.remove();
};

export default RemoveAll;