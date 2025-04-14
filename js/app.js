// Xử lý tương tác người dùng và hiển thị
document.addEventListener('DOMContentLoaded', () => {
    // Các phần tử DOM
    const homeSection = document.getElementById('home');
    const quizSection = document.getElementById('quiz');
    const endSection = document.getElementById('end');
    const startButton = document.getElementById('start-btn');
    const questionElement = document.getElementById('question');
    const choiceElements = Array.from(document.getElementsByClassName('choice-text'));
    const progressText = document.getElementById('progressText');
    const progressBarFull = document.getElementById('progressBarFull');
    const feedbackElement = document.getElementById('feedback');
    const feedbackText = document.getElementById('feedback-text');
    const nextButton = document.getElementById('next-btn');
    const finalScoreElement = document.getElementById('final-score');
    const wrongCountElement = document.getElementById('wrong-count');
    const wrongQuestionsElement = document.getElementById('wrong-questions');
    const wrongQuestionsListElement = document.getElementById('wrong-questions-list');
    const restartButton = document.getElementById('restart-btn');
    const retryWrongButton = document.getElementById('retry-wrong-btn');
    const questionSourceSelect = document.getElementById('question-source-select');

    // Biến lưu trữ các bộ câu hỏi
    let originalQuestions = questions;
    let wordQuestions = window.wordQuestions || [];
    let customQuestions = JSON.parse(localStorage.getItem('customQuestions')) || [];
    let activeQuestions = [];
    
    // Khởi tạo quiz
    let quiz;
    let selectedChoice = null;

    // Bắt đầu làm bài
    startButton.addEventListener('click', startQuiz);
    
    // Xử lý sự kiện chọn đáp án
    choiceElements.forEach(choice => {
        choice.addEventListener('click', selectChoice);
    });

    // Xử lý sự kiện nút "Câu tiếp theo"
    nextButton.addEventListener('click', goToNextQuestion);

    // Xử lý sự kiện nút "Làm lại từ đầu"
    restartButton.addEventListener('click', restartQuiz);

    // Xử lý sự kiện nút "Làm lại các câu sai"
    retryWrongButton.addEventListener('click', retryWrongQuestionsOnly);

    // Chọn bộ câu hỏi dựa trên lựa chọn của người dùng
    function selectQuestionSet() {
        const selectedSource = questionSourceSelect.value;
        
        switch(selectedSource) {
            case 'original':
                activeQuestions = [...originalQuestions];
                break;
            case 'word':
                activeQuestions = [...wordQuestions];
                break;
            case 'custom':
                activeQuestions = [...customQuestions];
                break;
            case 'all':
                activeQuestions = [...originalQuestions, ...wordQuestions, ...customQuestions];
                break;
            default:
                activeQuestions = [...originalQuestions];
        }
        
        // Nếu không có câu hỏi nào, hiển thị thông báo
        if (activeQuestions.length === 0) {
            alert('Không có câu hỏi nào trong bộ câu hỏi này. Vui lòng chọn bộ câu hỏi khác.');
            return false;
        }
        
        return true;
    }

    // Bắt đầu làm bài
    function startQuiz() {
        if (!selectQuestionSet()) {
            return;
        }
        
        quiz = new Quiz(activeQuestions);
        homeSection.classList.add('hide');
        quizSection.classList.remove('hide');
        displayQuestion();
    }

    // Hiển thị câu hỏi hiện tại
    function displayQuestion() {
        resetState();
        const currentQuestion = quiz.getCurrentQuestion();
        const questionNumber = quiz.getCurrentQuestionNumber();
        const totalQuestions = quiz.getTotalQuestions();
        
        // Cập nhật tiến trình
        progressText.innerText = `Câu hỏi ${questionNumber}/${totalQuestions}`;
        progressBarFull.style.width = `${(questionNumber / totalQuestions) * 100}%`;
        
        // Hiển thị nội dung câu hỏi
        questionElement.innerText = currentQuestion.question;
        
        // Hiển thị các lựa chọn
        choiceElements.forEach(choice => {
            const optionLetter = choice.dataset.option;
            choice.innerText = currentQuestion.options[optionLetter];
        });
    }

    // Reset trạng thái
    function resetState() {
        feedbackElement.classList.add('hide');
        nextButton.classList.add('hide');
        selectedChoice = null;
        
        choiceElements.forEach(choice => {
            choice.parentElement.classList.remove('selected');
        });
    }

    // Xử lý sự kiện chọn đáp án
    function selectChoice(e) {
        // Bỏ chọn tất cả các lựa chọn khác
        choiceElements.forEach(choice => {
            choice.parentElement.classList.remove('selected');
        });
        
        // Chọn lựa chọn hiện tại
        selectedChoice = e.target;
        selectedChoice.parentElement.classList.add('selected');
        
        // Kiểm tra đáp án
        const selectedOption = selectedChoice.dataset.option;
        const isCorrect = quiz.checkAnswer(selectedOption);
        
        // Hiển thị kết quả
        feedbackElement.classList.remove('hide');
        
        if (isCorrect) {
            feedbackElement.classList.add('correct');
            feedbackElement.classList.remove('incorrect');
            feedbackText.innerText = 'Đúng!';
            nextButton.classList.remove('hide');
        } else {
            feedbackElement.classList.add('incorrect');
            feedbackElement.classList.remove('correct');
            feedbackText.innerText = 'Sai! Vui lòng chọn lại.';
            // Không hiển thị nút "Câu tiếp theo" khi trả lời sai
            nextButton.classList.add('hide');
        }
    }

    // Chuyển sang câu hỏi tiếp theo
    function goToNextQuestion() {
        const hasEnded = quiz.nextQuestion();
        
        if (hasEnded) {
            endQuiz();
        } else {
            displayQuestion();
        }
    }

    // Kết thúc bài làm
    function endQuiz() {
        quizSection.classList.add('hide');
        endSection.classList.remove('hide');
        
        const wrongQuestions = quiz.getWrongQuestions();
        
        finalScoreElement.innerText = `Bạn đã hoàn thành ${quiz.getTotalQuestions()} câu hỏi!`;
        wrongCountElement.innerText = `Số câu làm sai: ${wrongQuestions.length}`;
        
        if (wrongQuestions.length > 0) {
            wrongQuestionsElement.classList.remove('hide');
            wrongQuestionsListElement.innerHTML = '';
            
            wrongQuestions.forEach(question => {
                const listItem = document.createElement('li');
                listItem.innerText = question.question;
                wrongQuestionsListElement.appendChild(listItem);
            });
            
            retryWrongButton.disabled = false;
        } else {
            wrongQuestionsElement.classList.add('hide');
            retryWrongButton.disabled = true;
        }
    }

    // Làm lại từ đầu
    function restartQuiz() {
        quiz.restart();
        endSection.classList.add('hide');
        quizSection.classList.remove('hide');
        displayQuestion();
    }

    // Làm lại các câu sai
    function retryWrongQuestionsOnly() {
        const hasWrongQuestions = quiz.retryWrongQuestions();
        
        if (hasWrongQuestions) {
            endSection.classList.add('hide');
            quizSection.classList.remove('hide');
            displayQuestion();
        }
    }

    // Tải câu hỏi từ tài liệu Word nếu chưa có
    function loadWordQuestions() {
        fetch('word_questions.json')
            .then(response => response.json())
            .then(data => {
                wordQuestions = data;
                window.wordQuestions = data;
                console.log(`Đã tải ${wordQuestions.length} câu hỏi từ tài liệu Word`);
            })
            .catch(error => {
                console.error('Lỗi khi tải câu hỏi từ tài liệu Word:', error);
            });
    }

    // Tải câu hỏi từ tài liệu Word khi trang được tải
    loadWordQuestions();
});
