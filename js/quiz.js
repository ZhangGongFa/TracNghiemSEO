// Hàm để kết hợp các câu hỏi từ nhiều nguồn
function combineQuestions() {
    // Lấy câu hỏi tùy chỉnh từ localStorage nếu có
    const customQuestions = JSON.parse(localStorage.getItem('customQuestions')) || [];
    
    // Kết hợp với câu hỏi có sẵn
    const allQuestions = [...questions, ...customQuestions];
    
    // Trả về mảng câu hỏi đã kết hợp
    return allQuestions;
}

// Lớp Quiz chứa logic xử lý trắc nghiệm
class Quiz {
    constructor(questions) {
        this.questions = questions;
        this.currentQuestionIndex = 0;
        this.wrongQuestions = [];
        this.mode = 'all'; // 'all' hoặc 'wrong'
    }

    // Lấy câu hỏi hiện tại
    getCurrentQuestion() {
        if (this.mode === 'all') {
            return this.questions[this.currentQuestionIndex];
        } else if (this.mode === 'wrong') {
            return this.questions[this.wrongQuestions[this.currentQuestionIndex]];
        }
    }

    // Kiểm tra đáp án
    checkAnswer(selectedOption) {
        const currentQuestion = this.getCurrentQuestion();
        const isCorrect = selectedOption === currentQuestion.correctAnswer;
        
        if (!isCorrect && this.mode === 'all' && !this.wrongQuestions.includes(this.currentQuestionIndex)) {
            this.wrongQuestions.push(this.currentQuestionIndex);
        }
        
        return isCorrect;
    }

    // Chuyển sang câu hỏi tiếp theo
    nextQuestion() {
        this.currentQuestionIndex++;
        return this.hasEnded();
    }

    // Kiểm tra xem bài trắc nghiệm đã kết thúc chưa
    hasEnded() {
        if (this.mode === 'all') {
            return this.currentQuestionIndex >= this.questions.length;
        } else if (this.mode === 'wrong') {
            return this.currentQuestionIndex >= this.wrongQuestions.length;
        }
    }

    // Lấy tổng số câu hỏi
    getTotalQuestions() {
        if (this.mode === 'all') {
            return this.questions.length;
        } else if (this.mode === 'wrong') {
            return this.wrongQuestions.length;
        }
    }

    // Lấy chỉ số câu hỏi hiện tại
    getCurrentQuestionNumber() {
        return this.currentQuestionIndex + 1;
    }

    // Lấy danh sách câu hỏi đã làm sai
    getWrongQuestions() {
        return this.wrongQuestions.map(index => this.questions[index]);
    }

    // Bắt đầu lại từ đầu
    restart() {
        this.currentQuestionIndex = 0;
        this.mode = 'all';
    }

    // Làm lại các câu hỏi đã làm sai
    retryWrongQuestions() {
        if (this.wrongQuestions.length > 0) {
            this.currentQuestionIndex = 0;
            this.mode = 'wrong';
            return true;
        }
        return false;
    }
}
