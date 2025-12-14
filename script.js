// Quiz Questions - Based on Narcissistic Personality Inventory (NPI)
const questions = [
    {
        question: "I think I am a special person.",
        options: [
            { text: "Strongly Disagree", value: 0 },
            { text: "Disagree", value: 1 },
            { text: "Neutral", value: 2 },
            { text: "Agree", value: 3 },
            { text: "Strongly Agree", value: 4 }
        ]
    },
    {
        question: "I like to be the center of attention.",
        options: [
            { text: "Strongly Disagree", value: 0 },
            { text: "Disagree", value: 1 },
            { text: "Neutral", value: 2 },
            { text: "Agree", value: 3 },
            { text: "Strongly Agree", value: 4 }
        ]
    },
    {
        question: "I am more capable than other people.",
        options: [
            { text: "Strongly Disagree", value: 0 },
            { text: "Disagree", value: 1 },
            { text: "Neutral", value: 2 },
            { text: "Agree", value: 3 },
            { text: "Strongly Agree", value: 4 }
        ]
    },
    {
        question: "I like to look at myself in the mirror.",
        options: [
            { text: "Strongly Disagree", value: 0 },
            { text: "Disagree", value: 1 },
            { text: "Neutral", value: 2 },
            { text: "Agree", value: 3 },
            { text: "Strongly Agree", value: 4 }
        ]
    },
    {
        question: "I expect a great deal from other people.",
        options: [
            { text: "Strongly Disagree", value: 0 },
            { text: "Disagree", value: 1 },
            { text: "Neutral", value: 2 },
            { text: "Agree", value: 3 },
            { text: "Strongly Agree", value: 4 }
        ]
    },
    {
        question: "I like to show off my body.",
        options: [
            { text: "Strongly Disagree", value: 0 },
            { text: "Disagree", value: 1 },
            { text: "Neutral", value: 2 },
            { text: "Agree", value: 3 },
            { text: "Strongly Agree", value: 4 }
        ]
    },
    {
        question: "I can make anybody believe anything I want them to.",
        options: [
            { text: "Strongly Disagree", value: 0 },
            { text: "Disagree", value: 1 },
            { text: "Neutral", value: 2 },
            { text: "Agree", value: 3 },
            { text: "Strongly Agree", value: 4 }
        ]
    },
    {
        question: "I am apt to show off if I get the chance.",
        options: [
            { text: "Strongly Disagree", value: 0 },
            { text: "Disagree", value: 1 },
            { text: "Neutral", value: 2 },
            { text: "Agree", value: 3 },
            { text: "Strongly Agree", value: 4 }
        ]
    },
    {
        question: "I know that I am good because everybody keeps telling me so.",
        options: [
            { text: "Strongly Disagree", value: 0 },
            { text: "Disagree", value: 1 },
            { text: "Neutral", value: 2 },
            { text: "Agree", value: 3 },
            { text: "Strongly Agree", value: 4 }
        ]
    },
    {
        question: "I will be a success.",
        options: [
            { text: "Strongly Disagree", value: 0 },
            { text: "Disagree", value: 1 },
            { text: "Neutral", value: 2 },
            { text: "Agree", value: 3 },
            { text: "Strongly Agree", value: 4 }
        ]
    },
    {
        question: "I like to start new fads and fashions.",
        options: [
            { text: "Strongly Disagree", value: 0 },
            { text: "Disagree", value: 1 },
            { text: "Neutral", value: 2 },
            { text: "Agree", value: 3 },
            { text: "Strongly Agree", value: 4 }
        ]
    },
    {
        question: "I would prefer to be a leader.",
        options: [
            { text: "Strongly Disagree", value: 0 },
            { text: "Disagree", value: 1 },
            { text: "Neutral", value: 2 },
            { text: "Agree", value: 3 },
            { text: "Strongly Agree", value: 4 }
        ]
    },
    {
        question: "I am going to be a great person.",
        options: [
            { text: "Strongly Disagree", value: 0 },
            { text: "Disagree", value: 1 },
            { text: "Neutral", value: 2 },
            { text: "Agree", value: 3 },
            { text: "Strongly Agree", value: 4 }
        ]
    },
    {
        question: "I like having authority over other people.",
        options: [
            { text: "Strongly Disagree", value: 0 },
            { text: "Disagree", value: 1 },
            { text: "Neutral", value: 2 },
            { text: "Agree", value: 3 },
            { text: "Strongly Agree", value: 4 }
        ]
    },
    {
        question: "I find it easy to manipulate people.",
        options: [
            { text: "Strongly Disagree", value: 0 },
            { text: "Disagree", value: 1 },
            { text: "Neutral", value: 2 },
            { text: "Agree", value: 3 },
            { text: "Strongly Agree", value: 4 }
        ]
    }
];

// Quiz State
let currentQuestion = 0;
let score = 0;
let answers = [];

// Initialize the quiz
function initQuiz() {
    // Set total questions
    document.getElementById('total-questions').textContent = questions.length;
    // Initialize answers array
    answers = new Array(questions.length).fill(null);
    // Create question navigation bar
    createQuestionNavBar();
    showQuestion();
}

// Start the quiz
function startQuiz() {
    document.getElementById('welcome-screen').classList.remove('active');
    document.getElementById('quiz-screen').classList.add('active');
    initQuiz();
}

// Create question navigation bar
function createQuestionNavBar() {
    const navBar = document.getElementById('question-numbers');
    navBar.innerHTML = '';

    questions.forEach((_, index) => {
        const btn = document.createElement('div');
        btn.className = 'question-number-btn';
        btn.textContent = index + 1;
        btn.onclick = () => goToQuestion(index);
        navBar.appendChild(btn);
    });
}

// Update question navigation bar
function updateQuestionNavBar() {
    const navButtons = document.querySelectorAll('.question-number-btn');

    navButtons.forEach((btn, index) => {
        btn.classList.remove('current', 'answered');

        if (index === currentQuestion) {
            btn.classList.add('current');
        } else if (answers[index] !== null) {
            btn.classList.add('answered');
        }
    });
}

// Go to specific question
function goToQuestion(index) {
    if (index >= 0 && index < questions.length) {
        currentQuestion = index;
        showQuestion();
    }
}

// Show current question
function showQuestion() {
    const question = questions[currentQuestion];

    // Update question number
    document.getElementById('current-question-num').textContent = currentQuestion + 1;

    // Update question text
    document.getElementById('question-text').textContent = question.question;

    // Clear and populate options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    // Get previously selected answer for this question
    const previousAnswer = answers[currentQuestion];

    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option.text;

        // If this option was previously selected, mark it
        if (previousAnswer !== null && question.options[index].value === previousAnswer) {
            optionElement.classList.add('selected');
        }

        optionElement.onclick = () => selectOption(index, optionElement);
        optionsContainer.appendChild(optionElement);
    });

    // Update progress bar (based on answered questions)
    const answeredCount = answers.filter(a => a !== null).length;
    const progress = (answeredCount / questions.length) * 100;
    document.getElementById('progress').style.width = progress + '%';

    // Update navigation buttons
    updateNavigationButtons();

    // Update question navigation bar
    updateQuestionNavBar();
}

// Update navigation buttons state
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');

    // Previous button
    prevBtn.disabled = currentQuestion === 0;

    // Next/Submit buttons
    if (currentQuestion === questions.length - 1) {
        // Last question - show submit button
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
        submitBtn.disabled = answers[currentQuestion] === null;
    } else {
        // Not last question - show next button
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
        nextBtn.disabled = answers[currentQuestion] === null;
    }
}

// Select an option
function selectOption(index, element) {
    // Remove previous selection
    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));

    // Mark current selection
    element.classList.add('selected');

    // Store answer
    answers[currentQuestion] = questions[currentQuestion].options[index].value;

    // Update navigation buttons and progress
    updateNavigationButtons();
    updateQuestionNavBar();

    // Update progress bar
    const answeredCount = answers.filter(a => a !== null).length;
    const progress = (answeredCount / questions.length) * 100;
    document.getElementById('progress').style.width = progress + '%';
}

// Move to previous question
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

// Move to next question
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    }
}

// Submit quiz and show results
function submitQuiz() {
    // Calculate total score
    score = 0;
    answers.forEach((answer, index) => {
        if (answer !== null) {
            score += answer;
        }
    });

    // Check if all questions are answered
    const allAnswered = answers.every(a => a !== null);

    if (!allAnswered) {
        if (confirm('You have not answered all questions. Submit anyway?')) {
            showResults();
        }
    } else {
        showResults();
    }
}

// Show results
function showResults() {
    document.getElementById('quiz-screen').classList.remove('active');
    document.getElementById('results-screen').classList.add('active');

    // Display score
    document.getElementById('score-display').textContent = score;

    // Determine result message
    const maxScore = questions.length * 4; // 15 questions * 4 (max value)
    const percentage = (score / maxScore) * 100;

    let message, description;

    if (percentage < 20) {
        message = "Very Low Narcissism";
        description = "You show very low levels of narcissistic traits. You tend to be humble, modest, and don't seek excessive attention or admiration from others.";
    } else if (percentage < 40) {
        message = "Low Narcissism";
        description = "You have low levels of narcissistic traits. You're generally modest and don't feel the need to be the center of attention.";
    } else if (percentage < 60) {
        message = "Moderate Narcissism";
        description = "You show moderate levels of narcissistic traits. This is quite common and normal. You have a healthy balance of self-confidence without being overly self-centered.";
    } else if (percentage < 80) {
        message = "High Narcissism";
        description = "You show high levels of narcissistic traits. You may have a strong need for admiration, feel superior to others, and seek attention. Consider reflecting on how this affects your relationships.";
    } else {
        message = "Very High Narcissism";
        description = "You show very high levels of narcissistic traits. You may have an excessive need for admiration, lack empathy, and have an inflated sense of self-importance. Consider seeking professional guidance if this affects your daily life and relationships.";
    }

    document.getElementById('result-message').textContent = message;
    document.getElementById('result-description').textContent = description;
}

// Restart quiz
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    answers = new Array(questions.length).fill(null);

    document.getElementById('results-screen').classList.remove('active');
    document.getElementById('welcome-screen').classList.add('active');
}

