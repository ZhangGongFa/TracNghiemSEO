# Trắc Nghiệm SEO (Phiên bản cuối cùng)

Ứng dụng trắc nghiệm kiến thức SEO với hơn 700 câu hỏi trắc nghiệm từ nhiều nguồn và các tính năng quản lý câu hỏi nâng cao.

## Tính năng mới nhất

- **Import từ file Word**: Người dùng có thể tự tải lên file Word chứa câu hỏi trắc nghiệm, hệ thống sẽ tự động trích xuất câu hỏi và đáp án (đáp án đúng được đánh dấu bằng chữ in đậm trong file Word)

## Tính năng đã cập nhật trước đó

- **Đã sửa lỗi**: Người dùng có thể chọn lại đáp án khi trả lời sai
- **Nhiều nguồn câu hỏi**: 
  - 88 câu hỏi gốc từ website
  - 700 câu hỏi từ tài liệu Word
  - Câu hỏi tự thêm
  - Tùy chọn sử dụng tất cả câu hỏi
- **Thêm câu hỏi thủ công**: Giao diện cho phép người dùng thêm câu hỏi mới với đáp án

## Tính năng cơ bản

- Giao diện thân thiện, responsive trên cả máy tính và thiết bị di động
- Chức năng làm bài trắc nghiệm với phản hồi ngay lập tức (đúng/sai)
- Khi làm sai, người dùng phải chọn lại đến khi đúng mới được tiếp tục
- Sau khi hoàn thành, người dùng có thể chọn làm lại từ đầu hoặc chỉ làm lại các câu đã làm sai

## Cách sử dụng

1. Clone repository này về máy
2. Mở file `index.html` trong trình duyệt web
3. Chọn nguồn câu hỏi từ dropdown menu
4. Nhấn nút "Bắt Đầu Làm Bài" để bắt đầu làm trắc nghiệm
5. Chọn đáp án cho từng câu hỏi
6. Sau khi hoàn thành, bạn có thể chọn làm lại từ đầu hoặc chỉ làm lại các câu đã làm sai
7. Để thêm câu hỏi mới, nhấn nút "Thêm Câu Hỏi Mới" trên trang chủ
8. Để import câu hỏi từ file Word, nhấn nút "Import Từ File Word" trên trang chủ

## Hướng dẫn import câu hỏi từ file Word

1. Nhấn nút "Import Từ File Word" trên trang chủ
2. Chọn file Word (.docx) chứa câu hỏi trắc nghiệm
3. File Word phải có định dạng:
   - Mỗi câu hỏi bắt đầu bằng số thứ tự, ví dụ: "1. Câu hỏi..."
   - Mỗi đáp án bắt đầu bằng chữ cái A, B, C, D, ví dụ: "A. Đáp án A"
   - Đáp án đúng phải được in đậm trong file Word
4. Nhấn nút "Import Câu Hỏi" để bắt đầu xử lý
5. Sau khi xử lý xong, bạn có thể xem trước các câu hỏi đã trích xuất
6. Nhấn nút "Lưu Câu Hỏi" để lưu các câu hỏi vào bộ câu hỏi tự thêm

## Cấu trúc thư mục

```
/
├── index.html          # Trang chính
├── add_question.html   # Trang thêm câu hỏi mới
├── import_word.html    # Trang import câu hỏi từ file Word
├── css/
│   ├── style.css       # CSS chính
│   └── responsive.css  # CSS cho thiết kế responsive
├── js/
│   ├── app.js          # JavaScript chính
│   ├── questions.js    # Dữ liệu câu hỏi gốc
│   ├── word_questions.js # Dữ liệu câu hỏi từ tài liệu Word
│   └── quiz.js         # Logic xử lý trắc nghiệm
├── word_questions.json # Dữ liệu câu hỏi từ tài liệu Word (dạng JSON)
└── README.md           # Tài liệu hướng dẫn
```

## Công nghệ sử dụng

- HTML5
- CSS3
- JavaScript (ES6)
- Mammoth.js (để xử lý file Word)

## Nguồn dữ liệu

- Câu hỏi gốc: Thu thập từ trang web [voviethoang.top](https://voviethoang.top/bo-50-cau-hoi-trac-nghiem-seo-online-seo-co-ban-bo-*/)
- Câu hỏi từ tài liệu Word: Trích xuất từ file SEO.docx được cung cấp
- Câu hỏi tự thêm: Người dùng có thể thêm câu hỏi thủ công hoặc import từ file Word
