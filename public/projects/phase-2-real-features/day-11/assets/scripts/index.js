// Quiz Questions Data
const quizQuestions = [
    {
        id: 1,
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: 2,
        category: "Geography"
    },
    {
        id: 2,
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 1,
        category: "Science"
    },
    {
        id: 3,
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        correctAnswer: 1,
        category: "Literature"
    },
    {
        id: 4,
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        correctAnswer: 2,
        category: "Mathematics"
    },
    {
        id: 5,
        question: "Which country is home to the kangaroo?",
        options: ["New Zealand", "Australia", "South Africa", "Brazil"],
        correctAnswer: 1,
        category: "Geography"
    },
    {
        id: 6,
        question: "What is the chemical symbol for Gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        correctAnswer: 2,
        category: "Chemistry"
    },
    {
        id: 7,
        question: "In what year did World War II end?",
        options: ["1943", "1944", "1945", "1946"],
        correctAnswer: 2,
        category: "History"
    },
    {
        id: 8,
        question: "What is the tallest mountain in the world?",
        options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
        correctAnswer: 1,
        category: "Geography"
    },
    {
        id: 9,
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        correctAnswer: 2,
        category: "Geography"
    },
    {
        id: 10,
        question: "What is the speed of light?",
        options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "200,000 km/s"],
        correctAnswer: 0,
        category: "Physics"
    }
];

// Quiz State
let quizState = {
    currentQuestionIndex: 0,
    timeLeft: 60,
    score: 0,
    answers: new Array(quizQuestions.length).fill(null),
    answered: new Array(quizQuestions.length).fill(false),
    totalTime: 60,
    timerInterval: null,
    quizStarted: false,
    quizCompleted: false
};

// DOM Elements
const pages = {
    landing: document.getElementById('landingPage'),
    quiz: document.getElementById('quizPage'),
    results: document.getElementById('resultsPage'),
    review: document.getElementById('reviewPage')
};

const buttons = {
    startQuiz: document.querySelector('.start-quiz-btn'),
    prev: document.getElementById('prevBtn'),
    next: document.getElementById('nextBtn'),
    review: document.getElementById('reviewBtn'),
    restart: document.getElementById('restartBtn'),
    backToResults: document.getElementById('backToResultsBtn')
};

const displays = {
    currentQuestion: document.getElementById('currentQuestion'),
    totalQuestions: document.getElementById('totalQuestions'),
    questionText: document.getElementById('questionText'),
    optionsContainer: document.getElementById('optionsContainer'),
    scoreDisplay: document.getElementById('scoreDisplay'),
    timerDisplay: document.getElementById('timerDisplay'),
    progressBar: document.getElementById('progressBar'),
    finalScore: document.getElementById('finalScore'),
    scorePercentage: document.getElementById('scorePercentage'),
    correctCount: document.getElementById('correctCount'),
    wrongCount: document.getElementById('wrongCount'),
    timeSpent: document.getElementById('timeSpent'),
    resultsTitle: document.getElementById('resultsTitle'),
    resultsMessage: document.getElementById('resultsMessage'),
    resultsIcon: document.getElementById('resultsIcon'),
    reviewContent: document.getElementById('reviewContent'),
    timeoutMessage: document.getElementById('noResults')
};

// Initialize total questions
displays.totalQuestions.textContent = quizQuestions.length;

// Event Listeners
buttons.startQuiz.addEventListener('click', startQuiz);
buttons.prev.addEventListener('click', previousQuestion);
buttons.next.addEventListener('click', nextQuestion);
buttons.review.addEventListener('click', showReview);
buttons.restart.addEventListener('click', restartQuiz);
buttons.backToResults.addEventListener('click', backToResults);

// Start Quiz
function startQuiz() {
    quizState.quizStarted = true;
    quizState.timeLeft = 60;
    quizState.score = 0;
    quizState.currentQuestionIndex = 0;
    quizState.answers = new Array(quizQuestions.length).fill(null);
    quizState.answered = new Array(quizQuestions.length).fill(false);
    quizState.quizCompleted = false;

    showPage('quiz');
    loadQuestion();
    startTimer();
}

// Show/Hide Pages
function showPage(pageToShow) {
    Object.values(pages).forEach(page => page.classList.remove('active'));
    pages[pageToShow].classList.add('active');
}

// Load Question
function loadQuestion() {
    const question = quizQuestions[quizState.currentQuestionIndex];

    displays.currentQuestion.textContent = quizState.currentQuestionIndex + 1;
    displays.questionText.textContent = question.question;
    displays.optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;

        // Check if this option was previously selected
        if (quizState.answers[quizState.currentQuestionIndex] === index) {
            btn.classList.add('selected');
        }

        btn.addEventListener('click', () => selectAnswer(index, btn));
        displays.optionsContainer.appendChild(btn);
    });

    updateButtons();
    updateProgress();
}

// Select Answer
function selectAnswer(index, btnElement) {
    // Remove previous selection
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });

    // Select new answer
    btnElement.classList.add('selected');
    const previousAnswer = quizState.answers[quizState.currentQuestionIndex];
    quizState.answers[quizState.currentQuestionIndex] = index;
    quizState.answered[quizState.currentQuestionIndex] = true;

    // Update score only if this is a new answer
    const question = quizQuestions[quizState.currentQuestionIndex];
    if (previousAnswer !== index) {
        // Recalculate score for this question
        if (previousAnswer === question.correctAnswer) {
            quizState.score -= 1;
        }
        if (index === question.correctAnswer) {
            quizState.score += 1;
        }
    }

    displays.scoreDisplay.textContent = quizState.score;
    updateButtons();
}

// Previous Question
function previousQuestion() {
    if (quizState.currentQuestionIndex > 0) {
        quizState.currentQuestionIndex--;
        loadQuestion();
    }
}

// Next Question
function nextQuestion() {
    if (quizState.currentQuestionIndex < quizQuestions.length - 1) {
        quizState.currentQuestionIndex++;
        loadQuestion();
    } else {
        completeQuiz();
    }
}

// Update Buttons State
function updateButtons() {
    buttons.prev.disabled = quizState.currentQuestionIndex === 0;
    buttons.next.disabled = !quizState.answered[quizState.currentQuestionIndex];

    if (quizState.currentQuestionIndex === quizQuestions.length - 1) {
        buttons.next.textContent = quizState.answered[quizState.currentQuestionIndex]
            ? '✓ Submit'
            : '✗ Answer Required';
    } else {
        buttons.next.textContent = 'Next →';
    }
}

// Update Progress Bar
function updateProgress() {
    const progress = ((quizState.currentQuestionIndex + 1) / quizQuestions.length) * 100;
    displays.progressBar.style.width = progress + '%';
}

// Timer
function startTimer() {
    quizState.timerInterval = setInterval(() => {
        quizState.timeLeft--;
        displays.timerDisplay.textContent = quizState.timeLeft;

        const timerBox = document.querySelector('.timer-box');
        if (quizState.timeLeft <= 10) {
            timerBox.classList.add('warning');
        }

        if (quizState.timeLeft === 0) {
            clearInterval(quizState.timerInterval);
            completeQuiz();
        }
    }, 1000);
}

// Complete Quiz
function completeQuiz() {
    clearInterval(quizState.timerInterval);
    quizState.quizCompleted = true;

    // Calculate results
    const correctAnswers = quizState.answers.reduce((count, answer, index) => {
        return answer === quizQuestions[index].correctAnswer ? count + 1 : count;
    }, 0);

    const wrongAnswers = quizState.answers.filter((answer, index) => {
        return answer !== null && answer !== quizQuestions[index].correctAnswer;
    }).length;

    const timeSpent = quizState.totalTime - quizState.timeLeft;
    const percentage = (correctAnswers / quizQuestions.length) * 100;

    // Determine feedback
    let resultTitle, resultMessage, icon;

    if (percentage === 100) {
        resultTitle = "Perfect! 🌟";
        resultMessage = "Outstanding! You got all questions correct!";
        icon = '🏆';
    } else if (percentage >= 80) {
        resultTitle = "Excellent! 🎉";
        resultMessage = "Great job! You performed really well!";
        icon = '🥇';
    } else if (percentage >= 60) {
        resultTitle = "Good Job! 👍";
        resultMessage = "You did well! Keep practicing to improve!";
        icon = '✌️';
    } else if (percentage >= 40) {
        resultTitle = "Not Bad! 💪";
        resultMessage = "You can do better! Try again to improve your score!";
        icon = '💡';
    } else {
        resultTitle = "Try Again! 📚";
        resultMessage = "Don't worry! Review the answers and give it another go!";
        icon = '📖';
    }

    // Update Results Page
    displays.finalScore.textContent = correctAnswers;
    displays.scorePercentage.textContent = percentage.toFixed(1) + '%';
    displays.correctCount.textContent = correctAnswers;
    displays.wrongCount.textContent = wrongAnswers;
    displays.timeSpent.textContent = timeSpent + 's';
    displays.resultsTitle.textContent = resultTitle;
    displays.resultsMessage.textContent = resultMessage;
    displays.resultsIcon.textContent = icon;

    showPage('results');
}

// Show Review
function showReview() {
    let reviewHTML = '';

    quizQuestions.forEach((question, index) => {
        const userAnswer = quizState.answers[index];
        const isCorrect = userAnswer === question.correctAnswer;
        const statusClass = isCorrect ? 'correct' : 'incorrect';
        const statusIcon = isCorrect ? '✓' : '✗';
        const statusText = isCorrect ? 'Correct' : 'Incorrect';

        reviewHTML += `
            <div class="review-item ${statusClass}">
                <div class="review-question-number">Question ${index + 1}</div>
                <div class="review-question-text">${question.question}</div>
                
                <div class="review-answer-box">
                    <span class="review-answer-label">Your Answer:</span>
                    <div class="review-answer-value ${statusClass}">
                        ${userAnswer !== null ? question.options[userAnswer] : 'Not answered'}
                    </div>
                </div>

                ${userAnswer !== question.correctAnswer ? `
                    <div class="review-answer-box">
                        <span class="review-answer-label">Correct Answer:</span>
                        <div class="review-answer-value correct">
                            ${question.options[question.correctAnswer]}
                        </div>
                    </div>
                ` : ''}

                <div class="review-status ${statusClass}">
                    ${statusIcon} ${statusText}
                </div>
            </div>
        `;
    });

    displays.reviewContent.innerHTML = reviewHTML;
    showPage('review');
}

// Back to Results
function backToResults() {
    showPage('results');
}

// Restart Quiz
function restartQuiz() {
    quizState = {
        currentQuestionIndex: 0,
        timeLeft: 60,
        score: 0,
        answers: new Array(quizQuestions.length).fill(null),
        answered: new Array(quizQuestions.length).fill(false),
        totalTime: 60,
        timerInterval: null,
        quizStarted: false,
        quizCompleted: false
    };

    displays.scoreDisplay.textContent = '0';
    displays.timerDisplay.textContent = '60';

    const timerBox = document.querySelector('.timer-box');
    timerBox.classList.remove('warning');

    showPage('landing');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    showPage('landing');
});
