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
        question:
            "What is the process by which a star turns into a red giant and sheds its outer layers ?",
        a: "Solar eclipse",
        b: "Supernova",
        c: "Stellar evolution",
        d: "Nebulay",
        answer: "d",
    },
    {
        id: 7,
        question:
            "What is the region in space where gravity is so strong that nothing, not even light, can escape it ?",
        a: "Nebula",
        b: "Asteroid belt",
        c: "Black hole",
        d: "Quasar",
        answer: "c",
    },
    {
        id: 8,
        question:
            "What is the name of the spacecraft that landed the first humans on the Moon ?",
        a: "Voyager",
        b: "Apollo",
        c: "Discovery",
        d: "Galileoy",
        answer: "b",
    },
    {
        id: 9,
        question:
            "What is the phenomenon of a star exploding and becoming extremely bright for a short period called ?",
        a: "Black hole",
        b: "Eclipse",
        c: "Nova",
        d: "Supernova",
        answer: "d",
    },
    {
        id: 10,
        question:
            "What is the name of the dwarf planet located beyond Pluto in our solar system ?",
        a: "Neptune",
        b: "Eris",
        c: "Saturn",
        d: "Jupiter",
        answer: "b",
    },
];

let currentTest = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const questionCounterText = document.getElementById("counter");
const scoreText = document.getElementById("score");
const questionElements = document.getElementById("question");
const answerElements = document.querySelectorAll(".answer");
const a_button = document.getElementById("a-button");
const b_button = document.getElementById("b-button");
const c_button = document.getElementById("c-button");
const d_button = document.getElementById("d-button");
const submitButton = document.getElementById("submit");
const scoreResult = document.getElementById("score-result");
const resultContainer = document.getElementById("result");
const startAgainButton = document.getElementById("start-again-btn");

const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
};

const loadTest = () => {
    deselectAnswers();
    if (currentTest >= testData.length) {
        resultContainer.style.display = "block";
        scoreResult.innerText = score;
        questionContainer.style.display = "none";
        submitButton.style.display = "none";
        startAgainButton.style.display = "block";

    } else {
        const currentTestData = testData[currentTest];
        questionCounterText.innerText = `${currentTestData.id}/${testData.length}`;
        scoreText.innerText = score;
        questionElements.innerText = currentTestData.question;
        a_button.innerText = currentTestData.a;
        b_button.innerText = currentTestData.b;
        c_button.innerText = currentTestData.c;
        d_button.innerText = currentTestData.d;
        resultContainer.style.display = "none";
        questionContainer.style.display = "block";
        submitButton.style.display = "block";
        startAgainButton.style.display = "none";
    }
};

loadTest();

submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === testData[currentTest].answer) score++;
        currentTest++;
        if (currentTest < testData.length) loadTest();
        else {
            resultContainer.style.display = "block";
            scoreResult.innerText = score;
            questionContainer.style.display = "none";
            submitButton.style.display = "none";
            startAgainButton.style.display = "block";
        }
    }
});
