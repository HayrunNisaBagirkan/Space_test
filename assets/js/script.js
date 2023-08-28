const testData = [
    {
        id: 1,
        question: "What is the closest planet to the Sun ?",
        a: "Venus",
        b: "Earth",
        c: "Mars",
        d: "Mercury",
        answer: "d",
    },
    {

        id: 2,
        question: "What is a group of stars that form a pattern called ?",
        a: "Galaxy",
        b: "Nebula",
        c: "Constellation",
        d: "Meteor",
        answer: "c",
    },
    {

        id: 3,
        question: "What is the natural satellite of Earth ?",
        a: "Sun",
        b: "Mars",
        c: "Moon",
        d: "Saturn",
        answer: "c",

    },
    {

        id: 4,
        question: "What is the largest planet in our solar system ?",
        a: "Venus",
        b: "Mars",
        c: "Saturn",
        d: "Jupiter",
        answer: "d",
    },
    {

        id: 5,
        question: "What is a meteor that reaches the Earth's surface called ?",
        a: "Meteorite",
        b: "Asteroid",
        c: "Meteoroid",
        d: "Comet",
        answer: "a",
    },
    {

        id: 6,
        question: "What is the process by which a star turns into a red giant and sheds its outer layers ?",
        a: "Solar eclipse",
        b: "Supernova",
        c: "Stellar evolution",
        d: "Nebulay",
        answer: "d",
    },
    {

        id: 7,
        question: "What is the region in space where gravity is so strong that nothing, not even light, can escape it ?",
        a: "Nebula",
        b: "EAsteroid belt",
        c: "Black hole",
        d: "Quasar",
        answer: "c",
    },
    {
        id: 8,
        question: "What is the name of the spacecraft that landed the first humans on the Moon ?",
        a: "Voyager",
        b: "Apollo",
        c: "Discovery",
        d: "Galileoy",
        answer: "b",
    },
    {

        id: 9,
        question: "What is the phenomenon of a star exploding and becoming extremely bright for a short period called ?",
        a: "Black hole",
        b: "Eclipse",
        c: "Nova",
        d: "Supernova",
        answer: "d",
    },
    {

        id: 10,
        question: "What is the name of the dwarf planet located beyond Pluto in our solar system ?",
        a: "Neptune",
        b: "Eris",
        c: "Saturn",
        d: "Jupiter",
        answer: "b",

    }
];

startGame = () => {
    questionCounter = 0;
    score = 0;
    scoreText.innerText = score;
};

const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
    let answer;
    answerElements.forEach((answerElements) => {
        if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
};

const loadTest = () => {
    deselectAnswers();
    const currentTestData = testData[currentTest];
    questionElements.innerText = currentTestData.question;
    a_text.innerText = currentTestData.a;
    b_text.innerText = currentTestData.b;
    c_text.innerText = currentTestData.c;
    d_text.innerText = currentTestData.d;
};

loadTest();

submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === testData[currentTest].answer) score++;
        currentTest++;
        if (currentTest < testData.length) loadTest();
        else {
            test.innerHTML = `
        <h2>Congratulations you answered ${score} of the ${testData.length} questions correctly.</h2>
            <button onclick="history.go(0)">Start Again</button>
            `;
        }
    }
});
