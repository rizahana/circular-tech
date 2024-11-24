document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Your message has been sent!');
            form.reset();
        } else {
            alert('Please fill out all fields!');
        }
    });
});

document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 2) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentSection)) {
            link.classList.add("active");
        }
    });
});
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        header.classList.toggle("active");
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});
const quizData = [
    {
        question: "What is the primary goal of a circular economy?",
        choices: [
            "Reduce costs",
            "Design out waste",
            "Maximize profits",
            "Increase production speed",
        ],
        correct: 1,
    },
    {
        question: "Which technology improves transparency in material flows?",
        choices: ["AI", "IoT", "Blockchain", "3D Printing"],
        correct: 2,
    },
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const currentQuestion = quizData[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = currentQuestion.choices
        .map(
            (choice, index) =>
                `<label><input type="radio" name="quiz" value="${index}"> ${choice}</label>`
        )
        .join("<br>");
}

document.getElementById("submit-answer").addEventListener("click", () => {
    const selected = document.querySelector("input[name='quiz']:checked");
    const feedbackElement = document.getElementById("feedback");

    if (!selected) {
        feedbackElement.textContent = "Please select an answer.";
        return;
    }

    const answer = parseInt(selected.value, 10);
    if (answer === quizData[currentQuestionIndex].correct) {
        feedbackElement.textContent = "Correct!";
    } else {
        feedbackElement.textContent = "Incorrect. Try again!";
    }

    setTimeout(() => {
        feedbackElement.textContent = "";
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            document.getElementById("quiz-container").innerHTML =
                "<p>You've completed the quiz!</p>";
        }
    }, 2000);
});

loadQuestion();
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.5 }
    );

    items.forEach((item) => observer.observe(item));
});
