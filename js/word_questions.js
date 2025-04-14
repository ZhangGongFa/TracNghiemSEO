// Câu hỏi trắc nghiệm SEO từ tài liệu Word
const wordQuestions = 
[
  {
    "id": 1744611387439,
    "question": "SEO (Tối ưu hóa công cụ tìm kiếm) là gì?",
    "options": {
      "A": "Một loại virus máy tính tấn công các trang web.",
      "B": "Quá trình tăng cường khả năng hiển thị của trang web trên các công cụ tìm kiếm.",
      "C": "Một hình thức quảng cáo trả phí trên mạng xã hội.",
      "D": "Phần mềm quản lý nội dung trang web."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387440,
    "question": "Mục tiêu chính của SEO là gì?",
    "options": {
      "A": "Tăng số lượng trang trên website.",
      "B": "Thu hút người dùng truy cập website từ các nguồn trả phí.",
      "C": "Tăng lưu lượng truy cập tự nhiên (organic traffic) và chất lượng đến website.",
      "D": "Xây dựng liên kết từ các website không liên quan."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387441,
    "question": "Yếu tố nào sau đây KHÔNG phải là yếu tố SEO On-page?",
    "options": {
      "A": "Tối ưu hóa thẻ tiêu đề (Title tag).",
      "B": "Xây dựng liên kết ngược (Backlink).",
      "C": "Tối ưu hóa nội dung bài viết.",
      "D": "Tối ưu hóa thẻ mô tả meta (Meta description)."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387442,
    "question": "Từ khóa (Keywords) đóng vai trò quan trọng như thế nào trong SEO?",
    "options": {
      "A": "Từ khóa chỉ quan trọng trong quảng cáo trả phí, không liên quan đến SEO.",
      "B": "Từ khóa giúp công cụ tìm kiếm hiểu nội dung trang web và kết nối với truy vấn tìm kiếm của người dùng.",
      "C": "Từ khóa giúp trang web tăng tốc độ tải trang.",
      "D": "Từ khóa giúp trang web có giao diện đẹp hơn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387443,
    "question": "Thẻ tiêu đề (Title tag) có vai trò gì trong SEO?",
    "options": {
      "A": "Hiển thị nội dung chính của trang web trên trang chủ.",
      "B": "Hiển thị tên miền của website trên thanh địa chỉ trình duyệt.",
      "C": "Hiển thị tiêu đề trang trên trang kết quả tìm kiếm (SERPs) và tab trình duyệt.",
      "D": "Tạo hiệu ứng đồ họa cho trang web."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387444,
    "question": "Mô tả meta (Meta description) thường được sử dụng để làm gì?",
    "options": {
      "A": "Tăng tốc độ tải trang.",
      "B": "Cung cấp đoạn mô tả ngắn gọn về nội dung trang web trên trang kết quả tìm kiếm (SERPs).",
      "C": "Chèn từ khóa ẩn vào trang web.",
      "D": "Thay thế nội dung chính của trang web."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387445,
    "question": "Tại sao tốc độ tải trang (Page speed) lại quan trọng đối với SEO?",
    "options": {
      "A": "Tốc độ tải trang không ảnh hưởng đến SEO.",
      "B": "Tốc độ tải trang chậm có thể làm tăng tỷ lệ thoát trang (Bounce rate) và ảnh hưởng tiêu cực đến trải nghiệm người dùng.",
      "C": "Tốc độ tải trang nhanh giúp trang web hiển thị quảng cáo tốt hơn.",
      "D": "Tốc độ tải trang chỉ quan trọng đối với thiết bị di động."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387446,
    "question": "Liên kết ngược (Backlink) là gì trong SEO?",
    "options": {
      "A": "Liên kết nội bộ giữa các trang trong cùng một website.",
      "B": "Liên kết từ website khác trỏ về website của bạn.",
      "C": "Liên kết từ website của bạn trỏ ra website khác.",
      "D": "Liên kết đến các trang mạng xã hội."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387447,
    "question": "Trong SEO, 'Anchor text' là gì?",
    "options": {
      "A": "Văn bản thay thế hình ảnh khi hình ảnh không tải được.",
      "B": "Văn bản hiển thị khi di chuột lên liên kết.",
      "C": "Văn bản có thể nhấp chuột được sử dụng để tạo liên kết.",
      "D": "Văn bản ẩn chứa từ khóa, không hiển thị cho người dùng."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387448,
    "question": "Phương pháp SEO nào sau đây được coi là 'SEO mũ đen' (Black hat SEO)?",
    "options": {
      "A": "Xây dựng nội dung chất lượng và hữu ích cho người dùng.",
      "B": "Tối ưu hóa tốc độ tải trang.",
      "C": "Nhồi nhét từ khóa (Keyword stuffing) vào nội dung.",
      "D": "Xây dựng liên kết tự nhiên từ các website uy tín."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387449,
    "question": "Sitemap XML có vai trò gì đối với SEO?",
    "options": {
      "A": "Tăng tốc độ tải trang.",
      "B": "Giúp công cụ tìm kiếm thu thập dữ liệu (crawl) và lập chỉ mục (index) website hiệu quả hơn.",
      "C": "Cải thiện trải nghiệm người dùng trên website.",
      "D": "Tạo giao diện đẹp hơn cho website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387450,
    "question": "Công cụ nào sau đây thường được sử dụng để phân tích từ khóa và nghiên cứu đối thủ trong SEO?",
    "options": {
      "A": "Microsoft Word.",
      "B": "Google Sheets.",
      "C": "Google Keyword Planner.",
      "D": "Adobe Photoshop."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387451,
    "question": "Đối với SEO Local (SEO địa phương), yếu tố nào sau đây quan trọng nhất để cải thiện thứ hạng?",
    "options": {
      "A": "Số lượng bài viết blog trên website.",
      "B": "Số lượng backlink từ website quốc tế.",
      "C": "Thông tin NAP (Name, Address, Phone number) nhất quán và chính xác trên các nền tảng trực tuyến.",
      "D": "Tốc độ tải trang website trên máy tính để bàn."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387452,
    "question": "Khi nào thì việc sử dụng thuộc tính 'nofollow' cho liên kết là phù hợp trong SEO?",
    "options": {
      "A": "Khi liên kết đến các trang web có nội dung chất lượng cao.",
      "B": "Khi liên kết đến trang web của đối thủ cạnh tranh.",
      "C": "Khi liên kết đến các trang web không đáng tin cậy hoặc liên kết quảng cáo trả phí.",
      "D": "Khi liên kết đến các trang web có tốc độ tải trang nhanh."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387453,
    "question": "Điều gì sẽ xảy ra nếu một website bị Google phạt (Google penalty) do vi phạm chính sách SEO?",
    "options": {
      "A": "Website sẽ được Google khen thưởng.",
      "B": "Thứ hạng website sẽ được cải thiện nhanh chóng.",
      "C": "Lưu lượng truy cập tự nhiên (organic traffic) của website có thể giảm đáng kể hoặc website bị loại khỏi kết quả tìm kiếm.",
      "D": "Website sẽ được miễn phí quảng cáo trên Google Ads."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387454,
    "question": "SEO (Tối ưu hóa công cụ tìm kiếm) là gì?",
    "options": {
      "A": "Một phương pháp xây dựng website nhanh chóng.",
      "B": "Một chiến lược marketing trực tuyến nhằm tăng thứ hạng website trên các công cụ tìm kiếm.",
      "C": "Một loại hình quảng cáo trả phí trên Google.",
      "D": "Một công cụ phân tích hiệu suất website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387455,
    "question": "Yếu tố nào sau đây **không** phải là yếu tố On-page SEO?",
    "options": {
      "A": "Tối ưu hóa thẻ tiêu đề (Title tag).",
      "B": "Xây dựng liên kết ngược (Backlink).",
      "C": "Tối ưu hóa nội dung bài viết.",
      "D": "Tối ưu hóa tốc độ tải trang."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387456,
    "question": "Tại sao nghiên cứu từ khóa (Keyword Research) lại quan trọng trong SEO?",
    "options": {
      "A": "Giúp website có giao diện đẹp hơn.",
      "B": "Giúp xác định những từ khóa mà khách hàng mục tiêu sử dụng để tìm kiếm sản phẩm/dịch vụ.",
      "C": "Giúp website tải nhanh hơn.",
      "D": "Giúp website được bảo mật tốt hơn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387457,
    "question": "Thẻ tiêu đề (Title tag) có vai trò gì trong SEO?",
    "options": {
      "A": "Hiển thị mô tả ngắn gọn về nội dung trang trên trang kết quả tìm kiếm.",
      "B": "Xác định ngôn ngữ chính của trang web.",
      "C": "Tiêu đề chính hiển thị trên trang web.",
      "D": "Mô tả nội dung trang web cho công cụ tìm kiếm và người dùng trên trang kết quả tìm kiếm."
    },
    "correctAnswer": "D",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387458,
    "question": "Liên kết nội bộ (Internal link) là gì và tại sao nó quan trọng cho SEO?",
    "options": {
      "A": "Liên kết từ website khác đến website của bạn, giúp tăng độ tin cậy.",
      "B": "Liên kết giữa các trang khác nhau trong cùng một website, giúp điều hướng người dùng và công cụ tìm kiếm.",
      "C": "Liên kết đến các trang mạng xã hội của website.",
      "D": "Liên kết đến các website đối thủ để so sánh."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387459,
    "question": "Mô tả meta (Meta description) được hiển thị ở đâu và có tác dụng gì?",
    "options": {
      "A": "Hiển thị trong nội dung chính của trang web, giúp làm nổi bật thông tin.",
      "B": "Hiển thị ở cuối trang web, cung cấp thông tin liên hệ.",
      "C": "Hiển thị dưới thẻ tiêu đề trên trang kết quả tìm kiếm, mô tả ngắn gọn nội dung trang.",
      "D": "Hiển thị trong URL của trang web, giúp tối ưu URL."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387460,
    "question": "Trong SEO, 'từ khóa đuôi dài' (Long-tail keyword) thường có đặc điểm gì?",
    "options": {
      "A": "Ngắn gọn, có tính cạnh tranh cao và lượng tìm kiếm lớn.",
      "B": "Dài hơn, cụ thể hơn, ít cạnh tranh hơn và lượng tìm kiếm thấp hơn nhưng tỷ lệ chuyển đổi cao hơn.",
      "C": "Chỉ bao gồm một từ duy nhất, rất phổ biến.",
      "D": "Chỉ sử dụng các từ khóa thương hiệu của công ty."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387461,
    "question": "Công cụ nào của Google giúp bạn theo dõi hiệu suất SEO của website, ví dụ như số lần hiển thị, nhấp chuột và lỗi thu thập dữ liệu?",
    "options": {
      "A": "Google Analytics.",
      "B": "Google Ads.",
      "C": "Google Search Console.",
      "D": "Google My Business."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387462,
    "question": "Tốc độ tải trang web chậm ảnh hưởng đến SEO như thế nào?",
    "options": {
      "A": "Không ảnh hưởng gì đến SEO.",
      "B": "Cải thiện trải nghiệm người dùng và tăng thứ hạng SEO.",
      "C": "Làm giảm trải nghiệm người dùng, tăng tỷ lệ thoát trang và có thể làm giảm thứ hạng SEO.",
      "D": "Chỉ ảnh hưởng đến SEO trên thiết bị di động, không ảnh hưởng trên máy tính."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387463,
    "question": "Tại sao website cần phải thân thiện với thiết bị di động (Mobile-friendly) trong SEO?",
    "options": {
      "A": "Chỉ để website hiển thị đẹp hơn trên điện thoại.",
      "B": "Vì Google ưu tiên xếp hạng các website thân thiện với di động, do lượng người dùng di động ngày càng tăng.",
      "C": "Để giảm chi phí hosting.",
      "D": "Để tăng tốc độ tải trang trên máy tính."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387464,
    "question": "Phương pháp SEO 'White hat' và 'Black hat' khác nhau chủ yếu ở điểm nào?",
    "options": {
      "A": "White hat tập trung vào kỹ thuật, Black hat tập trung vào nội dung.",
      "B": "White hat là SEO trả phí, Black hat là SEO miễn phí.",
      "C": "White hat tuân thủ nguyên tắc của công cụ tìm kiếm, tập trung vào giá trị lâu dài; Black hat sử dụng thủ thuật để nhanh chóng đạt thứ hạng cao nhưng rủi ro bị phạt.",
      "D": "White hat chỉ dành cho website lớn, Black hat dành cho website nhỏ."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387465,
    "question": "Backlink (liên kết ngược) chất lượng là gì và tại sao nó quan trọng?",
    "options": {
      "A": "Bất kỳ liên kết nào trỏ về website của bạn, số lượng càng nhiều càng tốt.",
      "B": "Liên kết từ các website uy tín, liên quan đến lĩnh vực của bạn, giúp tăng độ tin cậy và thứ hạng SEO.",
      "C": "Liên kết từ các trang mạng xã hội.",
      "D": "Liên kết từ website đối thủ."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387466,
    "question": "XML Sitemap có vai trò gì trong SEO?",
    "options": {
      "A": "Giúp website tải nhanh hơn.",
      "B": "Giúp người dùng dễ dàng điều hướng trên website.",
      "C": "Cung cấp bản đồ website cho công cụ tìm kiếm, giúp họ thu thập dữ liệu (crawl) và lập chỉ mục (index) website hiệu quả hơn.",
      "D": "Giúp bảo mật website tốt hơn."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387467,
    "question": "Đâu là một ví dụ về hành động SEO 'Black hat' nên tránh?",
    "options": {
      "A": "Tạo nội dung chất lượng, hữu ích cho người dùng.",
      "B": "Xây dựng liên kết tự nhiên từ các website uy tín.",
      "C": "Nhồi nhét từ khóa (Keyword stuffing) vào nội dung.",
      "D": "Tối ưu hóa tốc độ tải trang."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387468,
    "question": "Đo lường hiệu quả SEO thường dựa trên những chỉ số (metrics) nào?",
    "options": {
      "A": "Số lượng bài viết đã đăng.",
      "B": "Lưu lượng truy cập tự nhiên (Organic traffic), thứ hạng từ khóa, tỷ lệ chuyển đổi.",
      "C": "Số lượng like và share trên mạng xã hội.",
      "D": "Thời gian trung bình người dùng ở lại trang web."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387469,
    "question": "Mục tiêu chính của SEO (Tối ưu hóa công cụ tìm kiếm) là gì?",
    "options": {
      "A": "Tăng lưu lượng truy cập trực tiếp vào trang web.",
      "B": "Cải thiện thứ hạng trang web trên các trang kết quả tìm kiếm (SERPs) cho các từ khóa mục tiêu.",
      "C": "Tăng số lượng bài đăng trên mạng xã hội.",
      "D": "Giảm chi phí quảng cáo trực tuyến."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387470,
    "question": "Trong SEO, 'từ khóa' đóng vai trò quan trọng như thế nào?",
    "options": {
      "A": "Từ khóa chỉ quan trọng cho việc đặt tên miền trang web.",
      "B": "Từ khóa giúp công cụ tìm kiếm hiểu nội dung trang web và kết nối với truy vấn tìm kiếm của người dùng.",
      "C": "Từ khóa chỉ cần được thêm vào phần chân trang (footer) của website.",
      "D": "Từ khóa không còn quan trọng trong SEO hiện đại."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387471,
    "question": "Phương pháp SEO 'White Hat' và 'Black Hat' khác nhau chủ yếu ở điểm nào?",
    "options": {
      "A": "White Hat tập trung vào tốc độ, Black Hat tập trung vào chất lượng.",
      "B": "White Hat tuân thủ nguyên tắc của công cụ tìm kiếm, Black Hat cố gắng 'lách luật' để đạt kết quả nhanh chóng.",
      "C": "White Hat sử dụng công cụ tự động, Black Hat thực hiện thủ công.",
      "D": "White Hat chỉ áp dụng cho trang web mới, Black Hat cho trang web cũ."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387472,
    "question": "Yếu tố nào sau đây **không** thuộc về SEO On-page?",
    "options": {
      "A": "Tối ưu hóa thẻ tiêu đề (title tag).",
      "B": "Xây dựng liên kết ngược (backlink) từ các trang web khác.",
      "C": "Tối ưu hóa nội dung bài viết.",
      "D": "Cải thiện tốc độ tải trang."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387473,
    "question": "Tại sao tốc độ tải trang web lại quan trọng đối với SEO?",
    "options": {
      "A": "Tốc độ tải trang nhanh giúp tiết kiệm chi phí hosting.",
      "B": "Tốc độ tải trang nhanh cải thiện trải nghiệm người dùng và là một yếu tố xếp hạng của Google.",
      "C": "Tốc độ tải trang nhanh giúp trang web hiển thị đẹp hơn trên thiết bị di động.",
      "D": "Tốc độ tải trang nhanh giúp giảm dung lượng lưu trữ của website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387474,
    "question": "Thẻ tiêu đề (Title Tag) có vai trò gì trong SEO?",
    "options": {
      "A": "Hiển thị tên tác giả bài viết trên trang web.",
      "B": "Mô tả ngắn gọn nội dung trang web và hiển thị trên SERPs như một tiêu đề.",
      "C": "Chứa thông tin bản quyền của trang web.",
      "D": "Điều hướng người dùng đến trang chủ website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387475,
    "question": "Liên kết nội bộ (Internal link) mang lại lợi ích gì cho SEO?",
    "options": {
      "A": "Tăng số lượng liên kết đến trang web từ bên ngoài.",
      "B": "Giúp người dùng và công cụ tìm kiếm khám phá và điều hướng các trang khác nhau trên cùng một website.",
      "C": "Tăng tốc độ tải trang web.",
      "D": "Cải thiện giao diện người dùng (UI) của website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387476,
    "question": "Ví dụ nào sau đây là một URL thân thiện với SEO?",
    "options": {
      "A": "www.example.com/p=123",
      "B": "www.example.com/category/product-name",
      "C": "www.example.com/index.php?id=456&lang=en",
      "D": "www.example.com/!@#$%^&*()_+"
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387477,
    "question": "Mục đích chính của việc nghiên cứu từ khóa là gì?",
    "options": {
      "A": "Để tạo ra càng nhiều từ khóa càng tốt cho website.",
      "B": "Để xác định các từ khóa mà khách hàng mục tiêu sử dụng khi tìm kiếm thông tin liên quan đến sản phẩm/dịch vụ của bạn.",
      "C": "Để sao chép từ khóa của đối thủ cạnh tranh.",
      "D": "Để làm cho nội dung trang web trở nên dài hơn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387478,
    "question": "Thẻ mô tả meta (Meta Description) ảnh hưởng trực tiếp đến yếu tố nào sau đây trong SEO?",
    "options": {
      "A": "Thứ hạng trang web trên SERPs.",
      "B": "Tỷ lệ nhấp chuột (CTR) từ SERPs vào trang web.",
      "C": "Tốc độ tải trang web.",
      "D": "Số lượng backlink đến trang web."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387479,
    "question": "Công cụ nào sau đây thường được sử dụng để phân tích từ khóa và theo dõi thứ hạng website?",
    "options": {
      "A": "Microsoft Word.",
      "B": "Google Analytics.",
      "C": "Google Search Console.",
      "D": "Adobe Photoshop."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387480,
    "question": "Trong SEO, 'Anchor text' là gì?",
    "options": {
      "A": "Đoạn văn bản mô tả nội dung chính của trang web.",
      "B": "Văn bản hiển thị của một liên kết.",
      "C": "Tiêu đề chính của bài viết.",
      "D": "Mô tả hình ảnh (alt text)."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387481,
    "question": "Tại sao việc tối ưu hóa SEO cho thiết bị di động (Mobile SEO) ngày càng trở nên quan trọng?",
    "options": {
      "A": "Vì người dùng di động có xu hướng chi tiêu nhiều tiền hơn trực tuyến.",
      "B": "Vì Google ưu tiên các trang web thân thiện với thiết bị di động trong xếp hạng tìm kiếm trên di động (Mobile-first indexing).",
      "C": "Vì trang web trên di động thường có giao diện đẹp hơn trang web trên máy tính.",
      "D": "Vì tối ưu hóa di động giúp giảm chi phí thiết kế website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387482,
    "question": "Ví dụ nào sau đây **không phải** là một kỹ thuật SEO Off-page?",
    "options": {
      "A": "Xây dựng liên kết (link building).",
      "B": "Tối ưu hóa hình ảnh.",
      "C": "Marketing trên mạng xã hội (Social media marketing).",
      "D": "Tham gia các diễn đàn và cộng đồng trực tuyến."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387483,
    "question": "Nguyên tắc 'E-A-T' trong SEO, được Google sử dụng để đánh giá chất lượng nội dung, là viết tắt của những yếu tố nào?",
    "options": {
      "A": "Effectiveness - Accuracy - Trustworthiness.",
      "B": "Expertise - Authoritativeness - Trustworthiness.",
      "C": "Engagement - Authority - Traffic.",
      "D": "Efficiency - Accessibility - Technology."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387484,
    "question": "Mục tiêu chính của SEO (Tối ưu hóa công cụ tìm kiếm) là gì?",
    "options": {
      "A": "Tăng lưu lượng truy cập trực tiếp vào website.",
      "B": "Cải thiện thứ hạng website trên các trang kết quả tìm kiếm.",
      "C": "Tăng cường nhận diện thương hiệu trên mạng xã hội.",
      "D": "Giảm chi phí quảng cáo trực tuyến."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387485,
    "question": "Tại sao việc nghiên cứu từ khóa (keyword research) lại đóng vai trò quan trọng trong SEO?",
    "options": {
      "A": "Giúp website có giao diện đẹp mắt và thu hút hơn.",
      "B": "Xác định được những từ và cụm từ mà khách hàng tiềm năng sử dụng khi tìm kiếm sản phẩm hoặc dịch vụ.",
      "C": "Tăng tốc độ tải trang của website.",
      "D": "Tạo ra nhiều liên kết nội bộ hơn trên website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387486,
    "question": "Trong tình huống nào việc tối ưu hóa thẻ meta description (mô tả meta) mang lại lợi ích rõ rệt nhất?",
    "options": {
      "A": "Khi website có tốc độ tải trang chậm.",
      "B": "Khi người dùng chia sẻ liên kết website trên mạng xã hội.",
      "C": "Khi website có nhiều lỗi chính tả trong nội dung.",
      "D": "Khi website hiển thị trên trang kết quả tìm kiếm và người dùng đang xem xét nhấp vào liên kết."
    },
    "correctAnswer": "D",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387487,
    "question": "Yếu tố On-page SEO nào sau đây có tác động **trực tiếp nhất** đến thứ hạng của website trên công cụ tìm kiếm?",
    "options": {
      "A": "Số lượng bình luận trên bài viết blog.",
      "B": "Tốc độ tải trang của website.",
      "C": "Mật độ từ khóa trong nội dung.",
      "D": "Chất lượng và sự liên quan của nội dung."
    },
    "correctAnswer": "D",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387488,
    "question": "Hậu quả tiêu cực phổ biến nhất của việc 'nhồi nhét từ khóa' (keyword stuffing) trong nội dung website là gì?",
    "options": {
      "A": "Website bị tấn công DDoS.",
      "B": "Website bị phạt và tụt hạng bởi công cụ tìm kiếm.",
      "C": "Website không hiển thị được trên thiết bị di động.",
      "D": "Website bị lỗi hiển thị hình ảnh."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387489,
    "question": "SEO (Tối ưu hóa công cụ tìm kiếm) là quá trình nhằm mục đích gì?",
    "options": {
      "A": "Tăng cường bảo mật website.",
      "B": "Cải thiện trải nghiệm người dùng trên website.",
      "C": "Tăng khả năng hiển thị của website trên các trang kết quả tìm kiếm.",
      "D": "Giảm chi phí quảng cáo trực tuyến."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387490,
    "question": "Trong SEO, 'từ khóa' (keyword) đóng vai trò quan trọng nhất trong giai đoạn nào?",
    "options": {
      "A": "Thiết kế giao diện website.",
      "B": "Nghiên cứu và lập kế hoạch nội dung.",
      "C": "Xây dựng liên kết (backlink).",
      "D": "Tối ưu hóa tốc độ tải trang."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387491,
    "question": "Yếu tố nào sau đây **không** phải là yếu tố SEO On-Page?",
    "options": {
      "A": "Tối ưu hóa thẻ tiêu đề (title tag).",
      "B": "Xây dựng liên kết từ website khác (backlink).",
      "C": "Tối ưu hóa nội dung bài viết.",
      "D": "Tối ưu hóa thẻ mô tả meta (meta description)."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387492,
    "question": "Liên kết nội bộ (internal link) mang lại lợi ích gì cho SEO?",
    "options": {
      "A": "Tăng tốc độ tải trang.",
      "B": "Giúp người dùng và công cụ tìm kiếm điều hướng website dễ dàng hơn.",
      "C": "Tăng độ tin cậy của website với công cụ tìm kiếm.",
      "D": "Cả 2 và 3."
    },
    "correctAnswer": "D",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387493,
    "question": "Trong SEO, 'backlink chất lượng' được đánh giá dựa trên yếu tố nào là quan trọng nhất?",
    "options": {
      "A": "Số lượng backlink.",
      "B": "Mức độ liên quan của website nguồn backlink.",
      "C": "Tốc độ tăng trưởng backlink.",
      "D": "Vị trí backlink trên trang nguồn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387494,
    "question": "Tại sao tốc độ tải trang (page speed) lại quan trọng đối với SEO?",
    "options": {
      "A": "Tốc độ tải trang không ảnh hưởng đến SEO.",
      "B": "Tốc độ tải trang chậm làm tăng tỷ lệ thoát trang (bounce rate) và giảm trải nghiệm người dùng.",
      "C": "Tốc độ tải trang chậm giúp công cụ tìm kiếm thu thập dữ liệu website hiệu quả hơn.",
      "D": "Tốc độ tải trang chậm giúp giảm chi phí hosting."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387495,
    "question": "Thẻ tiêu đề (title tag) hiển thị ở đâu trên trang kết quả tìm kiếm (SERP)?",
    "options": {
      "A": "Ở cuối đoạn mô tả (snippet).",
      "B": "Ở vị trí nổi bật nhất, là dòng chữ màu xanh dương, có thể click vào.",
      "C": "Ẩn trong mã nguồn HTML, không hiển thị trực tiếp.",
      "D": "Ở góc dưới bên phải của snippet."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387496,
    "question": "Mục đích chính của việc sử dụng thẻ mô tả meta (meta description) là gì?",
    "options": {
      "A": "Tăng tốc độ tải trang.",
      "B": "Cung cấp thông tin tóm tắt về nội dung trang để người dùng xem trước trên SERP.",
      "C": "Cải thiện cấu trúc website.",
      "D": "Xác định từ khóa chính cho trang."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387497,
    "question": "Trong SEO, 'nội dung trùng lặp' (duplicate content) có tác động như thế nào đến thứ hạng website?",
    "options": {
      "A": "Không ảnh hưởng gì.",
      "B": "Có thể giúp tăng thứ hạng nếu trùng lặp trên nhiều website.",
      "C": "Có thể bị công cụ tìm kiếm phạt, làm giảm thứ hạng.",
      "D": "Giúp tăng lưu lượng truy cập từ các nguồn khác nhau."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387498,
    "question": "Công cụ nào sau đây **không** phải là công cụ hỗ trợ SEO phổ biến?",
    "options": {
      "A": "Google Analytics.",
      "B": "Google Search Console.",
      "C": "Microsoft Word.",
      "D": "SEMrush."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387499,
    "question": "Phương pháp SEO nào được xem là 'White Hat SEO'?",
    "options": {
      "A": "Nhồi nhét từ khóa (keyword stuffing).",
      "B": "Xây dựng backlink hàng loạt từ website chất lượng thấp.",
      "C": "Tạo nội dung chất lượng, hữu ích cho người dùng và tuân thủ nguyên tắc của công cụ tìm kiếm.",
      "D": "Sử dụng cloaking (che giấu nội dung với công cụ tìm kiếm)."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387500,
    "question": "Trong SEO, 'tối ưu hóa cho thiết bị di động' (mobile-friendly) ngày càng trở nên quan trọng vì lý do chính nào?",
    "options": {
      "A": "Giá thiết bị di động rẻ hơn máy tính để bàn.",
      "B": "Số lượng người dùng internet truy cập bằng thiết bị di động ngày càng tăng.",
      "C": "Thiết bị di động có màn hình nhỏ hơn, cần tối ưu hóa hiển thị.",
      "D": "Thiết bị di động dễ mang theo hơn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387501,
    "question": "Chỉ số 'tỷ lệ thoát trang' (bounce rate) cao thường cho thấy điều gì về website?",
    "options": {
      "A": "Website có tốc độ tải trang nhanh.",
      "B": "Website có nội dung chất lượng và liên quan đến truy vấn tìm kiếm.",
      "C": "Website có trải nghiệm người dùng kém, nội dung không hấp dẫn hoặc không liên quan.",
      "D": "Website có nhiều liên kết nội bộ."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387502,
    "question": "Ví dụ nào sau đây thể hiện việc sử dụng từ khóa đuôi dài (long-tail keyword) hiệu quả?",
    "options": {
      "A": "'Điện thoại'.",
      "B": "'Mua điện thoại iPhone'.",
      "C": "'Điện thoại iPhone 14 Pro Max 256GB màu tím giá rẻ nhất Hà Nội'.",
      "D": "'Điện thoại Samsung'."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387503,
    "question": "Sitemap XML có vai trò gì quan trọng đối với SEO?",
    "options": {
      "A": "Giúp tăng tốc độ tải trang.",
      "B": "Giúp người dùng dễ dàng tìm kiếm thông tin trên website.",
      "C": "Giúp công cụ tìm kiếm thu thập dữ liệu và lập chỉ mục website hiệu quả hơn.",
      "D": "Tăng độ bảo mật cho website."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387504,
    "question": "SEO (Tối ưu hóa công cụ tìm kiếm) là gì?",
    "options": {
      "A": "Một phương pháp quảng cáo trả phí để hiển thị trang web trên đầu kết quả tìm kiếm.",
      "B": "Quá trình tạo ra nội dung hấp dẫn để thu hút người dùng trên mạng xã hội.",
      "C": "Tập hợp các kỹ thuật nhằm nâng cao thứ hạng của website trên các trang kết quả tìm kiếm tự nhiên.",
      "D": "Một loại virus máy tính có thể tấn công và phá hủy dữ liệu website."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387505,
    "question": "Tại sao nghiên cứu từ khóa lại quan trọng trong SEO?",
    "options": {
      "A": "Để tạo ra các tiêu đề bài viết thu hút người đọc.",
      "B": "Để biết được đối thủ cạnh tranh đang sử dụng những từ khóa nào.",
      "C": "Để xác định những từ và cụm từ mà khách hàng mục tiêu sử dụng khi tìm kiếm thông tin liên quan đến sản phẩm/dịch vụ.",
      "D": "Để tăng tốc độ tải trang web."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387506,
    "question": "Yếu tố nào sau đây là **quan trọng nhất** trong SEO On-page?",
    "options": {
      "A": "Số lượng backlink trỏ về website.",
      "B": "Tốc độ tải trang nhanh.",
      "C": "Nội dung chất lượng, độc đáo và liên quan đến từ khóa mục tiêu.",
      "D": "Mức độ tương tác của người dùng trên mạng xã hội."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387507,
    "question": "Liên kết 'nofollow' được sử dụng với mục đích gì?",
    "options": {
      "A": "Để tăng PageRank cho trang web được liên kết đến.",
      "B": "Để chỉ định rằng website không chịu trách nhiệm về nội dung của trang web được liên kết.",
      "C": "Để bot công cụ tìm kiếm thu thập dữ liệu trang web nhanh hơn.",
      "D": "Để tăng tốc độ tải trang khi có quá nhiều liên kết."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387508,
    "question": "Thẻ tiêu đề (Title tag) có vai trò gì trong SEO?",
    "options": {
      "A": "Hiển thị tên tác giả bài viết trên trang kết quả tìm kiếm.",
      "B": "Mô tả ngắn gọn nội dung chính của trang web và hiển thị trên SERP.",
      "C": "Xác định ngôn ngữ chính của trang web.",
      "D": "Tạo hiệu ứng đồ họa cho tiêu đề bài viết trên website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387509,
    "question": "Mục đích chính của SEO Off-page là gì?",
    "options": {
      "A": "Tối ưu hóa cấu trúc và nội dung website.",
      "B": "Xây dựng uy tín và độ tin cậy của website từ bên ngoài website.",
      "C": "Cải thiện trải nghiệm người dùng trên website.",
      "D": "Tăng tốc độ tải trang web."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387510,
    "question": "Điều gì sẽ xảy ra nếu một website sử dụng quá nhiều từ khóa (keyword stuffing)?",
    "options": {
      "A": "Website sẽ nhanh chóng đạt thứ hạng cao trên công cụ tìm kiếm.",
      "B": "Website có thể bị phạt bởi công cụ tìm kiếm và tụt hạng.",
      "C": "Website sẽ thu hút được nhiều người dùng hơn.",
      "D": "Website sẽ tải trang nhanh hơn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387511,
    "question": "Công cụ nào của Google giúp bạn theo dõi hiệu quả SEO của website?",
    "options": {
      "A": "Google Ads.",
      "B": "Google Analytics.",
      "C": "Google My Business.",
      "D": "Google Search Console."
    },
    "correctAnswer": "D",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387512,
    "question": "Tại sao tốc độ tải trang (page speed) lại quan trọng đối với SEO?",
    "options": {
      "A": "Giúp website hiển thị đẹp hơn trên thiết bị di động.",
      "B": "Ảnh hưởng trực tiếp đến thứ hạng trên trang kết quả tìm kiếm và trải nghiệm người dùng.",
      "C": "Giảm chi phí hosting cho website.",
      "D": "Tăng khả năng bảo mật cho website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387513,
    "question": "Liên kết nội bộ (internal link) mang lại lợi ích gì cho SEO?",
    "options": {
      "A": "Tăng số lượng backlink từ các website khác.",
      "B": "Giúp người dùng dễ dàng điều hướng và khám phá nội dung trên website, đồng thời giúp bot công cụ tìm kiếm thu thập dữ liệu website hiệu quả hơn.",
      "C": "Tăng tốc độ tải trang web.",
      "D": "Cải thiện độ bảo mật của website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387514,
    "question": "Đâu là ví dụ về một kỹ thuật SEO 'White Hat'?",
    "options": {
      "A": "Mua backlink hàng loạt từ các website kém chất lượng.",
      "B": "Sao chép nội dung từ website khác và đăng lên website của mình.",
      "C": "Tối ưu hóa nội dung chất lượng, tập trung vào trải nghiệm người dùng và tuân thủ nguyên tắc của công cụ tìm kiếm.",
      "D": "Ẩn văn bản hoặc liên kết khỏi người dùng nhưng vẫn hiển thị cho công cụ tìm kiếm."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387515,
    "question": "Thẻ mô tả meta (Meta description) hiển thị ở đâu?",
    "options": {
      "A": "Trong nội dung chính của trang web.",
      "B": "Trong URL của trang web.",
      "C": "Dưới thẻ tiêu đề (Title tag) trên trang kết quả tìm kiếm.",
      "D": "Trong mã nguồn HTML nhưng không hiển thị trực tiếp cho người dùng."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387516,
    "question": "Trong SEO Local (SEO địa phương), yếu tố nào sau đây là quan trọng nhất để xếp hạng?",
    "options": {
      "A": "Số lượng bài viết blog trên website.",
      "B": "Thông tin NAP (Name, Address, Phone Number) nhất quán và chính xác trên các nền tảng trực tuyến.",
      "C": "Số lượng theo dõi trên mạng xã hội.",
      "D": "Tốc độ tải trang web."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387517,
    "question": "Điều gì KHÔNG phải là một lợi ích của SEO?",
    "options": {
      "A": "Tăng lưu lượng truy cập tự nhiên và bền vững đến website.",
      "B": "Xây dựng nhận diện thương hiệu và uy tín trực tuyến.",
      "C": "Đảm bảo website luôn đứng đầu kết quả tìm kiếm cho mọi từ khóa.",
      "D": "Tiết kiệm chi phí quảng cáo so với các hình thức quảng cáo trả phí."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387518,
    "question": "Khi nào bạn nên sử dụng thẻ 'alt' cho hình ảnh?",
    "options": {
      "A": "Chỉ khi hình ảnh đó là liên kết đến trang khác.",
      "B": "Chỉ khi hình ảnh đó có kích thước lớn.",
      "C": "Luôn luôn, cho tất cả hình ảnh trên website.",
      "D": "Chỉ khi hình ảnh đó là ảnh đại diện của bài viết."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387519,
    "question": "SEO (Search Engine Optimization) là quá trình tối ưu hóa website để đạt được mục tiêu nào?",
    "options": {
      "A": "Tăng lượng truy cập trả phí từ quảng cáo trên Google.",
      "B": "Tăng thứ hạng website trên các trang kết quả tìm kiếm tự nhiên.",
      "C": "Tăng số lượng người theo dõi trên các mạng xã hội.",
      "D": "Tăng doanh số bán hàng trực tuyến ngay lập tức."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387520,
    "question": "Yếu tố nào sau đây **không** phải là một yếu tố On-page SEO?",
    "options": {
      "A": "Tối ưu hóa thẻ tiêu đề (Title tag) và thẻ mô tả (Meta description).",
      "B": "Xây dựng liên kết (backlink) từ các website khác về website của bạn.",
      "C": "Tối ưu hóa tốc độ tải trang của website.",
      "D": "Sử dụng từ khóa mục tiêu trong nội dung bài viết."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387521,
    "question": "Tại sao nghiên cứu từ khóa (Keyword Research) lại quan trọng trong SEO?",
    "options": {
      "A": "Để thiết kế giao diện website đẹp mắt hơn.",
      "B": "Để biết được người dùng đang tìm kiếm thông tin gì liên quan đến sản phẩm/dịch vụ của bạn.",
      "C": "Để tăng tốc độ tải trang của website.",
      "D": "Để tạo ra nhiều liên kết nội bộ hơn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387522,
    "question": "Trong SEO, thuật ngữ 'Black Hat SEO' dùng để chỉ phương pháp nào?",
    "options": {
      "A": "Các kỹ thuật SEO tuân thủ theo nguyên tắc của công cụ tìm kiếm.",
      "B": "Các kỹ thuật SEO tập trung vào trải nghiệm người dùng.",
      "C": "Các kỹ thuật SEO vi phạm nguyên tắc của công cụ tìm kiếm nhằm đạt thứ hạng nhanh chóng.",
      "D": "Các kỹ thuật SEO sử dụng các công cụ hỗ trợ tự động hóa."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387523,
    "question": "Mục đích chính của việc xây dựng liên kết (link building) trong SEO là gì?",
    "options": {
      "A": "Tăng lượng truy cập trực tiếp vào website.",
      "B": "Cải thiện tốc độ tải trang của website.",
      "C": "Tăng độ tin cậy và uy tín của website trong mắt công cụ tìm kiếm.",
      "D": "Tăng số lượng trang được index trên công cụ tìm kiếm."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387524,
    "question": "Thẻ tiêu đề (Title tag) có vai trò quan trọng như thế nào trong SEO?",
    "options": {
      "A": "Hiển thị tên tác giả của bài viết trên trang kết quả tìm kiếm.",
      "B": "Mô tả ngắn gọn nội dung chính của trang và hiển thị trên trang kết quả tìm kiếm.",
      "C": "Tạo liên kết nội bộ giữa các trang trên website.",
      "D": "Tăng tốc độ tải trang khi người dùng truy cập."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387525,
    "question": "Trong các yếu tố sau, yếu tố nào ảnh hưởng **trực tiếp** đến trải nghiệm người dùng (User Experience - UX) trên website và gián tiếp ảnh hưởng đến SEO?",
    "options": {
      "A": "Số lượng backlink từ các website khác.",
      "B": "Mật độ từ khóa trong nội dung.",
      "C": "Tốc độ tải trang và khả năng tương thích trên thiết bị di động.",
      "D": "Số lượng bài viết được đăng tải hàng ngày."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387526,
    "question": "Sitemap XML có vai trò gì đối với SEO?",
    "options": {
      "A": "Giúp website hiển thị đẹp hơn trên trang kết quả tìm kiếm.",
      "B": "Giúp công cụ tìm kiếm dễ dàng thu thập dữ liệu (crawl) và lập chỉ mục (index) các trang trên website.",
      "C": "Tăng tốc độ tải trang của website.",
      "D": "Ngăn chặn website bị tấn công DDoS."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387527,
    "question": "Thẻ Meta Description có chức năng chính là gì?",
    "options": {
      "A": "Chứa các từ khóa chính để tăng thứ hạng.",
      "B": "Mô tả tóm tắt nội dung trang để thu hút người dùng nhấp vào kết quả tìm kiếm.",
      "C": "Xác định ngôn ngữ chính của trang web.",
      "D": "Chèn quảng cáo vào trang kết quả tìm kiếm."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387528,
    "question": "Sự khác biệt chính giữa liên kết 'dofollow' và 'nofollow' là gì?",
    "options": {
      "A": "Liên kết 'dofollow' tốn phí, 'nofollow' miễn phí.",
      "B": "Liên kết 'dofollow' truyền 'link juice' (giá trị SEO) sang website được liên kết, 'nofollow' thì không.",
      "C": "Liên kết 'dofollow' chỉ dành cho website thương mại, 'nofollow' cho website phi lợi nhuận.",
      "D": "Liên kết 'dofollow' dễ bị Google phạt hơn 'nofollow'."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387529,
    "question": "Ví dụ nào sau đây là một từ khóa đuôi dài (long-tail keyword)?",
    "options": {
      "A": "Điện thoại.",
      "B": "Điện thoại Samsung.",
      "C": "Điện thoại Samsung Galaxy.",
      "D": "Điện thoại Samsung Galaxy S23 Ultra 5G màu xanh 256GB giá bao nhiêu tại Hà Nội."
    },
    "correctAnswer": "D",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387530,
    "question": "Công cụ nào của Google giúp bạn theo dõi hiệu quả SEO của website, bao gồm thứ hạng từ khóa, lỗi thu thập dữ liệu, và lưu lượng truy cập tự nhiên?",
    "options": {
      "A": "Google Ads.",
      "B": "Google Analytics.",
      "C": "Google Search Console.",
      "D": "Google Trends."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387531,
    "question": "Tại sao nội dung chất lượng lại quan trọng đối với SEO?",
    "options": {
      "A": "Nội dung chất lượng giúp tăng tốc độ tải trang.",
      "B": "Nội dung chất lượng thu hút và giữ chân người dùng, tăng thời gian ở lại trang và giảm tỷ lệ thoát trang.",
      "C": "Nội dung chất lượng giúp website hiển thị quảng cáo tốt hơn.",
      "D": "Nội dung chất lượng giúp tăng số lượng liên kết nội bộ."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387532,
    "question": "Trong SEO Local (SEO địa phương), yếu tố nào sau đây quan trọng nhất để cải thiện thứ hạng cho doanh nghiệp địa phương trên Google Maps và kết quả tìm kiếm địa phương?",
    "options": {
      "A": "Số lượng bài viết blog trên website.",
      "B": "Tối ưu hóa hồ sơ Google My Business (Google Business Profile).",
      "C": "Số lượng người theo dõi trên mạng xã hội.",
      "D": "Chi phí quảng cáo trên Google Ads."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387533,
    "question": "Robot.txt là file có chức năng gì trong SEO?",
    "options": {
      "A": "Tăng tốc độ tải trang của website.",
      "B": "Hướng dẫn các công cụ tìm kiếm (ví dụ: Googlebot) cách thu thập dữ liệu (crawl) website, cho phép chặn hoặc cho phép thu thập dữ liệu ở một số phần nhất định.",
      "C": "Tạo sitemap XML cho website.",
      "D": "Bảo vệ website khỏi các cuộc tấn công mạng."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387534,
    "question": "Mục tiêu chính của SEO (Tối ưu hóa công cụ tìm kiếm) là gì?",
    "options": {
      "A": "Tăng số lượng người truy cập trang web từ tất cả các nguồn, bao gồm cả mạng xã hội và quảng cáo trả phí.",
      "B": "Tăng thứ hạng của trang web trên các trang kết quả tìm kiếm (SERPs) cho các từ khóa mục tiêu, từ đó thu hút lưu lượng truy cập tự nhiên.",
      "C": "Thiết kế lại giao diện trang web để hấp dẫn người dùng hơn và cải thiện trải nghiệm người dùng.",
      "D": "Xây dựng liên kết chất lượng từ các trang web khác để tăng độ tin cậy của trang web."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387535,
    "question": "Tại sao việc nghiên cứu từ khóa lại quan trọng trong SEO?",
    "options": {
      "A": "Để trang web có thể sử dụng nhiều từ khóa nhất có thể trong nội dung.",
      "B": "Để hiểu rõ người dùng đang tìm kiếm thông tin gì, từ đó tạo ra nội dung phù hợp và thu hút đúng đối tượng mục tiêu.",
      "C": "Để sao chép từ khóa của đối thủ cạnh tranh và cải thiện thứ hạng nhanh chóng.",
      "D": "Để tạo ra các liên kết nội bộ hiệu quả hơn giữa các trang trên website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387536,
    "question": "Bạn đang viết một bài blog về 'cách làm bánh pizza tại nhà'. Tiêu đề nào sau đây được tối ưu hóa tốt nhất cho SEO?",
    "options": {
      "A": "Công thức làm bánh pizza ngon nhất",
      "B": "Bí quyết làm pizza",
      "C": "Hướng dẫn chi tiết cách làm bánh pizza tại nhà đơn giản và ngon miệng cho người mới bắt đầu",
      "D": "Pizza tự làm"
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387537,
    "question": "Yếu tố nào sau đây **KHÔNG** phải là yếu tố SEO On-Page?",
    "options": {
      "A": "Tối ưu hóa thẻ tiêu đề (Title Tag) và thẻ mô tả (Meta Description).",
      "B": "Xây dựng liên kết chất lượng từ các website khác (Backlinks).",
      "C": "Sử dụng từ khóa mục tiêu trong nội dung bài viết và thẻ Heading.",
      "D": "Tối ưu hóa tốc độ tải trang và trải nghiệm người dùng trên thiết bị di động."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387538,
    "question": "Điều gì có thể xảy ra nếu bạn nhồi nhét quá nhiều từ khóa vào nội dung trang web (Keyword Stuffing)?",
    "options": {
      "A": "Trang web sẽ nhanh chóng đạt được thứ hạng cao trên các công cụ tìm kiếm.",
      "B": "Trải nghiệm người dùng được cải thiện do nội dung tập trung vào từ khóa.",
      "C": "Công cụ tìm kiếm có thể phạt trang web và giảm thứ hạng do hành vi spam từ khóa, ảnh hưởng tiêu cực đến SEO.",
      "D": "Không có ảnh hưởng gì đáng kể, việc nhồi nhét từ khóa là một kỹ thuật SEO hiệu quả."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387539,
    "question": "SEO (Tối ưu hóa công cụ tìm kiếm) là quá trình chủ yếu tập trung vào điều gì?",
    "options": {
      "A": "Tăng cường tương tác trên mạng xã hội.",
      "B": "Nâng cao trải nghiệm người dùng trên website và cải thiện thứ hạng trên công cụ tìm kiếm.",
      "C": "Xây dựng thương hiệu cá nhân trực tuyến.",
      "D": "Giảm chi phí quảng cáo trực tuyến."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387540,
    "question": "Trong SEO, 'từ khóa' (keyword) được hiểu là gì?",
    "options": {
      "A": "Một đoạn văn bản mô tả sản phẩm hoặc dịch vụ.",
      "B": "Những từ hoặc cụm từ người dùng nhập vào công cụ tìm kiếm khi tìm kiếm thông tin.",
      "C": "Tên thương hiệu của doanh nghiệp.",
      "D": "Địa chỉ URL của website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387541,
    "question": "Phương pháp SEO 'White Hat' và 'Black Hat' khác nhau chủ yếu ở yếu tố nào?",
    "options": {
      "A": "Chi phí thực hiện.",
      "B": "Thời gian đạt được kết quả.",
      "C": "Tính bền vững và tuân thủ nguyên tắc của công cụ tìm kiếm.",
      "D": "Mức độ phức tạp về kỹ thuật."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387542,
    "question": "Yếu tố nào sau đây **không** phải là yếu tố SEO On-page?",
    "options": {
      "A": "Tối ưu thẻ tiêu đề (Title tag) và mô tả meta (Meta description).",
      "B": "Xây dựng liên kết ngược (Backlink) chất lượng từ website khác.",
      "C": "Tối ưu cấu trúc URL thân thiện với SEO.",
      "D": "Tối ưu tốc độ tải trang."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387543,
    "question": "Tại sao việc nghiên cứu từ khóa (keyword research) lại quan trọng trong SEO?",
    "options": {
      "A": "Để tạo ra nội dung dài hơn và phức tạp hơn.",
      "B": "Để hiểu rõ nhu cầu tìm kiếm của người dùng và tối ưu nội dung phù hợp.",
      "C": "Để tăng số lượng liên kết nội bộ trên website.",
      "D": "Để cải thiện giao diện người dùng của website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387544,
    "question": "Mục đích chính của việc xây dựng liên kết ngược (backlink) chất lượng là gì?",
    "options": {
      "A": "Tăng lượng truy cập trực tiếp vào website.",
      "B": "Cải thiện tốc độ tải trang của website.",
      "C": "Tăng độ uy tín và thẩm quyền của website trong mắt công cụ tìm kiếm.",
      "D": "Giảm tỷ lệ thoát trang (Bounce rate)."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387545,
    "question": "Thẻ tiêu đề (Title tag) có vai trò quan trọng trong SEO vì lý do nào sau đây?",
    "options": {
      "A": "Chỉ hiển thị cho công cụ tìm kiếm, không ảnh hưởng đến người dùng.",
      "B": "Giúp người dùng dễ dàng chia sẻ bài viết trên mạng xã hội.",
      "C": "Mô tả ngắn gọn và chính xác nội dung trang, hiển thị trên SERP và thu hút người dùng nhấp vào.",
      "D": "Tăng thời gian người dùng ở lại trên website."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387546,
    "question": "Ví dụ nào sau đây là một URL thân thiện với SEO?",
    "options": {
      "A": "www.example.com/p=123",
      "B": "www.example.com/category/product-id=456",
      "C": "www.example.com/danh-muc/ao-thun-nam",
      "D": "www.example.com/index.php?page=products&id=789"
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387547,
    "question": "Điều gì sẽ xảy ra nếu website của bạn không được tối ưu cho thiết bị di động (mobile-friendly)?",
    "options": {
      "A": "Website sẽ tải nhanh hơn trên máy tính để bàn.",
      "B": "Website sẽ được ưu tiên hiển thị trên kết quả tìm kiếm trên máy tính để bàn.",
      "C": "Website có thể bị tụt hạng trên kết quả tìm kiếm trên thiết bị di động và trải nghiệm người dùng kém.",
      "D": "Website sẽ nhận được nhiều backlink hơn."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387548,
    "question": "Công cụ nào sau đây thường được sử dụng để phân tích từ khóa và theo dõi thứ hạng website?",
    "options": {
      "A": "Microsoft Word.",
      "B": "Google Analytics.",
      "C": "Google Search Console.",
      "D": "Facebook Ads Manager."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387549,
    "question": "Tốc độ tải trang (page speed) ảnh hưởng đến SEO như thế nào?",
    "options": {
      "A": "Không ảnh hưởng đến SEO.",
      "B": "Chỉ ảnh hưởng đến SEO trên thiết bị di động.",
      "C": "Ảnh hưởng trực tiếp đến trải nghiệm người dùng và thứ hạng website trên công cụ tìm kiếm.",
      "D": "Chỉ ảnh hưởng đến SEO Off-page."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387550,
    "question": "Trong SEO, 'Anchor text' là gì?",
    "options": {
      "A": "Văn bản thay thế cho hình ảnh khi hình ảnh không tải được.",
      "B": "Đoạn văn bản mô tả ngắn gọn về website trên trang chủ.",
      "C": "Đoạn văn bản hiển thị liên kết (hyperlink) đến một trang web khác.",
      "D": "Tiêu đề chính của bài viết (Heading 1)."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387551,
    "question": "Mục đích của việc tối ưu hóa hình ảnh trong SEO là gì?",
    "options": {
      "A": "Chỉ để hình ảnh hiển thị đẹp hơn trên website.",
      "B": "Giảm dung lượng hình ảnh giúp tăng tốc độ tải trang và giúp công cụ tìm kiếm hiểu rõ hơn về nội dung hình ảnh.",
      "C": "Để hình ảnh chiếm nhiều không gian hơn trên trang web.",
      "D": "Để hình ảnh có thể chia sẻ dễ dàng trên mạng xã hội."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387552,
    "question": "Thẻ 'Meta Description' có vai trò gì trong SEO?",
    "options": {
      "A": "Hiển thị nội dung chính của bài viết cho người dùng.",
      "B": "Ảnh hưởng trực tiếp đến thứ hạng từ khóa trên Google.",
      "C": "Mô tả ngắn gọn về nội dung trang hiển thị trên SERP, thu hút người dùng nhấp vào.",
      "D": "Tăng số lượng từ khóa trong trang."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387553,
    "question": "Nguyên tắc 'Mobile-first indexing' của Google có nghĩa là gì?",
    "options": {
      "A": "Google ưu tiên lập chỉ mục các website được thiết kế cho máy tính để bàn trước.",
      "B": "Google sử dụng phiên bản di động của website để lập chỉ mục và xếp hạng.",
      "C": "Google chỉ lập chỉ mục website trên thiết bị di động, không lập chỉ mục trên máy tính để bàn.",
      "D": "Google đánh giá tốc độ tải trang trên thiết bị di động quan trọng hơn trên máy tính để bàn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387554,
    "question": "SEO (Tối ưu hóa công cụ tìm kiếm) là gì?",
    "options": {
      "A": "Một hình thức quảng cáo trả tiền để trang web xuất hiện trên top kết quả tìm kiếm.",
      "B": "Quá trình thiết kế lại giao diện trang web để thu hút người dùng.",
      "C": "Tập hợp các kỹ thuật nhằm nâng cao thứ hạng của trang web trên các công cụ tìm kiếm một cách tự nhiên.",
      "D": "Phương pháp bảo mật trang web khỏi các cuộc tấn công mạng."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387555,
    "question": "Trong SEO, 'từ khóa' (keyword) đóng vai trò quan trọng như thế nào?",
    "options": {
      "A": "Từ khóa chỉ quan trọng trong quảng cáo trả phí, không ảnh hưởng đến SEO.",
      "B": "Từ khóa là yếu tố duy nhất quyết định thứ hạng của trang web.",
      "C": "Từ khóa giúp công cụ tìm kiếm và người dùng hiểu được chủ đề chính của trang web, từ đó cải thiện khả năng hiển thị.",
      "D": "Từ khóa chỉ cần xuất hiện càng nhiều càng tốt trong nội dung trang web."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387556,
    "question": "Yếu tố nào sau đây được xem là **quan trọng nhất** trong SEO On-Page?",
    "options": {
      "A": "Số lượng backlinks trỏ về trang web.",
      "B": "Tốc độ tải trang nhanh chóng.",
      "C": "Nội dung chất lượng, độc đáo và liên quan đến từ khóa mục tiêu.",
      "D": "Mức độ tương tác trên mạng xã hội."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387557,
    "question": "Thẻ tiêu đề (Title Tag) có vai trò gì trong SEO?",
    "options": {
      "A": "Hiển thị nội dung chính của trang web trên trang chủ.",
      "B": "Xác định ngôn ngữ chính của trang web.",
      "C": "Mô tả ngắn gọn và chính xác nội dung trang web, hiển thị trên trang kết quả tìm kiếm và tab trình duyệt.",
      "D": "Tạo liên kết nội bộ giữa các trang trên website."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387558,
    "question": "Mô tả meta (Meta Description) được sử dụng để làm gì?",
    "options": {
      "A": "Hiển thị toàn bộ nội dung bài viết trên trang kết quả tìm kiếm.",
      "B": "Cung cấp thông tin chi tiết về tác giả của bài viết.",
      "C": "Mô tả ngắn gọn nội dung trang web, hiển thị dưới tiêu đề trên trang kết quả tìm kiếm, nhằm thu hút người dùng nhấp vào.",
      "D": "Cải thiện tốc độ tải trang bằng cách giảm dung lượng hình ảnh."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387559,
    "question": "Tại sao liên kết nội bộ (Internal Link) lại quan trọng trong SEO?",
    "options": {
      "A": "Chỉ để giúp người dùng dễ dàng điều hướng trên website.",
      "B": "Chủ yếu để tăng số lượng trang được index bởi công cụ tìm kiếm.",
      "C": "Giúp công cụ tìm kiếm khám phá và hiểu cấu trúc website, phân bổ giá trị liên kết giữa các trang, và cải thiện trải nghiệm người dùng.",
      "D": "Để tăng độ tin cậy của website đối với người dùng."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387560,
    "question": "Backlink (liên kết ngoài) là gì và tại sao chúng quan trọng đối với SEO?",
    "options": {
      "A": "Liên kết từ trang web của bạn đến các trang web khác, giúp người dùng tìm kiếm thông tin.",
      "B": "Liên kết từ các trang web khác trỏ về trang web của bạn, được xem như 'phiếu bầu' tín nhiệm, giúp tăng độ uy tín và thứ hạng.",
      "C": "Liên kết giữa các trang web trong cùng một hệ thống.",
      "D": "Liên kết từ mạng xã hội đến trang web của bạn, chỉ quan trọng cho Social Media Marketing."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387561,
    "question": "Trong SEO, 'tốc độ tải trang' (Page Speed) ảnh hưởng như thế nào đến trải nghiệm người dùng và thứ hạng website?",
    "options": {
      "A": "Tốc độ tải trang không ảnh hưởng đến trải nghiệm người dùng và SEO.",
      "B": "Tốc độ tải trang chậm chỉ ảnh hưởng đến trải nghiệm người dùng trên thiết bị di động.",
      "C": "Tốc độ tải trang chậm gây khó chịu cho người dùng, tăng tỷ lệ thoát trang và bị công cụ tìm kiếm đánh giá thấp, ảnh hưởng tiêu cực đến thứ hạng.",
      "D": "Tốc độ tải trang nhanh chỉ quan trọng đối với các trang web thương mại điện tử."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387562,
    "question": "Thiết bị di động ngày càng phổ biến, vậy 'tính thân thiện với thiết bị di động' (Mobile-friendliness) có vai trò gì trong SEO?",
    "options": {
      "A": "Chỉ cần thiết kế website hiển thị tốt trên máy tính, không cần quan tâm đến thiết bị di động.",
      "B": "Tính thân thiện với thiết bị di động chỉ quan trọng đối với người dùng sử dụng điện thoại, không ảnh hưởng đến SEO.",
      "C": "Công cụ tìm kiếm ưu tiên các trang web thân thiện với thiết bị di động, đặc biệt trên kết quả tìm kiếm di động, do đó đây là yếu tố quan trọng để đạt thứ hạng cao.",
      "D": "Tính thân thiện với thiết bị di động chỉ ảnh hưởng đến giao diện, không liên quan đến nội dung và SEO."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387563,
    "question": "Sitemap XML là gì và tại sao cần có sitemap cho website?",
    "options": {
      "A": "Sitemap XML là sơ đồ website dành cho người dùng xem.",
      "B": "Sitemap XML là một loại quảng cáo hiển thị trên website.",
      "C": "Sitemap XML là tệp tin liệt kê tất cả các trang quan trọng của website, giúp công cụ tìm kiếm dễ dàng khám phá và index nội dung.",
      "D": "Sitemap XML giúp bảo vệ website khỏi các cuộc tấn công mạng."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387564,
    "question": "Robot.txt là gì và chức năng chính của nó trong SEO là gì?",
    "options": {
      "A": "Robot.txt là một công cụ phân tích hiệu suất SEO.",
      "B": "Robot.txt là một plugin bảo mật cho website.",
      "C": "Robot.txt là tệp tin hướng dẫn các bot công cụ tìm kiếm cách thu thập dữ liệu website, cho phép hoặc chặn bot truy cập vào một số phần nhất định.",
      "D": "Robot.txt là công cụ tạo sitemap XML tự động."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387565,
    "question": "So sánh sự khác biệt chính giữa SEO 'White Hat' và SEO 'Black Hat'.",
    "options": {
      "A": "White Hat SEO tập trung vào kỹ thuật, Black Hat SEO tập trung vào nội dung.",
      "B": "White Hat SEO tuân thủ nguyên tắc của công cụ tìm kiếm, Black Hat SEO sử dụng thủ thuật gian lận để nhanh chóng đạt thứ hạng cao.",
      "C": "White Hat SEO chỉ áp dụng cho website mới, Black Hat SEO cho website đã có.",
      "D": "White Hat SEO là SEO quốc tế, Black Hat SEO là SEO địa phương."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387566,
    "question": "Nếu website của bạn bị 'phạt' (penalty) bởi Google, điều gì có thể xảy ra?",
    "options": {
      "A": "Website sẽ được hiển thị nổi bật hơn trên trang kết quả tìm kiếm.",
      "B": "Website sẽ bị xóa khỏi chỉ mục tìm kiếm của Google.",
      "C": "Thứ hạng website sẽ giảm mạnh hoặc biến mất khỏi trang kết quả tìm kiếm, lưu lượng truy cập tự nhiên giảm sút.",
      "D": "Không có ảnh hưởng gì, penalty chỉ là cảnh báo."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387567,
    "question": "Ví dụ nào sau đây là hành động **không** nên làm trong SEO?",
    "options": {
      "A": "Xây dựng nội dung chất lượng, hữu ích cho người dùng.",
      "B": "Tối ưu hóa tốc độ tải trang website.",
      "C": "Nhồi nhét từ khóa (keyword stuffing) vào nội dung một cách không tự nhiên.",
      "D": "Xây dựng liên kết (backlink) từ các website uy tín, liên quan đến lĩnh vực."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387568,
    "question": "Bạn muốn đo lường hiệu quả SEO của website, chỉ số nào sau đây là **quan trọng nhất** để theo dõi?",
    "options": {
      "A": "Số lượng bài viết được đăng trên blog.",
      "B": "Lưu lượng truy cập tự nhiên (Organic Traffic) và thứ hạng từ khóa mục tiêu.",
      "C": "Số lượng like và share trên mạng xã hội.",
      "D": "Tổng số trang trên website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387569,
    "question": "SEO (Tối ưu hóa công cụ tìm kiếm) là gì?",
    "options": {
      "A": "Một phương pháp quảng cáo trả phí để trang web xuất hiện đầu trang kết quả tìm kiếm.",
      "B": "Quá trình tối ưu hóa trang web để nâng cao thứ hạng trên các trang kết quả tìm kiếm tự nhiên.",
      "C": "Một kỹ thuật thiết kế web để trang web hiển thị đẹp mắt trên mọi thiết bị.",
      "D": "Hình thức marketing trên mạng xã hội để tăng tương tác và nhận diện thương hiệu."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387570,
    "question": "Mục tiêu chính của SEO là gì?",
    "options": {
      "A": "Tăng doanh số bán hàng trực tuyến ngay lập tức.",
      "B": "Thu hút lượng truy cập chất lượng và bền vững đến trang web từ các công cụ tìm kiếm.",
      "C": "Xây dựng nhận diện thương hiệu trên mạng xã hội.",
      "D": "Giảm chi phí quảng cáo trực tuyến."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387571,
    "question": "Công đoạn đầu tiên của quá trình SEO thường bắt đầu từ đâu?",
    "options": {
      "A": "Xây dựng liên kết (backlink) chất lượng.",
      "B": "Tối ưu hóa tốc độ tải trang.",
      "C": "Nghiên cứu từ khóa (keyword research).",
      "D": "Viết bài blog chất lượng cao."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387572,
    "question": "Thẻ tiêu đề (Title Tag) có vai trò quan trọng như thế nào trong SEO?",
    "options": {
      "A": "Giúp người dùng dễ dàng chia sẻ bài viết trên mạng xã hội.",
      "B": "Cung cấp thông tin ngắn gọn và chính xác về nội dung trang cho cả người dùng và công cụ tìm kiếm.",
      "C": "Tăng tốc độ tải trang web.",
      "D": "Cải thiện trải nghiệm người dùng trên thiết bị di động."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387573,
    "question": "Mô tả meta (Meta Description) được hiển thị ở đâu trên trang kết quả tìm kiếm?",
    "options": {
      "A": "Trong URL của trang web.",
      "B": "Ngay dưới thẻ tiêu đề (Title Tag) trong kết quả tìm kiếm.",
      "C": "Ở cuối trang web, phần chân trang (footer).",
      "D": "Trong nội dung chính của trang web."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387574,
    "question": "Tại sao tốc độ tải trang (Page Speed) lại quan trọng đối với SEO?",
    "options": {
      "A": "Vì nó giúp trang web trông chuyên nghiệp hơn.",
      "B": "Vì nó ảnh hưởng trực tiếp đến trải nghiệm người dùng và thứ hạng trên công cụ tìm kiếm.",
      "C": "Vì nó giúp giảm chi phí hosting.",
      "D": "Vì nó giúp trang web tương thích với nhiều trình duyệt hơn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387575,
    "question": "Liên kết nội bộ (Internal Link) là gì và chúng có lợi ích gì cho SEO?",
    "options": {
      "A": "Liên kết từ trang web khác trỏ về trang web của bạn, giúp tăng độ uy tín.",
      "B": "Liên kết giữa các trang khác nhau trong cùng một trang web, giúp điều hướng người dùng và công cụ tìm kiếm.",
      "C": "Liên kết đến các trang mạng xã hội của doanh nghiệp.",
      "D": "Liên kết đến các trang web của đối thủ cạnh tranh để so sánh."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387576,
    "question": "Yếu tố nào sau đây KHÔNG phải là yếu tố xếp hạng trực tiếp trong SEO?",
    "options": {
      "A": "Chất lượng nội dung.",
      "B": "Số lượng từ khóa trong bài viết.",
      "C": "Trải nghiệm người dùng trên trang web.",
      "D": "Số lượng liên kết ngược (backlink) chất lượng."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387577,
    "question": "Sự khác biệt chính giữa SEO On-page và SEO Off-page là gì?",
    "options": {
      "A": "SEO On-page tập trung vào kỹ thuật, SEO Off-page tập trung vào nội dung.",
      "B": "SEO On-page là tối ưu hóa bên trong trang web, SEO Off-page là các hoạt động bên ngoài trang web.",
      "C": "SEO On-page chỉ dành cho trang chủ, SEO Off-page dành cho các trang con.",
      "D": "SEO On-page là tối ưu hóa cho máy tính, SEO Off-page là tối ưu hóa cho thiết bị di động."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387578,
    "question": "Ví dụ nào sau đây là hành động SEO 'mũ đen' (Black Hat SEO)?",
    "options": {
      "A": "Xây dựng nội dung chất lượng và hữu ích cho người dùng.",
      "B": "Tối ưu hóa tốc độ tải trang và trải nghiệm người dùng.",
      "C": "Nhồi nhét từ khóa (keyword stuffing) vào nội dung một cách quá mức.",
      "D": "Xây dựng liên kết (backlink) tự nhiên từ các trang web uy tín."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387579,
    "question": "Tại sao 'trải nghiệm người dùng' (User Experience - UX) ngày càng trở nên quan trọng trong SEO?",
    "options": {
      "A": "Vì UX giúp trang web hiển thị đẹp mắt hơn.",
      "B": "Vì công cụ tìm kiếm ngày càng ưu tiên các trang web mang lại trải nghiệm tốt cho người dùng, thể hiện qua các tín hiệu như thời gian trên trang, tỷ lệ thoát trang.",
      "C": "Vì UX giúp giảm chi phí thiết kế web.",
      "D": "Vì UX giúp tăng tốc độ tải trang."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387580,
    "question": "Công cụ nào của Google giúp bạn theo dõi hiệu quả SEO của trang web?",
    "options": {
      "A": "Google Ads.",
      "B": "Google Analytics và Google Search Console.",
      "C": "Google My Business.",
      "D": "Google Drive."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387581,
    "question": "Liên kết ngược (Backlink) chất lượng là gì?",
    "options": {
      "A": "Liên kết từ bất kỳ trang web nào, không quan trọng nội dung.",
      "B": "Liên kết từ các trang web có liên quan, uy tín và có thẩm quyền trong lĩnh vực của bạn.",
      "C": "Liên kết từ các trang mạng xã hội.",
      "D": "Liên kết từ các trang web của đối thủ cạnh tranh."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387582,
    "question": "Tại sao nội dung chất lượng lại được coi là 'vua' trong SEO?",
    "options": {
      "A": "Vì nội dung giúp trang web trông đẹp mắt hơn.",
      "B": "Vì nội dung chất lượng thu hút và giữ chân người dùng, cung cấp giá trị và được công cụ tìm kiếm đánh giá cao.",
      "C": "Vì nội dung giúp giảm chi phí quảng cáo.",
      "D": "Vì nội dung giúp tăng tốc độ tải trang."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387583,
    "question": "Trong SEO, 'từ khóa đuôi dài' (Long-tail keyword) là gì?",
    "options": {
      "A": "Từ khóa có độ dài ký tự lớn hơn 10.",
      "B": "Cụm từ khóa dài và cụ thể, thường có lượng tìm kiếm thấp nhưng tỷ lệ chuyển đổi cao.",
      "C": "Từ khóa chỉ chứa một từ duy nhất.",
      "D": "Từ khóa được sử dụng trong thẻ tiêu đề (Title Tag)."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387584,
    "question": "Mục tiêu chính của SEO (Tối ưu hóa công cụ tìm kiếm) là gì?",
    "options": {
      "A": "Tăng lượng truy cập website từ mọi nguồn, bao gồm cả mạng xã hội và quảng cáo trả phí.",
      "B": "Cải thiện giao diện và trải nghiệm người dùng trên website để tăng tỷ lệ chuyển đổi.",
      "C": "Nâng cao thứ hạng website trên trang kết quả tìm kiếm (SERP) cho các từ khóa mục tiêu liên quan.",
      "D": "Giảm thời gian tải trang website xuống dưới 1 giây để tăng trải nghiệm người dùng."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387585,
    "question": "Tại sao việc website thân thiện với thiết bị di động (mobile-friendly) lại quan trọng đối với SEO?",
    "options": {
      "A": "Người dùng di động có xu hướng mua sắm trực tuyến nhiều hơn người dùng máy tính để bàn.",
      "B": "Google ưu tiên lập chỉ mục trên thiết bị di động (mobile-first indexing), đánh giá website chủ yếu dựa trên phiên bản di động.",
      "C": "Website di động thường có tốc độ tải trang nhanh hơn, cải thiện trải nghiệm người dùng.",
      "D": "Thiết kế website di động đơn giản hơn, dễ dàng bảo trì và cập nhật nội dung."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387586,
    "question": "Trong các hoạt động SEO sau, hoạt động nào được xem là **tối ưu hóa On-page**?",
    "options": {
      "A": "Xây dựng liên kết (backlink) từ các website khác về website của bạn.",
      "B": "Tối ưu hóa thẻ tiêu đề (title tag) và mô tả meta (meta description) của trang.",
      "C": "Quảng bá nội dung website trên các mạng xã hội như Facebook, Instagram.",
      "D": "Chạy quảng cáo trả phí trên Google Ads để tăng lượng truy cập website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387587,
    "question": "Yếu tố nào sau đây **quan trọng nhất** trong việc đánh giá thứ hạng website trên Google?",
    "options": {
      "A": "Số lượng người theo dõi trên các trang mạng xã hội của website.",
      "B": "Chất lượng và mức độ liên quan của nội dung website đối với truy vấn tìm kiếm.",
      "C": "Tần suất đăng tải bài viết mới trên blog của website.",
      "D": "Sử dụng hình ảnh chất lượng cao và video hấp dẫn trên website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387588,
    "question": "Hậu quả tiêu cực phổ biến nhất của việc **nhồi nhét từ khóa (keyword stuffing)** trong nội dung website là gì?",
    "options": {
      "A": "Cải thiện trải nghiệm người dùng và tăng thời gian truy cập trang.",
      "B": "Tăng thứ hạng website nhanh chóng do mật độ từ khóa cao.",
      "C": "Bị Google phạt và giảm thứ hạng website do vi phạm nguyên tắc SEO.",
      "D": "Tăng tốc độ tải trang website do giảm dung lượng hình ảnh."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387589,
    "question": "SEO (Tối ưu hóa công cụ tìm kiếm) là gì?",
    "options": {
      "A": "Một phương pháp xây dựng website nhanh chóng.",
      "B": "Một chiến lược marketing nhằm tăng khả năng hiển thị của website trên các công cụ tìm kiếm.",
      "C": "Một loại hình quảng cáo trả phí trên Google.",
      "D": "Một công cụ phân tích lưu lượng truy cập website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387590,
    "question": "Vì sao nghiên cứu từ khóa (keyword research) được xem là bước quan trọng đầu tiên trong SEO?",
    "options": {
      "A": "Giúp website có giao diện đẹp mắt hơn.",
      "B": "Xác định được những từ khóa mà khách hàng mục tiêu sử dụng để tìm kiếm sản phẩm/dịch vụ.",
      "C": "Tăng tốc độ tải trang của website.",
      "D": "Giúp website được bảo mật tốt hơn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387591,
    "question": "Thẻ tiêu đề (Title tag) có vai trò quan trọng trong SEO On-page, vậy thẻ tiêu đề KHÔNG nên chứa yếu tố nào sau đây?",
    "options": {
      "A": "Từ khóa chính.",
      "B": "Tên thương hiệu.",
      "C": "Mô tả ngắn gọn nội dung trang.",
      "D": "Danh sách dài các từ khóa không liên quan."
    },
    "correctAnswer": "D",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387592,
    "question": "Mục đích chính của việc xây dựng liên kết nội bộ (internal linking) trong website là gì?",
    "options": {
      "A": "Tăng số lượng trang trên website.",
      "B": "Giúp người dùng dễ dàng điều hướng và khám phá nội dung liên quan trên website.",
      "C": "Tăng tốc độ tải trang.",
      "D": "Ngăn chặn đối thủ sao chép nội dung."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387593,
    "question": "Yếu tố nào sau đây KHÔNG thuộc về SEO Off-page?",
    "options": {
      "A": "Xây dựng liên kết ngược (backlink).",
      "B": "Tối ưu thẻ meta description.",
      "C": "Hoạt động trên mạng xã hội.",
      "D": "Đề cập thương hiệu (brand mentions)."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387594,
    "question": "Trong SEO kỹ thuật (Technical SEO), việc tối ưu tốc độ tải trang quan trọng vì lý do chính nào?",
    "options": {
      "A": "Giúp website có giao diện đẹp hơn.",
      "B": "Tăng độ tin cậy của website trong mắt người dùng và công cụ tìm kiếm.",
      "C": "Giảm chi phí hosting.",
      "D": "Giúp lập trình viên dễ dàng bảo trì website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387595,
    "question": "Công cụ nào của Google giúp bạn theo dõi hiệu suất SEO website, ví dụ như số lần hiển thị, số nhấp chuột và các từ khóa mà website đang xếp hạng?",
    "options": {
      "A": "Google Analytics.",
      "B": "Google Ads.",
      "C": "Google Search Console.",
      "D": "Google PageSpeed Insights."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387596,
    "question": "So sánh giữa từ khóa 'mua điện thoại' và 'mua điện thoại Samsung Galaxy S23 Ultra chính hãng giá rẻ ở Hà Nội', từ khóa nào có khả năng chuyển đổi thành đơn hàng cao hơn?",
    "options": {
      "A": "Từ khóa 'mua điện thoại'.",
      "B": "Từ khóa 'mua điện thoại Samsung Galaxy S23 Ultra chính hãng giá rẻ ở Hà Nội'.",
      "C": "Cả hai từ khóa có khả năng chuyển đổi tương đương.",
      "D": "Không thể xác định được."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387597,
    "question": "Điều gì sẽ xảy ra nếu một website sử dụng quá nhiều kỹ thuật SEO 'Black Hat' (SEO mũ đen)?",
    "options": {
      "A": "Website sẽ nhanh chóng đạt thứ hạng cao trên Google.",
      "B": "Website có thể bị Google phạt, tụt hạng hoặc thậm chí bị loại khỏi kết quả tìm kiếm.",
      "C": "Website sẽ thu hút được nhiều liên kết chất lượng.",
      "D": "Website sẽ được Google đánh giá là uy tín hơn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387598,
    "question": "Ví dụ nào sau đây KHÔNG phải là một hành động tối ưu hóa SEO On-page?",
    "options": {
      "A": "Tối ưu nội dung bài viết chứa từ khóa mục tiêu.",
      "B": "Xây dựng liên kết từ website khác về website của bạn.",
      "C": "Tối ưu thẻ meta description hấp dẫn.",
      "D": "Sử dụng thẻ heading (H1, H2, H3...) để cấu trúc nội dung."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387599,
    "question": "Tại sao việc website thân thiện với thiết bị di động (mobile-friendly) lại quan trọng trong SEO hiện nay?",
    "options": {
      "A": "Giúp website hiển thị đẹp hơn trên máy tính bàn.",
      "B": "Vì phần lớn người dùng internet hiện nay sử dụng thiết bị di động để tìm kiếm.",
      "C": "Giúp website có nhiều tính năng tương tác hơn.",
      "D": "Tăng cường bảo mật cho website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387600,
    "question": "URL thân thiện với SEO (SEO-friendly URL) thường có đặc điểm nào?",
    "options": {
      "A": "Chứa nhiều ký tự đặc biệt và số.",
      "B": "Ngắn gọn, dễ đọc, chứa từ khóa liên quan và phân tách bằng dấu gạch ngang.",
      "C": "Sử dụng chữ viết tắt và mã hóa.",
      "D": "Không chứa bất kỳ từ khóa nào."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387601,
    "question": "Robots.txt là file có vai trò gì trong SEO kỹ thuật?",
    "options": {
      "A": "Tăng tốc độ tải trang website.",
      "B": "Hướng dẫn bot công cụ tìm kiếm thu thập dữ liệu website, chỉ định các trang được phép hoặc không được phép thu thập.",
      "C": "Cải thiện bảo mật website.",
      "D": "Hiển thị sơ đồ website cho người dùng."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387602,
    "question": "Mục tiêu cuối cùng của SEO là gì?",
    "options": {
      "A": "Tăng chi phí quảng cáo.",
      "B": "Tăng lượng truy cập website từ các nguồn trả phí.",
      "C": "Tăng thứ hạng website trên công cụ tìm kiếm và thu hút lượng truy cập tự nhiên chất lượng.",
      "D": "Làm cho website có thiết kế đẹp mắt nhất."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387603,
    "question": "Trong các yếu tố sau, yếu tố nào ảnh hưởng TRỰC TIẾP nhất đến trải nghiệm người dùng (UX) trên website và gián tiếp ảnh hưởng đến SEO?",
    "options": {
      "A": "Số lượng backlink.",
      "B": "Tốc độ tải trang.",
      "C": "Mật độ từ khóa trong nội dung.",
      "D": "Số lượng trang trên website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387604,
    "question": "Mục tiêu chính của SEO (Tối ưu hóa Công cụ Tìm kiếm) là gì?",
    "options": {
      "A": "Tăng lưu lượng truy cập trực tiếp vào website.",
      "B": "Tăng thứ hạng website trên các trang kết quả tìm kiếm.",
      "C": "Xây dựng thương hiệu trên mạng xã hội.",
      "D": "Giảm chi phí quảng cáo trực tuyến."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387605,
    "question": "Yếu tố nào sau đây **không** phải là một phần của SEO On-page?",
    "options": {
      "A": "Tối ưu hóa thẻ tiêu đề (Title tag).",
      "B": "Xây dựng liên kết ngược (Backlink).",
      "C": "Tối ưu hóa nội dung bài viết.",
      "D": "Tối ưu hóa thẻ mô tả meta (Meta description)."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387606,
    "question": "Tại sao việc nghiên cứu từ khóa (Keyword research) lại quan trọng trong SEO?",
    "options": {
      "A": "Để thiết kế website đẹp mắt hơn.",
      "B": "Để biết khách hàng mục tiêu đang tìm kiếm thông tin gì.",
      "C": "Để tăng tốc độ tải trang của website.",
      "D": "Để tạo ra nhiều liên kết nội bộ hơn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387607,
    "question": "Thẻ tiêu đề (Title tag) hiển thị ở đâu trên trang kết quả tìm kiếm (SERP)?",
    "options": {
      "A": "Ở cuối trang web.",
      "B": "Trong URL của trang web.",
      "C": "Là dòng chữ màu xanh lam, có thể nhấp vào, dẫn đến trang web.",
      "D": "Trong phần chân trang (Footer) của website."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387608,
    "question": "Liên kết nội bộ (Internal link) là gì và tại sao nó hữu ích cho SEO?",
    "options": {
      "A": "Liên kết từ website khác trỏ về website của bạn, giúp tăng độ tin cậy.",
      "B": "Liên kết giữa các trang khác nhau trong cùng một website, giúp điều hướng người dùng và bot tìm kiếm.",
      "C": "Liên kết đến các trang mạng xã hội của doanh nghiệp.",
      "D": "Liên kết đến các website đối thủ để so sánh sản phẩm."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387609,
    "question": "Điều gì xảy ra nếu website của bạn không thân thiện với thiết bị di động (Mobile-friendly) trong bối cảnh SEO hiện nay?",
    "options": {
      "A": "Website sẽ tải nhanh hơn trên máy tính.",
      "B": "Website có thể bị tụt hạng trên kết quả tìm kiếm trên thiết bị di động.",
      "C": "Website sẽ hiển thị đẹp hơn trên máy tính bảng.",
      "D": "Không có ảnh hưởng gì đến SEO."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387610,
    "question": "So sánh giữa SEO 'White hat' và 'Black hat', phương pháp nào được khuyến khích sử dụng trong dài hạn?",
    "options": {
      "A": "Black hat vì mang lại kết quả nhanh chóng hơn.",
      "B": "White hat vì tuân thủ nguyên tắc của công cụ tìm kiếm và bền vững.",
      "C": "Cả hai đều tốt, tùy thuộc vào mục tiêu ngắn hạn hay dài hạn.",
      "D": "Không có sự khác biệt lớn giữa hai phương pháp."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387611,
    "question": "Ví dụ nào sau đây là một từ khóa đuôi dài (Long-tail keyword)?",
    "options": {
      "A": "Điện thoại.",
      "B": "Giày thể thao.",
      "C": "Mua điện thoại Samsung Galaxy S23 Ultra chính hãng giá rẻ ở Hà Nội.",
      "D": "Laptop."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387612,
    "question": "Mục đích chính của việc tối ưu hóa hình ảnh trong SEO là gì?",
    "options": {
      "A": "Để hình ảnh hiển thị đẹp hơn trên website.",
      "B": "Để giảm dung lượng trang và tăng tốc độ tải trang.",
      "C": "Để hình ảnh được chia sẻ nhiều hơn trên mạng xã hội.",
      "D": "Để website có nhiều màu sắc hơn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387613,
    "question": "Chỉ số 'Tỷ lệ thoát' (Bounce rate) cao có thể ảnh hưởng như thế nào đến SEO?",
    "options": {
      "A": "Không ảnh hưởng gì đến SEO.",
      "B": "Có thể làm tăng thứ hạng website.",
      "C": "Có thể làm giảm thứ hạng website vì cho thấy nội dung không phù hợp hoặc trải nghiệm người dùng kém.",
      "D": "Chỉ ảnh hưởng đến quảng cáo trả phí."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387614,
    "question": "Liên kết 'nofollow' được sử dụng khi nào?",
    "options": {
      "A": "Khi muốn tăng PageRank cho website.",
      "B": "Khi liên kết đến website đối thủ.",
      "C": "Khi không muốn chuyển 'link juice' (giá trị liên kết) sang website được liên kết, ví dụ như liên kết quảng cáo hoặc liên kết không tin cậy.",
      "D": "Khi muốn liên kết nội bộ."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387615,
    "question": "Yếu tố nào sau đây quan trọng nhất để tạo ra nội dung chất lượng cho SEO?",
    "options": {
      "A": "Sử dụng nhiều từ khóa nhất có thể.",
      "B": "Nội dung độc đáo, hữu ích và đáp ứng nhu cầu của người đọc.",
      "C": "Nội dung ngắn gọn, dễ đọc.",
      "D": "Nội dung được viết bởi người nổi tiếng."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387616,
    "question": "Công cụ nào của Google giúp bạn theo dõi hiệu quả SEO của website?",
    "options": {
      "A": "Google Ads.",
      "B": "Google Analytics và Google Search Console.",
      "C": "Google Drive.",
      "D": "Google Translate."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387617,
    "question": "Khái niệm 'index' trong SEO nghĩa là gì?",
    "options": {
      "A": "Xếp hạng website trên trang kết quả tìm kiếm.",
      "B": "Quá trình công cụ tìm kiếm thu thập dữ liệu và lưu trữ trang web vào cơ sở dữ liệu của họ để hiển thị trong kết quả tìm kiếm.",
      "C": "Tối ưu hóa tốc độ tải trang.",
      "D": "Xây dựng liên kết ngược cho website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387618,
    "question": "Điều gì có thể xảy ra nếu website của bạn bị Google phạt (Google penalty) do vi phạm nguyên tắc SEO?",
    "options": {
      "A": "Website sẽ được hiển thị nổi bật hơn trên trang kết quả tìm kiếm.",
      "B": "Thứ hạng website có thể bị giảm mạnh hoặc thậm chí bị loại khỏi kết quả tìm kiếm.",
      "C": "Website sẽ nhận được nhiều lưu lượng truy cập hơn.",
      "D": "Không có ảnh hưởng gì đáng kể."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387619,
    "question": "SEO (Search Engine Optimization) là gì?",
    "options": {
      "A": "Phương pháp thiết kế website đẹp mắt và thu hút người dùng.",
      "B": "Quá trình tối ưu hóa website và nội dung để nâng cao thứ hạng trên các công cụ tìm kiếm.",
      "C": "Chiến lược quảng bá website trên mạng xã hội để tăng lượng truy cập.",
      "D": "Kỹ thuật bảo mật website khỏi các cuộc tấn công mạng."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387620,
    "question": "Yếu tố nào sau đây là quan trọng nhất trong SEO On-page?",
    "options": {
      "A": "Số lượng backlink từ các website khác.",
      "B": "Tốc độ tải trang của website.",
      "C": "Chất lượng và sự liên quan của nội dung trên trang.",
      "D": "Mức độ phổ biến của website trên mạng xã hội."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387621,
    "question": "Tại sao nghiên cứu từ khóa (Keyword Research) lại quan trọng trong SEO?",
    "options": {
      "A": "Giúp website có giao diện đẹp hơn và chuyên nghiệp hơn.",
      "B": "Giúp xác định các từ và cụm từ mà người dùng sử dụng để tìm kiếm thông tin liên quan đến sản phẩm/dịch vụ của bạn.",
      "C": "Giúp tăng tốc độ tải trang của website.",
      "D": "Giúp website được bảo mật tốt hơn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387622,
    "question": "Thẻ tiêu đề (Title tag) có vai trò quan trọng như thế nào trong SEO?",
    "options": {
      "A": "Hiển thị thông tin tác giả của bài viết.",
      "B": "Mô tả ngắn gọn và chính xác nội dung chính của trang, hiển thị trên kết quả tìm kiếm.",
      "C": "Tăng tốc độ tải trang khi người dùng truy cập.",
      "D": "Cải thiện trải nghiệm người dùng bằng cách hiển thị hình ảnh thumbnail."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387623,
    "question": "Mô tả meta (Meta description) được sử dụng để làm gì?",
    "options": {
      "A": "Hiển thị thông tin liên hệ của doanh nghiệp trên website.",
      "B": "Mô tả chi tiết sản phẩm/dịch vụ trên trang.",
      "C": "Cung cấp một đoạn mô tả ngắn gọn về nội dung trang, hiển thị dưới tiêu đề trên kết quả tìm kiếm.",
      "D": "Chèn các từ khóa mục tiêu vào nội dung trang."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387624,
    "question": "Thẻ tiêu đề H1 thường được sử dụng để làm gì trong tối ưu SEO On-page?",
    "options": {
      "A": "Tạo danh sách các sản phẩm/dịch vụ nổi bật.",
      "B": "Nhấn mạnh từ khóa mục tiêu trong nội dung.",
      "C": "Thể hiện tiêu đề chính của trang, giúp công cụ tìm kiếm và người dùng hiểu chủ đề chính.",
      "D": "Chia nhỏ nội dung thành các đoạn văn ngắn gọn."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387625,
    "question": "Nội dung 'chất lượng' trong SEO được đánh giá dựa trên yếu tố nào là quan trọng nhất?",
    "options": {
      "A": "Độ dài của bài viết (số lượng từ).",
      "B": "Số lượng hình ảnh và video được sử dụng.",
      "C": "Khả năng đáp ứng nhu cầu thông tin của người dùng và cung cấp giá trị hữu ích.",
      "D": "Mật độ từ khóa mục tiêu trong nội dung."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387626,
    "question": "Backlink 'chất lượng' là gì trong SEO Off-page?",
    "options": {
      "A": "Backlink từ bất kỳ website nào, miễn là số lượng nhiều.",
      "B": "Backlink từ các website có chỉ số DA/PA cao, uy tín và liên quan đến lĩnh vực của bạn.",
      "C": "Backlink từ các website mới thành lập để đa dạng nguồn.",
      "D": "Backlink từ các website có thiết kế đẹp mắt."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387627,
    "question": "Tại sao tốc độ tải trang chậm có thể ảnh hưởng tiêu cực đến SEO?",
    "options": {
      "A": "Làm tăng chi phí hosting và băng thông.",
      "B": "Gây khó khăn cho việc theo dõi hiệu suất website.",
      "C": "Làm giảm trải nghiệm người dùng, tăng tỷ lệ thoát trang và ảnh hưởng đến thứ hạng tìm kiếm.",
      "D": "Khiến website dễ bị tấn công DDoS hơn."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387628,
    "question": "Website 'thân thiện với thiết bị di động' (Mobile-friendly) có ý nghĩa gì trong SEO?",
    "options": {
      "A": "Website chỉ hiển thị tốt trên điện thoại di động, không cần trên máy tính.",
      "B": "Website có giao diện và chức năng được tối ưu hóa để hiển thị tốt và dễ sử dụng trên các thiết bị di động.",
      "C": "Website có ứng dụng di động riêng biệt.",
      "D": "Website có thể gửi thông báo đẩy (push notification) đến điện thoại người dùng."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387629,
    "question": "Trải nghiệm người dùng (UX) tốt trên website ảnh hưởng đến SEO như thế nào?",
    "options": {
      "A": "Không ảnh hưởng gì đến SEO, UX chỉ quan trọng với người dùng.",
      "B": "Ảnh hưởng gián tiếp, UX tốt giúp tăng thời gian ở lại trang và giảm tỷ lệ thoát, từ đó cải thiện SEO.",
      "C": "Ảnh hưởng trực tiếp, UX tốt giúp website được Google đánh giá cao hơn ngay lập tức.",
      "D": "UX tốt chỉ quan trọng cho SEO trên thiết bị di động, không quan trọng trên máy tính."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387630,
    "question": "Chỉ số nào sau đây KHÔNG phải là chỉ số SEO quan trọng cần theo dõi?",
    "options": {
      "A": "Organic Traffic (Lưu lượng truy cập tự nhiên).",
      "B": "Bounce Rate (Tỷ lệ thoát trang).",
      "C": "Page Views (Số lượt xem trang).",
      "D": "Số lượng bài đăng trên mạng xã hội."
    },
    "correctAnswer": "D",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387631,
    "question": "Phương pháp SEO 'White hat' tập trung vào điều gì?",
    "options": {
      "A": "Sử dụng các kỹ thuật gian lận để nhanh chóng tăng thứ hạng.",
      "B": "Xây dựng nội dung chất lượng và tuân thủ các nguyên tắc của công cụ tìm kiếm.",
      "C": "Mua backlink từ các website không liên quan.",
      "D": "Nhồi nhét từ khóa vào nội dung một cách quá mức."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387632,
    "question": "SEO Local (SEO địa phương) tập trung vào đối tượng người dùng nào?",
    "options": {
      "A": "Người dùng trên toàn thế giới.",
      "B": "Người dùng ở một khu vực địa lý cụ thể, lân cận doanh nghiệp.",
      "C": "Người dùng chỉ sử dụng máy tính để bàn.",
      "D": "Người dùng chỉ sử dụng thiết bị di động."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387633,
    "question": "Điều gì KHÔNG đúng về thuật toán tìm kiếm của Google?",
    "options": {
      "A": "Thuật toán Google liên tục được cập nhật để cải thiện kết quả tìm kiếm.",
      "B": "Thuật toán Google ưu tiên các website có nội dung chất lượng và trải nghiệm người dùng tốt.",
      "C": "Thuật toán Google chỉ dựa vào số lượng backlink để xếp hạng website.",
      "D": "Thuật toán Google sử dụng nhiều yếu tố khác nhau để đánh giá và xếp hạng website."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387634,
    "question": "SEO là viết tắt của cụm từ nào và mục tiêu chính của SEO là gì?",
    "options": {
      "A": "Search Engine Optimization - Tối ưu hóa công cụ tìm kiếm, nhằm tăng cường hiển thị và lưu lượng truy cập tự nhiên từ các công cụ tìm kiếm.",
      "B": "Social Engagement Optimization - Tối ưu hóa tương tác mạng xã hội, nhằm tăng cường sự tương tác và nhận diện thương hiệu trên mạng xã hội.",
      "C": "Sales and E-commerce Operation - Vận hành bán hàng và thương mại điện tử, nhằm tối ưu hóa quy trình bán hàng trực tuyến.",
      "D": "Systematic Error Observation - Quan sát lỗi hệ thống, nhằm phát hiện và sửa chữa các lỗi kỹ thuật của website."
    },
    "correctAnswer": "A",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387635,
    "question": "Bạn đang quản lý một trang web bán hàng thời trang trực tuyến. Để cải thiện SEO, bạn nên tập trung ưu tiên vào hoạt động nào sau đây?",
    "options": {
      "A": "Tăng cường đăng bài viết về tin tức thời trang trên mạng xã hội.",
      "B": "Xây dựng liên kết từ các trang web không liên quan đến thời trang.",
      "C": "Nghiên cứu và sử dụng từ khóa liên quan đến thời trang, sản phẩm, và xu hướng trong mô tả sản phẩm và nội dung trang web.",
      "D": "Tối ưu hóa tốc độ tải trang web cho phiên bản máy tính bàn, bỏ qua phiên bản di động."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387636,
    "question": "Trong SEO On-page, yếu tố nào sau đây **không** trực tiếp ảnh hưởng đến thứ hạng trang web trên công cụ tìm kiếm?",
    "options": {
      "A": "Cấu trúc URL thân thiện với người dùng và công cụ tìm kiếm.",
      "B": "Số lượng bình luận và lượt thích trên bài viết blog.",
      "C": "Sử dụng thẻ tiêu đề (Title Tag) và thẻ mô tả (Meta Description) chứa từ khóa mục tiêu.",
      "D": "Tốc độ tải trang nhanh và trải nghiệm người dùng tốt trên thiết bị di động."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387637,
    "question": "So sánh giữa 'từ khóa chính' (head keyword) và 'từ khóa đuôi dài' (long-tail keyword) trong SEO, phát biểu nào sau đây là đúng?",
    "options": {
      "A": "Từ khóa chính luôn mang lại tỷ lệ chuyển đổi cao hơn từ khóa đuôi dài.",
      "B": "Từ khóa đuôi dài thường có lượng tìm kiếm cao hơn từ khóa chính.",
      "C": "Từ khóa chính thường có tính cạnh tranh cao hơn và phạm vi rộng hơn, trong khi từ khóa đuôi dài cụ thể hơn và nhắm mục tiêu người dùng có ý định mua hàng rõ ràng hơn.",
      "D": "Cả từ khóa chính và từ khóa đuôi dài đều không quan trọng bằng việc xây dựng liên kết chất lượng."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387638,
    "question": "Nguyên nhân chính khiến một trang web mới tạo thường mất nhiều thời gian để đạt được thứ hạng cao trên Google là gì?",
    "options": {
      "A": "Do website chưa được đăng ký với Google Search Console.",
      "B": "Do website chưa có đủ 'uy tín' và 'thẩm quyền' trong mắt Google, cần thời gian để thu thập dữ liệu và đánh giá chất lượng.",
      "C": "Do website chưa sử dụng dịch vụ quảng cáo trả phí của Google.",
      "D": "Do tên miền của website quá ngắn và khó nhớ."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387639,
    "question": "SEO là viết tắt của cụm từ nào dưới đây?",
    "options": {
      "A": "Search Engine Optimization",
      "B": "Social Engagement Optimization",
      "C": "Sales & E-commerce Operations",
      "D": "Systematic Enterprise Organization"
    },
    "correctAnswer": "A",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387640,
    "question": "Mục tiêu chính của SEO là gì?",
    "options": {
      "A": "Tăng doanh số bán hàng trực tuyến ngay lập tức.",
      "B": "Tăng lượng truy cập tự nhiên (organic traffic) từ các công cụ tìm kiếm.",
      "C": "Xây dựng thương hiệu trên mạng xã hội.",
      "D": "Giảm chi phí quảng cáo trực tuyến."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387641,
    "question": "Yếu tố nào sau đây **không** phải là yếu tố SEO On-page?",
    "options": {
      "A": "Tối ưu hóa thẻ tiêu đề (Title tag).",
      "B": "Xây dựng liên kết ngược (Backlink).",
      "C": "Tối ưu hóa nội dung bài viết.",
      "D": "Tối ưu hóa tốc độ tải trang."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387642,
    "question": "Tại sao việc nghiên cứu từ khóa (keyword research) lại quan trọng trong SEO?",
    "options": {
      "A": "Để biết đối thủ cạnh tranh đang sử dụng từ khóa nào.",
      "B": "Để xác định các từ khóa mà khách hàng mục tiêu sử dụng khi tìm kiếm sản phẩm/dịch vụ.",
      "C": "Để tăng số lượng từ khóa trên website.",
      "D": "Để tạo ra nội dung độc đáo và khác biệt."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387643,
    "question": "Thẻ Meta Description có vai trò gì trong kết quả tìm kiếm?",
    "options": {
      "A": "Quyết định thứ hạng website trên trang kết quả tìm kiếm.",
      "B": "Hiển thị URL của website.",
      "C": "Cung cấp mô tả ngắn gọn về nội dung trang web để thu hút người dùng nhấp chuột.",
      "D": "Chứa các từ khóa chính để tăng mật độ từ khóa."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387644,
    "question": "Liên kết nội bộ (internal link) mang lại lợi ích gì cho SEO?",
    "options": {
      "A": "Tăng PageRank cho trang chủ website.",
      "B": "Giúp người dùng dễ dàng điều hướng trên website và tăng thời gian ở lại trang.",
      "C": "Tạo liên kết với các website khác.",
      "D": "Giảm tỷ lệ thoát trang (bounce rate) của website đối thủ."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387645,
    "question": "Trong SEO, thuật ngữ 'canonical URL' dùng để chỉ điều gì?",
    "options": {
      "A": "URL của trang chủ website.",
      "B": "URL ưu tiên được công cụ tìm kiếm lập chỉ mục khi có nội dung trùng lặp.",
      "C": "URL chứa từ khóa chính.",
      "D": "URL rút gọn để chia sẻ trên mạng xã hội."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387646,
    "question": "Công cụ nào sau đây KHÔNG phải là công cụ hỗ trợ SEO phổ biến?",
    "options": {
      "A": "Google Analytics.",
      "B": "Google Search Console.",
      "C": "Facebook Ads Manager.",
      "D": "Ahrefs."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387647,
    "question": "Tốc độ tải trang chậm ảnh hưởng tiêu cực đến SEO như thế nào?",
    "options": {
      "A": "Không ảnh hưởng đến SEO.",
      "B": "Chỉ ảnh hưởng đến trải nghiệm người dùng, không ảnh hưởng đến thứ hạng.",
      "C": "Làm tăng tỷ lệ thoát trang, giảm trải nghiệm người dùng và có thể bị công cụ tìm kiếm đánh giá thấp.",
      "D": "Giúp website hiển thị đẹp hơn trên thiết bị di động."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387648,
    "question": "Backlink 'nofollow' khác với backlink 'dofollow' như thế nào?",
    "options": {
      "A": "Backlink 'nofollow' có chất lượng cao hơn 'dofollow'.",
      "B": "Backlink 'nofollow' không truyền 'PageRank' (hoặc 'link juice') sang website được liên kết.",
      "C": "Backlink 'dofollow' không được công cụ tìm kiếm tính đến.",
      "D": "Không có sự khác biệt giữa 'nofollow' và 'dofollow'."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387649,
    "question": "Ví dụ nào sau đây là hành vi 'nhồi nhét từ khóa' (keyword stuffing) KHÔNG nên thực hiện trong SEO?",
    "options": {
      "A": "Sử dụng từ khóa mục tiêu một cách tự nhiên trong tiêu đề, mô tả và nội dung.",
      "B": "Lặp đi lặp lại từ khóa mục tiêu quá nhiều lần trong nội dung một cách gượng ép, không tự nhiên.",
      "C": "Sử dụng từ khóa liên quan (LSI keywords) để làm phong phú nội dung.",
      "D": "Nghiên cứu và sử dụng từ khóa dài (long-tail keywords)."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387650,
    "question": "Khi thực hiện SEO cho một website mới, bạn nên ưu tiên yếu tố nào trước?",
    "options": {
      "A": "Xây dựng hàng loạt backlink từ các website khác.",
      "B": "Tối ưu hóa SEO On-page (cấu trúc website, nội dung, từ khóa, tốc độ tải trang).",
      "C": "Chạy quảng cáo trả phí để tăng truy cập nhanh chóng.",
      "D": "Tập trung vào SEO Off-page trước khi có nội dung chất lượng."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387651,
    "question": "Sitemap XML có vai trò gì đối với SEO?",
    "options": {
      "A": "Giúp người dùng dễ dàng tìm kiếm thông tin trên website.",
      "B": "Cung cấp bản đồ website cho công cụ tìm kiếm, giúp chúng thu thập dữ liệu và lập chỉ mục website hiệu quả hơn.",
      "C": "Tăng tốc độ tải trang của website.",
      "D": "Cải thiện giao diện người dùng (UI) của website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387652,
    "question": "Điều gì sẽ xảy ra nếu website của bạn bị phạt bởi Google (Google penalty) do vi phạm chính sách SEO?",
    "options": {
      "A": "Website sẽ được xếp hạng cao hơn để bù đắp.",
      "B": "Website có thể bị giảm thứ hạng hoặc thậm chí bị loại khỏi kết quả tìm kiếm.",
      "C": "Không có ảnh hưởng gì đáng kể đến SEO.",
      "D": "Website sẽ nhận được cảnh báo và có cơ hội sửa lỗi."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387653,
    "question": "So sánh SEO và SEM, điểm khác biệt lớn nhất giữa chúng là gì?",
    "options": {
      "A": "SEO tập trung vào quảng cáo trả phí, SEM tập trung vào truy cập tự nhiên.",
      "B": "SEO là một phần của SEM.",
      "C": "SEO tập trung vào truy cập tự nhiên (organic), SEM bao gồm cả SEO và quảng cáo trả phí (paid search).",
      "D": "SEO và SEM là hai khái niệm hoàn toàn giống nhau."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387654,
    "question": "SEO (Tối ưu hóa công cụ tìm kiếm) là gì?",
    "options": {
      "A": "Một phương pháp quảng cáo trả phí để trang web hiển thị đầu tiên trên Google.",
      "B": "Quy trình tăng cường khả năng hiển thị của trang web hoặc trang web trên các trang kết quả của công cụ tìm kiếm (SERPs) một cách tự nhiên.",
      "C": "Phần mềm giúp thiết kế trang web đẹp mắt và thu hút người dùng.",
      "D": "Hoạt động quản lý và duy trì máy chủ web."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387655,
    "question": "Yếu tố nào sau đây **không** phải là một yếu tố SEO On-page chính?",
    "options": {
      "A": "Tối ưu hóa thẻ tiêu đề (Title tag) và thẻ mô tả (Meta description).",
      "B": "Xây dựng liên kết từ các trang web khác (backlink).",
      "C": "Tối ưu hóa nội dung bài viết và hình ảnh.",
      "D": "Cấu trúc URL thân thiện với SEO."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387656,
    "question": "Tại sao nghiên cứu từ khóa lại quan trọng trong SEO?",
    "options": {
      "A": "Để trang web trông chuyên nghiệp và hiện đại hơn.",
      "B": "Để biết chính xác những từ và cụm từ mà khách hàng tiềm năng sử dụng khi tìm kiếm sản phẩm hoặc dịch vụ của bạn.",
      "C": "Để tăng tốc độ tải trang web.",
      "D": "Để tạo ra nhiều liên kết nội bộ hơn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387657,
    "question": "Thẻ tiêu đề (Title tag) hiển thị ở đâu trên trang kết quả tìm kiếm?",
    "options": {
      "A": "Ở cuối trang web, phần chân trang.",
      "B": "Trong nội dung chính của trang web.",
      "C": "Là dòng tiêu đề màu xanh lam, có thể nhấp vào, hiển thị trên SERPs.",
      "D": "Trong thanh địa chỉ của trình duyệt."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387658,
    "question": "Liên kết nội bộ (internal link) là gì và tại sao chúng quan trọng cho SEO?",
    "options": {
      "A": "Liên kết từ trang web của bạn đến trang web khác; quan trọng để tăng độ tin cậy.",
      "B": "Liên kết trong cùng một trang web; quan trọng để điều hướng người dùng và phân phối sức mạnh liên kết.",
      "C": "Liên kết từ mạng xã hội; quan trọng để tăng traffic từ mạng xã hội.",
      "D": "Liên kết từ email marketing; quan trọng để tăng tỷ lệ chuyển đổi."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387659,
    "question": "Mô tả meta (Meta description) có vai trò gì trong SEO?",
    "options": {
      "A": "Ảnh hưởng trực tiếp đến thứ hạng trang web trên Google.",
      "B": "Giúp người dùng hiểu nội dung trang web trước khi nhấp vào liên kết trên SERPs, từ đó tăng CTR (tỷ lệ nhấp).",
      "C": "Tăng tốc độ tải trang web.",
      "D": "Tạo ra các liên kết chất lượng đến trang web."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387660,
    "question": "Trong SEO, 'từ khóa đuôi dài' (long-tail keyword) thường có đặc điểm gì?",
    "options": {
      "A": "Ngắn gọn, có tính cạnh tranh cao và lượng tìm kiếm lớn.",
      "B": "Dài hơn, cụ thể hơn, ít cạnh tranh hơn và nhắm mục tiêu đến đối tượng cụ thể hơn.",
      "C": "Là các từ khóa liên quan đến thương hiệu.",
      "D": "Là các từ khóa được sử dụng trong quảng cáo trả phí."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387661,
    "question": "Backlink chất lượng là gì và tại sao chúng quan trọng?",
    "options": {
      "A": "Liên kết từ bất kỳ trang web nào; quan trọng vì số lượng nhiều hơn chất lượng.",
      "B": "Liên kết từ các trang web uy tín, liên quan đến chủ đề của bạn; quan trọng vì giúp tăng độ tin cậy và thứ hạng.",
      "C": "Liên kết từ mạng xã hội; quan trọng để tăng traffic nhanh chóng.",
      "D": "Liên kết từ các trang web có thứ hạng thấp; quan trọng để đa dạng hóa nguồn backlink."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387662,
    "question": "Công cụ nào của Google giúp bạn theo dõi hiệu suất SEO của website, ví dụ như từ khóa đang xếp hạng, lỗi thu thập dữ liệu?",
    "options": {
      "A": "Google Analytics.",
      "B": "Google Ads.",
      "C": "Google Search Console.",
      "D": "Google My Business."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387663,
    "question": "Tốc độ tải trang web (page speed) ảnh hưởng đến SEO như thế nào?",
    "options": {
      "A": "Không ảnh hưởng gì đến SEO.",
      "B": "Ảnh hưởng tích cực đến trải nghiệm người dùng và thứ hạng, trang web chậm có thể bị phạt.",
      "C": "Chỉ ảnh hưởng đến trải nghiệm người dùng trên máy tính, không ảnh hưởng trên điện thoại.",
      "D": "Chỉ ảnh hưởng đến quảng cáo trả phí, không ảnh hưởng đến SEO tự nhiên."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387664,
    "question": "Điểm khác biệt chính giữa SEO 'mũ trắng' (White hat SEO) và SEO 'mũ đen' (Black hat SEO) là gì?",
    "options": {
      "A": "SEO mũ trắng tập trung vào kỹ thuật, mũ đen tập trung vào nội dung.",
      "B": "SEO mũ trắng tuân thủ nguyên tắc của công cụ tìm kiếm, mũ đen sử dụng các thủ thuật gian lận để nhanh chóng đạt thứ hạng cao.",
      "C": "SEO mũ trắng chỉ sử dụng từ khóa đuôi dài, mũ đen chỉ sử dụng từ khóa ngắn.",
      "D": "SEO mũ trắng miễn phí, mũ đen phải trả phí."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387665,
    "question": "Tại sao thiết kế website thân thiện với thiết bị di động (mobile-friendly) lại quan trọng trong SEO hiện nay?",
    "options": {
      "A": "Vì người dùng chủ yếu truy cập internet bằng máy tính để bàn.",
      "B": "Vì Google ưu tiên lập chỉ mục trên thiết bị di động (mobile-first indexing).",
      "C": "Vì thiết kế mobile-friendly giúp giảm chi phí thiết kế web.",
      "D": "Vì thiết kế mobile-friendly không ảnh hưởng đến SEO."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387666,
    "question": "Ví dụ nào sau đây là hành động SEO Off-page?",
    "options": {
      "A": "Tối ưu hóa tiêu đề và mô tả cho trang sản phẩm.",
      "B": "Xây dựng liên kết từ các blog và diễn đàn khác.",
      "C": "Cải thiện tốc độ tải trang web.",
      "D": "Sử dụng từ khóa mục tiêu trong nội dung bài viết."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387667,
    "question": "Nếu bạn muốn cải thiện SEO cho một bài viết blog, bạn nên bắt đầu từ đâu?",
    "options": {
      "A": "Xây dựng hàng loạt backlink chất lượng thấp.",
      "B": "Tối ưu hóa tiêu đề, mô tả, heading và nội dung bài viết với từ khóa mục tiêu.",
      "C": "Sao chép nội dung từ các trang web khác.",
      "D": "Nhồi nhét từ khóa vào mọi vị trí trong bài viết."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387668,
    "question": "Nguyên nhân chính khiến một trang web có thể bị tụt hạng trên Google sau một thời gian đạt thứ hạng cao là gì?",
    "options": {
      "A": "Do trang web đó sử dụng quá nhiều liên kết nội bộ.",
      "B": "Do Google cập nhật thuật toán xếp hạng và trang web không còn đáp ứng các tiêu chí mới.",
      "C": "Do trang web có quá nhiều nội dung chất lượng cao.",
      "D": "Do trang web có tốc độ tải trang quá nhanh."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387669,
    "question": "SEO (Tối ưu hóa công cụ tìm kiếm) là gì?",
    "options": {
      "A": "Một loại virus máy tính ảnh hưởng đến website.",
      "B": "Một tập hợp các kỹ thuật nhằm tăng thứ hạng website trên trang kết quả tìm kiếm.",
      "C": "Một phương pháp quảng cáo trả phí trên các công cụ tìm kiếm.",
      "D": "Một công cụ để thiết kế giao diện website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387670,
    "question": "Yếu tố nào sau đây KHÔNG phải là yếu tố SEO On-page?",
    "options": {
      "A": "Tối ưu thẻ tiêu đề (title tag).",
      "B": "Xây dựng liên kết từ website khác về website của bạn (backlink).",
      "C": "Tối ưu tốc độ tải trang.",
      "D": "Sử dụng từ khóa mục tiêu trong nội dung."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387671,
    "question": "Mục đích chính của việc nghiên cứu từ khóa trong SEO là gì?",
    "options": {
      "A": "Để website trông chuyên nghiệp hơn.",
      "B": "Để biết đối thủ cạnh tranh đang sử dụng từ khóa nào.",
      "C": "Để hiểu người dùng đang tìm kiếm thông tin gì và sử dụng từ khóa nào để tìm kiếm.",
      "D": "Để tăng tốc độ tải trang website."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387672,
    "question": "Trong SEO, 'backlink' được hiểu là gì?",
    "options": {
      "A": "Liên kết nội bộ giữa các trang trong cùng một website.",
      "B": "Liên kết từ website khác trỏ về website của bạn.",
      "C": "Liên kết từ website của bạn trỏ ra các website khác.",
      "D": "Liên kết đến các trang mạng xã hội của website bạn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387673,
    "question": "Tại sao tốc độ tải trang web lại quan trọng đối với SEO?",
    "options": {
      "A": "Vì nó giúp website hiển thị đẹp hơn trên các thiết bị di động.",
      "B": "Vì nó ảnh hưởng trực tiếp đến trải nghiệm người dùng và thứ hạng trên công cụ tìm kiếm.",
      "C": "Vì nó giúp website có nhiều màu sắc và hình ảnh động hơn.",
      "D": "Vì nó giúp website dễ dàng được chia sẻ trên mạng xã hội."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387674,
    "question": "Công cụ nào sau đây KHÔNG phải là công cụ hỗ trợ nghiên cứu từ khóa phổ biến?",
    "options": {
      "A": "Google Keyword Planner.",
      "B": "SEMrush.",
      "C": "Google Analytics.",
      "D": "Ahrefs."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387675,
    "question": "Thẻ tiêu đề (title tag) tốt nhất nên chứa yếu tố nào để tối ưu SEO?",
    "options": {
      "A": "Chỉ chứa tên thương hiệu của website.",
      "B": "Chứa từ khóa mục tiêu chính và mô tả ngắn gọn nội dung trang.",
      "C": "Chứa càng nhiều từ khóa càng tốt, kể cả từ khóa không liên quan.",
      "D": "Chứa các ký tự đặc biệt và biểu tượng cảm xúc để thu hút sự chú ý."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387676,
    "question": "Sự khác biệt chính giữa SEO 'mũ trắng' và SEO 'mũ đen' là gì?",
    "options": {
      "A": "SEO mũ trắng tập trung vào kỹ thuật, mũ đen tập trung vào nội dung.",
      "B": "SEO mũ trắng tuân thủ nguyên tắc của công cụ tìm kiếm, mũ đen sử dụng các thủ thuật gian lận.",
      "C": "SEO mũ trắng chỉ dành cho website lớn, mũ đen dành cho website nhỏ.",
      "D": "SEO mũ trắng nhanh chóng đạt kết quả, mũ đen cần nhiều thời gian hơn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387677,
    "question": "Ví dụ nào sau đây là hành động tối ưu hóa SEO Off-page?",
    "options": {
      "A": "Tối ưu hóa hình ảnh trên website.",
      "B": "Xây dựng nội dung bài viết chất lượng.",
      "C": "Tham gia các diễn đàn, blog và để lại liên kết website.",
      "D": "Cải thiện cấu trúc website."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387678,
    "question": "Robot.txt là file gì và có vai trò như thế nào trong SEO?",
    "options": {
      "A": "File chứa thông tin bản quyền website, giúp bảo vệ nội dung.",
      "B": "File hướng dẫn công cụ tìm kiếm thu thập dữ liệu (crawl) website, chỉ định các trang nên và không nên thu thập.",
      "C": "File chứa mã nguồn website, quyết định giao diện và chức năng.",
      "D": "File thống kê lưu lượng truy cập website, giúp theo dõi hiệu quả SEO."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387679,
    "question": "Điều gì sẽ xảy ra nếu website của bạn sử dụng 'keyword stuffing' (nhồi nhét từ khóa)?",
    "options": {
      "A": "Website sẽ nhanh chóng đạt thứ hạng cao trên công cụ tìm kiếm.",
      "B": "Website có thể bị công cụ tìm kiếm phạt và tụt hạng.",
      "C": "Website sẽ hiển thị đẹp hơn trên các thiết bị di động.",
      "D": "Website sẽ được nhiều người dùng chia sẻ trên mạng xã hội."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387680,
    "question": "Yếu tố nào sau đây quan trọng nhất khi xây dựng nội dung chuẩn SEO?",
    "options": {
      "A": "Độ dài bài viết phải trên 2000 từ.",
      "B": "Sử dụng nhiều hình ảnh và video chất lượng cao.",
      "C": "Nội dung độc đáo, hữu ích, đáp ứng nhu cầu người dùng và sử dụng từ khóa tự nhiên.",
      "D": "Chèn nhiều liên kết nội bộ và liên kết ngoài."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387681,
    "question": "Thẻ Meta Description có vai trò gì trong SEO?",
    "options": {
      "A": "Quyết định thứ hạng website trực tiếp trên trang kết quả tìm kiếm.",
      "B": "Hiển thị mô tả ngắn gọn về nội dung trang dưới tiêu đề trong kết quả tìm kiếm, giúp tăng tỷ lệ nhấp chuột (CTR).",
      "C": "Giúp công cụ tìm kiếm hiểu rõ hơn về cấu trúc website.",
      "D": "Tăng tốc độ tải trang website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387682,
    "question": "Khi nào thì việc tối ưu SEO cho thiết bị di động (Mobile SEO) trở nên đặc biệt quan trọng?",
    "options": {
      "A": "Khi website chủ yếu phục vụ người dùng máy tính để bàn.",
      "B": "Khi website có tỷ lệ truy cập từ thiết bị di động cao hoặc hướng đến đối tượng sử dụng di động.",
      "C": "Khi website mới được tạo và chưa có nhiều nội dung.",
      "D": "Khi website sử dụng giao diện thiết kế phức tạp."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387683,
    "question": "Trong SEO, 'anchor text' là gì?",
    "options": {
      "A": "Đoạn văn bản mô tả về website trên trang chủ.",
      "B": "Văn bản hiển thị của một liên kết (backlink hoặc liên kết nội bộ).",
      "C": "Tiêu đề chính của một trang web.",
      "D": "Mô tả hình ảnh thay thế cho hình ảnh (alt text)."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387684,
    "question": "SEO, hay Tối ưu hóa Công cụ Tìm kiếm, **KHÔNG** tập trung vào mục tiêu chính nào sau đây?",
    "options": {
      "A": "Tăng thứ hạng website trên trang kết quả tìm kiếm.",
      "B": "Cải thiện trải nghiệm người dùng trên website.",
      "C": "Tăng lượng truy cập tự nhiên (organic traffic) vào website.",
      "D": "Giảm chi phí quảng cáo trả phí trực tuyến."
    },
    "correctAnswer": "D",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387685,
    "question": "Trong các yếu tố sau, yếu tố nào **KHÔNG** thuộc về SEO On-Page?",
    "options": {
      "A": "Tối ưu hóa thẻ tiêu đề (Title Tag) và thẻ mô tả (Meta Description).",
      "B": "Xây dựng liên kết ngược (Backlink) từ các website khác.",
      "C": "Tối ưu hóa nội dung bài viết và hình ảnh.",
      "D": "Cải thiện tốc độ tải trang của website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387686,
    "question": "Bạn đang thực hiện SEO cho một website bán hàng trực tuyến. Để tối ưu hóa trải nghiệm người dùng và tăng tỷ lệ chuyển đổi, bạn nên tập trung vào yếu tố SEO On-Page nào **NHẤT** sau đây?",
    "options": {
      "A": "Tối ưu hóa thẻ tiêu đề (Title Tag) cho tất cả các trang sản phẩm.",
      "B": "Tối ưu hóa tốc độ tải trang và khả năng tương thích trên thiết bị di động.",
      "C": "Xây dựng nội dung blog chia sẻ kiến thức về sản phẩm.",
      "D": "Tăng số lượng từ khóa mục tiêu trong mô tả sản phẩm."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387687,
    "question": "Sự khác biệt chính giữa từ khóa 'đuôi dài' (Long-tail keyword) và từ khóa 'đầu ngắn' (Short-tail keyword) trong SEO là gì?",
    "options": {
      "A": "Từ khóa đuôi dài có lượng tìm kiếm cao hơn từ khóa đầu ngắn.",
      "B": "Từ khóa đuôi dài thường chung chung và ít cụ thể hơn từ khóa đầu ngắn.",
      "C": "Từ khóa đuôi dài nhắm mục tiêu đến đối tượng cụ thể hơn và có tỷ lệ chuyển đổi cao hơn.",
      "D": "Từ khóa đuôi dài dễ dàng xếp hạng hơn từ khóa đầu ngắn."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387688,
    "question": "Điều gì sẽ xảy ra **ĐẦU TIÊN** khi bạn thực hiện tối ưu hóa SEO cho một trang web mới?",
    "options": {
      "A": "Website sẽ ngay lập tức xuất hiện ở trang đầu kết quả tìm kiếm.",
      "B": "Công cụ tìm kiếm (Google, Bing...) cần thời gian để thu thập dữ liệu (crawl) và lập chỉ mục (index) website.",
      "C": "Lượng truy cập tự nhiên vào website sẽ tăng vọt sau vài ngày.",
      "D": "Website sẽ tự động có được nhiều backlink chất lượng cao."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387689,
    "question": "SEO (Tối ưu hóa công cụ tìm kiếm) là gì?",
    "options": {
      "A": "Một phương pháp quảng cáo trả phí để hiển thị trang web trên đầu kết quả tìm kiếm.",
      "B": "Quy trình xây dựng liên kết từ các trang web khác về trang web của bạn.",
      "C": "Tập hợp các kỹ thuật nhằm nâng cao thứ hạng của website trên các công cụ tìm kiếm một cách tự nhiên.",
      "D": "Việc thiết kế lại giao diện trang web để thu hút nhiều người dùng hơn."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387690,
    "question": "Yếu tố nào sau đây **quan trọng nhất** trong SEO On-page?",
    "options": {
      "A": "Số lượng backlink từ các trang web khác.",
      "B": "Tốc độ tải trang và trải nghiệm người dùng trên thiết bị di động.",
      "C": "Mức độ liên quan và chất lượng của nội dung trên trang web.",
      "D": "Việc sử dụng mạng xã hội để quảng bá trang web."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387691,
    "question": "Vì sao việc nghiên cứu từ khóa lại **cần thiết** trước khi triển khai SEO?",
    "options": {
      "A": "Để đảm bảo trang web có giao diện đẹp mắt và chuyên nghiệp.",
      "B": "Để xác định những từ và cụm từ mà khách hàng mục tiêu sử dụng khi tìm kiếm sản phẩm/dịch vụ liên quan.",
      "C": "Để tăng tốc độ tải trang web và cải thiện trải nghiệm người dùng.",
      "D": "Để xây dựng hệ thống backlink chất lượng từ các trang web uy tín."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387692,
    "question": "Thẻ tiêu đề (Title tag) có vai trò gì trong SEO?",
    "options": {
      "A": "Hiển thị nội dung tóm tắt của trang web trên kết quả tìm kiếm và tab trình duyệt.",
      "B": "Mô tả chi tiết nội dung của trang web cho người dùng trước khi họ nhấp vào.",
      "C": "Xác định ngôn ngữ chính của trang web.",
      "D": "Cải thiện tốc độ tải trang web."
    },
    "correctAnswer": "A",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387693,
    "question": "Mô tả meta (Meta description) thường được sử dụng để làm gì?",
    "options": {
      "A": "Để chứa các từ khóa chính giúp tăng thứ hạng tìm kiếm trực tiếp.",
      "B": "Để cung cấp một đoạn mô tả ngắn gọn, hấp dẫn về nội dung trang web, khuyến khích người dùng nhấp vào từ trang kết quả tìm kiếm.",
      "C": "Để xác định tác giả và bản quyền của nội dung trên trang web.",
      "D": "Để tạo liên kết nội bộ giữa các trang trên website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387694,
    "question": "Liên kết nội bộ (Internal link) mang lại lợi ích gì cho SEO?",
    "options": {
      "A": "Tăng số lượng backlink từ các trang web bên ngoài.",
      "B": "Giúp người dùng dễ dàng điều hướng và khám phá các nội dung liên quan trên website, đồng thời hỗ trợ công cụ tìm kiếm thu thập thông tin website hiệu quả hơn.",
      "C": "Cải thiện tốc độ tải trang web.",
      "D": "Giảm tỷ lệ thoát trang (Bounce rate) của website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387695,
    "question": "Backlink chất lượng là gì?",
    "options": {
      "A": "Liên kết từ bất kỳ trang web nào, miễn là có số lượng lớn.",
      "B": "Liên kết từ các trang web có liên quan về chủ đề, có uy tín và độ tin cậy cao.",
      "C": "Liên kết từ các trang web có thứ hạng thấp nhưng có nhiều lưu lượng truy cập.",
      "D": "Liên kết từ các trang mạng xã hội."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387696,
    "question": "Trong SEO, 'từ khóa đuôi dài' (Long-tail keyword) thường có đặc điểm gì?",
    "options": {
      "A": "Có lượng tìm kiếm rất lớn và độ cạnh tranh cao.",
      "B": "Gồm 1-2 từ khóa chính, mang tính chung chung.",
      "C": "Là các cụm từ khóa dài, cụ thể, thể hiện ý định tìm kiếm rõ ràng của người dùng và thường có độ cạnh tranh thấp hơn.",
      "D": "Chỉ được sử dụng trong quảng cáo trả phí (SEM)."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387697,
    "question": "Công cụ nào của Google giúp bạn theo dõi hiệu suất SEO của website, bao gồm lưu lượng truy cập, thứ hạng từ khóa và các lỗi kỹ thuật?",
    "options": {
      "A": "Google Analytics",
      "B": "Google Ads",
      "C": "Google Search Console",
      "D": "Google My Business"
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387698,
    "question": "Tốc độ tải trang chậm ảnh hưởng đến SEO như thế nào?",
    "options": {
      "A": "Không ảnh hưởng gì đến SEO.",
      "B": "Chỉ ảnh hưởng đến trải nghiệm người dùng, không ảnh hưởng đến thứ hạng.",
      "C": "Ảnh hưởng tiêu cực đến trải nghiệm người dùng (tăng tỷ lệ thoát trang) và có thể bị Google đánh giá thấp hơn về thứ hạng.",
      "D": "Giúp trang web hiển thị tốt hơn trên thiết bị di động."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387699,
    "question": "Trong SEO, 'tối ưu hóa cho thiết bị di động' (Mobile-friendly) nghĩa là gì?",
    "options": {
      "A": "Chỉ hiển thị trang web trên điện thoại di động, không hiển thị trên máy tính.",
      "B": "Thiết kế trang web sao cho hiển thị và hoạt động tốt trên các thiết bị di động (điện thoại, máy tính bảng), đảm bảo trải nghiệm người dùng tốt.",
      "C": "Tạo một ứng dụng di động riêng biệt thay vì website.",
      "D": "Tăng kích thước chữ viết trên trang web."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387700,
    "question": "Phương pháp SEO 'mũ trắng' (White hat SEO) khác biệt với 'mũ đen' (Black hat SEO) như thế nào?",
    "options": {
      "A": "Mũ trắng tập trung vào các kỹ thuật hợp pháp, bền vững, tuân thủ nguyên tắc của công cụ tìm kiếm, trong khi mũ đen sử dụng các thủ thuật gian lận, ngắn hạn để nhanh chóng tăng thứ hạng.",
      "B": "Mũ trắng chỉ tập trung vào SEO On-page, còn mũ đen chỉ tập trung vào SEO Off-page.",
      "C": "Mũ trắng sử dụng công cụ trả phí, mũ đen sử dụng công cụ miễn phí.",
      "D": "Không có sự khác biệt, cả hai đều là các phương pháp SEO hiệu quả."
    },
    "correctAnswer": "A",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387701,
    "question": "Ví dụ nào sau đây là hành động SEO 'mũ đen'?",
    "options": {
      "A": "Xây dựng nội dung chất lượng, hữu ích cho người dùng.",
      "B": "Tối ưu hóa thẻ tiêu đề và mô tả meta.",
      "C": "Nhồi nhét từ khóa (Keyword stuffing) quá mức vào nội dung trang web.",
      "D": "Xây dựng liên kết nội bộ hợp lý."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387702,
    "question": "Tại sao 'nội dung là vua' (Content is king) trong SEO?",
    "options": {
      "A": "Vì nội dung giúp trang web có giao diện đẹp mắt.",
      "B": "Vì nội dung chất lượng, độc đáo và hữu ích thu hút người dùng, giữ chân họ ở lại trang web lâu hơn, tăng khả năng chia sẻ và nhận được backlink tự nhiên, từ đó cải thiện thứ hạng.",
      "C": "Vì nội dung giúp tăng tốc độ tải trang.",
      "D": "Vì nội dung giúp giảm chi phí quảng cáo."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387703,
    "question": "Khi nào bạn nên sử dụng thẻ 'noindex' trong robots meta tag?",
    "options": {
      "A": "Khi bạn muốn trang web được index nhanh chóng.",
      "B": "Khi bạn muốn ngăn chặn một trang cụ thể (ví dụ trang cảm ơn, trang quản trị, nội dung trùng lặp) không bị công cụ tìm kiếm index và hiển thị trên kết quả tìm kiếm.",
      "C": "Khi bạn muốn tăng tốc độ tải trang.",
      "D": "Khi bạn muốn cải thiện trải nghiệm người dùng trên thiết bị di động."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387704,
    "question": "SEO là gì?",
    "options": {
      "A": "Một hình thức quảng cáo trả phí để website hiển thị đầu trang kết quả tìm kiếm.",
      "B": "Quy trình tối ưu hóa website để tăng khả năng hiển thị trên các công cụ tìm kiếm miễn phí.",
      "C": "Một loại virus máy tính tấn công website.",
      "D": "Phần mềm quản lý nội dung website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387705,
    "question": "Mục đích chính của việc sử dụng từ khóa (keywords) trong SEO là gì?",
    "options": {
      "A": "Để làm cho văn bản trên website dài hơn và phức tạp hơn.",
      "B": "Để thu hút người dùng mạng xã hội.",
      "C": "Để giúp các công cụ tìm kiếm hiểu nội dung trang web và kết nối với truy vấn tìm kiếm của người dùng.",
      "D": "Để tăng tốc độ tải trang web."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387706,
    "question": "Vì sao tính thân thiện với thiết bị di động (mobile-friendliness) lại quan trọng đối với SEO?",
    "options": {
      "A": "Vì Google chỉ lập chỉ mục các trang web trên thiết bị di động.",
      "B": "Vì hầu hết người dùng internet sử dụng thiết bị di động để tìm kiếm thông tin, và Google ưu tiên trải nghiệm người dùng di động.",
      "C": "Vì website thân thiện với di động sẽ tự động được xếp hạng cao hơn mà không cần tối ưu hóa khác.",
      "D": "Vì giao diện di động đẹp mắt sẽ thu hút nhiều backlink hơn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387707,
    "question": "Cách tối ưu thẻ tiêu đề (title tag) hiệu quả nhất cho SEO là gì?",
    "options": {
      "A": "Sử dụng càng nhiều từ khóa càng tốt, không giới hạn độ dài.",
      "B": "Viết ngắn gọn, hấp dẫn, chứa từ khóa chính và không vượt quá 60 ký tự.",
      "C": "Sử dụng toàn bộ chữ hoa để gây chú ý.",
      "D": "Không cần chứa từ khóa, chỉ cần đặt tên thương hiệu."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387708,
    "question": "Đâu là sự khác biệt chính giữa SEO On-page và SEO Off-page?",
    "options": {
      "A": "SEO On-page tập trung vào tốc độ tải trang, SEO Off-page tập trung vào nội dung.",
      "B": "SEO On-page là tối ưu hóa các yếu tố bên trong website, SEO Off-page là tối ưu hóa các yếu tố bên ngoài website.",
      "C": "SEO On-page chỉ dành cho trang chủ, SEO Off-page dành cho tất cả các trang khác.",
      "D": "SEO On-page là kỹ thuật cũ, SEO Off-page là kỹ thuật mới."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387709,
    "question": "Tốc độ tải trang web chậm ảnh hưởng như thế nào đến SEO?",
    "options": {
      "A": "Không ảnh hưởng gì, vì Google chỉ quan tâm đến nội dung.",
      "B": "Làm tăng tỷ lệ thoát trang (bounce rate) và giảm thứ hạng trên công cụ tìm kiếm.",
      "C": "Giúp website hiển thị quảng cáo nhiều hơn.",
      "D": "Tăng số lượng backlink tự nhiên."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387710,
    "question": "Ví dụ nào sau đây là một meta description được tối ưu cho SEO?",
    "options": {
      "A": "Chào mừng đến với website của chúng tôi!",
      "B": "Website này cung cấp thông tin.",
      "C": "Mua ngay sản phẩm chất lượng cao với giá tốt nhất thị trường! Miễn phí giao hàng toàn quốc.",
      "D": "Đây là trang web giới thiệu về công ty ABC."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387711,
    "question": "Backlink là gì trong SEO?",
    "options": {
      "A": "Một liên kết từ website của bạn đến một trang khác trên cùng website.",
      "B": "Một liên kết từ website khác trỏ về website của bạn.",
      "C": "Một liên kết nội bộ trong website của bạn.",
      "D": "Một liên kết từ quảng cáo trả phí."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387712,
    "question": "Vì sao chất lượng nội dung được xem là yếu tố quan trọng hàng đầu trong SEO?",
    "options": {
      "A": "Vì nội dung chất lượng giúp tăng tốc độ tải trang.",
      "B": "Vì nội dung chất lượng thu hút người dùng, giữ chân họ ở lại website lâu hơn và tăng khả năng chia sẻ.",
      "C": "Vì nội dung chất lượng giúp website có giao diện đẹp hơn.",
      "D": "Vì nội dung chất lượng giúp website có nhiều quảng cáo hơn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387713,
    "question": "Cách sử dụng liên kết nội bộ (internal linking) hiệu quả cho SEO là gì?",
    "options": {
      "A": "Liên kết đến càng nhiều trang nội bộ càng tốt, không cần quan tâm đến ngữ cảnh.",
      "B": "Liên kết đến các trang nội bộ có liên quan về mặt ngữ nghĩa và cung cấp thêm thông tin cho người đọc.",
      "C": "Chỉ liên kết đến trang chủ và trang liên hệ.",
      "D": "Không cần sử dụng liên kết nội bộ vì nó không quan trọng."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387714,
    "question": "Sự khác biệt cơ bản giữa kết quả tìm kiếm tự nhiên (organic search) và kết quả tìm kiếm trả phí (paid search) là gì?",
    "options": {
      "A": "Kết quả tìm kiếm tự nhiên hiển thị ở vị trí cao hơn kết quả tìm kiếm trả phí.",
      "B": "Kết quả tìm kiếm tự nhiên là miễn phí và đạt được nhờ SEO, còn kết quả tìm kiếm trả phí cần phải trả tiền cho công cụ tìm kiếm để hiển thị.",
      "C": "Kết quả tìm kiếm tự nhiên chỉ hiển thị văn bản, kết quả tìm kiếm trả phí hiển thị hình ảnh và video.",
      "D": "Kết quả tìm kiếm tự nhiên hiệu quả hơn kết quả tìm kiếm trả phí."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387715,
    "question": "Điều gì sẽ xảy ra nếu bạn nhồi nhét từ khóa (keyword stuffing) vào nội dung website?",
    "options": {
      "A": "Website sẽ nhanh chóng đạt thứ hạng cao trên công cụ tìm kiếm.",
      "B": "Công cụ tìm kiếm có thể phạt website và giảm thứ hạng hoặc thậm chí loại bỏ khỏi chỉ mục.",
      "C": "Không có ảnh hưởng gì, vì công cụ tìm kiếm không phát hiện ra keyword stuffing.",
      "D": "Website sẽ được đánh giá là chuyên nghiệp hơn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387716,
    "question": "Ví dụ nào sau đây là một từ khóa dài (long-tail keyword)?",
    "options": {
      "A": "Điện thoại",
      "B": "Laptop",
      "C": "Mua điện thoại Samsung Galaxy S23 Ultra chính hãng trả góp tại Hà Nội",
      "D": "Thời trang"
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387717,
    "question": "\"\"Indexing\"\" (lập chỉ mục) trong SEO có nghĩa là gì?",
    "options": {
      "A": "Quá trình thiết kế giao diện website thân thiện với người dùng.",
      "B": "Quá trình công cụ tìm kiếm thu thập, phân tích và lưu trữ thông tin về các trang web trên internet để hiển thị trong kết quả tìm kiếm.",
      "C": "Quá trình tạo liên kết nội bộ giữa các trang web.",
      "D": "Quá trình tối ưu hóa tốc độ tải trang web."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387718,
    "question": "Google Search Console (GSC) được sử dụng để làm gì trong SEO?",
    "options": {
      "A": "Để tạo và quản lý quảng cáo Google Ads.",
      "B": "Để theo dõi hiệu suất website trên Google Search, phát hiện lỗi kỹ thuật, gửi sơ đồ trang web (sitemap) và kiểm tra dữ liệu có cấu trúc.",
      "C": "Để phân tích đối thủ cạnh tranh.",
      "D": "Để thiết kế giao diện website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387719,
    "question": "SEO (Tối ưu hóa công cụ tìm kiếm) là gì?",
    "options": {
      "A": "Một phương pháp xây dựng liên kết chất lượng đến trang web.",
      "B": "Một tập hợp các kỹ thuật nhằm tăng thứ hạng của trang web trên các trang kết quả tìm kiếm.",
      "C": "Một chiến lược quảng cáo trả phí để thu hút khách hàng tiềm năng.",
      "D": "Một hình thức marketing truyền thống thông qua báo chí và truyền hình."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387720,
    "question": "Tại sao Nghiên cứu từ khóa (Keyword Research) lại quan trọng trong SEO?",
    "options": {
      "A": "Giúp website có giao diện đẹp mắt và thu hút người dùng hơn.",
      "B": "Giúp xác định các từ khóa mà khách hàng mục tiêu sử dụng khi tìm kiếm sản phẩm/dịch vụ liên quan.",
      "C": "Giúp tăng tốc độ tải trang của website.",
      "D": "Giúp xây dựng mối quan hệ với các trang web khác."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387721,
    "question": "Thẻ tiêu đề (Title Tag) có vai trò gì trong SEO On-page?",
    "options": {
      "A": "Hiển thị tên tác giả của bài viết trên trang web.",
      "B": "Mô tả ngắn gọn và chính xác nội dung chính của trang, hiển thị trên trang kết quả tìm kiếm.",
      "C": "Xác định ngôn ngữ chính của trang web.",
      "D": "Chèn các liên kết nội bộ trong trang web."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387722,
    "question": "Sự khác biệt chính giữa SEO 'White hat' và 'Black hat' là gì?",
    "options": {
      "A": "SEO White hat tập trung vào tốc độ, Black hat tập trung vào chất lượng.",
      "B": "SEO White hat tuân thủ nguyên tắc của công cụ tìm kiếm, Black hat sử dụng các kỹ thuật gian lận để nhanh chóng tăng thứ hạng.",
      "C": "SEO White hat chỉ áp dụng cho trang web lớn, Black hat cho trang web nhỏ.",
      "D": "SEO White hat sử dụng từ khóa ngắn, Black hat sử dụng từ khóa dài."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387723,
    "question": "Yếu tố nào sau đây **không** phải là yếu tố xếp hạng quan trọng trong SEO?",
    "options": {
      "A": "Chất lượng nội dung trang web.",
      "B": "Số lượng liên kết ngược (backlinks) chất lượng.",
      "C": "Tốc độ tải trang của website.",
      "D": "Màu sắc chủ đạo của trang web."
    },
    "correctAnswer": "D",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387724,
    "question": "Liên kết nội bộ (Internal link) đóng vai trò gì trong SEO?",
    "options": {
      "A": "Tăng số lượng người truy cập từ mạng xã hội.",
      "B": "Giúp người dùng và công cụ tìm kiếm điều hướng và khám phá nội dung trên website dễ dàng hơn.",
      "C": "Tăng tốc độ tải trang của website.",
      "D": "Giảm tỷ lệ thoát trang (bounce rate)."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387725,
    "question": "Công cụ nào sau đây thường được sử dụng để phân tích từ khóa và theo dõi thứ hạng website?",
    "options": {
      "A": "Microsoft Word.",
      "B": "Google Search Console.",
      "C": "Adobe Photoshop.",
      "D": "Facebook Ads Manager."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387726,
    "question": "Mục đích chính của việc tối ưu hóa hình ảnh trong SEO là gì?",
    "options": {
      "A": "Làm cho hình ảnh hiển thị đẹp và sắc nét hơn.",
      "B": "Giảm dung lượng hình ảnh để tăng tốc độ tải trang và giúp công cụ tìm kiếm hiểu nội dung hình ảnh.",
      "C": "Chèn logo của công ty vào tất cả các hình ảnh.",
      "D": "Tăng số lượng hình ảnh trên trang web."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387727,
    "question": "Robots.txt là gì và nó được sử dụng để làm gì trong SEO?",
    "options": {
      "A": "Một công cụ để tạo sơ đồ trang web (sitemap).",
      "B": "Một tệp văn bản hướng dẫn công cụ tìm kiếm thu thập dữ liệu (crawl) những phần nào của website.",
      "C": "Một phương pháp để tăng cường bảo mật website.",
      "D": "Một ngôn ngữ lập trình để xây dựng website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387728,
    "question": "Backlink (liên kết ngược) là gì và tại sao chúng quan trọng đối với SEO?",
    "options": {
      "A": "Liên kết từ website của bạn đến các website khác.",
      "B": "Liên kết từ các website khác trỏ về website của bạn, được xem như 'phiếu bầu' tín nhiệm từ website khác.",
      "C": "Liên kết từ mạng xã hội đến website của bạn.",
      "D": "Liên kết từ email marketing đến website của bạn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387729,
    "question": "Mobile-first indexing (ưu tiên lập chỉ mục trên thiết bị di động) nghĩa là gì?",
    "options": {
      "A": "Google ưu tiên xếp hạng các website có ứng dụng di động.",
      "B": "Google ưu tiên lập chỉ mục và xếp hạng phiên bản di động của website trước phiên bản máy tính.",
      "C": "Google chỉ lập chỉ mục các website được thiết kế cho thiết bị di động.",
      "D": "Google phạt các website không có phiên bản di động."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387730,
    "question": "Nội dung trùng lặp (duplicate content) có ảnh hưởng như thế nào đến SEO?",
    "options": {
      "A": "Không ảnh hưởng gì đến SEO.",
      "B": "Có thể bị công cụ tìm kiếm phạt, giảm thứ hạng hoặc thậm chí loại bỏ khỏi chỉ mục.",
      "C": "Giúp website có nhiều trang hơn và tăng cơ hội xuất hiện trên kết quả tìm kiếm.",
      "D": "Giúp tiết kiệm thời gian và chi phí tạo nội dung."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387731,
    "question": "Ví dụ nào sau đây là một URL thân thiện với SEO?",
    "options": {
      "A": "www.example.com/p=123",
      "B": "www.example.com/category/product-name",
      "C": "www.example.com/index.php?id=5&lang=en",
      "D": "www.example.com/!@#$%^&*()_+"
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387732,
    "question": "Tỷ lệ thoát trang (Bounce rate) cao thường cho thấy điều gì về website của bạn?",
    "options": {
      "A": "Website có tốc độ tải trang nhanh.",
      "B": "Người dùng tìm thấy thông tin họ cần ngay lập tức.",
      "C": "Nội dung trang không phù hợp với truy vấn tìm kiếm hoặc trải nghiệm người dùng kém.",
      "D": "Website có nhiều liên kết nội bộ."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387733,
    "question": "Đâu là bước đầu tiên quan trọng nhất trong quy trình SEO?",
    "options": {
      "A": "Xây dựng liên kết ngược (backlinks).",
      "B": "Tối ưu hóa tốc độ tải trang.",
      "C": "Nghiên cứu từ khóa (Keyword Research).",
      "D": "Tạo sơ đồ trang web (sitemap)."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387734,
    "question": "Mục tiêu chính của SEO (Tối ưu hóa công cụ tìm kiếm) là gì?",
    "options": {
      "A": "Tăng lượng truy cập trực tiếp vào website.",
      "B": "Cải thiện trải nghiệm người dùng trên website.",
      "C": "Tăng thứ hạng website trên trang kết quả tìm kiếm (SERP) cho các từ khóa mục tiêu.",
      "D": "Giảm chi phí quảng cáo trực tuyến."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387735,
    "question": "Tại sao việc nghiên cứu từ khóa lại quan trọng trước khi tạo nội dung website?",
    "options": {
      "A": "Để website trông chuyên nghiệp hơn.",
      "B": "Để biết đối thủ cạnh tranh đang sử dụng từ khóa nào.",
      "C": "Để xác định những chủ đề mà người dùng quan tâm và tìm kiếm, từ đó tạo nội dung phù hợp.",
      "D": "Để tăng tốc độ tải trang của website."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387736,
    "question": "Trong các yếu tố SEO On-page sau, yếu tố nào có tác động LỚN NHẤT đến việc cải thiện thứ hạng trên công cụ tìm kiếm cho một bài blog?",
    "options": {
      "A": "Tối ưu hóa hình ảnh trong bài viết.",
      "B": "Sử dụng từ khóa chính trong tiêu đề trang (title tag).",
      "C": "Tăng tốc độ tải trang cho bài viết.",
      "D": "Chia sẻ bài viết lên mạng xã hội."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387737,
    "question": "Sự khác biệt chính giữa SEO On-page và SEO Off-page là gì?",
    "options": {
      "A": "SEO On-page tập trung vào tốc độ tải trang, SEO Off-page tập trung vào nội dung.",
      "B": "SEO On-page tập trung vào tối ưu hóa bên trong website, SEO Off-page tập trung vào các hoạt động bên ngoài website.",
      "C": "SEO On-page dễ thực hiện hơn SEO Off-page.",
      "D": "SEO On-page quan trọng hơn SEO Off-page."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387738,
    "question": "Bạn muốn cải thiện khả năng hiển thị website của mình trên kết quả tìm kiếm địa phương. Chiến thuật SEO nào sau đây sẽ phù hợp NHẤT?",
    "options": {
      "A": "Xây dựng liên kết chất lượng từ các website quốc tế.",
      "B": "Tối ưu hóa thẻ meta description cho tất cả các trang.",
      "C": "Tạo và tối ưu hóa hồ sơ Google My Business (Google Doanh nghiệp của tôi).",
      "D": "Tập trung vào việc viết blog với nội dung dài và chuyên sâu."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387739,
    "question": "SEO (Search Engine Optimization) được định nghĩa chính xác nhất là gì?",
    "options": {
      "A": "Một phương pháp xây dựng website đẹp mắt và thu hút người dùng.",
      "B": "Một tập hợp các kỹ thuật nhằm tối ưu hóa website để đạt thứ hạng cao hơn trên các công cụ tìm kiếm.",
      "C": "Một hình thức quảng cáo trực tuyến trả phí để tăng lượng truy cập website.",
      "D": "Một công cụ phân tích website để đo lường hiệu quả hoạt động."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387740,
    "question": "Tại sao SEO lại quan trọng đối với một doanh nghiệp trực tuyến?",
    "options": {
      "A": "SEO giúp website tải nhanh hơn, cải thiện trải nghiệm người dùng.",
      "B": "SEO đảm bảo website luôn hiển thị đẹp trên mọi thiết bị di động.",
      "C": "SEO giúp tăng độ nhận diện thương hiệu và thu hút khách hàng tiềm năng một cách bền vững thông qua tìm kiếm tự nhiên.",
      "D": "SEO giúp giảm chi phí quảng cáo và marketing trực tuyến."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387741,
    "question": "Yếu tố nào sau đây KHÔNG phải là yếu tố On-page SEO?",
    "options": {
      "A": "Tối ưu hóa thẻ tiêu đề (Title tag) và mô tả meta (Meta description).",
      "B": "Xây dựng liên kết chất lượng từ các website khác (Backlinks).",
      "C": "Tối ưu hóa nội dung bài viết và sử dụng từ khóa mục tiêu.",
      "D": "Tối ưu hóa cấu trúc URL thân thiện với SEO."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387742,
    "question": "Từ khóa 'đuôi dài' (Long-tail keyword) có đặc điểm gì nổi bật?",
    "options": {
      "A": "Có lượng tìm kiếm rất lớn và độ cạnh tranh cao.",
      "B": "Thường là các từ khóa ngắn gọn, chung chung và dễ nhớ.",
      "C": "Là các cụm từ khóa dài, cụ thể, hướng đến nhu cầu tìm kiếm chi tiết và có tỷ lệ chuyển đổi cao hơn.",
      "D": "Chỉ phù hợp với các website bán hàng trực tuyến."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387743,
    "question": "Mục đích chính của việc nghiên cứu từ khóa (Keyword Research) trong SEO là gì?",
    "options": {
      "A": "Để tạo ra danh sách các từ khóa mà đối thủ cạnh tranh đang sử dụng.",
      "B": "Để xác định các từ khóa mà người dùng mục tiêu sử dụng khi tìm kiếm thông tin liên quan đến sản phẩm/dịch vụ của bạn.",
      "C": "Để tăng số lượng từ khóa được nhồi nhét vào nội dung website.",
      "D": "Để chọn ra những từ khóa có lượng tìm kiếm cao nhất bất kể sự liên quan đến website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387744,
    "question": "Thẻ tiêu đề (Title tag) có vai trò quan trọng như thế nào trong SEO?",
    "options": {
      "A": "Chỉ hiển thị trên trang web cho người dùng xem.",
      "B": "Là yếu tố chính để Google xác định chủ đề chính của trang và hiển thị trên trang kết quả tìm kiếm.",
      "C": "Không ảnh hưởng đến thứ hạng tìm kiếm, chỉ quan trọng về mặt thẩm mỹ.",
      "D": "Chỉ cần chứa từ khóa chính, không cần hấp dẫn người dùng."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387745,
    "question": "Liên kết nội bộ (Internal link) là gì và tại sao chúng quan trọng cho SEO?",
    "options": {
      "A": "Liên kết từ website của bạn đến website của đối thủ cạnh tranh.",
      "B": "Liên kết từ website của bạn đến các trang mạng xã hội.",
      "C": "Liên kết từ trang này sang trang khác trong cùng một website, giúp điều hướng người dùng và công cụ tìm kiếm, phân phối sức mạnh liên kết trong website.",
      "D": "Liên kết từ website của bạn đến các website có liên quan nhưng không phải là đối thủ."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387746,
    "question": "Trong SEO, 'backlink chất lượng' được đánh giá dựa trên yếu tố nào là quan trọng nhất?",
    "options": {
      "A": "Số lượng backlink càng nhiều càng tốt, không quan trọng chất lượng.",
      "B": "Backlink từ các website có chỉ số DA (Domain Authority) và PA (Page Authority) cao, có liên quan đến chủ đề website của bạn.",
      "C": "Backlink từ bất kỳ website nào, miễn là có traffic.",
      "D": "Backlink từ các website mới thành lập để tránh bị phạt."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387747,
    "question": "Tốc độ tải trang (Page speed) ảnh hưởng đến SEO như thế nào?",
    "options": {
      "A": "Tốc độ tải trang nhanh không ảnh hưởng đến SEO.",
      "B": "Tốc độ tải trang chậm có thể làm tăng tỷ lệ thoát trang (Bounce rate) và giảm trải nghiệm người dùng, ảnh hưởng tiêu cực đến thứ hạng SEO.",
      "C": "Tốc độ tải trang chỉ quan trọng đối với website thương mại điện tử.",
      "D": "Tốc độ tải trang chỉ ảnh hưởng đến trải nghiệm người dùng trên thiết bị di động."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387748,
    "question": "Responsive design (thiết kế đáp ứng) quan trọng như thế nào đối với SEO?",
    "options": {
      "A": "Không quan trọng, vì SEO chỉ tập trung vào phiên bản desktop của website.",
      "B": "Rất quan trọng, vì Google ưu tiên các website thân thiện với thiết bị di động và trải nghiệm người dùng trên mọi thiết bị.",
      "C": "Chỉ quan trọng nếu website của bạn có lượng truy cập lớn từ thiết bị di động.",
      "D": "Responsive design chỉ ảnh hưởng đến giao diện người dùng, không liên quan đến SEO."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387749,
    "question": "Sitemap XML có vai trò gì trong SEO?",
    "options": {
      "A": "Hiển thị sơ đồ website cho người dùng xem.",
      "B": "Giúp công cụ tìm kiếm dễ dàng thu thập dữ liệu (crawl) và lập chỉ mục (index) tất cả các trang trên website của bạn.",
      "C": "Tăng tốc độ tải trang của website.",
      "D": "Cải thiện giao diện người dùng của website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387750,
    "question": "Thẻ Meta Description (Mô tả meta) được sử dụng để làm gì?",
    "options": {
      "A": "Hiển thị nội dung chính của trang web cho người dùng.",
      "B": "Cung cấp một đoạn mô tả ngắn gọn về nội dung trang, hiển thị dưới tiêu đề trang trên trang kết quả tìm kiếm, nhằm thu hút người dùng nhấp vào.",
      "C": "Chứa các từ khóa quan trọng để tăng thứ hạng tìm kiếm.",
      "D": "Thay thế cho thẻ tiêu đề (Title tag) khi thẻ tiêu đề quá dài."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387751,
    "question": "Ví dụ nào sau đây là hành vi 'Black Hat SEO' (SEO mũ đen)?",
    "options": {
      "A": "Xây dựng nội dung chất lượng và hữu ích cho người dùng.",
      "B": "Tối ưu hóa tốc độ tải trang và trải nghiệm người dùng.",
      "C": "Nhồi nhét từ khóa (Keyword stuffing) quá mức vào nội dung.",
      "D": "Xây dựng liên kết tự nhiên từ các website uy tín."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387752,
    "question": "CTR (Click-Through Rate) trong SEO là gì và tại sao nó quan trọng?",
    "options": {
      "A": "Chi phí trung bình cho mỗi nhấp chuột vào quảng cáo.",
      "B": "Tỷ lệ người dùng nhấp vào liên kết website của bạn trên trang kết quả tìm kiếm so với tổng số lần hiển thị, phản ánh mức độ hấp dẫn của tiêu đề và mô tả trang.",
      "C": "Số lượng từ khóa được sử dụng trong nội dung website.",
      "D": "Thời gian trung bình người dùng ở lại trên website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387753,
    "question": "Công cụ nào sau đây KHÔNG phải là công cụ hỗ trợ SEO?",
    "options": {
      "A": "Google Analytics.",
      "B": "Google Search Console.",
      "C": "SEMrush.",
      "D": "Microsoft Word."
    },
    "correctAnswer": "D",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387754,
    "question": "SEO là viết tắt của cụm từ nào dưới đây?",
    "options": {
      "A": "Search Engine Optimization",
      "B": "Social Engagement Optimization",
      "C": "Systematic Enterprise Operation",
      "D": "Sales and E-commerce Output"
    },
    "correctAnswer": "A",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387755,
    "question": "Yếu tố nào sau đây **không** phải là yếu tố xếp hạng chính của Google?",
    "options": {
      "A": "Chất lượng nội dung",
      "B": "Số lượng từ khóa trong bài viết",
      "C": "Trải nghiệm người dùng (UX)",
      "D": "Backlinks chất lượng"
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387756,
    "question": "Mục đích chính của việc nghiên cứu từ khóa trong SEO là gì?",
    "options": {
      "A": "Để tăng lượng truy cập trực tiếp vào website.",
      "B": "Để hiểu rõ nhu cầu tìm kiếm của người dùng và tối ưu nội dung phù hợp.",
      "C": "Để tăng thứ hạng trang web trên mạng xã hội.",
      "D": "Để tạo ra nhiều quảng cáo trả phí hơn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387757,
    "question": "Thẻ tiêu đề (Title tag) có vai trò quan trọng nhất trong SEO On-page ở khía cạnh nào?",
    "options": {
      "A": "Ảnh hưởng đến tốc độ tải trang.",
      "B": "Hiển thị thông tin trang web trên trang kết quả tìm kiếm (SERP) và thu hút người dùng click.",
      "C": "Tăng cường khả năng chia sẻ nội dung trên mạng xã hội.",
      "D": "Cải thiện cấu trúc URL của trang web."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387758,
    "question": "Trong SEO Off-page, backlinks chất lượng được đánh giá cao hơn backlinks số lượng. Điều gì sau đây thể hiện một backlink chất lượng?",
    "options": {
      "A": "Backlink từ nhiều trang web khác nhau, bất kể chất lượng.",
      "B": "Backlink từ các trang web có liên quan đến lĩnh vực của bạn, có độ uy tín cao (Domain Authority - DA).",
      "C": "Backlink từ các trang web mới thành lập.",
      "D": "Backlink từ các trang web có quá nhiều liên kết ra ngoài."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387759,
    "question": "Công cụ nào sau đây của Google giúp bạn theo dõi hiệu quả SEO của website?",
    "options": {
      "A": "Google Ads",
      "B": "Google Analytics và Google Search Console",
      "C": "Google Drive",
      "D": "Google Translate"
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387760,
    "question": "Robots.txt là file có vai trò gì trong SEO?",
    "options": {
      "A": "Tối ưu tốc độ tải trang.",
      "B": "Hướng dẫn các công cụ tìm kiếm thu thập dữ liệu (crawl) và lập chỉ mục (index) trang web.",
      "C": "Cải thiện trải nghiệm người dùng trên thiết bị di động.",
      "D": "Xây dựng liên kết nội bộ."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387761,
    "question": "Sitemap XML giúp ích cho SEO như thế nào?",
    "options": {
      "A": "Tăng tốc độ tải trang web.",
      "B": "Giúp công cụ tìm kiếm dễ dàng tìm và lập chỉ mục tất cả các trang trên website.",
      "C": "Cải thiện khả năng hiển thị trên mạng xã hội.",
      "D": "Tăng cường bảo mật cho website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387762,
    "question": "Điều gì xảy ra khi website của bạn không thân thiện với thiết bị di động (mobile-friendly) trong bối cảnh hiện nay?",
    "options": {
      "A": "Không ảnh hưởng đến thứ hạng tìm kiếm.",
      "B": "Có thể bị Google phạt và giảm thứ hạng, đặc biệt trên tìm kiếm di động.",
      "C": "Tăng chi phí quảng cáo Google Ads.",
      "D": "Giảm lượng truy cập từ máy tính để bàn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387763,
    "question": "Ví dụ nào sau đây là một URL thân thiện với SEO?",
    "options": {
      "A": "www.example.com/p=123",
      "B": "www.example.com/category/product-name-seo-friendly",
      "C": "www.example.com/index.php?id=456&lang=en",
      "D": "www.example.com/!@#$%^"
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387764,
    "question": "Tại sao tốc độ tải trang (page speed) lại quan trọng trong SEO?",
    "options": {
      "A": "Chỉ ảnh hưởng đến trải nghiệm người dùng, không liên quan SEO.",
      "B": "Là một yếu tố xếp hạng của Google và ảnh hưởng đến trải nghiệm người dùng.",
      "C": "Chỉ quan trọng đối với website thương mại điện tử.",
      "D": "Chỉ quan trọng đối với website tin tức."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387765,
    "question": "Giả sử bạn viết một bài blog về 'Cách làm SEO cho người mới bắt đầu'. Tiêu đề nào sau đây được tối ưu SEO tốt nhất?",
    "options": {
      "A": "SEO cho Newbies",
      "B": "Hướng Dẫn SEO Chi Tiết Cho Người Mới Bắt Đầu 2023",
      "C": "Tìm Hiểu Về SEO",
      "D": "SEO: Tất Tần Tật"
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387766,
    "question": "So sánh giữa 'nofollow' và 'dofollow' link, điểm khác biệt chính là gì?",
    "options": {
      "A": "Nofollow link giúp tăng thứ hạng nhanh hơn dofollow link.",
      "B": "Dofollow link truyền 'page authority' sang website được liên kết, còn nofollow thì không.",
      "C": "Nofollow link chỉ dùng cho liên kết nội bộ, dofollow link cho liên kết bên ngoài.",
      "D": "Cả hai loại link đều không ảnh hưởng đến SEO."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387767,
    "question": "Nguyên nhân chính dẫn đến việc website bị 'rớt hạng' đột ngột trên Google có thể là gì?",
    "options": {
      "A": "Website có quá nhiều trang.",
      "B": "Website vi phạm chính sách của Google (ví dụ: nội dung trùng lặp, spam backlinks) hoặc bị thuật toán Google cập nhật.",
      "C": "Website có quá ít liên kết nội bộ.",
      "D": "Website không có sitemap XML."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387768,
    "question": "Ngoại lệ nào sau đây **không** cần tối ưu SEO?",
    "options": {
      "A": "Trang chủ của một website bán hàng trực tuyến.",
      "B": "Trang giới thiệu sản phẩm/dịch vụ.",
      "C": "Trang 'Cảm ơn' sau khi người dùng đăng ký hoặc mua hàng.",
      "D": "Bài viết blog chia sẻ kiến thức chuyên ngành."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387769,
    "question": "SEO (Search Engine Optimization) là gì?",
    "options": {
      "A": "Phương pháp thiết kế website đẹp mắt và thu hút người dùng.",
      "B": "Quy trình tối ưu hóa website để tăng thứ hạng trên các công cụ tìm kiếm.",
      "C": "Chiến lược quảng cáo trả phí để tiếp cận khách hàng tiềm năng.",
      "D": "Hoạt động quản lý và duy trì website hoạt động ổn định."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387770,
    "question": "Tại sao nghiên cứu từ khóa (keyword research) lại quan trọng trong SEO?",
    "options": {
      "A": "Để tăng số lượng bài viết trên website.",
      "B": "Để biết khách hàng tiềm năng đang tìm kiếm thông tin gì và sử dụng từ khóa nào.",
      "C": "Để thiết kế giao diện website thân thiện hơn với người dùng.",
      "D": "Để xây dựng liên kết chất lượng từ các website khác."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387771,
    "question": "Thẻ tiêu đề (title tag) trên trang web có vai trò chính là gì trong SEO?",
    "options": {
      "A": "Hiển thị nội dung chính của bài viết trên trang.",
      "B": "Mô tả ngắn gọn và hấp dẫn nội dung trang để hiển thị trên trang kết quả tìm kiếm.",
      "C": "Chứa thông tin liên hệ của doanh nghiệp.",
      "D": "Tạo hiệu ứng đồ họa đặc biệt cho trang web."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387772,
    "question": "Liên kết ngoài (backlink) chất lượng từ các website khác mang lại lợi ích gì cho SEO?",
    "options": {
      "A": "Tăng tốc độ tải trang web.",
      "B": "Cải thiện độ uy tín của website và tăng thứ hạng trên công cụ tìm kiếm.",
      "C": "Giảm chi phí quảng cáo trực tuyến.",
      "D": "Tăng tương tác trên mạng xã hội."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387773,
    "question": "Tốc độ tải trang web chậm ảnh hưởng tiêu cực đến SEO như thế nào?",
    "options": {
      "A": "Không ảnh hưởng đến SEO, chỉ ảnh hưởng đến trải nghiệm người dùng.",
      "B": "Gây khó chịu cho người dùng, tăng tỷ lệ thoát trang và bị công cụ tìm kiếm đánh giá thấp.",
      "C": "Chỉ ảnh hưởng đến quảng cáo trả phí, không liên quan đến SEO tự nhiên.",
      "D": "Làm tăng thời gian người dùng ở lại trang web."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387774,
    "question": "Hoạt động 'crawling' của công cụ tìm kiếm (ví dụ Googlebot) là gì?",
    "options": {
      "A": "Quá trình người dùng tìm kiếm thông tin trên internet.",
      "B": "Quá trình công cụ tìm kiếm tự động thu thập dữ liệu và thông tin từ các trang web trên internet.",
      "C": "Quá trình tối ưu hóa nội dung website để thân thiện với công cụ tìm kiếm.",
      "D": "Quá trình xây dựng liên kết từ các website khác về website của mình."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387775,
    "question": "Khi người dùng tìm kiếm từ khóa 'mua điện thoại Samsung Galaxy S23 Ultra chính hãng Hà Nội', ý định tìm kiếm chính của họ là gì?",
    "options": {
      "A": "Tìm kiếm thông tin so sánh giữa các dòng điện thoại Samsung.",
      "B": "Muốn mua điện thoại Samsung Galaxy S23 Ultra chính hãng tại Hà Nội.",
      "C": "Tìm kiếm đánh giá và review về điện thoại Samsung Galaxy S23 Ultra.",
      "D": "Tìm kiếm địa chỉ cửa hàng Samsung chính hãng tại Hà Nội."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387776,
    "question": "Chỉ số 'thứ hạng từ khóa' (keyword ranking) trong SEO cho biết điều gì?",
    "options": {
      "A": "Số lượng khách hàng truy cập vào website từ kết quả tìm kiếm.",
      "B": "Vị trí website hiển thị trên trang kết quả tìm kiếm (SERPs) cho một từ khóa cụ thể.",
      "C": "Mức độ cạnh tranh của từ khóa trên thị trường.",
      "D": "Chất lượng nội dung của website so với đối thủ cạnh tranh."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387777,
    "question": "Sự khác biệt chính giữa SEO 'White hat' và SEO 'Black hat' là gì?",
    "options": {
      "A": "SEO White hat tốn kém hơn, SEO Black hat rẻ hơn.",
      "B": "SEO White hat tuân thủ nguyên tắc của công cụ tìm kiếm, SEO Black hat sử dụng các thủ thuật gian lận.",
      "C": "SEO White hat tập trung vào từ khóa dài, SEO Black hat tập trung vào từ khóa ngắn.",
      "D": "SEO White hat chỉ dành cho website lớn, SEO Black hat dành cho website nhỏ."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387778,
    "question": "Mục đích chính của việc sử dụng thẻ meta description trong SEO là gì?",
    "options": {
      "A": "Tối ưu hóa mật độ từ khóa chính trong nội dung trang.",
      "B": "Cung cấp mô tả ngắn gọn, hấp dẫn về nội dung trang để thu hút người dùng nhấp vào kết quả tìm kiếm.",
      "C": "Cải thiện tốc độ tải trang web.",
      "D": "Xác định ngôn ngữ chính của trang web."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387779,
    "question": "Tại sao việc sử dụng các thẻ tiêu đề (H1, H2, H3...) lại quan trọng trong tối ưu hóa nội dung SEO?",
    "options": {
      "A": "Chỉ để trang trí và làm đẹp bố cục bài viết.",
      "B": "Giúp cấu trúc nội dung rõ ràng, mạch lạc và giúp công cụ tìm kiếm hiểu rõ hơn về chủ đề của trang.",
      "C": "Để tăng kích thước chữ và làm nổi bật các phần quan trọng trong bài viết.",
      "D": "Để chèn nhiều từ khóa hơn vào bài viết một cách tự nhiên."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387780,
    "question": "Vì sao website thân thiện với thiết bị di động (mobile-friendly) lại trở nên quan trọng trong SEO hiện nay?",
    "options": {
      "A": "Vì thiết kế mobile-friendly giúp website trông đẹp mắt hơn trên máy tính để bàn.",
      "B": "Vì số lượng người dùng truy cập internet bằng thiết bị di động ngày càng tăng và Google ưu tiên website mobile-friendly.",
      "C": "Vì website mobile-friendly thường có tốc độ tải trang nhanh hơn.",
      "D": "Vì website mobile-friendly dễ dàng chia sẻ lên mạng xã hội hơn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387781,
    "question": "Ví dụ nào sau đây là hành vi 'nhồi nhét từ khóa' (keyword stuffing) và tại sao nên tránh?",
    "options": {
      "A": "Sử dụng từ khóa chính một cách tự nhiên trong tiêu đề và các đoạn văn.",
      "B": "Lặp đi lặp lại từ khóa mục tiêu một cách quá mức và không tự nhiên trong nội dung trang.",
      "C": "Sử dụng các từ khóa liên quan và từ đồng nghĩa để làm phong phú nội dung.",
      "D": "Sử dụng từ khóa trong thẻ meta description và thẻ alt của hình ảnh."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387782,
    "question": "Cấu trúc website (website structure) tốt cho SEO nên được xây dựng như thế nào?",
    "options": {
      "A": "Phức tạp, nhiều tầng lớp và liên kết chằng chịt để chứa được nhiều nội dung.",
      "B": "Đơn giản, dễ điều hướng, phân chia theo chủ đề rõ ràng và có hệ thống liên kết nội bộ hợp lý.",
      "C": "Sử dụng nhiều hiệu ứng động và hình ảnh bắt mắt để thu hút người dùng.",
      "D": "Không cần quan tâm đến cấu trúc, chỉ cần tập trung vào nội dung chất lượng."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387783,
    "question": "Đối với một doanh nghiệp địa phương, yếu tố nào sau đây quan trọng nhất trong SEO?",
    "options": {
      "A": "Xây dựng liên kết từ các website có độ uy tín cao trên toàn thế giới.",
      "B": "Tối ưu hóa trang Google My Business và đảm bảo thông tin NAP (Name, Address, Phone) nhất quán trên các nền tảng.",
      "C": "Tập trung vào các từ khóa có độ cạnh tranh cao trên toàn quốc.",
      "D": "Sử dụng quảng cáo trả phí trên truyền hình và báo chí."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387784,
    "question": "Mục tiêu chính của SEO (Tối ưu hóa công cụ tìm kiếm) là gì?",
    "options": {
      "A": "Tăng lượng truy cập trực tiếp vào website.",
      "B": "Nâng cao thứ hạng website trên các trang kết quả tìm kiếm (SERPs) cho các từ khóa mục tiêu.",
      "C": "Tăng độ nhận diện thương hiệu trên mạng xã hội.",
      "D": "Giảm chi phí quảng cáo trực tuyến."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387785,
    "question": "Tại sao việc tối ưu hóa trải nghiệm người dùng (UX) lại quan trọng đối với SEO?",
    "options": {
      "A": "Vì UX tốt giúp website có giao diện đẹp mắt hơn.",
      "B": "Vì Google ưu tiên các website có UX tốt hơn trong thuật toán xếp hạng.",
      "C": "Vì UX tốt giúp tăng tốc độ tải trang.",
      "D": "Vì UX tốt giúp tăng tỷ lệ chuyển đổi và giảm tỷ lệ thoát trang, từ đó gửi tín hiệu tích cực đến công cụ tìm kiếm."
    },
    "correctAnswer": "D",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387786,
    "question": "Bạn vừa viết một bài blog mới về 'Cách làm SEO cho người mới bắt đầu'. Đâu là bước **quan trọng nhất** bạn cần thực hiện **ngay lập tức** để tối ưu SEO cho bài viết này?",
    "options": {
      "A": "Chia sẻ bài viết lên tất cả các mạng xã hội.",
      "B": "Xây dựng thật nhiều backlink trỏ về bài viết.",
      "C": "Nghiên cứu từ khóa và tối ưu hóa tiêu đề, mô tả, và nội dung bài viết xoay quanh từ khóa mục tiêu.",
      "D": "Gửi email thông báo bài viết mới cho tất cả người đăng ký."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387787,
    "question": "Trong các yếu tố sau, yếu tố nào được xem là **SEO On-page**?",
    "options": {
      "A": "Xây dựng liên kết từ các website khác về website của bạn (backlink).",
      "B": "Tối ưu hóa tốc độ tải trang của website.",
      "C": "Quảng bá website trên các diễn đàn và cộng đồng trực tuyến.",
      "D": "Chạy quảng cáo trả phí trên Google Ads."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387788,
    "question": "Điều gì **KHÔNG PHẢI** là hậu quả tiêu cực của việc 'nhồi nhét từ khóa' (keyword stuffing) trong nội dung website?",
    "options": {
      "A": "Làm giảm trải nghiệm người dùng vì nội dung trở nên khó đọc và kém tự nhiên.",
      "B": "Bị công cụ tìm kiếm phạt và hạ thứ hạng website.",
      "C": "Tăng lượng truy cập tự nhiên từ công cụ tìm kiếm.",
      "D": "Mất uy tín trong mắt người dùng và khách hàng tiềm năng."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387789,
    "question": "SEO (Search Engine Optimization) được định nghĩa chính xác nhất là gì?",
    "options": {
      "A": "Quá trình trả tiền cho các công cụ tìm kiếm để website hiển thị ở vị trí đầu.",
      "B": "Tập hợp các kỹ thuật tối ưu hóa website để nâng cao thứ hạng trên các trang kết quả tìm kiếm tự nhiên.",
      "C": "Phương pháp thiết kế website đẹp mắt và thu hút người dùng.",
      "D": "Chiến lược marketing trên mạng xã hội để tăng lượng truy cập website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387790,
    "question": "Mục tiêu chính của SEO là gì?",
    "options": {
      "A": "Tăng cường nhận diện thương hiệu trên mạng xã hội.",
      "B": "Thu hút lượng truy cập **chất lượng** và **miễn phí** từ các công cụ tìm kiếm đến website.",
      "C": "Giảm chi phí quảng cáo trực tuyến.",
      "D": "Tăng số lượng người theo dõi trên các kênh mạng xã hội."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387791,
    "question": "Trong SEO, \"\"từ khóa\"\" (keyword) đóng vai trò như thế nào?",
    "options": {
      "A": "Từ khóa là các từ hoặc cụm từ không quan trọng, chỉ dùng để trang trí nội dung.",
      "B": "Từ khóa là các từ hoặc cụm từ mà người dùng sử dụng để tìm kiếm thông tin trên các công cụ tìm kiếm, và SEO tập trung tối ưu hóa website cho các từ khóa này.",
      "C": "Từ khóa chỉ quan trọng trong quảng cáo trả phí, không liên quan đến SEO.",
      "D": "Từ khóa là tên thương hiệu của doanh nghiệp."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387792,
    "question": "Yếu tố nào sau đây là **quan trọng nhất** trong SEO On-page?",
    "options": {
      "A": "Số lượng backlink trỏ về website.",
      "B": "Tốc độ tải trang web.",
      "C": "Nội dung chất lượng, độc đáo và phù hợp với từ khóa mục tiêu.",
      "D": "Số lượng bài viết được đăng tải trên website."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387793,
    "question": "Hoạt động nào sau đây thuộc về SEO Off-page?",
    "options": {
      "A": "Tối ưu hóa thẻ tiêu đề (title tag) và mô tả meta (meta description).",
      "B": "Xây dựng liên kết (backlink) từ các website khác.",
      "C": "Tối ưu hóa tốc độ tải trang.",
      "D": "Nghiên cứu từ khóa."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387794,
    "question": "Vì sao tốc độ tải trang web lại quan trọng đối với SEO?",
    "options": {
      "A": "Vì tốc độ tải trang nhanh giúp website trông chuyên nghiệp hơn.",
      "B": "Vì tốc độ tải trang là yếu tố duy nhất quyết định thứ hạng SEO.",
      "C": "Vì người dùng có xu hướng rời bỏ website tải chậm và Google đánh giá cao trải nghiệm người dùng, tốc độ tải trang chậm có thể ảnh hưởng tiêu cực đến thứ hạng.",
      "D": "Vì tốc độ tải trang nhanh giúp tiết kiệm băng thông cho người dùng."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387795,
    "question": "Liên kết nội bộ (internal link) là gì và có lợi ích gì cho SEO?",
    "options": {
      "A": "Liên kết nội bộ là liên kết từ website của bạn đến website khác, giúp tăng backlink.",
      "B": "Liên kết nội bộ là liên kết giữa các trang trong cùng một website, giúp điều hướng người dùng và bot công cụ tìm kiếm, phân phối sức mạnh SEO.",
      "C": "Liên kết nội bộ không có vai trò gì trong SEO.",
      "D": "Liên kết nội bộ chỉ dùng để trang trí website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387796,
    "question": "Thẻ tiêu đề (title tag) hiển thị ở đâu trên trang kết quả tìm kiếm?",
    "options": {
      "A": "Hiển thị ở cuối trang web.",
      "B": "Hiển thị trong nội dung chính của trang web.",
      "C": "Hiển thị dưới dạng tiêu đề màu xanh lam, có thể nhấp vào, trên trang kết quả tìm kiếm.",
      "D": "Không hiển thị trên trang kết quả tìm kiếm."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387797,
    "question": "Mô tả meta (meta description) có vai trò gì trong SEO?",
    "options": {
      "A": "Mô tả meta giúp tăng tốc độ tải trang.",
      "B": "Mô tả meta trực tiếp ảnh hưởng đến thứ hạng SEO.",
      "C": "Mô tả meta là đoạn văn ngắn tóm tắt nội dung trang web, hiển thị dưới thẻ tiêu đề trên trang kết quả tìm kiếm, giúp thuyết phục người dùng nhấp vào.",
      "D": "Mô tả meta không có vai trò gì trong SEO."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387798,
    "question": "Backlink chất lượng là backlink như thế nào?",
    "options": {
      "A": "Backlink từ bất kỳ website nào, số lượng càng nhiều càng tốt.",
      "B": "Backlink từ các website có liên quan đến lĩnh vực của bạn, có độ uy tín cao (DA, PA cao).",
      "C": "Backlink từ các website có lượng truy cập thấp.",
      "D": "Backlink từ các website không liên quan đến lĩnh vực của bạn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387799,
    "question": "Công cụ nào sau đây **KHÔNG** phải là công cụ hỗ trợ SEO phổ biến?",
    "options": {
      "A": "Google Search Console.",
      "B": "Google Analytics.",
      "C": "Facebook Ads Manager.",
      "D": "Ahrefs."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387800,
    "question": "Lỗi \"\"404 Not Found\"\" trên website ảnh hưởng đến SEO như thế nào?",
    "options": {
      "A": "Không ảnh hưởng gì đến SEO.",
      "B": "Ảnh hưởng tích cực đến SEO vì báo hiệu website đang được cập nhật.",
      "C": "Ảnh hưởng tiêu cực đến trải nghiệm người dùng và có thể ảnh hưởng đến thứ hạng SEO.",
      "D": "Chỉ ảnh hưởng đến SEO nếu có quá nhiều lỗi 404."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387801,
    "question": "Trong SEO, \"\"anchor text\"\" là gì?",
    "options": {
      "A": "Văn bản hiển thị trên website, không liên quan đến liên kết.",
      "B": "Văn bản có màu xanh lam trên trang kết quả tìm kiếm.",
      "C": "Văn bản có thể nhấp vào được sử dụng để tạo liên kết, cho cả liên kết nội bộ và backlink.",
      "D": "Mã HTML để tạo liên kết."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387802,
    "question": "So sánh giữa SEO và quảng cáo trả phí (ví dụ: Google Ads), điểm khác biệt **chính** là gì?",
    "options": {
      "A": "SEO tốn kém hơn quảng cáo trả phí.",
      "B": "SEO mang lại kết quả nhanh chóng hơn quảng cáo trả phí.",
      "C": "SEO tập trung vào kết quả tìm kiếm tự nhiên (organic), trong khi quảng cáo trả phí hiển thị ở các vị trí được trả tiền (paid).",
      "D": "Quảng cáo trả phí không hiệu quả bằng SEO."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387803,
    "question": "Bạn muốn tối ưu hóa SEO cho một trang sản phẩm cụ thể. Bước đầu tiên bạn nên làm là gì?",
    "options": {
      "A": "Xây dựng càng nhiều backlink càng tốt cho trang sản phẩm đó.",
      "B": "Chia sẻ trang sản phẩm lên mạng xã hội.",
      "C": "Nghiên cứu từ khóa để xác định các từ khóa mục tiêu phù hợp nhất với sản phẩm và trang sản phẩm.",
      "D": "Tối ưu hóa tốc độ tải trang trước khi nghiên cứu từ khóa."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387804,
    "question": "SEO (Tối ưu hóa công cụ tìm kiếm) là gì?",
    "options": {
      "A": "Một phương pháp quảng cáo trả phí để tăng lưu lượng truy cập trang web.",
      "B": "Một tập hợp các kỹ thuật nhằm cải thiện thứ hạng của website trên các công cụ tìm kiếm.",
      "C": "Một loại virus máy tính ảnh hưởng đến hiệu suất website.",
      "D": "Một nền tảng mạng xã hội để chia sẻ nội dung."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387805,
    "question": "Yếu tố nào sau đây **không** phải là một yếu tố SEO On-page?",
    "options": {
      "A": "Tối ưu hóa thẻ tiêu đề (Title tag).",
      "B": "Xây dựng liên kết ngược (Backlink).",
      "C": "Tối ưu hóa nội dung bài viết.",
      "D": "Tối ưu hóa URL."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387806,
    "question": "Tại sao tốc độ tải trang (page speed) lại quan trọng đối với SEO?",
    "options": {
      "A": "Vì nó ảnh hưởng trực tiếp đến chi phí hosting của website.",
      "B": "Vì nó giúp website hiển thị đẹp hơn trên các thiết bị di động.",
      "C": "Vì nó là một yếu tố xếp hạng quan trọng, ảnh hưởng đến trải nghiệm người dùng và thứ hạng tìm kiếm.",
      "D": "Vì nó giúp website tương thích với nhiều trình duyệt web hơn."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387807,
    "question": "Trong SEO, 'từ khóa đuôi dài' (long-tail keyword) thường có đặc điểm gì?",
    "options": {
      "A": "Có lượng tìm kiếm cao và độ cạnh tranh cao.",
      "B": "Có lượng tìm kiếm thấp và độ cạnh tranh thấp, nhưng tỷ lệ chuyển đổi cao.",
      "C": "Luôn là từ khóa chính của một website.",
      "D": "Chỉ được sử dụng trong quảng cáo trả phí."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387808,
    "question": "Mục đích chính của việc xây dựng liên kết nội bộ (internal linking) trong SEO là gì?",
    "options": {
      "A": "Tăng số lượng trang trên website để cải thiện thứ hạng.",
      "B": "Giúp người dùng dễ dàng điều hướng website và phân bổ sức mạnh liên kết (link juice) giữa các trang.",
      "C": "Thu hút liên kết từ các website khác.",
      "D": "Tránh bị trùng lặp nội dung trên website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387809,
    "question": "Công cụ nào sau đây **không** phải là công cụ hỗ trợ nghiên cứu từ khóa?",
    "options": {
      "A": "Google Keyword Planner.",
      "B": "SEMrush.",
      "C": "Google Analytics.",
      "D": "Ahrefs."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387810,
    "question": "Thẻ meta description có vai trò gì trong SEO?",
    "options": {
      "A": "Xác định ngôn ngữ chính của trang web.",
      "B": "Cung cấp mô tả ngắn gọn về nội dung trang web hiển thị trên trang kết quả tìm kiếm.",
      "C": "Chứa các từ khóa chính để tăng thứ hạng.",
      "D": "Quyết định giao diện hiển thị của website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387811,
    "question": "Điều gì sẽ xảy ra nếu một website sử dụng quá nhiều từ khóa (keyword stuffing) trong nội dung?",
    "options": {
      "A": "Website sẽ nhanh chóng đạt thứ hạng cao trên công cụ tìm kiếm.",
      "B": "Website có thể bị phạt bởi các công cụ tìm kiếm và thứ hạng giảm.",
      "C": "Website sẽ hiển thị quảng cáo nhiều hơn.",
      "D": "Không có ảnh hưởng gì đến SEO, chỉ làm nội dung khó đọc hơn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387812,
    "question": "Robot.txt là file có chức năng gì trong SEO?",
    "options": {
      "A": "Tối ưu hóa tốc độ tải trang.",
      "B": "Hướng dẫn bot công cụ tìm kiếm cách thu thập dữ liệu (crawl) và lập chỉ mục (index) website.",
      "C": "Cải thiện bảo mật website.",
      "D": "Tạo sơ đồ website (sitemap)."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387813,
    "question": "Ví dụ nào sau đây là một URL thân thiện với SEO?",
    "options": {
      "A": "www.example.com/p=123",
      "B": "www.example.com/category/product-detail",
      "C": "www.example.com/index.php?id=456&lang=en",
      "D": "www.example.com/!@#$%^&*()_+"
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387814,
    "question": "Liên kết 'nofollow' được sử dụng khi nào?",
    "options": {
      "A": "Khi muốn chuyển sức mạnh liên kết (link juice) sang trang web khác.",
      "B": "Khi không muốn liên kết đó ảnh hưởng đến thứ hạng SEO của trang web.",
      "C": "Khi liên kết đến trang web có độ tin cậy cao.",
      "D": "Khi muốn tăng tốc độ tải trang."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387815,
    "question": "Sitemap XML có vai trò gì đối với SEO?",
    "options": {
      "A": "Tăng tốc độ tải trang web.",
      "B": "Giúp công cụ tìm kiếm dễ dàng tìm và lập chỉ mục tất cả các trang trên website.",
      "C": "Cải thiện trải nghiệm người dùng trên website.",
      "D": "Bảo vệ website khỏi tấn công mạng."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387816,
    "question": "Đâu là yếu tố quan trọng nhất để tạo ra nội dung chất lượng cho SEO?",
    "options": {
      "A": "Sử dụng nhiều từ khóa nhất có thể.",
      "B": "Sao chép nội dung từ các website khác.",
      "C": "Cung cấp thông tin hữu ích, độc đáo và đáp ứng nhu cầu tìm kiếm của người dùng.",
      "D": "Viết nội dung thật dài, không cần quan tâm đến chất lượng."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387817,
    "question": "Hình phạt 'Google Penguin' tập trung vào việc xử lý loại hành vi SEO nào?",
    "options": {
      "A": "Nhồi nhét từ khóa (keyword stuffing).",
      "B": "Xây dựng liên kết spam (spam backlinks).",
      "C": "Trùng lặp nội dung (duplicate content).",
      "D": "Tốc độ tải trang chậm (slow page speed)."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387818,
    "question": "Trong bối cảnh SEO hiện tại, yếu tố nào ngày càng trở nên quan trọng hơn?",
    "options": {
      "A": "Số lượng từ khóa trong nội dung.",
      "B": "Số lượng liên kết ngược (backlink).",
      "C": "Trải nghiệm người dùng (User Experience - UX) và sự phù hợp với ý định tìm kiếm (Search Intent).",
      "D": "Mật độ từ khóa (keyword density)."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387819,
    "question": "SEO (Search Engine Optimization) là gì?",
    "options": {
      "A": "Một phương pháp quảng cáo trả phí trên Google.",
      "B": "Quy trình tối ưu hóa trang web để tăng khả năng hiển thị trên các công cụ tìm kiếm.",
      "C": "Một loại virus máy tính tấn công các trang web.",
      "D": "Phần mềm quản lý nội dung trang web."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387820,
    "question": "Trong SEO, thuật ngữ 'từ khóa' (keyword) đề cập đến điều gì?",
    "options": {
      "A": "Tên miền của trang web.",
      "B": "Những từ hoặc cụm từ mà người dùng nhập vào công cụ tìm kiếm.",
      "C": "Địa chỉ IP của máy chủ web.",
      "D": "Mã nguồn HTML của trang web."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387821,
    "question": "Yếu tố nào sau đây **không** phải là một yếu tố SEO On-page?",
    "options": {
      "A": "Tối ưu hóa thẻ tiêu đề (title tag).",
      "B": "Xây dựng liên kết ngược (backlink) từ các trang web khác.",
      "C": "Tối ưu hóa nội dung bài viết (content optimization).",
      "D": "Tối ưu hóa thẻ mô tả meta (meta description)."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387822,
    "question": "Mục đích chính của việc nghiên cứu từ khóa trong SEO là gì?",
    "options": {
      "A": "Để sao chép từ khóa của đối thủ cạnh tranh.",
      "B": "Để tìm ra những từ khóa có lượng tìm kiếm cao và phù hợp với nội dung trang web.",
      "C": "Để nhồi nhét từ khóa vào nội dung trang web một cách vô tội vạ.",
      "D": "Để tạo ra danh sách từ khóa dài nhất có thể."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387823,
    "question": "Công cụ tìm kiếm sử dụng yếu tố nào để đánh giá mức độ uy tín của một trang web thông qua liên kết?",
    "options": {
      "A": "Số lượng từ khóa trong nội dung.",
      "B": "Số lượng liên kết ngược (backlink) chất lượng từ các trang web uy tín khác.",
      "C": "Tốc độ tải trang web.",
      "D": "Thiết kế giao diện người dùng (UI/UX) của trang web."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387824,
    "question": "Trong SEO, 'anchor text' là gì?",
    "options": {
      "A": "Văn bản thay thế cho hình ảnh khi hình ảnh không tải được.",
      "B": "Đoạn văn bản hiển thị khi người dùng di chuột qua liên kết.",
      "C": "Đoạn văn bản có thể nhấp chuột được dùng để liên kết đến một trang web khác.",
      "D": "Tiêu đề của bài viết trên blog."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387825,
    "question": "Vì sao tốc độ tải trang web lại quan trọng đối với SEO?",
    "options": {
      "A": "Vì tốc độ tải trang nhanh giúp tiết kiệm chi phí hosting.",
      "B": "Vì tốc độ tải trang nhanh cải thiện trải nghiệm người dùng và được công cụ tìm kiếm ưu tiên.",
      "C": "Vì tốc độ tải trang nhanh giúp trang web hiển thị đẹp hơn.",
      "D": "Vì tốc độ tải trang nhanh giúp trang web bảo mật hơn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387826,
    "question": "Thẻ tiêu đề (title tag) có vai trò gì trong SEO?",
    "options": {
      "A": "Hiển thị nội dung chính của trang web trên trang chủ.",
      "B": "Mô tả ngắn gọn nội dung trang web trên trang kết quả tìm kiếm (SERP).",
      "C": "Chứa toàn bộ từ khóa mục tiêu của trang web.",
      "D": "Tạo hiệu ứng đồ họa cho trang web."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387827,
    "question": "Sự khác biệt chính giữa SEO 'mũ trắng' (white hat SEO) và SEO 'mũ đen' (black hat SEO) là gì?",
    "options": {
      "A": "SEO mũ trắng tập trung vào tốc độ, SEO mũ đen tập trung vào chất lượng.",
      "B": "SEO mũ trắng tuân thủ nguyên tắc của công cụ tìm kiếm, SEO mũ đen sử dụng các thủ thuật gian lận.",
      "C": "SEO mũ trắng chỉ dành cho trang web lớn, SEO mũ đen dành cho trang web nhỏ.",
      "D": "SEO mũ trắng sử dụng từ khóa chính, SEO mũ đen sử dụng từ khóa phụ."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387828,
    "question": "Ví dụ nào sau đây là một hành động **không** nên làm trong SEO?",
    "options": {
      "A": "Tạo nội dung chất lượng và hữu ích cho người dùng.",
      "B": "Xây dựng liên kết tự nhiên từ các trang web liên quan.",
      "C": "Nhồi nhét từ khóa (keyword stuffing) vào nội dung.",
      "D": "Tối ưu hóa trải nghiệm người dùng trên thiết bị di động."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387829,
    "question": "Mục tiêu cuối cùng của SEO là gì?",
    "options": {
      "A": "Tăng số lượng trang web được lập chỉ mục trên Google.",
      "B": "Tăng lưu lượng truy cập chất lượng đến trang web từ kết quả tìm kiếm tự nhiên.",
      "C": "Đánh bại đối thủ cạnh tranh bằng mọi giá.",
      "D": "Xây dựng thương hiệu cá nhân thông qua trang web."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387830,
    "question": "Công cụ nào phổ biến nhất được sử dụng để theo dõi thứ hạng từ khóa và hiệu quả SEO?",
    "options": {
      "A": "Microsoft Word.",
      "B": "Google Search Console và Google Analytics.",
      "C": "Facebook Ads Manager.",
      "D": "Adobe Photoshop."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387831,
    "question": "Trong bối cảnh SEO, 'Mobile-first indexing' nghĩa là gì?",
    "options": {
      "A": "Công cụ tìm kiếm ưu tiên lập chỉ mục các trang web được thiết kế cho máy tính để bàn trước.",
      "B": "Công cụ tìm kiếm ưu tiên lập chỉ mục phiên bản di động của trang web để xếp hạng.",
      "C": "Các trang web phải có ứng dụng di động để được xếp hạng cao.",
      "D": "Người dùng chỉ có thể tìm kiếm trang web trên thiết bị di động."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387832,
    "question": "Để cải thiện SEO Local (SEO địa phương), bạn nên tập trung vào yếu tố nào sau đây?",
    "options": {
      "A": "Xây dựng liên kết quốc tế.",
      "B": "Tối ưu hóa Google My Business và thông tin NAP (Name, Address, Phone Number) nhất quán.",
      "C": "Tăng tốc độ tải trang web trên toàn cầu.",
      "D": "Sử dụng ngôn ngữ khác ngoài ngôn ngữ địa phương."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387833,
    "question": "Điều gì xảy ra khi một trang web bị Google phạt (penalty) do vi phạm nguyên tắc SEO?",
    "options": {
      "A": "Trang web sẽ được xếp hạng cao hơn để bù đắp.",
      "B": "Thứ hạng trang web có thể bị giảm đáng kể hoặc thậm chí bị loại khỏi kết quả tìm kiếm.",
      "C": "Trang web sẽ hiển thị quảng cáo nhiều hơn.",
      "D": "Trang web sẽ được bảo vệ khỏi tấn công mạng."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387834,
    "question": "Đâu là định nghĩa chính xác nhất về SEO (Tối ưu hóa công cụ tìm kiếm)?",
    "options": {
      "A": "Một hình thức quảng cáo trả phí để website xuất hiện ở vị trí đầu trên trang kết quả tìm kiếm.",
      "B": "Quá trình thiết kế lại giao diện website để thu hút người dùng và tăng thời gian truy cập.",
      "C": "Tập hợp các kỹ thuật và phương pháp nhằm tối ưu hóa website để đạt thứ hạng cao trên các công cụ tìm kiếm như Google, Bing.",
      "D": "Hoạt động xây dựng liên kết từ các website khác về website của bạn để tăng độ uy tín."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387835,
    "question": "Trong các yếu tố sau, yếu tố nào KHÔNG phải là yếu tố SEO On-page?",
    "options": {
      "A": "Tối ưu thẻ tiêu đề (Title tag) và thẻ mô tả (Meta description).",
      "B": "Xây dựng liên kết ngược (Backlink) từ các website khác.",
      "C": "Tối ưu cấu trúc URL thân thiện với người dùng và công cụ tìm kiếm.",
      "D": "Tối ưu tốc độ tải trang và trải nghiệm người dùng trên website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387836,
    "question": "Bạn nhận thấy website của mình có thứ hạng thấp cho một từ khóa mục tiêu quan trọng. Theo bạn, đâu là hành động **ưu tiên** cần thực hiện để cải thiện thứ hạng SEO?",
    "options": {
      "A": "Tăng ngân sách quảng cáo Google Ads cho từ khóa đó.",
      "B": "Xây dựng hàng loạt backlink chất lượng thấp từ các diễn đàn.",
      "C": "Nghiên cứu lại từ khóa, tối ưu nội dung trang và cấu trúc website cho từ khóa mục tiêu.",
      "D": "Thay đổi giao diện website sang màu sắc bắt mắt và hiện đại hơn."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387837,
    "question": "So sánh giữa 'từ khóa chính' (head keyword) và 'từ khóa đuôi dài' (long-tail keyword) trong SEO, nhận định nào sau đây là **đúng**?",
    "options": {
      "A": "Từ khóa chính có độ cạnh tranh thấp hơn và dễ đạt thứ hạng cao hơn từ khóa đuôi dài.",
      "B": "Từ khóa đuôi dài thường có lượng tìm kiếm cao hơn và mang lại nhiều traffic hơn từ khóa chính.",
      "C": "Từ khóa chính thường ngắn gọn, chung chung, trong khi từ khóa đuôi dài cụ thể và chi tiết hơn.",
      "D": "Cả từ khóa chính và từ khóa đuôi dài đều không quan trọng, chất lượng nội dung mới là yếu tố quyết định."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387838,
    "question": "Điều gì sẽ xảy ra nếu website của bạn không được tối ưu hóa cho thiết bị di động (mobile-friendly)?",
    "options": {
      "A": "Website sẽ tự động được Google chuyển đổi sang giao diện di động.",
      "B": "Website sẽ hiển thị tốt hơn trên máy tính để bàn, nhưng không ảnh hưởng đến SEO.",
      "C": "Website có thể bị tụt hạng trên kết quả tìm kiếm, đặc biệt trên thiết bị di động, và trải nghiệm người dùng kém.",
      "D": "Không có ảnh hưởng đáng kể, vì đa số người dùng vẫn truy cập website bằng máy tính để bàn."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387839,
    "question": "SEO (Tối ưu hóa công cụ tìm kiếm) là gì?",
    "options": {
      "A": "Một phương pháp quảng cáo trả phí để tăng lưu lượng truy cập website.",
      "B": "Một tập hợp các kỹ thuật nhằm nâng cao thứ hạng của website trên các trang kết quả tìm kiếm tự nhiên.",
      "C": "Một loại virus máy tính tấn công các trang web có thứ hạng cao.",
      "D": "Một công cụ phân tích hiệu suất website do Google cung cấp."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387840,
    "question": "Vì sao SEO lại quan trọng đối với doanh nghiệp?",
    "options": {
      "A": "Giúp website trông đẹp mắt hơn.",
      "B": "Tăng độ bảo mật cho website khỏi các cuộc tấn công mạng.",
      "C": "Thu hút khách hàng tiềm năng một cách tự nhiên và bền vững, tăng nhận diện thương hiệu.",
      "D": "Giảm chi phí thiết kế website."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387841,
    "question": "Từ khóa (Keywords) trong SEO là gì?",
    "options": {
      "A": "Những từ ngữ bí mật chỉ dân SEO chuyên nghiệp mới biết.",
      "B": "Những từ hoặc cụm từ mà người dùng nhập vào công cụ tìm kiếm khi tìm kiếm thông tin.",
      "C": "Tên miền của website.",
      "D": "Mật khẩu để đăng nhập vào website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387842,
    "question": "Công cụ nào sau đây KHÔNG phải là công cụ nghiên cứu từ khóa phổ biến?",
    "options": {
      "A": "Google Keyword Planner",
      "B": "SEMrush",
      "C": "Ahrefs",
      "D": "Microsoft Word"
    },
    "correctAnswer": "D",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387843,
    "question": "SEO On-page tập trung vào việc tối ưu hóa những yếu tố nào?",
    "options": {
      "A": "Các yếu tố bên ngoài website như backlink và mạng xã hội.",
      "B": "Các yếu tố kỹ thuật của website như tốc độ tải trang và cấu trúc website.",
      "C": "Các yếu tố trực tiếp trên website như nội dung, thẻ tiêu đề (title tag), và thẻ mô tả meta (meta description).",
      "D": "Chi phí quảng cáo website."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387844,
    "question": "Thẻ tiêu đề (Title Tag) có vai trò quan trọng như thế nào trong SEO On-page?",
    "options": {
      "A": "Chỉ để trang trí cho đẹp mắt.",
      "B": "Giúp công cụ tìm kiếm và người dùng hiểu được nội dung chính của trang.",
      "C": "Ảnh hưởng đến tốc độ tải trang.",
      "D": "Quyết định màu sắc của website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387845,
    "question": "SEO Off-page là gì?",
    "options": {
      "A": "Quá trình tối ưu hóa nội dung trên trang web.",
      "B": "Quá trình xây dựng liên kết (backlink) và các hoạt động bên ngoài website để tăng độ uy tín.",
      "C": "Quá trình tối ưu hóa tốc độ tải trang.",
      "D": "Quá trình thiết kế giao diện website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387846,
    "question": "Backlink (liên kết ngược) chất lượng có tác động như thế nào đến SEO?",
    "options": {
      "A": "Không có tác động gì đến SEO.",
      "B": "Làm giảm thứ hạng website.",
      "C": "Tăng độ uy tín của website trong mắt công cụ tìm kiếm, cải thiện thứ hạng.",
      "D": "Chỉ có tác dụng với các website mới."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387847,
    "question": "SEO kỹ thuật (Technical SEO) tập trung vào khía cạnh nào của website?",
    "options": {
      "A": "Chất lượng nội dung bài viết.",
      "B": "Giao diện và trải nghiệm người dùng.",
      "C": "Cấu trúc website, tốc độ tải trang, khả năng thu thập dữ liệu của công cụ tìm kiếm.",
      "D": "Số lượng từ khóa trong bài viết."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387848,
    "question": "Tốc độ tải trang chậm có thể gây ra hậu quả gì cho SEO?",
    "options": {
      "A": "Không ảnh hưởng gì đến SEO.",
      "B": "Cải thiện trải nghiệm người dùng.",
      "C": "Tăng tỷ lệ thoát trang (bounce rate), giảm thứ hạng website.",
      "D": "Giúp website hiển thị đẹp hơn trên thiết bị di động."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387849,
    "question": "Mục đích chính của việc tối ưu hóa cho thiết bị di động (Mobile-friendly) là gì?",
    "options": {
      "A": "Để website hiển thị màu sắc đẹp hơn.",
      "B": "Để website tương thích tốt trên các thiết bị di động, cải thiện trải nghiệm người dùng di động.",
      "C": "Để tăng dung lượng lưu trữ của website.",
      "D": "Để giảm chi phí hosting."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387850,
    "question": "XML Sitemap (sơ đồ trang web XML) có vai trò gì trong SEO?",
    "options": {
      "A": "Để trang trí website thêm đẹp.",
      "B": "Để người dùng dễ dàng tìm kiếm thông tin trên website.",
      "C": "Để giúp công cụ tìm kiếm dễ dàng thu thập dữ liệu và lập chỉ mục tất cả các trang trên website.",
      "D": "Để tăng tốc độ tải trang."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387851,
    "question": "So sánh giữa SEO 'mũ trắng' (White Hat SEO) và SEO 'mũ đen' (Black Hat SEO), điểm khác biệt chính là gì?",
    "options": {
      "A": "SEO mũ trắng nhanh hơn SEO mũ đen.",
      "B": "SEO mũ đen tuân thủ nguyên tắc của công cụ tìm kiếm, còn SEO mũ trắng thì không.",
      "C": "SEO mũ trắng tập trung vào lợi ích lâu dài và bền vững, tuân thủ nguyên tắc của công cụ tìm kiếm, còn SEO mũ đen sử dụng các thủ thuật gian lận để đạt kết quả nhanh chóng nhưng rủi ro bị phạt cao.",
      "D": "SEO mũ đen dễ thực hiện hơn SEO mũ trắng."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387852,
    "question": "Ví dụ nào sau đây KHÔNG phải là một phương pháp SEO mũ đen?",
    "options": {
      "A": "Nhồi nhét từ khóa (keyword stuffing) trong nội dung.",
      "B": "Xây dựng liên kết từ các website spam, chất lượng thấp.",
      "C": "Tạo nội dung chất lượng, hữu ích cho người dùng.",
      "D": "Ẩn nội dung hoặc liên kết (cloaking)."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387853,
    "question": "Nguyên nhân chính khiến một website mới cần tập trung vào SEO là gì?",
    "options": {
      "A": "Để website có giao diện đẹp hơn.",
      "B": "Để nhanh chóng thu hút khách hàng tiềm năng và xây dựng sự hiện diện trực tuyến.",
      "C": "Để giảm chi phí quảng cáo.",
      "D": "Để website được bảo mật hơn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387854,
    "question": "SEO (Search Engine Optimization) là gì?",
    "options": {
      "A": "Một hình thức quảng cáo trả phí trên các công cụ tìm kiếm.",
      "B": "Quá trình tối ưu hóa website để tăng thứ hạng trên trang kết quả tìm kiếm tự nhiên.",
      "C": "Hoạt động thiết kế lại giao diện website cho đẹp mắt hơn.",
      "D": "Phương pháp xây dựng liên kết từ website này sang website khác."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387855,
    "question": "Công việc đầu tiên cần thực hiện khi bắt đầu một chiến dịch SEO là gì?",
    "options": {
      "A": "Xây dựng hệ thống backlink chất lượng.",
      "B": "Tối ưu hóa tốc độ tải trang của website.",
      "C": "Nghiên cứu và lựa chọn từ khóa mục tiêu.",
      "D": "Viết bài blog với nội dung hấp dẫn."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387856,
    "question": "Thẻ tiêu đề (Title tag) có vai trò quan trọng như thế nào trong SEO On-page?",
    "options": {
      "A": "Giúp website hiển thị đẹp hơn trên trang kết quả tìm kiếm.",
      "B": "Cung cấp thông tin chính xác nhất về nội dung trang cho cả người dùng và công cụ tìm kiếm.",
      "C": "Tăng tốc độ tải trang khi người dùng truy cập.",
      "D": "Tăng số lượng liên kết nội bộ trong website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387857,
    "question": "Backlink được hiểu là gì trong SEO?",
    "options": {
      "A": "Liên kết từ website của bạn đến các website khác.",
      "B": "Liên kết nội bộ giữa các trang trong website của bạn.",
      "C": "Liên kết từ website khác trỏ về website của bạn.",
      "D": "Liên kết từ mạng xã hội đến website của bạn."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387858,
    "question": "Từ khóa 'dài đuôi' (long-tail keyword) thường có đặc điểm nào sau đây?",
    "options": {
      "A": "Có lượng tìm kiếm lớn và độ cạnh tranh cao.",
      "B": "Có lượng tìm kiếm thấp nhưng tỷ lệ chuyển đổi cao.",
      "C": "Chỉ bao gồm một hoặc hai từ.",
      "D": "Không quan trọng trong chiến lược SEO."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387859,
    "question": "Tại sao trải nghiệm người dùng (UX) lại ngày càng được chú trọng trong SEO?",
    "options": {
      "A": "Vì UX giúp website có giao diện đẹp mắt hơn.",
      "B": "Vì công cụ tìm kiếm đánh giá cao các website mang lại trải nghiệm tốt cho người dùng.",
      "C": "Vì UX giúp giảm chi phí quảng cáo.",
      "D": "Vì UX giúp website tải nhanh hơn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387860,
    "question": "Lựa chọn nào sau đây là một ví dụ về kỹ thuật SEO 'mũ trắng' (White hat SEO)?",
    "options": {
      "A": "Mua hàng loạt backlink từ các website kém chất lượng.",
      "B": "Nhồi nhét từ khóa vào nội dung một cách không tự nhiên.",
      "C": "Tạo ra nội dung chất lượng, hữu ích và tối ưu hóa trải nghiệm người dùng.",
      "D": "Sử dụng cloaking để đánh lừa công cụ tìm kiếm."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387861,
    "question": "Điều gì sẽ xảy ra nếu website của bạn không được tối ưu hóa cho thiết bị di động (mobile-friendly)?",
    "options": {
      "A": "Website sẽ bị tấn công bởi hacker.",
      "B": "Thứ hạng website trên kết quả tìm kiếm trên di động có thể bị giảm.",
      "C": "Website sẽ không hiển thị trên máy tính.",
      "D": "Người dùng sẽ không thể truy cập website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387862,
    "question": "Thẻ Meta Description có tác dụng gì trong SEO?",
    "options": {
      "A": "Giúp công cụ tìm kiếm hiểu rõ cấu trúc website.",
      "B": "Mô tả ngắn gọn nội dung trang để thu hút người dùng nhấp vào kết quả tìm kiếm.",
      "C": "Tăng tốc độ tải trang.",
      "D": "Cải thiện thứ hạng từ khóa trực tiếp."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387863,
    "question": "Trong SEO, 'Internal Linking' là gì và tại sao nó quan trọng?",
    "options": {
      "A": "Xây dựng liên kết từ website khác về website của bạn, giúp tăng độ tin cậy.",
      "B": "Liên kết các trang trong website của bạn với nhau, giúp điều hướng người dùng và công cụ tìm kiếm.",
      "C": "Liên kết website của bạn với các trang mạng xã hội để tăng tương tác.",
      "D": "Liên kết website của bạn với các đối thủ cạnh tranh để trao đổi traffic."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387864,
    "question": "Đâu là yếu tố quan trọng nhất để đánh giá hiệu quả của một chiến dịch SEO?",
    "options": {
      "A": "Số lượng bài viết đã đăng tải.",
      "B": "Thứ hạng từ khóa mục tiêu và lưu lượng truy cập tự nhiên (organic traffic).",
      "C": "Số lượng backlink đã xây dựng được.",
      "D": "Thời gian website tồn tại."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387865,
    "question": "URL thân thiện với SEO thường có đặc điểm gì?",
    "options": {
      "A": "Chứa nhiều ký tự đặc biệt và số.",
      "B": "Ngắn gọn, dễ đọc và chứa từ khóa mục tiêu.",
      "C": "Hoàn toàn trùng khớp với tiêu đề trang.",
      "D": "Chứa tên thương hiệu và ngày tháng năm."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387866,
    "question": "Mục đích chính của việc sử dụng thẻ Heading (H1, H2, H3...) trong nội dung SEO là gì?",
    "options": {
      "A": "Để làm nổi bật các đoạn văn bản nhỏ.",
      "B": "Để tạo danh sách các mục trong bài viết.",
      "C": "Để phân cấp và cấu trúc nội dung, giúp công cụ tìm kiếm và người đọc dễ dàng nắm bắt thông tin.",
      "D": "Để tăng tốc độ tải trang."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387867,
    "question": "Điều gì KHÔNG phải là yếu tố xếp hạng trực tiếp trong SEO?",
    "options": {
      "A": "Chất lượng nội dung.",
      "B": "Tốc độ tải trang.",
      "C": "Số lượng người theo dõi trên mạng xã hội.",
      "D": "Thân thiện với thiết bị di động."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387868,
    "question": "So sánh SEO và SEM (Search Engine Marketing), điểm khác biệt chính là gì?",
    "options": {
      "A": "SEO tập trung vào quảng cáo trả phí, SEM tập trung vào kết quả tự nhiên.",
      "B": "SEO là một phần của SEM, bao gồm cả SEO và quảng cáo trả phí.",
      "C": "SEO tập trung vào kết quả tự nhiên, SEM bao gồm cả SEO và quảng cáo trả phí.",
      "D": "SEO và SEM là hai khái niệm hoàn toàn giống nhau."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387869,
    "question": "Mục tiêu chính của SEO (Tối ưu hóa Công cụ Tìm kiếm) là gì?",
    "options": {
      "A": "Tăng lưu lượng truy cập trực tiếp vào trang web.",
      "B": "Tăng thứ hạng trang web trên các trang kết quả tìm kiếm (SERPs) cho các từ khóa mục tiêu.",
      "C": "Tăng số lượng quảng cáo hiển thị trên trang web.",
      "D": "Xây dựng thương hiệu trên mạng xã hội."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387870,
    "question": "Trong SEO, 'từ khóa' (keyword) đóng vai trò gì?",
    "options": {
      "A": "Từ khóa là các từ hoặc cụm từ người dùng nhập vào thanh địa chỉ trình duyệt để truy cập trang web cụ thể.",
      "B": "Từ khóa là các từ hoặc cụm từ mô tả sản phẩm/dịch vụ của doanh nghiệp trên mạng xã hội.",
      "C": "Từ khóa là các từ hoặc cụm từ người dùng sử dụng để tìm kiếm thông tin trên các công cụ tìm kiếm và doanh nghiệp muốn trang web của mình hiển thị khi người dùng tìm kiếm những từ khóa này.",
      "D": "Từ khóa là các từ hoặc cụm từ được sử dụng trong quảng cáo trả phí để thu hút khách hàng."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387871,
    "question": "Yếu tố nào sau đây **không** phải là yếu tố SEO On-page?",
    "options": {
      "A": "Tối ưu hóa thẻ tiêu đề (Title tag).",
      "B": "Xây dựng liên kết ngược (backlink) từ các trang web khác.",
      "C": "Tối ưu hóa nội dung bài viết.",
      "D": "Cải thiện tốc độ tải trang."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387872,
    "question": "Tại sao thẻ meta mô tả (meta description) lại quan trọng trong SEO?",
    "options": {
      "A": "Thẻ meta mô tả giúp công cụ tìm kiếm hiểu rõ hơn về cấu trúc kỹ thuật của trang web.",
      "B": "Thẻ meta mô tả ảnh hưởng trực tiếp đến thứ hạng trang web trên kết quả tìm kiếm.",
      "C": "Thẻ meta mô tả hiển thị dưới tiêu đề trang web trên trang kết quả tìm kiếm, giúp người dùng quyết định có nhấp vào liên kết hay không.",
      "D": "Thẻ meta mô tả giúp tăng tốc độ tải trang web."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387873,
    "question": "Trong SEO, 'liên kết nội bộ' (internal link) mang lại lợi ích gì?",
    "options": {
      "A": "Chủ yếu giúp tăng PageRank cho trang web.",
      "B": "Giúp người dùng dễ dàng điều hướng và khám phá nội dung liên quan trên trang web, đồng thời giúp công cụ tìm kiếm thu thập dữ liệu trang web hiệu quả hơn.",
      "C": "Chỉ có tác dụng khi liên kết đến các trang web bên ngoài có uy tín.",
      "D": "Không có tác dụng đáng kể đến SEO."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387874,
    "question": "Bạn nên ưu tiên tối ưu hóa phiên bản trang web nào để thân thiện với thiết bị di động?",
    "options": {
      "A": "Phiên bản dành cho máy tính để bàn, vì đây là phiên bản gốc.",
      "B": "Cả hai phiên bản máy tính và di động đều quan trọng như nhau.",
      "C": "Phiên bản dành cho thiết bị di động, vì ngày càng nhiều người dùng truy cập internet bằng điện thoại.",
      "D": "Không cần tối ưu hóa cho thiết bị di động nếu trang web đã có phiên bản máy tính."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387875,
    "question": "Điều gì sẽ xảy ra nếu trang web của bạn có quá nhiều 'từ khóa nhồi nhét' (keyword stuffing) trong nội dung?",
    "options": {
      "A": "Trang web sẽ nhanh chóng đạt thứ hạng cao trên kết quả tìm kiếm.",
      "B": "Công cụ tìm kiếm có thể phạt trang web của bạn và hạ thứ hạng hoặc thậm chí loại bỏ khỏi chỉ mục.",
      "C": "Người dùng sẽ thích thú với nội dung vì nó chứa nhiều từ khóa liên quan.",
      "D": "Không có ảnh hưởng gì đáng kể đến SEO."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387876,
    "question": "Sự khác biệt chính giữa SEO 'mũ trắng' (white hat SEO) và SEO 'mũ đen' (black hat SEO) là gì?",
    "options": {
      "A": "SEO mũ trắng tập trung vào kỹ thuật, mũ đen tập trung vào nội dung.",
      "B": "SEO mũ trắng tuân thủ các nguyên tắc của công cụ tìm kiếm và tập trung vào giá trị lâu dài, mũ đen sử dụng các thủ thuật gian lận để nhanh chóng đạt thứ hạng cao nhưng có nguy cơ bị phạt.",
      "C": "SEO mũ trắng chỉ dành cho các trang web lớn, mũ đen dành cho trang web nhỏ.",
      "D": "SEO mũ trắng là miễn phí, mũ đen là trả phí."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387877,
    "question": "Trong các yếu tố sau, yếu tố nào quan trọng nhất để cải thiện thứ hạng SEO cho một trang web?",
    "options": {
      "A": "Số lượng bài viết trên blog.",
      "B": "Chất lượng nội dung và mức độ liên quan đến truy vấn tìm kiếm của người dùng.",
      "C": "Số lượng liên kết ngoài trang web.",
      "D": "Thiết kế giao diện trang web đẹp mắt."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387878,
    "question": "Công cụ nào của Google giúp bạn theo dõi hiệu suất SEO của trang web, bao gồm các từ khóa trang web đang xếp hạng, lỗi thu thập dữ liệu, v.v.?",
    "options": {
      "A": "Google Analytics.",
      "B": "Google Ads.",
      "C": "Google Search Console.",
      "D": "Google PageSpeed Insights."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387879,
    "question": "Ví dụ nào sau đây là một URL thân thiện với SEO?",
    "options": {
      "A": "www.example.com/p=123",
      "B": "www.example.com/category/product-id=456",
      "C": "www.example.com/danh-muc/ao-thun-nam-mau-xanh",
      "D": "www.example.com/index.php?page=products&id=789"
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387880,
    "question": "Tại sao tốc độ tải trang web lại quan trọng đối với SEO?",
    "options": {
      "A": "Tốc độ tải trang chậm giúp trang web trông chuyên nghiệp hơn.",
      "B": "Tốc độ tải trang là yếu tố xếp hạng của Google và ảnh hưởng đến trải nghiệm người dùng. Trang web chậm có thể khiến người dùng rời đi và tăng tỷ lệ thoát trang (bounce rate).",
      "C": "Tốc độ tải trang nhanh giúp giảm chi phí hosting.",
      "D": "Tốc độ tải trang không ảnh hưởng đến SEO."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387881,
    "question": "Trong SEO, thuật ngữ 'anchor text' đề cập đến điều gì?",
    "options": {
      "A": "Đoạn văn bản giới thiệu về trang web trên trang chủ.",
      "B": "Văn bản hiển thị của một liên kết, có thể là liên kết nội bộ hoặc liên kết bên ngoài.",
      "C": "Tiêu đề của bài viết blog.",
      "D": "Mô tả ngắn gọn về hình ảnh."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387882,
    "question": "Bạn nên sử dụng thẻ tiêu đề (header tags - H1, H2, H3...) như thế nào để tối ưu SEO?",
    "options": {
      "A": "Sử dụng càng nhiều thẻ tiêu đề càng tốt để làm nổi bật nội dung.",
      "B": "Chỉ sử dụng thẻ H1 cho tiêu đề chính của trang và sử dụng các thẻ H2, H3... để phân cấp các tiêu đề phụ, đảm bảo cấu trúc nội dung rõ ràng và chứa từ khóa liên quan.",
      "C": "Không cần sử dụng thẻ tiêu đề, chỉ cần định dạng văn bản bằng cách in đậm hoặc in nghiêng.",
      "D": "Sử dụng thẻ tiêu đề một cách ngẫu nhiên để tạo sự đa dạng cho trang web."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387883,
    "question": "Điều gì KHÔNG nên làm khi xây dựng liên kết ngược (backlink) để SEO?",
    "options": {
      "A": "Xây dựng liên kết từ các trang web có liên quan đến lĩnh vực của bạn.",
      "B": "Tạo ra nội dung chất lượng và hữu ích để thu hút liên kết tự nhiên.",
      "C": "Mua liên kết hàng loạt từ các trang web chất lượng thấp hoặc không liên quan.",
      "D": "Tham gia các hoạt động trao đổi liên kết (link exchange) một cách có chọn lọc với các trang web uy tín."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387884,
    "question": "Mục tiêu chính của SEO (Tối ưu hóa công cụ tìm kiếm) là gì?",
    "options": {
      "A": "Tăng lưu lượng truy cập trực tiếp vào website.",
      "B": "Cải thiện trải nghiệm người dùng trên website.",
      "C": "Tăng thứ hạng website trên trang kết quả tìm kiếm (SERP) cho các từ khóa mục tiêu.",
      "D": "Giảm chi phí quảng cáo trực tuyến."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387885,
    "question": "Website của bạn có thứ hạng thấp cho một từ khóa quan trọng mặc dù nội dung chất lượng và độc đáo. Yếu tố SEO nào sau đây có khả năng bị thiếu sót nhất và cần được ưu tiên cải thiện?",
    "options": {
      "A": "Thiết kế website responsive trên thiết bị di động.",
      "B": "Tối ưu hóa tốc độ tải trang.",
      "C": "Số lượng và chất lượng backlink (liên kết ngược) từ các website khác.",
      "D": "Cấu trúc URL website chưa thân thiện với SEO."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387886,
    "question": "Bạn là chủ một cửa hàng bán đồ thủ công mỹ nghệ và muốn thu hút khách hàng địa phương thông qua SEO. Hành động nào sau đây mang lại hiệu quả trực tiếp nhất trong việc SEO Local (SEO địa phương)?",
    "options": {
      "A": "Xây dựng một blog chuyên về đồ thủ công mỹ nghệ và đăng tải bài viết hàng ngày.",
      "B": "Đăng ký và tối ưu hóa thông tin doanh nghiệp trên Google My Business (Google Doanh nghiệp của tôi).",
      "C": "Chạy quảng cáo Google Ads nhắm mục tiêu theo địa lý.",
      "D": "Tối ưu hóa website với các từ khóa quốc tế về đồ thủ công mỹ nghệ."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387887,
    "question": "Sự khác biệt chính giữa SEO On-page và SEO Off-page là gì?",
    "options": {
      "A": "SEO On-page tập trung vào trải nghiệm người dùng, SEO Off-page tập trung vào kỹ thuật website.",
      "B": "SEO On-page là tối ưu hóa các yếu tố **bên trong** website, SEO Off-page là các hoạt động **bên ngoài** website.",
      "C": "SEO On-page là tối ưu hóa nội dung, SEO Off-page là tối ưu hóa liên kết.",
      "D": "SEO On-page chỉ quan trọng cho website mới, SEO Off-page quan trọng cho website lâu năm."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387888,
    "question": "Điều gì sẽ xảy ra nếu bạn nhồi nhét quá nhiều từ khóa mục tiêu vào nội dung website (keyword stuffing)?",
    "options": {
      "A": "Website sẽ nhanh chóng đạt top đầu trên trang kết quả tìm kiếm.",
      "B": "Website có thể bị Google phạt và tụt hạng, thậm chí bị loại khỏi kết quả tìm kiếm.",
      "C": "Trải nghiệm người dùng sẽ được cải thiện đáng kể.",
      "D": "Tốc độ tải trang của website sẽ tăng lên."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387889,
    "question": "SEO (Tối ưu hóa công cụ tìm kiếm) là quá trình chủ yếu tập trung vào điều gì?",
    "options": {
      "A": "Tăng cường quảng cáo trả phí trên mạng xã hội.",
      "B": "Cải thiện khả năng hiển thị của website trên các công cụ tìm kiếm.",
      "C": "Thiết kế lại giao diện người dùng của website.",
      "D": "Xây dựng hệ thống quản lý nội dung (CMS) mạnh mẽ."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387890,
    "question": "Tại sao nghiên cứu từ khóa (keyword research) được xem là bước quan trọng đầu tiên trong SEO?",
    "options": {
      "A": "Để nhanh chóng thu hút lưu lượng truy cập từ quảng cáo trả phí.",
      "B": "Để xác định những cụm từ mà khách hàng mục tiêu sử dụng khi tìm kiếm sản phẩm hoặc dịch vụ.",
      "C": "Để thiết kế logo và bộ nhận diện thương hiệu.",
      "D": "Để lựa chọn tên miền (domain name) phù hợp cho website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387891,
    "question": "Thẻ tiêu đề (Title Tag) có vai trò quan trọng trong SEO On-page vì lý do nào sau đây?",
    "options": {
      "A": "Chỉ hiển thị cho quản trị viên website, không ảnh hưởng đến người dùng.",
      "B": "Giúp công cụ tìm kiếm và người dùng hiểu nội dung chính của trang.",
      "C": "Chủ yếu được sử dụng để cải thiện tốc độ tải trang.",
      "D": "Là yếu tố quyết định đến màu sắc và font chữ hiển thị trên website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387892,
    "question": "Liên kết ngược (Backlink) chất lượng từ các website uy tín khác mang lại lợi ích gì cho SEO?",
    "options": {
      "A": "Giảm chi phí quảng cáo trả phí.",
      "B": "Tăng độ tin cậy và uy tín của website trong mắt công cụ tìm kiếm.",
      "C": "Cải thiện thiết kế giao diện người dùng.",
      "D": "Tăng tốc độ tải trang."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387893,
    "question": "Trong SEO kỹ thuật (Technical SEO), yếu tố nào sau đây KHÔNG trực tiếp ảnh hưởng đến thứ hạng website?",
    "options": {
      "A": "Tốc độ tải trang (Page speed).",
      "B": "Khả năng tương thích với thiết bị di động (Mobile-friendliness).",
      "C": "Số lượng bài viết blog đã đăng tải.",
      "D": "Cấu trúc website dễ dàng thu thập thông tin (crawlable)."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387894,
    "question": "Chỉ số 'tỷ lệ thoát trang' (Bounce Rate) cao có thể gây ảnh hưởng tiêu cực đến SEO như thế nào?",
    "options": {
      "A": "Làm tăng chi phí hosting website.",
      "B": "Gợi ý rằng nội dung trang không phù hợp hoặc không hấp dẫn với người dùng, khiến công cụ tìm kiếm đánh giá thấp website.",
      "C": "Giảm số lượng liên kết ngược (backlink) tự nhiên.",
      "D": "Làm chậm tốc độ tải trang."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387895,
    "question": "Thuật ngữ 'Long-tail keywords' (từ khóa đuôi dài) đề cập đến loại từ khóa nào?",
    "options": {
      "A": "Từ khóa có độ dài ký tự lớn hơn 10.",
      "B": "Từ khóa chung chung, có lượng tìm kiếm lớn.",
      "C": "Cụm từ khóa dài, cụ thể và chi tiết, thường có lượng tìm kiếm thấp hơn nhưng tỷ lệ chuyển đổi cao hơn.",
      "D": "Từ khóa chỉ chứa các ký tự đặc biệt."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387896,
    "question": "Trong bối cảnh SEO, 'nội dung là vua' (Content is King) có nghĩa là gì?",
    "options": {
      "A": "Website cần có giao diện đẹp mắt và ấn tượng hơn nội dung.",
      "B": "Số lượng nội dung nhiều hơn chất lượng nội dung.",
      "C": "Nội dung chất lượng, hữu ích và độc đáo là yếu tố quan trọng nhất để thu hút và giữ chân người dùng, đồng thời được công cụ tìm kiếm đánh giá cao.",
      "D": "Nội dung cần được sao chép từ các website khác để tiết kiệm thời gian."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387897,
    "question": "Mobile-first indexing (ưu tiên lập chỉ mục trên thiết bị di động) của Google có ý nghĩa gì?",
    "options": {
      "A": "Google chỉ lập chỉ mục các website được thiết kế riêng cho thiết bị di động.",
      "B": "Google ưu tiên sử dụng phiên bản di động của website để lập chỉ mục và xếp hạng.",
      "C": "Website cần phải có ứng dụng di động (mobile app) để được Google lập chỉ mục.",
      "D": "Google chỉ hiển thị kết quả tìm kiếm trên thiết bị di động."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387898,
    "question": "Sự khác biệt chính giữa SEO 'mũ trắng' (White Hat SEO) và SEO 'mũ đen' (Black Hat SEO) là gì?",
    "options": {
      "A": "SEO mũ trắng tập trung vào tốc độ, SEO mũ đen tập trung vào chất lượng.",
      "B": "SEO mũ trắng tuân thủ nguyên tắc của công cụ tìm kiếm, SEO mũ đen sử dụng các thủ thuật gian lận để nhanh chóng đạt thứ hạng cao.",
      "C": "SEO mũ trắng miễn phí, SEO mũ đen tốn phí.",
      "D": "SEO mũ trắng chỉ dành cho website mới, SEO mũ đen dành cho website cũ."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387899,
    "question": "Ví dụ nào sau đây là một hoạt động SEO Local (SEO địa phương) hiệu quả?",
    "options": {
      "A": "Chạy quảng cáo Google Ads trên toàn quốc.",
      "B": "Tối ưu hóa trang Google My Business và thu thập đánh giá từ khách hàng địa phương.",
      "C": "Xây dựng liên kết ngược (backlink) từ các website quốc tế.",
      "D": "Tập trung vào từ khóa có độ cạnh tranh cao trên toàn cầu."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387900,
    "question": "Công cụ nào sau đây KHÔNG phải là công cụ SEO phổ biến?",
    "options": {
      "A": "Google Analytics.",
      "B": "Google Search Console.",
      "C": "SEMrush.",
      "D": "Microsoft Word."
    },
    "correctAnswer": "D",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387901,
    "question": "Đâu là một trong những chỉ số (metrics) quan trọng để đánh giá hiệu quả của chiến dịch SEO?",
    "options": {
      "A": "Số lượng trang trên website.",
      "B": "Thứ hạng từ khóa mục tiêu và lưu lượng truy cập tự nhiên (organic traffic).",
      "C": "Số lượng bình luận trên blog.",
      "D": "Thời gian trung bình người dùng ở lại trên trang."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387902,
    "question": "Điểm khác biệt chính giữa SEO (Tối ưu hóa công cụ tìm kiếm) và SEM (Marketing trên công cụ tìm kiếm) là gì?",
    "options": {
      "A": "SEO chỉ tập trung vào Google, SEM tập trung vào tất cả các công cụ tìm kiếm.",
      "B": "SEO là quá trình trả phí để hiển thị trên kết quả tìm kiếm, SEM là quá trình tự nhiên.",
      "C": "SEO tập trung vào kết quả tìm kiếm tự nhiên (organic), SEM bao gồm cả SEO và quảng cáo trả phí (paid search).",
      "D": "SEO chỉ dành cho website thương mại điện tử, SEM dành cho website tin tức."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387903,
    "question": "Nguyên nhân chính khiến thứ hạng từ khóa của một website có thể bị giảm sút sau một thời gian SEO là gì?",
    "options": {
      "A": "Website thay đổi tên miền.",
      "B": "Thuật toán của công cụ tìm kiếm thay đổi và website chưa được tối ưu theo các thay đổi đó.",
      "C": "Website tăng cường quảng cáo trả phí.",
      "D": "Website giảm số lượng trang."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387904,
    "question": "SEO (Tối ưu hóa công cụ tìm kiếm) là gì?",
    "options": {
      "A": "Một phương pháp quảng cáo trả phí trên các công cụ tìm kiếm.",
      "B": "Quá trình tối ưu hóa trang web để đạt được thứ hạng cao hơn trên các trang kết quả tìm kiếm tự nhiên.",
      "C": "Một loại virus máy tính ảnh hưởng đến hiệu suất trang web.",
      "D": "Phần mềm quản lý nội dung trang web."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387905,
    "question": "Yếu tố nào sau đây được xem là quan trọng nhất trong SEO On-page?",
    "options": {
      "A": "Số lượng liên kết ngược (backlink) từ các trang web khác.",
      "B": "Tốc độ tải trang và trải nghiệm người dùng trên trang web.",
      "C": "Mức độ phổ biến của thương hiệu trên mạng xã hội.",
      "D": "Tuổi đời của tên miền website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387906,
    "question": "Từ khóa (Keyword) trong SEO được sử dụng để làm gì?",
    "options": {
      "A": "Để trang trí nội dung trang web thêm phần hấp dẫn.",
      "B": "Để xác định chủ đề chính của trang web và nội dung, giúp công cụ tìm kiếm và người dùng hiểu rõ nội dung.",
      "C": "Để tăng số lượng quảng cáo hiển thị trên trang web.",
      "D": "Để tạo ra các liên kết nội bộ giữa các trang trong website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387907,
    "question": "Liên kết ngược (Backlink) chất lượng có vai trò như thế nào đối với SEO?",
    "options": {
      "A": "Giảm tốc độ tải trang web.",
      "B": "Tăng độ tin cậy và uy tín của trang web trong mắt công cụ tìm kiếm, từ đó cải thiện thứ hạng.",
      "C": "Làm cho trang web trở nên phức tạp và khó sử dụng hơn.",
      "D": "Không có vai trò gì, backlink chỉ là yếu tố trang trí."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387908,
    "question": "Thẻ tiêu đề (Title Tag) là gì và nó hiển thị ở đâu trên kết quả tìm kiếm?",
    "options": {
      "A": "Đoạn văn bản mô tả ngắn gọn về nội dung trang web, hiển thị dưới URL trong kết quả tìm kiếm.",
      "B": "Tiêu đề chính của trang web, hiển thị là dòng chữ màu xanh đậm, có thể nhấp vào được trong kết quả tìm kiếm.",
      "C": "Tên miền của trang web, hiển thị ở đầu trang web.",
      "D": "Hình ảnh đại diện của trang web, hiển thị bên cạnh tiêu đề."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387909,
    "question": "Mô tả meta (Meta Description) có tác dụng chính là gì trong SEO?",
    "options": {
      "A": "Để tăng tốc độ tải trang web.",
      "B": "Để cung cấp thông tin chi tiết về tác giả của nội dung.",
      "C": "Để mô tả ngắn gọn nội dung trang web, thu hút người dùng nhấp vào liên kết từ trang kết quả tìm kiếm.",
      "D": "Để chèn từ khóa ẩn vào trang web."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387910,
    "question": "Trong SEO, 'từ khóa đuôi dài' (Long-tail keyword) thường mang lại lợi ích gì?",
    "options": {
      "A": "Cạnh tranh cao và dễ dàng đạt thứ hạng cao.",
      "B": "Lưu lượng truy cập lớn nhưng tỷ lệ chuyển đổi thấp.",
      "C": "Lưu lượng truy cập ít hơn nhưng thường có tỷ lệ chuyển đổi cao hơn vì nhắm đúng đối tượng mục tiêu.",
      "D": "Không có lợi ích gì đặc biệt so với từ khóa ngắn."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387911,
    "question": "Lỗi '404 Not Found' trên trang web có ảnh hưởng như thế nào đến SEO?",
    "options": {
      "A": "Không ảnh hưởng gì đến SEO.",
      "B": "Cải thiện trải nghiệm người dùng vì thông báo lỗi rõ ràng.",
      "C": "Gây ảnh hưởng tiêu cực đến trải nghiệm người dùng, có thể làm giảm thứ hạng SEO.",
      "D": "Tăng tốc độ tải trang web."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387912,
    "question": "Công cụ nào sau đây KHÔNG phải là công cụ phổ biến để phân tích từ khóa?",
    "options": {
      "A": "Google Keyword Planner.",
      "B": "SEMrush.",
      "C": "Google Analytics.",
      "D": "Ahrefs."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387913,
    "question": "Tại sao việc tối ưu hóa cho thiết bị di động (Mobile-friendly) lại quan trọng trong SEO hiện nay?",
    "options": {
      "A": "Vì người dùng máy tính để bàn không còn quan trọng.",
      "B": "Vì Google ưu tiên lập chỉ mục (indexing) phiên bản di động của trang web (Mobile-first indexing).",
      "C": "Vì giao diện di động đẹp mắt hơn giao diện máy tính.",
      "D": "Vì website mobile tốn ít chi phí thiết kế hơn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387914,
    "question": "Ví dụ nào sau đây là một URL thân thiện với SEO?",
    "options": {
      "A": "www.example.com/p=123",
      "B": "www.example.com/category/article-title",
      "C": "www.example.com/index.php?id=article1",
      "D": "www.example.com/!@#$%^&*()_+"
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387915,
    "question": "Sitemap XML có vai trò gì trong SEO?",
    "options": {
      "A": "Tăng tốc độ tải trang web.",
      "B": "Giúp công cụ tìm kiếm dễ dàng thu thập dữ liệu (crawl) và lập chỉ mục (index) tất cả các trang trên website.",
      "C": "Cải thiện trải nghiệm người dùng trên website.",
      "D": "Ngăn chặn bot của công cụ tìm kiếm truy cập website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387916,
    "question": "Anchor text (Văn bản neo) là gì và tại sao nó quan trọng trong SEO?",
    "options": {
      "A": "Văn bản ẩn trên trang web, chỉ hiển thị cho công cụ tìm kiếm.",
      "B": "Văn bản có thể nhấp chuột trong liên kết, nó quan trọng vì giúp công cụ tìm kiếm hiểu nội dung trang được liên kết đến.",
      "C": "Tiêu đề của trang web, hiển thị trên thanh trình duyệt.",
      "D": "Mô tả về hình ảnh, giúp hình ảnh hiển thị trên kết quả tìm kiếm hình ảnh."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387917,
    "question": "So sánh giữa SEO 'Mũ trắng' (White Hat SEO) và SEO 'Mũ đen' (Black Hat SEO), đâu là phương pháp bền vững và được khuyến khích?",
    "options": {
      "A": "SEO Mũ đen vì mang lại kết quả nhanh chóng.",
      "B": "Cả hai phương pháp đều bền vững như nhau.",
      "C": "SEO Mũ trắng vì tuân thủ nguyên tắc của công cụ tìm kiếm, xây dựng website bền vững.",
      "D": "SEO Mũ đen vì được công cụ tìm kiếm ưa chuộng hơn."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387918,
    "question": "Nguyên nhân chính khiến một trang web tụt hạng trên kết quả tìm kiếm sau một thời gian SEO hiệu quả là gì?",
    "options": {
      "A": "Do sử dụng quá nhiều từ khóa trong nội dung.",
      "B": "Do không cập nhật nội dung thường xuyên và mất đi tính cạnh tranh so với các trang web khác.",
      "C": "Do tăng số lượng quảng cáo trên trang web.",
      "D": "Do thay đổi giao diện trang web."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387919,
    "question": "SEO (Tối ưu hóa công cụ tìm kiếm) là gì?",
    "options": {
      "A": "Một loại virus máy tính tấn công các trang web.",
      "B": "Quá trình tăng cường khả năng hiển thị của trang web trên các công cụ tìm kiếm.",
      "C": "Một phương pháp thiết kế web hiện đại.",
      "D": "Hình thức quảng cáo trả phí trực tuyến."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387920,
    "question": "Mục tiêu chính của SEO là gì?",
    "options": {
      "A": "Tăng doanh số bán hàng trực tiếp ngay lập tức.",
      "B": "Thu hút lưu lượng truy cập chất lượng và có liên quan đến trang web.",
      "C": "Làm cho trang web trông đẹp mắt hơn.",
      "D": "Giảm chi phí quảng cáo trả phí."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387921,
    "question": "Yếu tố nào sau đây **không** phải là một trụ cột chính của SEO?",
    "options": {
      "A": "SEO On-page (Tối ưu hóa trên trang).",
      "B": "SEO Off-page (Tối ưu hóa ngoài trang).",
      "C": "SEO Technical (SEO kỹ thuật).",
      "D": "SEO Paid (SEO trả phí)."
    },
    "correctAnswer": "D",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387922,
    "question": "Tại sao nghiên cứu từ khóa (Keyword Research) lại quan trọng trong SEO?",
    "options": {
      "A": "Để trang web trông chuyên nghiệp hơn.",
      "B": "Để biết đối thủ cạnh tranh đang sử dụng từ khóa nào.",
      "C": "Để hiểu người dùng đang tìm kiếm gì và tối ưu hóa nội dung phù hợp.",
      "D": "Để tăng tốc độ tải trang web."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387923,
    "question": "Ví dụ nào sau đây là một hoạt động SEO On-page?",
    "options": {
      "A": "Xây dựng liên kết (backlink) từ các trang web khác.",
      "B": "Tối ưu hóa thẻ tiêu đề (Title Tag) và mô tả meta (Meta Description).",
      "C": "Quảng bá bài viết trên mạng xã hội.",
      "D": "Kiểm tra tốc độ tải trang web."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387924,
    "question": "Hoạt động SEO Off-page nào sau đây có thể mang lại hiệu quả lâu dài nhất?",
    "options": {
      "A": "Mua liên kết (backlink) hàng loạt từ các trang web kém chất lượng.",
      "B": "Tham gia vào các diễn đàn và spam liên kết trang web.",
      "C": "Xây dựng nội dung chất lượng cao và chia sẻ giá trị để thu hút liên kết tự nhiên.",
      "D": "Chạy quảng cáo hiển thị (banner ads) trên các trang web khác."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387925,
    "question": "SEO Technical đóng vai trò gì trong tổng thể chiến lược SEO?",
    "options": {
      "A": "Chỉ tập trung vào việc viết nội dung hấp dẫn.",
      "B": "Đảm bảo trang web dễ dàng được các công cụ tìm kiếm thu thập thông tin và lập chỉ mục.",
      "C": "Chủ yếu liên quan đến thiết kế giao diện người dùng (UI).",
      "D": "Chỉ quan trọng đối với các trang web thương mại điện tử lớn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387926,
    "question": "Trải nghiệm người dùng (UX) ảnh hưởng đến SEO như thế nào?",
    "options": {
      "A": "UX không liên quan gì đến SEO.",
      "B": "UX tốt giúp tăng thời gian người dùng ở lại trang web và giảm tỷ lệ thoát, gửi tín hiệu tích cực đến công cụ tìm kiếm.",
      "C": "UX chỉ quan trọng đối với người dùng, không ảnh hưởng đến thứ hạng tìm kiếm.",
      "D": "UX xấu có thể cải thiện thứ hạng SEO vì người dùng sẽ tìm kiếm thông tin ở nhiều nơi hơn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387927,
    "question": "Mobile-first indexing (ưu tiên lập chỉ mục trên thiết bị di động) nghĩa là gì?",
    "options": {
      "A": "Công cụ tìm kiếm chỉ lập chỉ mục các trang web dành cho thiết bị di động.",
      "B": "Công cụ tìm kiếm ưu tiên sử dụng phiên bản di động của trang web để lập chỉ mục và xếp hạng.",
      "C": "Các trang web phải được thiết kế riêng biệt cho thiết bị di động và máy tính.",
      "D": "Tốc độ tải trang trên thiết bị di động không còn quan trọng."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387928,
    "question": "Tại sao cần theo dõi và thích ứng với các cập nhật thuật toán của công cụ tìm kiếm?",
    "options": {
      "A": "Vì các cập nhật thuật toán thường không ảnh hưởng đến SEO.",
      "B": "Để đảm bảo chiến lược SEO hiện tại vẫn hiệu quả và không bị phạt bởi các thay đổi mới.",
      "C": "Để sao chép chiến lược SEO của đối thủ cạnh tranh.",
      "D": "Vì cập nhật thuật toán chỉ ảnh hưởng đến SEO trả phí."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387929,
    "question": "Sự khác biệt chính giữa SEO mũ trắng (White hat SEO) và SEO mũ đen (Black hat SEO) là gì?",
    "options": {
      "A": "SEO mũ trắng nhanh hơn, SEO mũ đen chậm hơn.",
      "B": "SEO mũ trắng tập trung vào người dùng và tuân thủ quy tắc, SEO mũ đen sử dụng các thủ thuật gian lận để đạt thứ hạng nhanh chóng.",
      "C": "SEO mũ trắng miễn phí, SEO mũ đen tốn phí.",
      "D": "SEO mũ trắng chỉ dành cho trang web lớn, SEO mũ đen dành cho trang web nhỏ."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387930,
    "question": "Từ khóa đuôi dài (Long-tail keywords) là gì và tại sao chúng hữu ích?",
    "options": {
      "A": "Từ khóa đuôi dài là từ khóa ngắn gọn, phổ biến và có lượng tìm kiếm cao.",
      "B": "Từ khóa đuôi dài là cụm từ khóa dài, cụ thể, ít cạnh tranh hơn và hướng đến đối tượng mục tiêu cụ thể.",
      "C": "Từ khóa đuôi dài chỉ phù hợp với các trang web mới.",
      "D": "Từ khóa đuôi dài không quan trọng trong SEO."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387931,
    "question": "Chỉ số nào sau đây thường được sử dụng để đo lường hiệu quả của chiến dịch SEO?",
    "options": {
      "A": "Số lượng bài đăng trên mạng xã hội.",
      "B": "Lưu lượng truy cập tự nhiên (Organic Traffic) và thứ hạng từ khóa.",
      "C": "Tổng số trang trên website.",
      "D": "Số lượng liên kết nội bộ."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387932,
    "question": "Câu nói 'Nội dung là vua' (Content is king) có ý nghĩa gì trong SEO?",
    "options": {
      "A": "Thiết kế website đẹp mắt quan trọng hơn nội dung.",
      "B": "Nội dung chất lượng, hữu ích và độc đáo là yếu tố then chốt để thu hút và giữ chân người dùng, cũng như được công cụ tìm kiếm đánh giá cao.",
      "C": "Số lượng nội dung nhiều hơn chất lượng nội dung.",
      "D": "Nội dung chỉ quan trọng đối với SEO On-page, không ảnh hưởng đến SEO Off-page."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387933,
    "question": "SEO là một quá trình như thế nào?",
    "options": {
      "A": "Một chiến dịch ngắn hạn, có thể đạt kết quả nhanh chóng trong vài tuần.",
      "B": "Một quá trình liên tục, đòi hỏi sự kiên trì và điều chỉnh theo thời gian để đạt được kết quả bền vững.",
      "C": "Một công việc chỉ cần thực hiện một lần duy nhất khi mới xây dựng website.",
      "D": "Một phương pháp chỉ hiệu quả với các ngành nghề nhất định."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387934,
    "question": "SEO (Tối ưu hóa công cụ tìm kiếm) được định nghĩa chính xác nhất là gì?",
    "options": {
      "A": "Quá trình trả tiền cho các công cụ tìm kiếm để website hiển thị ở vị trí đầu.",
      "B": "Tập hợp các kỹ thuật nhằm tăng khả năng hiển thị của website trên các công cụ tìm kiếm một cách tự nhiên.",
      "C": "Hoạt động quảng cáo trên mạng xã hội để thu hút người dùng truy cập website.",
      "D": "Việc thiết kế website đẹp mắt và thân thiện với người dùng."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387935,
    "question": "Trong SEO, 'từ khóa' (keyword) đóng vai trò quan trọng như thế nào?",
    "options": {
      "A": "Từ khóa chỉ quan trọng trong việc đặt tên miền website.",
      "B": "Từ khóa giúp công cụ tìm kiếm hiểu nội dung website và kết nối với người dùng có nhu cầu tìm kiếm.",
      "C": "Từ khóa chỉ ảnh hưởng đến tốc độ tải trang của website.",
      "D": "Từ khóa không thực sự quan trọng, nội dung chất lượng mới là yếu tố quyết định."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387936,
    "question": "Bạn đang thực hiện SEO cho một trang web bán hàng thời trang. Theo bạn, hoạt động nào sau đây thuộc về SEO On-page?",
    "options": {
      "A": "Xây dựng liên kết (backlink) từ các website thời trang khác.",
      "B": "Chia sẻ bài viết về sản phẩm lên mạng xã hội.",
      "C": "Tối ưu thẻ tiêu đề (title tag) và mô tả (meta description) cho trang sản phẩm.",
      "D": "Tham gia các diễn đàn và cộng đồng trực tuyến về thời trang."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387937,
    "question": "Điểm khác biệt chính giữa SEO 'Black hat' (mũ đen) và 'White hat' (mũ trắng) là gì?",
    "options": {
      "A": "Black hat SEO tập trung vào nội dung, White hat SEO tập trung vào kỹ thuật.",
      "B": "Black hat SEO tuân thủ nguyên tắc của công cụ tìm kiếm, White hat SEO thì không.",
      "C": "Black hat SEO sử dụng các thủ thuật gian lận để tăng thứ hạng nhanh chóng, White hat SEO tập trung vào xây dựng website bền vững và tuân thủ nguyên tắc.",
      "D": "Black hat SEO phù hợp cho website mới, White hat SEO phù hợp cho website lâu năm."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387938,
    "question": "Website của bạn bị giảm thứ hạng đột ngột trên công cụ tìm kiếm. Nguyên nhân nào sau đây **ít có khả năng** là nguyên nhân trực tiếp nhất?",
    "options": {
      "A": "Website bị phạt bởi Google do vi phạm chính sách (ví dụ: spam từ khóa).",
      "B": "Đối thủ cạnh tranh có chiến lược SEO hiệu quả hơn và vượt qua bạn.",
      "C": "Bạn thay đổi giao diện website nhưng không tối ưu cho SEO.",
      "D": "Server hosting của bạn gặp sự cố và website không truy cập được trong thời gian dài."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387939,
    "question": "Mục tiêu chính của SEO (Tối ưu hóa Công cụ Tìm kiếm) là gì?",
    "options": {
      "A": "Tăng lưu lượng truy cập trực tiếp vào trang web.",
      "B": "Cải thiện trải nghiệm người dùng trên trang web.",
      "C": "Tăng thứ hạng của trang web trên các trang kết quả tìm kiếm.",
      "D": "Giảm chi phí quảng cáo trực tuyến."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387940,
    "question": "Tại sao nghiên cứu từ khóa lại là bước quan trọng đầu tiên trong SEO?",
    "options": {
      "A": "Để thiết kế giao diện trang web hấp dẫn hơn.",
      "B": "Để xác định nội dung mà người dùng đang tìm kiếm và tối ưu hóa cho chúng.",
      "C": "Để tạo ra nhiều liên kết chất lượng hơn.",
      "D": "Để cải thiện tốc độ tải trang web."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387941,
    "question": "Yếu tố nào sau đây KHÔNG phải là một yếu tố SEO On-page?",
    "options": {
      "A": "Tối ưu hóa thẻ tiêu đề (Title tag).",
      "B": "Xây dựng liên kết ngược (Backlink).",
      "C": "Tối ưu hóa thẻ mô tả meta (Meta description).",
      "D": "Tối ưu hóa nội dung bài viết."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387942,
    "question": "Sự khác biệt chính giữa SEO On-page và SEO Off-page là gì?",
    "options": {
      "A": "SEO On-page tập trung vào tốc độ tải trang, SEO Off-page tập trung vào nội dung.",
      "B": "SEO On-page thực hiện trên trang web, SEO Off-page thực hiện bên ngoài trang web.",
      "C": "SEO On-page dễ thực hiện hơn SEO Off-page.",
      "D": "SEO On-page quan trọng hơn SEO Off-page."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387943,
    "question": "Điều gì có thể xảy ra nếu một trang web không được tối ưu hóa cho thiết bị di động?",
    "options": {
      "A": "Trang web sẽ tải nhanh hơn trên máy tính để bàn.",
      "B": "Thứ hạng trang web có thể giảm trên kết quả tìm kiếm di động.",
      "C": "Tỷ lệ thoát trang (Bounce rate) có thể giảm.",
      "D": "Lưu lượng truy cập từ máy tính để bàn sẽ tăng lên."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387944,
    "question": "Ví dụ nào sau đây KHÔNG phải là một kỹ thuật 'Black Hat SEO'?",
    "options": {
      "A": "Nhồi nhét từ khóa (Keyword stuffing).",
      "B": "Xây dựng nội dung chất lượng và hữu ích cho người dùng.",
      "C": "Ẩn văn bản hoặc liên kết (Cloaking).",
      "D": "Mua liên kết hàng loạt."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387945,
    "question": "Thẻ tiêu đề (Title tag) có vai trò quan trọng như thế nào trong SEO?",
    "options": {
      "A": "Chỉ hiển thị trên trang quản trị website.",
      "B": "Không ảnh hưởng đến thứ hạng tìm kiếm.",
      "C": "Hiển thị trên trang kết quả tìm kiếm và giúp người dùng hiểu nội dung trang.",
      "D": "Chỉ ảnh hưởng đến tốc độ tải trang."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387946,
    "question": "Trong SEO, thuật ngữ 'Anchor text' dùng để chỉ điều gì?",
    "options": {
      "A": "Đoạn văn bản mô tả về trang web trên SERPs.",
      "B": "Văn bản hiển thị của một liên kết (link) trỏ đến trang web khác.",
      "C": "Tiêu đề chính của bài viết trên trang web.",
      "D": "Đoạn văn bản tóm tắt nội dung chính của trang web."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387947,
    "question": "Tại sao tốc độ tải trang web lại quan trọng đối với SEO?",
    "options": {
      "A": "Vì nó ảnh hưởng trực tiếp đến chi phí hosting.",
      "B": "Vì nó là yếu tố duy nhất quyết định thứ hạng.",
      "C": "Vì người dùng và công cụ tìm kiếm thích trải nghiệm trang web nhanh chóng.",
      "D": "Vì nó giúp trang web hiển thị đẹp hơn trên thiết bị di động."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387948,
    "question": "Phương pháp nào sau đây giúp cải thiện SEO Local (SEO địa phương)?",
    "options": {
      "A": "Tập trung xây dựng liên kết từ các trang web quốc tế.",
      "B": "Tối ưu hóa trang Google My Business và thu thập đánh giá từ khách hàng.",
      "C": "Chỉ sử dụng tiếng Anh trong nội dung trang web.",
      "D": "Ngăn chặn việc hiển thị địa chỉ doanh nghiệp trên trang web."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387949,
    "question": "Công cụ nào của Google giúp theo dõi hiệu quả SEO của một trang web?",
    "options": {
      "A": "Google Ads.",
      "B": "Google Analytics.",
      "C": "Google Search Console.",
      "D": "Google Drive."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387950,
    "question": "Mục đích chính của việc tạo Sitemap XML cho website là gì?",
    "options": {
      "A": "Để tăng tốc độ tải trang web cho người dùng.",
      "B": "Để giúp công cụ tìm kiếm dễ dàng thu thập dữ liệu (crawl) và lập chỉ mục (index) tất cả các trang trên website.",
      "C": "Để bảo vệ website khỏi bị tấn công mạng.",
      "D": "Để cải thiện thiết kế giao diện website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387951,
    "question": "Điều gì xảy ra khi website bị phạt bởi Google (Google penalty) do vi phạm chính sách SEO?",
    "options": {
      "A": "Website sẽ được hiển thị nổi bật hơn trên kết quả tìm kiếm.",
      "B": "Thứ hạng website có thể giảm mạnh hoặc thậm chí bị loại khỏi kết quả tìm kiếm.",
      "C": "Website sẽ nhận được nhiều lưu lượng truy cập hơn từ mạng xã hội.",
      "D": "Website sẽ tự động được tối ưu hóa tốc độ tải trang."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387952,
    "question": "Trong SEO, 'Long-tail keywords' thường có đặc điểm gì?",
    "options": {
      "A": "Ngắn gọn và có lượng tìm kiếm cao.",
      "B": "Dài hơn, cụ thể hơn và có lượng tìm kiếm thấp hơn so với từ khóa chính.",
      "C": "Chỉ được sử dụng trong quảng cáo trả phí (PPC).",
      "D": "Không quan trọng bằng từ khóa chính trong SEO."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387953,
    "question": "Yếu tố nào sau đây là quan trọng nhất để đánh giá chất lượng nội dung SEO?",
    "options": {
      "A": "Độ dài của bài viết.",
      "B": "Số lượng từ khóa được sử dụng.",
      "C": "Khả năng cung cấp thông tin hữu ích, chính xác và đáp ứng nhu cầu của người đọc.",
      "D": "Số lượng liên kết ngoài trỏ đến bài viết."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387954,
    "question": "SEO (Search Engine Optimization) cơ bản được định nghĩa là gì?",
    "options": {
      "A": "Quá trình tối ưu hóa trang web để tăng lưu lượng truy cập trực tiếp.",
      "B": "Quá trình tối ưu hóa trang web để cải thiện thứ hạng trên các trang kết quả tìm kiếm.",
      "C": "Quá trình xây dựng liên kết từ các trang web khác về trang web của bạn.",
      "D": "Quá trình thiết kế lại giao diện người dùng của trang web để thu hút khách truy cập."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387955,
    "question": "Trong SEO, thuật ngữ 'từ khóa' (keyword) dùng để chỉ điều gì?",
    "options": {
      "A": "Các từ hoặc cụm từ mà người dùng nhập vào ô tìm kiếm để tìm kiếm thông tin.",
      "B": "Các từ hoặc cụm từ được sử dụng để đặt tên miền cho website.",
      "C": "Các từ hoặc cụm từ được in đậm trong nội dung trang web để gây chú ý.",
      "D": "Các từ hoặc cụm từ được sử dụng làm tiêu đề cho các bài viết trên blog."
    },
    "correctAnswer": "A",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387956,
    "question": "Yếu tố nào sau đây **không** phải là một yếu tố SEO On-page?",
    "options": {
      "A": "Tối ưu hóa thẻ tiêu đề (Title tag) và mô tả meta (Meta description).",
      "B": "Xây dựng liên kết ngược (Backlink) từ các website khác.",
      "C": "Tối ưu hóa nội dung bài viết và cấu trúc URL.",
      "D": "Tối ưu hóa tốc độ tải trang và trải nghiệm người dùng trên website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387957,
    "question": "Vì sao tốc độ tải trang (page speed) lại quan trọng đối với SEO?",
    "options": {
      "A": "Vì tốc độ tải trang nhanh giúp giảm chi phí hosting.",
      "B": "Vì tốc độ tải trang nhanh giúp cải thiện trải nghiệm người dùng và tăng khả năng xếp hạng.",
      "C": "Vì tốc độ tải trang nhanh giúp website hiển thị đẹp hơn trên thiết bị di động.",
      "D": "Vì tốc độ tải trang nhanh giúp website bảo mật hơn trước các cuộc tấn công mạng."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387958,
    "question": "Trong SEO, 'Anchor text' là gì và nó có vai trò như thế nào?",
    "options": {
      "A": "Là văn bản hiển thị trên trang web, dùng để mô tả nội dung trang.",
      "B": "Là văn bản có chứa từ khóa chính, được in đậm để nhấn mạnh.",
      "C": "Là văn bản có thể nhấp vào được của một liên kết (link), giúp điều hướng người dùng và công cụ tìm kiếm.",
      "D": "Là văn bản ẩn trong mã nguồn HTML, chỉ công cụ tìm kiếm mới đọc được."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387959,
    "question": "Để nghiên cứu từ khóa, bạn có thể sử dụng công cụ nào sau đây?",
    "options": {
      "A": "Microsoft Word",
      "B": "Google Sheets",
      "C": "Google Keyword Planner",
      "D": "Adobe Photoshop"
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387960,
    "question": "Thẻ tiêu đề (Title tag) có vai trò quan trọng nhất trong việc SEO ở khía cạnh nào?",
    "options": {
      "A": "Giúp tăng tốc độ tải trang.",
      "B": "Giúp công cụ tìm kiếm hiểu chủ đề chính của trang và hiển thị tiêu đề hấp dẫn trên SERP.",
      "C": "Giúp website có giao diện đẹp mắt hơn.",
      "D": "Giúp website bảo mật thông tin người dùng."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387961,
    "question": "Liên kết nội bộ (Internal link) là gì và tại sao chúng quan trọng cho SEO?",
    "options": {
      "A": "Liên kết từ website của bạn đến website của đối thủ cạnh tranh, giúp tăng uy tín.",
      "B": "Liên kết từ các trang mạng xã hội về website của bạn, giúp tăng traffic.",
      "C": "Liên kết từ trang này sang trang khác trong cùng một website, giúp điều hướng người dùng và công cụ tìm kiếm.",
      "D": "Liên kết từ website của bạn đến các website có độ uy tín cao như Wikipedia."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387962,
    "question": "Trong SEO, 'Canonical tag' được sử dụng để giải quyết vấn đề gì?",
    "options": {
      "A": "Vấn đề website bị tấn công DDoS.",
      "B": "Vấn đề nội dung trùng lặp (duplicate content).",
      "C": "Vấn đề website bị nhiễm virus.",
      "D": "Vấn đề website không hiển thị đúng trên thiết bị di động."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387963,
    "question": "Ví dụ nào sau đây là một URL thân thiện với SEO?",
    "options": {
      "A": "www.example.com/p=123",
      "B": "www.example.com/category/product-id-567",
      "C": "www.example.com/index.php?page=product&id=567",
      "D": "www.example.com/#!product-page"
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387964,
    "question": "Meta description (Mô tả meta) là gì và nó hiển thị ở đâu?",
    "options": {
      "A": "Là đoạn văn bản mô tả ngắn gọn về website, hiển thị ở đầu trang web.",
      "B": "Là đoạn văn bản mô tả ngắn gọn về trang web, hiển thị dưới tiêu đề trang trên trang kết quả tìm kiếm.",
      "C": "Là đoạn văn bản mô tả chi tiết về sản phẩm, hiển thị trên trang sản phẩm.",
      "D": "Là đoạn văn bản mô tả về tác giả bài viết, hiển thị ở cuối bài viết."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387965,
    "question": "So sánh giữa SEO 'White hat' và 'Black hat', đâu là phương pháp SEO bền vững và được khuyến khích?",
    "options": {
      "A": "SEO Black hat, vì nó mang lại kết quả nhanh chóng hơn.",
      "B": "SEO White hat, vì nó tuân thủ nguyên tắc của công cụ tìm kiếm và tập trung vào người dùng.",
      "C": "Cả hai phương pháp đều bền vững nếu thực hiện đúng cách.",
      "D": "Không có phương pháp nào thực sự bền vững trong SEO."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387966,
    "question": "Robot.txt là file gì và nó có chức năng gì trong SEO?",
    "options": {
      "A": "Là file chứa thông tin bản quyền website, giúp bảo vệ nội dung.",
      "B": "Là file hướng dẫn công cụ tìm kiếm cách lập chỉ mục (index) website.",
      "C": "Là file chứa mã nguồn website, giúp website hoạt động.",
      "D": "Là file thống kê lưu lượng truy cập website, giúp theo dõi hiệu quả SEO."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387967,
    "question": "Khi website của bạn bị phạt bởi Google (Google penalty), hậu quả trực tiếp nhất là gì?",
    "options": {
      "A": "Website bị xóa khỏi kết quả tìm kiếm.",
      "B": "Website bị giảm thứ hạng nghiêm trọng trên kết quả tìm kiếm.",
      "C": "Website bị chặn truy cập từ người dùng.",
      "D": "Website bị tăng chi phí quảng cáo Google Ads."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387968,
    "question": "Điều gì sau đây **không** phải là mục tiêu chính của SEO?",
    "options": {
      "A": "Tăng nhận diện thương hiệu trên môi trường trực tuyến.",
      "B": "Tăng doanh số bán hàng và lợi nhuận.",
      "C": "Thu hút lưu lượng truy cập chất lượng, đúng đối tượng mục tiêu.",
      "D": "Tối ưu hóa giao diện người dùng để website trở nên đẹp mắt nhất."
    },
    "correctAnswer": "D",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387969,
    "question": "SEO (Tối ưu hóa công cụ tìm kiếm) là gì?",
    "options": {
      "A": "Một loại hình quảng cáo trực tuyến trả tiền để website hiển thị ở vị trí đầu trang kết quả tìm kiếm.",
      "B": "Quá trình thiết kế lại giao diện website cho đẹp mắt và thu hút người dùng hơn.",
      "C": "Tập hợp các kỹ thuật nhằm nâng cao thứ hạng của website trên các trang kết quả tìm kiếm tự nhiên.",
      "D": "Phương pháp bảo mật website khỏi các cuộc tấn công mạng và virus."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387970,
    "question": "Yếu tố nào sau đây **không** phải là yếu tố SEO On-page?",
    "options": {
      "A": "Tối ưu thẻ tiêu đề (Title tag) và thẻ mô tả (Meta description).",
      "B": "Xây dựng liên kết (backlink) từ các website khác.",
      "C": "Tối ưu tốc độ tải trang của website.",
      "D": "Sử dụng từ khóa mục tiêu trong nội dung bài viết."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387971,
    "question": "Mục đích chính của việc nghiên cứu từ khóa (keyword research) trong SEO là gì?",
    "options": {
      "A": "Để tăng lượng truy cập trực tiếp vào website từ các nguồn không phải công cụ tìm kiếm.",
      "B": "Để xác định những từ và cụm từ mà khách hàng mục tiêu sử dụng khi tìm kiếm thông tin liên quan đến sản phẩm/dịch vụ.",
      "C": "Để website được thiết kế đẹp mắt và chuyên nghiệp hơn.",
      "D": "Để website được bảo mật tốt hơn và tránh bị hack."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387972,
    "question": "Trong SEO, thuật ngữ 'Long-tail keyword' thường được dùng để chỉ loại từ khóa nào?",
    "options": {
      "A": "Từ khóa ngắn gọn, có tính cạnh tranh cao và lượng tìm kiếm lớn.",
      "B": "Từ khóa là tên thương hiệu của doanh nghiệp.",
      "C": "Từ khóa dài, cụ thể, ít cạnh tranh và thường có lượng tìm kiếm thấp hơn.",
      "D": "Từ khóa được sử dụng trong quảng cáo trả phí (PPC)."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387973,
    "question": "Tại sao tốc độ tải trang (page speed) lại quan trọng đối với SEO?",
    "options": {
      "A": "Vì tốc độ tải trang nhanh giúp website hiển thị đẹp hơn trên các thiết bị di động.",
      "B": "Vì tốc độ tải trang nhanh cải thiện trải nghiệm người dùng, giảm tỷ lệ thoát trang và được Google đánh giá cao.",
      "C": "Vì tốc độ tải trang nhanh giúp website bảo mật hơn trước các cuộc tấn công mạng.",
      "D": "Vì tốc độ tải trang nhanh giúp website dễ dàng tích hợp với các mạng xã hội."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387974,
    "question": "Liên kết nội bộ (internal link) đóng vai trò gì trong SEO?",
    "options": {
      "A": "Chủ yếu dùng để dẫn người dùng đến các website khác bên ngoài website của bạn.",
      "B": "Giúp người dùng dễ dàng điều hướng và khám phá nội dung trên website, đồng thời giúp bot công cụ tìm kiếm thu thập dữ liệu website hiệu quả hơn.",
      "C": "Chỉ có tác dụng tăng tính thẩm mỹ cho website, không ảnh hưởng đến SEO.",
      "D": "Chỉ quan trọng đối với SEO Off-page, không liên quan đến SEO On-page."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387975,
    "question": "Trong các yếu tố sau, yếu tố nào ảnh hưởng **trực tiếp nhất** đến thứ hạng website trên kết quả tìm kiếm?",
    "options": {
      "A": "Số lượng bài viết được đăng tải trên website mỗi ngày.",
      "B": "Chất lượng và mức độ liên quan của nội dung website với truy vấn tìm kiếm của người dùng.",
      "C": "Màu sắc chủ đạo của website.",
      "D": "Số lượng quảng cáo hiển thị trên website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387976,
    "question": "Bạn nhận thấy website của mình có tỷ lệ thoát trang (bounce rate) cao bất thường. Điều này có thể ảnh hưởng đến SEO như thế nào?",
    "options": {
      "A": "Không ảnh hưởng gì đến SEO, vì tỷ lệ thoát trang chỉ liên quan đến trải nghiệm người dùng.",
      "B": "Có thể khiến thứ hạng website giảm xuống vì Google đánh giá website không cung cấp nội dung hữu ích hoặc trải nghiệm kém.",
      "C": "Thúc đẩy thứ hạng website tăng lên vì Google đánh giá website có nhiều người truy cập nhưng không tương tác.",
      "D": "Chỉ ảnh hưởng đến SEO khi tỷ lệ thoát trang vượt quá 90%."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387977,
    "question": "Bạn muốn tối ưu hóa hình ảnh trên website cho SEO. Bạn nên thực hiện hành động nào sau đây?",
    "options": {
      "A": "Sử dụng hình ảnh có độ phân giải cao nhất có thể để đảm bảo chất lượng hiển thị.",
      "B": "Đặt tên file hình ảnh chứa từ khóa liên quan và sử dụng thuộc tính alt text mô tả hình ảnh.",
      "C": "Chèn thật nhiều hình ảnh vào mỗi bài viết để tăng tính hấp dẫn.",
      "D": "Sử dụng định dạng hình ảnh BMP vì định dạng này cho chất lượng tốt nhất."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387978,
    "question": "Sự khác biệt chính giữa SEO On-page và SEO Off-page là gì?",
    "options": {
      "A": "SEO On-page tập trung vào tốc độ tải trang, SEO Off-page tập trung vào nội dung.",
      "B": "SEO On-page tập trung vào tối ưu các yếu tố bên trong website, SEO Off-page tập trung vào các hoạt động bên ngoài website.",
      "C": "SEO On-page chỉ dành cho website mới, SEO Off-page dành cho website đã hoạt động lâu năm.",
      "D": "SEO On-page là miễn phí, SEO Off-page thường tốn phí."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387979,
    "question": "Ví dụ nào sau đây là một backlink chất lượng?",
    "options": {
      "A": "Backlink từ một website không liên quan đến lĩnh vực của bạn, có thứ hạng thấp và nhiều quảng cáo.",
      "B": "Backlink từ một diễn đàn trực tuyến nơi ai cũng có thể tự do đăng bài và chèn link.",
      "C": "Backlink từ một website uy tín, có liên quan đến lĩnh vực của bạn và có nội dung chất lượng.",
      "D": "Backlink từ website của đối thủ cạnh tranh trực tiếp."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387980,
    "question": "Thẻ tiêu đề (Title tag) có vai trò gì trong SEO?",
    "options": {
      "A": "Chỉ hiển thị trên trang quản trị website, không ảnh hưởng đến SEO.",
      "B": "Là tiêu đề chính của trang, hiển thị trên trang kết quả tìm kiếm và trên tab trình duyệt, giúp người dùng và công cụ tìm kiếm hiểu nội dung trang.",
      "C": "Chỉ dùng để trang trí website, không có chức năng gì khác.",
      "D": "Là phần mô tả chi tiết về sản phẩm/dịch vụ trên trang web."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387981,
    "question": "Phương pháp SEO 'Black Hat' là gì?",
    "options": {
      "A": "Các kỹ thuật SEO tuân thủ theo nguyên tắc của công cụ tìm kiếm và tập trung vào trải nghiệm người dùng.",
      "B": "Các kỹ thuật SEO sử dụng hình thức quảng cáo trả phí để tăng thứ hạng nhanh chóng.",
      "C": "Các kỹ thuật SEO vi phạm nguyên tắc của công cụ tìm kiếm, nhằm mục đích tăng thứ hạng nhanh nhưng không bền vững và có thể bị phạt.",
      "D": "Các kỹ thuật SEO tập trung vào xây dựng liên kết từ các trang mạng xã hội."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387982,
    "question": "Trong SEO, 'Anchor text' là gì?",
    "options": {
      "A": "Văn bản mô tả hình ảnh trong thẻ alt.",
      "B": "Văn bản hiển thị của một liên kết (link) mà người dùng có thể nhấp vào.",
      "C": "Tiêu đề chính của bài viết (Heading 1).",
      "D": "Đoạn văn bản tóm tắt nội dung trang (Meta description)."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387983,
    "question": "Công cụ nào của Google giúp bạn theo dõi và phân tích hiệu quả SEO của website?",
    "options": {
      "A": "Google Ads.",
      "B": "Google Analytics.",
      "C": "Google Search Console.",
      "D": "Google Drive."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387984,
    "question": "SEO là viết tắt của cụm từ nào và mô tả về hoạt động gì?",
    "options": {
      "A": "Search Engine Optimization, tối ưu hóa trang web để hiển thị đẹp trên các thiết bị.",
      "B": "Social Engagement Optimization, tối ưu hóa nội dung để tăng tương tác trên mạng xã hội.",
      "C": "Search Engine Organization, tổ chức dữ liệu của các công cụ tìm kiếm.",
      "D": "Search Engine Optimization, tối ưu hóa trang web để nâng cao thứ hạng trên công cụ tìm kiếm."
    },
    "correctAnswer": "D",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387985,
    "question": "Tại sao nghiên cứu từ khóa lại đóng vai trò quan trọng trong SEO?",
    "options": {
      "A": "Giúp trang web tải nhanh hơn, cải thiện trải nghiệm người dùng.",
      "B": "Giúp xác định nội dung mà người dùng tìm kiếm, từ đó tạo nội dung phù hợp và thu hút đúng đối tượng.",
      "C": "Giúp trang web có giao diện đẹp mắt và chuyên nghiệp hơn.",
      "D": "Giúp tăng lượng truy cập trực tiếp vào trang web từ các nguồn không phải công cụ tìm kiếm."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387986,
    "question": "Trong các hoạt động SEO On-page sau, hoạt động nào trực tiếp tác động đến trải nghiệm người dùng (UX) trên trang web?",
    "options": {
      "A": "Xây dựng liên kết nội bộ (internal linking) giữa các trang.",
      "B": "Tối ưu hóa thẻ tiêu đề (title tag) và thẻ mô tả (meta description).",
      "C": "Tối ưu hóa tốc độ tải trang (page speed).",
      "D": "Nghiên cứu và lựa chọn từ khóa mục tiêu phù hợp."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387987,
    "question": "Sự khác biệt chính giữa SEO On-page và SEO Off-page là gì?",
    "options": {
      "A": "SEO On-page tập trung vào yếu tố kỹ thuật, SEO Off-page tập trung vào yếu tố nội dung.",
      "B": "SEO On-page là tối ưu hóa bên trong trang web, SEO Off-page là xây dựng uy tín và độ tin cậy từ bên ngoài trang web.",
      "C": "SEO On-page chỉ quan trọng với trang web mới, SEO Off-page quan trọng hơn với trang web lâu năm.",
      "D": "SEO On-page là tối ưu cho Google, SEO Off-page là tối ưu cho các công cụ tìm kiếm khác."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387988,
    "question": "Hành động nào sau đây được coi là 'Black Hat SEO' và có thể gây ra hình phạt từ công cụ tìm kiếm?",
    "options": {
      "A": "Sử dụng từ khóa mục tiêu trong tiêu đề trang và mô tả.",
      "B": "Tạo nội dung chất lượng, độc đáo và hữu ích cho người đọc.",
      "C": "Nhồi nhét từ khóa (keyword stuffing) quá mức trong nội dung.",
      "D": "Xây dựng liên kết tự nhiên từ các trang web có liên quan."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387989,
    "question": "SEO (Tối ưu hóa Công cụ Tìm kiếm) là gì?",
    "options": {
      "A": "Một phương pháp xây dựng liên kết chất lượng cao.",
      "B": "Quá trình tăng cường khả năng hiển thị của trang web trên các công cụ tìm kiếm.",
      "C": "Một hình thức quảng cáo trả phí trên Google.",
      "D": "Kỹ thuật thiết kế web thân thiện với người dùng."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387990,
    "question": "Yếu tố nào sau đây **không** phải là yếu tố SEO On-page?",
    "options": {
      "A": "Tối ưu hóa thẻ tiêu đề (Title tag).",
      "B": "Xây dựng liên kết ngược (Backlink).",
      "C": "Tối ưu hóa nội dung bài viết.",
      "D": "Tối ưu hóa thẻ mô tả meta (Meta description)."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387991,
    "question": "Tại sao nghiên cứu từ khóa (Keyword research) lại quan trọng trong SEO?",
    "options": {
      "A": "Để tăng tốc độ tải trang web.",
      "B": "Để hiểu người dùng tìm kiếm thông tin gì và sử dụng ngôn ngữ nào.",
      "C": "Để cải thiện thiết kế giao diện người dùng (UI/UX).",
      "D": "Để giảm chi phí quảng cáo trực tuyến."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387992,
    "question": "Thẻ tiêu đề (Title tag) và thẻ mô tả meta (Meta description) hiển thị ở đâu trên trang kết quả tìm kiếm của Google?",
    "options": {
      "A": "Ở cuối trang web.",
      "B": "Trong phần nội dung chính của trang web.",
      "C": "Là tiêu đề và đoạn mô tả ngắn hiển thị dưới tiêu đề trang web trong kết quả tìm kiếm.",
      "D": "Trong thanh địa chỉ trình duyệt."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387993,
    "question": "Liên kết nội bộ (Internal link) mang lại lợi ích gì cho SEO?",
    "options": {
      "A": "Tăng số lượng backlink từ các trang web khác.",
      "B": "Giúp người dùng dễ dàng điều hướng và khám phá nội dung trên website, đồng thời giúp công cụ tìm kiếm thu thập dữ liệu trang web hiệu quả hơn.",
      "C": "Giảm thời gian tải trang web.",
      "D": "Cải thiện tốc độ index trang web trên Google Search Console."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387994,
    "question": "Trong SEO, 'từ khóa đuôi dài' (Long-tail keyword) thường có đặc điểm gì?",
    "options": {
      "A": "Ngắn gọn, chỉ gồm 1-2 từ.",
      "B": "Có lượng tìm kiếm rất lớn.",
      "C": "Dài hơn, cụ thể hơn và có lượng tìm kiếm thấp hơn so với từ khóa chính.",
      "D": "Luôn là tên thương hiệu của sản phẩm hoặc dịch vụ."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387995,
    "question": "Để kiểm tra thứ hạng từ khóa của website trên Google, bạn có thể sử dụng công cụ nào sau đây?",
    "options": {
      "A": "Google Analytics.",
      "B": "Google Search Console.",
      "C": "Google Ads.",
      "D": "Google Tag Manager."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387996,
    "question": "So sánh sự khác biệt chính giữa SEO 'mũ trắng' (White hat SEO) và SEO 'mũ đen' (Black hat SEO).",
    "options": {
      "A": "SEO mũ trắng tập trung vào tốc độ, SEO mũ đen tập trung vào chất lượng.",
      "B": "SEO mũ trắng tuân thủ nguyên tắc của công cụ tìm kiếm và hướng đến bền vững, SEO mũ đen sử dụng các thủ thuật gian lận để đạt kết quả nhanh chóng nhưng rủi ro bị phạt cao.",
      "C": "SEO mũ trắng chỉ sử dụng liên kết nội bộ, SEO mũ đen chỉ sử dụng backlink.",
      "D": "SEO mũ trắng miễn phí, SEO mũ đen tốn phí."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387997,
    "question": "Nguyên nhân chính khiến một trang web có thể bị 'phạt' (penalty) bởi Google là gì?",
    "options": {
      "A": "Sử dụng quá nhiều hình ảnh trên trang web.",
      "B": "Thời gian tải trang quá nhanh.",
      "C": "Vi phạm các nguyên tắc của Google, ví dụ như nhồi nhét từ khóa (keyword stuffing) hoặc sử dụng backlink kém chất lượng.",
      "D": "Không có phiên bản di động của trang web."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387998,
    "question": "Ví dụ nào sau đây là một URL thân thiện với SEO?",
    "options": {
      "A": "www.example.com/p=123",
      "B": "www.example.com/category/product-id-567",
      "C": "www.example.com/danh-muc/san-pham-nay",
      "D": "www.example.com/bai-viet-ve-seo-co-ban"
    },
    "correctAnswer": "D",
    "source": "Imported from Word"
  },
  {
    "id": 1744611387999,
    "question": "Thẻ Heading (H1, H2, H3...) có vai trò gì trong SEO?",
    "options": {
      "A": "Chỉ dùng để định dạng văn bản cho đẹp mắt.",
      "B": "Giúp công cụ tìm kiếm hiểu cấu trúc nội dung và xác định các chủ đề chính, phụ của trang, đồng thời cải thiện khả năng đọc của người dùng.",
      "C": "Tăng tốc độ tải trang web.",
      "D": "Thay thế cho thẻ tiêu đề (Title tag)."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388000,
    "question": "Tối ưu hóa hình ảnh trong SEO bao gồm những công việc nào?",
    "options": {
      "A": "Tăng kích thước hình ảnh để hiển thị rõ nét hơn.",
      "B": "Sử dụng hình ảnh chất lượng cao, nén dung lượng hình ảnh, đặt tên file và thẻ ALT chứa từ khóa liên quan.",
      "C": "Chèn nhiều hình ảnh động (GIF) vào trang web.",
      "D": "Sử dụng định dạng hình ảnh BMP."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388001,
    "question": "Trong SEO, chỉ số 'tỷ lệ thoát' (Bounce rate) cao thường biểu thị điều gì?",
    "options": {
      "A": "Trang web có nội dung chất lượng cao và thu hút người dùng.",
      "B": "Trang web có nhiều liên kết nội bộ.",
      "C": "Người dùng không tìm thấy thông tin hữu ích hoặc trang web có trải nghiệm người dùng kém (tốc độ chậm, thiết kế rối mắt...).",
      "D": "Trang web được tối ưu hóa tốt cho thiết bị di động."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388002,
    "question": "Điều gì xảy ra khi bạn không tối ưu hóa website cho thiết bị di động (Mobile-friendly)?",
    "options": {
      "A": "Website sẽ hiển thị đẹp hơn trên máy tính.",
      "B": "Website có thể bị tụt hạng trên kết quả tìm kiếm của Google khi người dùng tìm kiếm trên thiết bị di động, do Google ưu tiên các website thân thiện với di động.",
      "C": "Website sẽ tải nhanh hơn trên thiết bị di động.",
      "D": "Không có ảnh hưởng gì đến SEO."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388003,
    "question": "Mục tiêu chính của SEO là gì trong dài hạn?",
    "options": {
      "A": "Tăng nhanh lưu lượng truy cập website trong thời gian ngắn.",
      "B": "Xây dựng sự hiện diện trực tuyến bền vững, thu hút lưu lượng truy cập tự nhiên chất lượng cao và tăng nhận diện thương hiệu.",
      "C": "Giảm chi phí quảng cáo trả phí.",
      "D": "Vượt qua đối thủ cạnh tranh bằng mọi giá."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388004,
    "question": "Mục tiêu chính của SEO (Tối ưu hóa Công cụ Tìm kiếm) là gì?",
    "options": {
      "A": "Tăng lưu lượng truy cập không phải trả tiền từ các công cụ tìm kiếm đến trang web.",
      "B": "Tăng cường nhận diện thương hiệu trên mạng xã hội.",
      "C": "Thiết kế lại giao diện người dùng của trang web.",
      "D": "Chạy quảng cáo trả phí trên các công cụ tìm kiếm."
    },
    "correctAnswer": "A",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388005,
    "question": "Yếu tố nào sau đây **không** phải là một yếu tố SEO On-page?",
    "options": {
      "A": "Tối ưu hóa thẻ tiêu đề (Title tag).",
      "B": "Xây dựng liên kết ngược (Backlink).",
      "C": "Tối ưu hóa nội dung bài viết.",
      "D": "Tối ưu hóa thẻ mô tả meta (Meta description)."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388006,
    "question": "Tại sao tốc độ tải trang (Page speed) lại quan trọng đối với SEO?",
    "options": {
      "A": "Tốc độ tải trang nhanh giúp trang web trông chuyên nghiệp hơn.",
      "B": "Tốc độ tải trang nhanh cải thiện trải nghiệm người dùng và là một yếu tố xếp hạng của Google.",
      "C": "Tốc độ tải trang nhanh giúp tiết kiệm chi phí hosting.",
      "D": "Tốc độ tải trang nhanh giúp tăng cường bảo mật cho trang web."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388007,
    "question": "Từ khóa đuôi dài (Long-tail keyword) thường có đặc điểm gì?",
    "options": {
      "A": "Có lượng tìm kiếm rất cao và độ cạnh tranh lớn.",
      "B": "Ngắn gọn, chung chung và khó xác định mục tiêu.",
      "C": "Dài hơn, cụ thể hơn và thường có lượng tìm kiếm thấp hơn nhưng tỷ lệ chuyển đổi cao hơn.",
      "D": "Chỉ được sử dụng trong quảng cáo trả phí, không liên quan đến SEO tự nhiên."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388008,
    "question": "Liên kết nội bộ (Internal link) có vai trò gì trong SEO?",
    "options": {
      "A": "Chỉ giúp người dùng dễ dàng điều hướng trên trang web.",
      "B": "Chỉ giúp tăng thời gian người dùng ở lại trên trang web.",
      "C": "Giúp công cụ tìm kiếm hiểu rõ hơn cấu trúc trang web, phân phối sức mạnh liên kết và cải thiện trải nghiệm người dùng.",
      "D": "Không có vai trò gì đáng kể trong SEO, chỉ là yếu tố phụ."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388009,
    "question": "Điều gì sẽ xảy ra nếu một trang web sử dụng quá nhiều từ khóa (Keyword stuffing) trong nội dung?",
    "options": {
      "A": "Trang web sẽ nhanh chóng đạt được thứ hạng cao trên công cụ tìm kiếm.",
      "B": "Trang web có thể bị phạt bởi công cụ tìm kiếm do vi phạm nguyên tắc SEO.",
      "C": "Không có ảnh hưởng gì, keyword stuffing là một kỹ thuật SEO hiệu quả.",
      "D": "Trang web sẽ được đánh giá cao về độ chuyên nghiệp và nội dung chất lượng."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388010,
    "question": "Trong SEO Local (SEO địa phương), yếu tố nào sau đây quan trọng nhất để cải thiện thứ hạng?",
    "options": {
      "A": "Số lượng bài viết blog được đăng tải hàng tuần.",
      "B": "Hồ sơ Google Doanh nghiệp của tôi (Google My Business) được tối ưu hóa và nhất quán.",
      "C": "Số lượng liên kết ngược từ các trang web quốc tế.",
      "D": "Mật độ từ khóa trong nội dung trang chủ."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388011,
    "question": "Thẻ mô tả meta (Meta description) hiển thị ở đâu trong kết quả tìm kiếm của Google?",
    "options": {
      "A": "Ở đầu trang web, phía trên tiêu đề.",
      "B": "Ở cuối trang web, dưới chân trang.",
      "C": "Ngay bên dưới tiêu đề trang web trong kết quả tìm kiếm.",
      "D": "Không hiển thị công khai, chỉ công cụ tìm kiếm đọc được."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388012,
    "question": "Công cụ nào của Google giúp bạn theo dõi hiệu suất SEO của trang web, bao gồm lưu lượng truy cập, thứ hạng từ khóa?",
    "options": {
      "A": "Google Ads.",
      "B": "Google Analytics.",
      "C": "Google Search Console.",
      "D": "Google Tag Manager."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388013,
    "question": "Tại sao việc xây dựng liên kết ngược (Backlink) từ các trang web uy tín lại quan trọng?",
    "options": {
      "A": "Giúp trang web tải nhanh hơn.",
      "B": "Tăng cường bảo mật cho trang web.",
      "C": "Tăng độ tin cậy và thẩm quyền của trang web trong mắt công cụ tìm kiếm.",
      "D": "Chỉ giúp tăng lưu lượng truy cập trực tiếp đến trang web."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388014,
    "question": "So sánh giữa SEO mũ trắng (White hat SEO) và SEO mũ đen (Black hat SEO), phương pháp nào bền vững và mang lại hiệu quả lâu dài?",
    "options": {
      "A": "SEO mũ đen, vì nó nhanh chóng mang lại kết quả.",
      "B": "Cả hai phương pháp đều có hiệu quả như nhau.",
      "C": "SEO mũ trắng, vì tuân thủ nguyên tắc của công cụ tìm kiếm và tập trung vào giá trị cho người dùng.",
      "D": "Tùy thuộc vào lĩnh vực và mục tiêu của trang web."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388015,
    "question": "Nếu thứ hạng từ khóa của trang web giảm đột ngột, nguyên nhân phổ biến nhất có thể là gì?",
    "options": {
      "A": "Do trang web đã bị tấn công DDoS.",
      "B": "Do đối thủ cạnh tranh tăng cường quảng cáo trả phí.",
      "C": "Do Google cập nhật thuật toán xếp hạng.",
      "D": "Do người dùng không còn quan tâm đến sản phẩm/dịch vụ của bạn."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388016,
    "question": "Ví dụ nào sau đây là hành động tối ưu hóa trải nghiệm người dùng (UX) có lợi cho SEO?",
    "options": {
      "A": "Chèn nhiều quảng cáo pop-up để tăng doanh thu.",
      "B": "Thiết kế trang web thân thiện với thiết bị di động (Mobile-friendly).",
      "C": "Sử dụng font chữ khó đọc để tạo sự khác biệt.",
      "D": "Ẩn nội dung quan trọng sau nút 'Xem thêm' để trang web ngắn gọn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388017,
    "question": "Robots.txt là file gì và có chức năng gì trong SEO?",
    "options": {
      "A": "File chứa thông tin bản quyền của trang web, giúp bảo vệ nội dung.",
      "B": "File văn bản hướng dẫn bot công cụ tìm kiếm cách thu thập dữ liệu và lập chỉ mục trang web.",
      "C": "File chứa danh sách từ khóa mục tiêu của trang web.",
      "D": "File mã nguồn chính của trang web, quyết định giao diện và chức năng."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388018,
    "question": "Ngoại trừ việc tối ưu hóa nội dung và liên kết, yếu tố kỹ thuật nào sau đây cũng rất quan trọng để đảm bảo trang web được lập chỉ mục (index) bởi Google?",
    "options": {
      "A": "Sử dụng nhiều màu sắc nổi bật trên trang web.",
      "B": "Có sơ đồ trang web (Sitemap) XML.",
      "C": "Tích hợp mạng xã hội vào trang web.",
      "D": "Sử dụng chứng chỉ SSL cho trang web."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388019,
    "question": "Mục tiêu chính của SEO (Tối ưu hóa Công cụ Tìm kiếm) là gì?",
    "options": {
      "A": "Tăng cường nhận diện thương hiệu trên mạng xã hội.",
      "B": "Cải thiện trải nghiệm người dùng trên website.",
      "C": "Nâng cao thứ hạng website trên các trang kết quả tìm kiếm.",
      "D": "Giảm chi phí quảng cáo trực tuyến."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388020,
    "question": "Tại sao nghiên cứu từ khóa (keyword research) lại quan trọng trong SEO?",
    "options": {
      "A": "Để thiết kế giao diện website hấp dẫn hơn.",
      "B": "Để hiểu rõ nhu cầu tìm kiếm của người dùng và tối ưu nội dung phù hợp.",
      "C": "Để tăng tốc độ tải trang của website.",
      "D": "Để xây dựng liên kết chất lượng từ các website khác."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388021,
    "question": "Trong SEO On-page, thẻ tiêu đề (title tag) có vai trò gì?",
    "options": {
      "A": "Hiển thị nội dung tóm tắt của trang trên trang kết quả tìm kiếm.",
      "B": "Xác định cấu trúc nội dung chính của trang cho người đọc.",
      "C": "Cung cấp thông tin liên hệ của doanh nghiệp.",
      "D": "Điều hướng người dùng đến các trang khác trên website."
    },
    "correctAnswer": "A",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388022,
    "question": "Sự khác biệt chính giữa SEO On-page và SEO Off-page là gì?",
    "options": {
      "A": "SEO On-page tập trung vào yếu tố bên ngoài website, SEO Off-page tập trung vào yếu tố bên trong website.",
      "B": "SEO On-page tập trung vào tối ưu kỹ thuật, SEO Off-page tập trung vào nội dung.",
      "C": "SEO On-page tập trung vào tối ưu các yếu tố trực tiếp trên website, SEO Off-page tập trung vào các hoạt động bên ngoài website.",
      "D": "SEO On-page dành cho website mới, SEO Off-page dành cho website đã hoạt động lâu."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388023,
    "question": "Điều gì có thể xảy ra nếu website của bạn có tốc độ tải trang chậm ảnh hưởng đến SEO?",
    "options": {
      "A": "Website sẽ được xếp hạng cao hơn vì được đánh giá là phức tạp.",
      "B": "Website có thể bị phạt bởi công cụ tìm kiếm và giảm thứ hạng.",
      "C": "Không có ảnh hưởng đáng kể đến thứ hạng SEO.",
      "D": "Website sẽ thu hút được nhiều người dùng hơn vì họ có thời gian chờ đợi."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388024,
    "question": "Ví dụ nào sau đây là một từ khóa đuôi dài (long-tail keyword)?",
    "options": {
      "A": "Điện thoại",
      "B": "Laptop",
      "C": "Mua điện thoại Samsung Galaxy S23 Ultra chính hãng ở Hà Nội",
      "D": "Giày thể thao nam"
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388025,
    "question": "Meta description là gì và nó hiển thị ở đâu?",
    "options": {
      "A": "Đoạn văn bản mô tả nội dung trang, hiển thị trong nội dung trang web.",
      "B": "Đoạn văn bản mô tả nội dung trang, hiển thị trong thẻ tiêu đề trang.",
      "C": "Đoạn văn bản mô tả nội dung trang, hiển thị dưới tiêu đề trang trên trang kết quả tìm kiếm.",
      "D": "Đoạn văn bản mô tả nội dung trang, hiển thị trong URL của trang."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388026,
    "question": "Tại sao backlink (liên kết ngược) lại quan trọng trong SEO Off-page?",
    "options": {
      "A": "Backlink giúp tăng tốc độ tải trang website.",
      "B": "Backlink giúp website hiển thị đẹp hơn trên thiết bị di động.",
      "C": "Backlink được xem như phiếu bầu tín nhiệm từ website khác, giúp tăng độ tin cậy và thứ hạng website.",
      "D": "Backlink giúp người dùng dễ dàng chia sẻ nội dung website lên mạng xã hội."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388027,
    "question": "Một tiệm bánh địa phương muốn cải thiện SEO để tiếp cận khách hàng gần khu vực. Chiến lược SEO nào họ nên tập trung?",
    "options": {
      "A": "SEO quốc tế.",
      "B": "SEO tổng thể.",
      "C": "SEO Local (SEO địa phương).",
      "D": "SEO video."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388028,
    "question": "Mục đích chính của sơ đồ trang web XML (XML sitemap) là gì?",
    "options": {
      "A": "Để cải thiện giao diện người dùng của website.",
      "B": "Để giúp công cụ tìm kiếm thu thập dữ liệu và lập chỉ mục website hiệu quả hơn.",
      "C": "Để tăng tốc độ tải trang website.",
      "D": "Để bảo mật thông tin website khỏi các cuộc tấn công mạng."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388029,
    "question": "Chỉ số nào sau đây giúp bạn đánh giá mức độ tương tác của người dùng với nội dung website?",
    "options": {
      "A": "Tỷ lệ thoát trang (Bounce Rate).",
      "B": "Thứ hạng từ khóa.",
      "C": "Số lượng backlink.",
      "D": "Lưu lượng truy cập tự nhiên."
    },
    "correctAnswer": "A",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388030,
    "question": "Công cụ nào của Google có thể được sử dụng để theo dõi hiệu suất website trên kết quả tìm kiếm?",
    "options": {
      "A": "Google Analytics.",
      "B": "Google Ads.",
      "C": "Google Search Console.",
      "D": "Google Tag Manager."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388031,
    "question": "Mua backlink (liên kết ngược) được coi là phương pháp SEO nào?",
    "options": {
      "A": "SEO mũ trắng (White hat SEO).",
      "B": "SEO mũ xám (Grey hat SEO).",
      "C": "SEO mũ đen (Black hat SEO).",
      "D": "SEO mũ xanh (Blue hat SEO)."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388032,
    "question": "Điều hướng website (website navigation) tốt đóng góp như thế nào vào SEO?",
    "options": {
      "A": "Không ảnh hưởng đến SEO.",
      "B": "Giúp tăng số lượng quảng cáo hiển thị trên website.",
      "C": "Giúp công cụ tìm kiếm dễ dàng thu thập dữ liệu và người dùng dễ dàng tìm kiếm thông tin, cải thiện trải nghiệm người dùng và SEO.",
      "D": "Giúp website có giao diện đẹp mắt hơn."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388033,
    "question": "Tại sao SEO được coi là một chiến lược marketing dài hạn?",
    "options": {
      "A": "Vì kết quả SEO đến ngay lập tức sau khi thực hiện.",
      "B": "Vì SEO chỉ cần thực hiện một lần là đủ.",
      "C": "Vì SEO đòi hỏi thời gian để xây dựng uy tín, nội dung chất lượng và liên kết, kết quả thường đến từ từ và bền vững.",
      "D": "Vì chi phí SEO rất cao nên cần thời gian dài để thu hồi vốn."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388034,
    "question": "Mục tiêu chính của SEO (Tối ưu hóa công cụ tìm kiếm) là gì?",
    "options": {
      "A": "Tăng lượng truy cập trực tiếp vào website.",
      "B": "Cải thiện trải nghiệm người dùng trên website.",
      "C": "Nâng cao thứ hạng website trên các trang kết quả tìm kiếm cho các từ khóa mục tiêu.",
      "D": "Tăng độ nhận diện thương hiệu trên mạng xã hội."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388035,
    "question": "Bạn viết một bài blog về '10 quán cà phê đẹp ở Hà Nội'. Theo bạn, hành động SEO đầu tiên và quan trọng nhất bạn nên thực hiện là gì để bài viết dễ dàng được tìm thấy trên Google?",
    "options": {
      "A": "Chia sẻ bài viết lên tất cả các mạng xã hội.",
      "B": "Xây dựng liên kết ngược (backlink) từ các website khác về bài viết.",
      "C": "Nghiên cứu từ khóa và tối ưu hóa tiêu đề, mô tả và nội dung bài viết xoay quanh các từ khóa liên quan đến 'quán cà phê đẹp ở Hà Nội'.",
      "D": "Chạy quảng cáo Google Ads để bài viết hiển thị ở vị trí đầu trang tìm kiếm."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388036,
    "question": "Trong SEO, 'từ khóa đuôi dài' (long-tail keyword) thường mang lại lợi ích gì so với 'từ khóa ngắn' (short-tail keyword)?",
    "options": {
      "A": "Từ khóa đuôi dài có lượng tìm kiếm cao hơn từ khóa ngắn.",
      "B": "Từ khóa đuôi dài dễ dàng đạt thứ hạng cao hơn và thu hút lưu lượng truy cập mục tiêu hơn.",
      "C": "Từ khóa đuôi dài giúp website nhanh chóng tăng trưởng thứ hạng tổng thể.",
      "D": "Từ khóa đuôi dài không quan trọng bằng từ khóa ngắn trong chiến lược SEO."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388037,
    "question": "Yếu tố nào sau đây KHÔNG phải là yếu tố SEO On-page?",
    "options": {
      "A": "Tối ưu hóa thẻ tiêu đề (Title tag) và thẻ mô tả (Meta description).",
      "B": "Xây dựng liên kết nội bộ (Internal linking) giữa các trang trên website.",
      "C": "Tốc độ tải trang của website.",
      "D": "Số lượng và chất lượng liên kết ngược (backlink) từ các website khác."
    },
    "correctAnswer": "D",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388038,
    "question": "Website của bạn bị tụt hạng nghiêm trọng trên Google sau một đợt cập nhật thuật toán. Nguyên nhân nào sau đây có khả năng CAO NHẤT gây ra tình trạng này?",
    "options": {
      "A": "Bạn vừa thay đổi giao diện website.",
      "B": "Bạn không cập nhật nội dung website trong một thời gian dài.",
      "C": "Website của bạn có nhiều liên kết hỏng (broken link).",
      "D": "Website của bạn sử dụng các kỹ thuật SEO mũ đen (black hat SEO) như nhồi nhét từ khóa hoặc cloaking."
    },
    "correctAnswer": "D",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388039,
    "question": "SEO (Search Engine Optimization) được định nghĩa chính xác nhất là gì?",
    "options": {
      "A": "Quá trình thiết kế lại giao diện website cho thân thiện với người dùng.",
      "B": "Tập hợp các kỹ thuật tối ưu hóa website để đạt thứ hạng cao trên trang kết quả tìm kiếm.",
      "C": "Chiến lược quảng bá thương hiệu trên mạng xã hội.",
      "D": "Phương pháp xây dựng liên kết với các website khác."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388040,
    "question": "Yếu tố nào sau đây **không phải** là yếu tố SEO On-page?",
    "options": {
      "A": "Tối ưu thẻ tiêu đề (Title tag) và mô tả meta (Meta description).",
      "B": "Xây dựng liên kết chất lượng từ các website khác.",
      "C": "Tối ưu tốc độ tải trang.",
      "D": "Sử dụng từ khóa mục tiêu trong nội dung."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388041,
    "question": "Mục đích chính của việc nghiên cứu từ khóa (Keyword Research) trong SEO là gì?",
    "options": {
      "A": "Để tạo ra danh sách các từ khóa đối thủ đang sử dụng.",
      "B": "Để xác định các từ khóa mà người dùng tiềm năng sử dụng khi tìm kiếm sản phẩm hoặc dịch vụ liên quan.",
      "C": "Để tăng số lượng từ khóa trên website.",
      "D": "Để cải thiện thứ hạng của website trên mạng xã hội."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388042,
    "question": "Thẻ tiêu đề (Title tag) có vai trò quan trọng như thế nào trong SEO?",
    "options": {
      "A": "Không quan trọng, chỉ cần tập trung vào nội dung.",
      "B": "Rất quan trọng, là một trong những yếu tố đầu tiên Google xem xét để hiểu nội dung trang.",
      "C": "Chỉ quan trọng đối với người dùng, không ảnh hưởng đến thứ hạng.",
      "D": "Chỉ quan trọng đối với SEO Off-page."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388043,
    "question": "Backlink (liên kết ngược) chất lượng có ý nghĩa gì đối với SEO Off-page?",
    "options": {
      "A": "Giảm độ tin cậy của website.",
      "B": "Tăng độ tin cậy và uy tín của website trong mắt công cụ tìm kiếm.",
      "C": "Không có ảnh hưởng gì đến SEO.",
      "D": "Chỉ giúp tăng lượng truy cập trực tiếp."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388044,
    "question": "Trong SEO kỹ thuật (Technical SEO), Sitemap XML có chức năng chính là gì?",
    "options": {
      "A": "Hiển thị bản đồ website cho người dùng.",
      "B": "Giúp công cụ tìm kiếm thu thập dữ liệu và lập chỉ mục website hiệu quả hơn.",
      "C": "Tăng tốc độ tải trang.",
      "D": "Ngăn chặn robot tìm kiếm truy cập website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388045,
    "question": "Yếu tố nào sau đây thể hiện sự thân thiện với thiết bị di động (Mobile-friendly) của một website, có lợi cho SEO?",
    "options": {
      "A": "Website có giao diện phức tạp và nhiều hiệu ứng.",
      "B": "Website có tốc độ tải trang chậm trên di động.",
      "C": "Website hiển thị tốt và dễ sử dụng trên nhiều kích thước màn hình khác nhau.",
      "D": "Website chỉ có phiên bản dành cho máy tính để bàn."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388046,
    "question": "Công cụ Google Analytics thường được sử dụng trong SEO để làm gì?",
    "options": {
      "A": "Kiểm tra lỗi chính tả trong nội dung.",
      "B": "Phân tích lưu lượng truy cập website, hành vi người dùng và hiệu quả các chiến dịch SEO.",
      "C": "Tạo sitemap XML.",
      "D": "Nghiên cứu từ khóa."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388047,
    "question": "Tốc độ tải trang chậm có thể ảnh hưởng tiêu cực đến SEO như thế nào?",
    "options": {
      "A": "Không ảnh hưởng gì.",
      "B": "Chỉ ảnh hưởng đến trải nghiệm người dùng, không ảnh hưởng đến thứ hạng.",
      "C": "Làm tăng tỷ lệ thoát trang (Bounce rate), giảm thứ hạng và trải nghiệm người dùng.",
      "D": "Giúp website được đánh giá cao hơn về mặt kỹ thuật."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388048,
    "question": "Nội dung trùng lặp (Duplicate content) trên website có thể gây ra hậu quả gì cho SEO?",
    "options": {
      "A": "Không ảnh hưởng gì.",
      "B": "Giúp website được xếp hạng cao hơn.",
      "C": "Bị công cụ tìm kiếm phạt, giảm thứ hạng hoặc thậm chí bị loại khỏi chỉ mục.",
      "D": "Chỉ ảnh hưởng đến SEO Off-page."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388049,
    "question": "Đâu là ví dụ về kỹ thuật SEO mũ đen (Black hat SEO) nên tránh?",
    "options": {
      "A": "Xây dựng nội dung chất lượng và hữu ích cho người dùng.",
      "B": "Tối ưu từ khóa một cách tự nhiên trong nội dung.",
      "C": "Nhồi nhét từ khóa (Keyword stuffing) quá mức vào nội dung.",
      "D": "Xây dựng liên kết từ các website uy tín liên quan đến lĩnh vực."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388050,
    "question": "Sự khác biệt chính giữa SEO 'mũ trắng' (White hat SEO) và 'mũ đen' (Black hat SEO) là gì?",
    "options": {
      "A": "Mũ trắng tập trung vào kỹ thuật, mũ đen tập trung vào nội dung.",
      "B": "Mũ trắng tuân thủ nguyên tắc của công cụ tìm kiếm, mũ đen cố gắng lách luật để đạt thứ hạng nhanh chóng.",
      "C": "Mũ trắng chỉ dành cho website lớn, mũ đen dành cho website nhỏ.",
      "D": "Mũ trắng là SEO On-page, mũ đen là SEO Off-page."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388051,
    "question": "Thuật toán của Google thay đổi thường xuyên nhằm mục đích gì?",
    "options": {
      "A": "Làm khó các chuyên gia SEO.",
      "B": "Tăng lợi nhuận cho Google.",
      "C": "Cải thiện trải nghiệm người dùng bằng cách cung cấp kết quả tìm kiếm phù hợp và chất lượng hơn.",
      "D": "Giảm thứ hạng của các website mới."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388052,
    "question": "Chỉ số CTR (Click-Through Rate) trong SEO thể hiện điều gì?",
    "options": {
      "A": "Tỷ lệ thoát trang.",
      "B": "Tỷ lệ người dùng nhấp vào liên kết website của bạn trên trang kết quả tìm kiếm so với số lần hiển thị.",
      "C": "Tỷ lệ chuyển đổi trên website.",
      "D": "Tỷ lệ trang được lập chỉ mục."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388053,
    "question": "Điều gì sẽ xảy ra nếu website của bạn không được tối ưu SEO?",
    "options": {
      "A": "Website sẽ tự động được xếp hạng cao trên Google.",
      "B": "Website có thể khó được tìm thấy bởi người dùng trên các công cụ tìm kiếm, dẫn đến giảm lượng truy cập tự nhiên.",
      "C": "Website sẽ chỉ phụ thuộc vào quảng cáo trả phí để có khách hàng.",
      "D": "Không có ảnh hưởng gì đáng kể."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388054,
    "question": "SEO (Tối ưu hóa công cụ tìm kiếm) là gì?",
    "options": {
      "A": "Một hình thức quảng cáo trả phí để website hiển thị đầu trang kết quả tìm kiếm.",
      "B": "Quá trình tăng cường bảo mật cho website.",
      "C": "Tập hợp các kỹ thuật nhằm nâng cao thứ hạng website trên các công cụ tìm kiếm.",
      "D": "Phương pháp thiết kế website thân thiện với người dùng."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388055,
    "question": "Yếu tố nào sau đây **không** phải là yếu tố SEO On-page?",
    "options": {
      "A": "Tối ưu hóa thẻ tiêu đề (Title tag).",
      "B": "Xây dựng liên kết ngoài (Backlink).",
      "C": "Tối ưu hóa nội dung bài viết.",
      "D": "Tối ưu hóa thẻ mô tả meta (Meta description)."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388056,
    "question": "Tại sao tốc độ tải trang (Page speed) lại quan trọng đối với SEO?",
    "options": {
      "A": "Vì tốc độ tải trang nhanh giúp website sử dụng ít tài nguyên máy chủ hơn.",
      "B": "Vì tốc độ tải trang nhanh cải thiện trải nghiệm người dùng, giảm tỷ lệ thoát trang và được công cụ tìm kiếm đánh giá cao.",
      "C": "Vì tốc độ tải trang nhanh giúp website hiển thị đẹp hơn trên các thiết bị di động.",
      "D": "Vì tốc độ tải trang nhanh giúp website dễ dàng chia sẻ lên mạng xã hội hơn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388057,
    "question": "Liên kết 'nofollow' được sử dụng khi nào?",
    "options": {
      "A": "Khi muốn tăng thứ hạng cho trang web liên kết.",
      "B": "Khi liên kết đến trang web có nội dung không đáng tin cậy hoặc không liên quan.",
      "C": "Khi muốn Googlebot thu thập dữ liệu trang web liên kết nhanh hơn.",
      "D": "Khi muốn cải thiện tốc độ tải trang web."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388058,
    "question": "Trong SEO, 'từ khóa đuôi dài' (Long-tail keyword) thường có đặc điểm gì?",
    "options": {
      "A": "Có lượng tìm kiếm rất lớn và độ cạnh tranh cao.",
      "B": "Có lượng tìm kiếm thấp hơn nhưng độ chuyển đổi thường cao hơn.",
      "C": "Chỉ bao gồm một hoặc hai từ.",
      "D": "Chỉ được sử dụng trong SEO Off-page."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388059,
    "question": "Công cụ nào sau đây KHÔNG phải là công cụ hỗ trợ nghiên cứu từ khóa?",
    "options": {
      "A": "Google Keyword Planner.",
      "B": "SEMrush.",
      "C": "Google Analytics.",
      "D": "Ahrefs."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388060,
    "question": "Mục đích chính của việc xây dựng liên kết (Link building) trong SEO là gì?",
    "options": {
      "A": "Tăng lượng truy cập trực tiếp vào website.",
      "B": "Cải thiện độ tin cậy và uy tín của website trong mắt công cụ tìm kiếm.",
      "C": "Giảm chi phí quảng cáo trực tuyến.",
      "D": "Tăng tốc độ tải trang website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388061,
    "question": "Robots.txt là file dùng để làm gì?",
    "options": {
      "A": "Xác minh quyền sở hữu website với Google Search Console.",
      "B": "Chặn các công cụ tìm kiếm thu thập dữ liệu (crawl) một số trang nhất định trên website.",
      "C": "Tạo sơ đồ website (sitemap) để công cụ tìm kiếm dễ dàng index.",
      "D": "Cài đặt mã theo dõi Google Analytics."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388062,
    "question": "Tại sao 'nội dung là vua' (Content is king) trong SEO?",
    "options": {
      "A": "Vì nội dung giúp website có giao diện đẹp mắt và thu hút người dùng.",
      "B": "Vì nội dung chất lượng, độc đáo và hữu ích đáp ứng nhu cầu người dùng và được công cụ tìm kiếm ưu tiên.",
      "C": "Vì nội dung giúp website tăng tốc độ tải trang.",
      "D": "Vì nội dung giúp website dễ dàng chia sẻ lên mạng xã hội."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388063,
    "question": "Ví dụ nào sau đây là hành vi 'Black hat SEO'?",
    "options": {
      "A": "Tối ưu hóa hình ảnh bằng thẻ 'alt'.",
      "B": "Xây dựng liên kết tự nhiên từ các website chất lượng.",
      "C": "Nhồi nhét từ khóa (Keyword stuffing) trong nội dung.",
      "D": "Cải thiện trải nghiệm người dùng trên website."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388064,
    "question": "Thẻ tiêu đề (Title tag) có vai trò quan trọng nhất trong SEO ở khía cạnh nào?",
    "options": {
      "A": "Hiển thị thông tin liên hệ của doanh nghiệp.",
      "B": "Mô tả ngắn gọn nội dung trang và hiển thị trên trang kết quả tìm kiếm.",
      "C": "Tăng tốc độ tải trang.",
      "D": "Giúp người dùng dễ dàng chia sẻ trang web lên mạng xã hội."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388065,
    "question": "SEO Local (SEO địa phương) tập trung vào đối tượng nào?",
    "options": {
      "A": "Khách hàng trên toàn thế giới.",
      "B": "Khách hàng trong một khu vực địa lý cụ thể.",
      "C": "Khách hàng sử dụng thiết bị di động.",
      "D": "Khách hàng truy cập website từ mạng xã hội."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388066,
    "question": "Điều gì xảy ra nếu website không thân thiện với thiết bị di động (Mobile-friendly)?",
    "options": {
      "A": "Website sẽ bị tấn công bởi hacker.",
      "B": "Website có thể bị tụt hạng trên kết quả tìm kiếm, đặc biệt trên thiết bị di động.",
      "C": "Website sẽ không hiển thị trên máy tính.",
      "D": "Website sẽ không thể kết nối với mạng xã hội."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388067,
    "question": "XML Sitemap có vai trò gì trong SEO?",
    "options": {
      "A": "Ngăn chặn spam bình luận trên website.",
      "B": "Cung cấp cho công cụ tìm kiếm sơ đồ website, giúp chúng dễ dàng thu thập dữ liệu và index trang.",
      "C": "Tăng cường bảo mật cho website.",
      "D": "Tối ưu hóa hình ảnh trên website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388068,
    "question": "Phân tích từ khóa (Keyword research) nên được thực hiện vào giai đoạn nào của quá trình SEO?",
    "options": {
      "A": "Sau khi website đã được xây dựng hoàn chỉnh và có nội dung.",
      "B": "Trong giai đoạn lập kế hoạch và xây dựng chiến lược SEO ban đầu.",
      "C": "Chỉ cần thực hiện một lần duy nhất khi bắt đầu làm SEO.",
      "D": "Chỉ thực hiện khi website bị tụt hạng."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388069,
    "question": "Mục tiêu chính của SEO (Tối ưu hóa Công cụ Tìm kiếm) là gì?",
    "options": {
      "A": "Tăng cường nhận diện thương hiệu trên mạng xã hội.",
      "B": "Tăng lưu lượng truy cập không phải trả tiền (organic traffic) đến trang web từ các công cụ tìm kiếm.",
      "C": "Thiết kế lại giao diện trang web cho đẹp mắt hơn.",
      "D": "Giảm chi phí quảng cáo trả phí trực tuyến."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388070,
    "question": "Yếu tố nào sau đây **không** phải là một yếu tố SEO On-page?",
    "options": {
      "A": "Tối ưu hóa thẻ tiêu đề (Title tag).",
      "B": "Xây dựng liên kết ngược (backlink) từ các trang web khác.",
      "C": "Tối ưu hóa nội dung bài viết.",
      "D": "Cải thiện tốc độ tải trang."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388071,
    "question": "Tại sao nghiên cứu từ khóa (keyword research) lại quan trọng trong SEO?",
    "options": {
      "A": "Giúp xác định màu sắc chủ đạo phù hợp cho trang web.",
      "B": "Giúp hiểu được người dùng đang tìm kiếm thông tin gì và sử dụng ngôn ngữ nào.",
      "C": "Giúp tăng tốc độ tải trang web.",
      "D": "Giúp tạo ra nhiều liên kết nội bộ hơn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388072,
    "question": "Thẻ tiêu đề (Title tag) có vai trò gì trong SEO?",
    "options": {
      "A": "Hiển thị nội dung tóm tắt của toàn bộ trang web trên trang chủ.",
      "B": "Mô tả ngắn gọn nội dung chính của trang web trên trang kết quả tìm kiếm (SERP).",
      "C": "Chứa thông tin bản quyền của trang web.",
      "D": "Xác định ngôn ngữ chính của trang web."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388073,
    "question": "Liên kết nội bộ (internal link) mang lại lợi ích SEO nào?",
    "options": {
      "A": "Tăng số lượng backlink từ các trang web khác.",
      "B": "Giúp người dùng dễ dàng điều hướng và khám phá nội dung trên trang web, đồng thời giúp công cụ tìm kiếm thu thập dữ liệu trang web hiệu quả hơn.",
      "C": "Tăng tốc độ tải trang web.",
      "D": "Cải thiện thứ hạng trang web trên mạng xã hội."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388074,
    "question": "Đâu là ví dụ về từ khóa đuôi dài (long-tail keyword)?",
    "options": {
      "A": "Điện thoại.",
      "B": "Mua điện thoại.",
      "C": "Điện thoại Samsung.",
      "D": "Mua điện thoại Samsung Galaxy S23 Ultra chính hãng giá rẻ ở Hà Nội."
    },
    "correctAnswer": "D",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388075,
    "question": "Tốc độ tải trang web chậm có thể ảnh hưởng tiêu cực đến SEO như thế nào?",
    "options": {
      "A": "Không ảnh hưởng đến SEO.",
      "B": "Chỉ ảnh hưởng đến trải nghiệm người dùng, không ảnh hưởng đến thứ hạng.",
      "C": "Tăng tỷ lệ thoát trang (bounce rate), giảm thời gian người dùng ở lại trang (dwell time), và có thể bị công cụ tìm kiếm đánh giá thấp hơn.",
      "D": "Chỉ ảnh hưởng đến SEO trên thiết bị di động, không ảnh hưởng trên máy tính."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388076,
    "question": "Mục đích chính của việc sử dụng thẻ mô tả meta (meta description) là gì?",
    "options": {
      "A": "Để cải thiện tốc độ tải trang.",
      "B": "Để hiển thị hình ảnh đại diện của trang web trên SERP.",
      "C": "Để cung cấp một đoạn mô tả ngắn gọn, hấp dẫn về nội dung trang web, khuyến khích người dùng nhấp vào liên kết trên SERP.",
      "D": "Để xác định từ khóa chính của trang web cho công cụ tìm kiếm."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388077,
    "question": "Backlink chất lượng là gì và tại sao chúng quan trọng đối với SEO?",
    "options": {
      "A": "Backlink chất lượng là liên kết từ bất kỳ trang web nào, số lượng càng nhiều càng tốt.",
      "B": "Backlink chất lượng là liên kết từ các trang web uy tín, liên quan đến chủ đề trang web của bạn, giúp tăng độ tin cậy và thứ hạng.",
      "C": "Backlink chất lượng là liên kết nội bộ giữa các trang trong cùng một website.",
      "D": "Backlink chất lượng là liên kết từ các trang mạng xã hội."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388078,
    "question": "Công cụ nào sau đây **không** phải là công cụ SEO cơ bản?",
    "options": {
      "A": "Google Search Console.",
      "B": "Google Analytics.",
      "C": "Google Ads.",
      "D": "Ahrefs (hoặc SEMrush, tùy chọn công cụ trả phí)."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388079,
    "question": "Sitemap XML có vai trò gì trong SEO?",
    "options": {
      "A": "Tăng tốc độ tải trang web.",
      "B": "Giúp công cụ tìm kiếm thu thập dữ liệu và lập chỉ mục (index) trang web hiệu quả hơn bằng cách cung cấp sơ đồ cấu trúc trang web.",
      "C": "Cải thiện trải nghiệm người dùng trên trang web.",
      "D": "Tăng cường bảo mật cho trang web."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388080,
    "question": "Phương pháp SEO 'mũ trắng' (White hat SEO) khác biệt với 'mũ đen' (Black hat SEO) như thế nào?",
    "options": {
      "A": "SEO mũ trắng tập trung vào kỹ thuật, mũ đen tập trung vào nội dung.",
      "B": "SEO mũ trắng tuân thủ nguyên tắc của công cụ tìm kiếm, hướng đến phát triển bền vững, mũ đen sử dụng thủ thuật gian lận để đạt kết quả nhanh chóng nhưng rủi ro bị phạt.",
      "C": "SEO mũ trắng chỉ dành cho website lớn, mũ đen dành cho website nhỏ.",
      "D": "SEO mũ trắng miễn phí, mũ đen tốn phí."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388081,
    "question": "Trong bối cảnh SEO, 'từ khóa chính' (primary keyword) là gì?",
    "options": {
      "A": "Từ khóa được sử dụng nhiều nhất trên toàn bộ internet.",
      "B": "Từ khóa có độ cạnh tranh cao nhất.",
      "C": "Từ khóa quan trọng nhất, mô tả chính xác nhất chủ đề và mục tiêu của một trang nội dung cụ thể.",
      "D": "Từ khóa được tìm kiếm nhiều nhất trong một khoảng thời gian ngắn."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388082,
    "question": "Phân tích đối thủ cạnh tranh (competitor analysis) có lợi ích gì cho chiến lược SEO?",
    "options": {
      "A": "Giúp sao chép chiến lược SEO của đối thủ để đạt kết quả nhanh hơn.",
      "B": "Giúp xác định điểm mạnh, điểm yếu của đối thủ, tìm ra cơ hội và thách thức, từ đó xây dựng chiến lược SEO hiệu quả hơn.",
      "C": "Giúp giảm chi phí SEO.",
      "D": "Giúp tăng tốc độ tải trang web của bạn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388083,
    "question": "Yếu tố nào sau đây thường được coi là quan trọng nhất trong SEO hiện đại, đặc biệt là sau các cập nhật thuật toán của Google?",
    "options": {
      "A": "Nhồi nhét từ khóa (keyword stuffing).",
      "B": "Xây dựng số lượng lớn backlink từ mọi nguồn.",
      "C": "Tạo ra nội dung chất lượng cao, hữu ích và trải nghiệm người dùng tốt.",
      "D": "Sử dụng chính xác các từ khóa đối sánh rộng (broad match keywords)."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388084,
    "question": "Đâu là mục tiêu chính của SEO (Tối ưu hóa Công cụ Tìm kiếm)?",
    "options": {
      "A": "Tăng lượng truy cập trực tiếp vào website.",
      "B": "Tăng thứ hạng website trên các trang kết quả tìm kiếm.",
      "C": "Tăng độ nhận diện thương hiệu trên mạng xã hội.",
      "D": "Giảm chi phí quảng cáo trực tuyến."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388085,
    "question": "Tại sao việc nghiên cứu từ khóa (keyword research) lại quan trọng trong SEO?",
    "options": {
      "A": "Để website có giao diện đẹp mắt hơn.",
      "B": "Để biết đối thủ cạnh tranh đang sử dụng từ khóa nào.",
      "C": "Để xác định những từ khóa mà khách hàng mục tiêu sử dụng khi tìm kiếm sản phẩm hoặc dịch vụ.",
      "D": "Để tăng tốc độ tải trang của website."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388086,
    "question": "Bạn đang xây dựng một blog về nấu ăn. Theo kiến thức SEO cơ bản, bạn nên ưu tiên yếu tố nào sau đây để thu hút người đọc từ công cụ tìm kiếm?",
    "options": {
      "A": "Thiết kế website với màu sắc bắt mắt và hiệu ứng động.",
      "B": "Tối ưu hóa tốc độ tải trang và trải nghiệm người dùng trên thiết bị di động.",
      "C": "Chạy quảng cáo trả phí trên Google Ads.",
      "D": "Chia sẻ bài viết blog lên nhiều nhóm Facebook và diễn đàn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388087,
    "question": "Sự khác biệt chính giữa SEO 'on-page' và SEO 'off-page' là gì?",
    "options": {
      "A": "SEO on-page tập trung vào nội dung, SEO off-page tập trung vào kỹ thuật website.",
      "B": "SEO on-page là tối ưu hóa bên trong website, SEO off-page là tối ưu hóa bên ngoài website.",
      "C": "SEO on-page chỉ dành cho trang chủ, SEO off-page dành cho các trang con.",
      "D": "SEO on-page là công việc của lập trình viên, SEO off-page là công việc của người viết nội dung."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388088,
    "question": "Điều gì có thể xảy ra nếu một website lạm dụng quá nhiều từ khóa (keyword stuffing) trong nội dung?",
    "options": {
      "A": "Website sẽ nhanh chóng đạt top đầu trên trang kết quả tìm kiếm.",
      "B": "Website sẽ được công cụ tìm kiếm đánh giá cao về tính chuyên nghiệp.",
      "C": "Website có thể bị công cụ tìm kiếm phạt và giảm thứ hạng hoặc thậm chí bị loại khỏi kết quả tìm kiếm.",
      "D": "Website sẽ thu hút được nhiều khách hàng tiềm năng hơn."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388089,
    "question": "SEO là viết tắt của cụm từ nào sau đây?",
    "options": {
      "A": "Search Engine Optimization",
      "B": "Social Engagement Optimization",
      "C": "System Error Overhaul",
      "D": "Sales and E-commerce Output"
    },
    "correctAnswer": "A",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388090,
    "question": "Mục tiêu chính của SEO là gì?",
    "options": {
      "A": "Tăng lượng truy cập trực tiếp vào website.",
      "B": "Tối ưu hóa chi phí quảng cáo trên mạng xã hội.",
      "C": "Tăng thứ hạng website trên các trang kết quả tìm kiếm (SERPs) để thu hút lưu lượng truy cập tự nhiên.",
      "D": "Xây dựng thương hiệu cá nhân trên internet."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388091,
    "question": "Trong SEO, 'từ khóa' (keyword) đóng vai trò gì?",
    "options": {
      "A": "Xác định ngôn ngữ lập trình của website.",
      "B": "Mô tả ngắn gọn nội dung chính của trang web và là cụm từ người dùng sử dụng khi tìm kiếm thông tin liên quan.",
      "C": "Tạo ra các liên kết nội bộ giữa các trang trên website.",
      "D": "Đo lường tốc độ tải trang của website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388092,
    "question": "Yếu tố nào sau đây **không** phải là yếu tố SEO On-Page?",
    "options": {
      "A": "Tối ưu thẻ tiêu đề (title tag).",
      "B": "Xây dựng liên kết ngược (backlink) từ website khác.",
      "C": "Tối ưu nội dung bài viết.",
      "D": "Tối ưu URL thân thiện."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388093,
    "question": "Liên kết ngược (backlink) chất lượng có tác động như thế nào đến SEO?",
    "options": {
      "A": "Làm giảm tốc độ tải trang website.",
      "B": "Tăng độ tin cậy và uy tín của website trong mắt công cụ tìm kiếm, từ đó cải thiện thứ hạng.",
      "C": "Giảm số lượng trang được index bởi công cụ tìm kiếm.",
      "D": "Không có tác động đáng kể đến SEO."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388094,
    "question": "Công cụ nào sau đây của Google giúp bạn theo dõi hiệu quả SEO của website?",
    "options": {
      "A": "Google Ads.",
      "B": "Google Analytics.",
      "C": "Google Search Console.",
      "D": "Google My Business."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388095,
    "question": "Tại sao tốc độ tải trang (page speed) lại quan trọng trong SEO?",
    "options": {
      "A": "Ảnh hưởng trực tiếp đến chi phí quảng cáo Google Ads.",
      "B": "Là yếu tố xếp hạng, ảnh hưởng đến trải nghiệm người dùng và khả năng thu thập dữ liệu của công cụ tìm kiếm.",
      "C": "Quyết định màu sắc chủ đạo của website.",
      "D": "Chỉ quan trọng đối với website bán hàng trực tuyến."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388096,
    "question": "Hình phạt 'Google Penalty' trong SEO là gì?",
    "options": {
      "A": "Phần thưởng của Google cho website có thứ hạng cao.",
      "B": "Hình thức giảm thứ hạng hoặc loại bỏ website khỏi kết quả tìm kiếm do vi phạm chính sách của Google.",
      "C": "Chương trình khuyến mãi của Google dành cho người dùng SEO.",
      "D": "Công cụ phân tích từ khóa của Google."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388097,
    "question": "Trong SEO, 'nội dung là vua' (Content is King) có nghĩa là gì?",
    "options": {
      "A": "Chất lượng hình ảnh quan trọng hơn nội dung chữ.",
      "B": "Nội dung chất lượng, độc đáo và hữu ích là yếu tố quan trọng hàng đầu để thu hút và giữ chân người dùng, đồng thời được công cụ tìm kiếm đánh giá cao.",
      "C": "Số lượng bài viết trên website quan trọng hơn chất lượng.",
      "D": "Nội dung chỉ cần tập trung vào bán hàng, không cần quan tâm đến thông tin hữu ích."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388098,
    "question": "Phương pháp SEO 'White Hat' và 'Black Hat' khác nhau như thế nào?",
    "options": {
      "A": "White Hat là SEO tập trung vào kỹ thuật, Black Hat là SEO tập trung vào nội dung.",
      "B": "White Hat là SEO tuân thủ nguyên tắc của công cụ tìm kiếm, Black Hat sử dụng các thủ thuật gian lận để nhanh chóng đạt thứ hạng cao.",
      "C": "White Hat là SEO dành cho website thương mại điện tử, Black Hat là SEO cho website tin tức.",
      "D": "Không có sự khác biệt, cả hai đều là phương pháp SEO hợp lệ."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388099,
    "question": "Ví dụ nào sau đây là hành động **không** nên làm trong SEO?",
    "options": {
      "A": "Tối ưu hóa hình ảnh bằng thẻ alt.",
      "B": "Xây dựng liên kết nội bộ giữa các trang liên quan.",
      "C": "Nhồi nhét từ khóa (keyword stuffing) trong nội dung.",
      "D": "Nghiên cứu từ khóa trước khi viết bài."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388100,
    "question": "Thẻ tiêu đề (title tag) nên chứa yếu tố quan trọng nào để tối ưu SEO?",
    "options": {
      "A": "Số lượng ký tự tối đa.",
      "B": "Màu sắc bắt mắt.",
      "C": "Từ khóa chính và mô tả ngắn gọn, hấp dẫn nội dung trang.",
      "D": "Tên tác giả bài viết."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388101,
    "question": "Mục đích của việc xây dựng 'sơ đồ website' (sitemap) là gì?",
    "options": {
      "A": "Trang trí website thêm đẹp mắt.",
      "B": "Giúp công cụ tìm kiếm dễ dàng thu thập dữ liệu và index tất cả các trang trên website.",
      "C": "Tăng tốc độ tải trang website.",
      "D": "Thay đổi giao diện website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388102,
    "question": "So sánh giữa SEO và quảng cáo trả phí (ví dụ: Google Ads), đâu là lợi ích chính của SEO về mặt chi phí trong dài hạn?",
    "options": {
      "A": "SEO luôn tốn ít chi phí hơn quảng cáo trả phí ngay từ đầu.",
      "B": "SEO mang lại lưu lượng truy cập tự nhiên ổn định và lâu dài, giảm sự phụ thuộc vào chi phí quảng cáo trả phí theo thời gian.",
      "C": "Quảng cáo trả phí không hiệu quả bằng SEO trong việc xây dựng thương hiệu.",
      "D": "SEO giúp đạt kết quả nhanh chóng hơn quảng cáo trả phí."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388103,
    "question": "Nguyên nhân chính khiến một website mới khó đạt thứ hạng cao trên Google trong thời gian ngắn là gì?",
    "options": {
      "A": "Website mới có giao diện không đẹp.",
      "B": "Google ưu tiên các website cũ, có độ uy tín và lịch sử hoạt động lâu dài hơn.",
      "C": "Website mới chưa có đủ nội dung.",
      "D": "Website mới chưa được đăng ký với Google Search Console."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388104,
    "question": "SEO (Tối ưu hóa công cụ tìm kiếm) là quá trình chủ yếu tập trung vào điều gì?",
    "options": {
      "A": "Tăng cường trải nghiệm người dùng trên website.",
      "B": "Cải thiện thứ hạng website trên các trang kết quả tìm kiếm.",
      "C": "Thiết kế giao diện website bắt mắt và thu hút.",
      "D": "Tối ưu hóa tốc độ tải trang website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388105,
    "question": "Trong SEO, 'từ khóa' (keyword) đóng vai trò quan trọng nhất ở giai đoạn nào?",
    "options": {
      "A": "Sau khi website đã được xây dựng hoàn chỉnh.",
      "B": "Trong quá trình quảng bá website trên mạng xã hội.",
      "C": "Trước khi bắt đầu xây dựng nội dung và cấu trúc website.",
      "D": "Sau khi website đã đạt được thứ hạng cao trên công cụ tìm kiếm."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388106,
    "question": "Yếu tố nào sau đây được xem là quan trọng nhất trong SEO On-page?",
    "options": {
      "A": "Số lượng backlink chất lượng cao.",
      "B": "Tốc độ tải trang website.",
      "C": "Mức độ tương tác của người dùng trên mạng xã hội.",
      "D": "Độ dài nội dung bài viết."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388107,
    "question": "Liên kết 'nofollow' thường được sử dụng trong trường hợp nào?",
    "options": {
      "A": "Liên kết đến các trang web có độ tin cậy cao để tăng uy tín.",
      "B": "Liên kết nội bộ giữa các trang trong cùng website.",
      "C": "Liên kết trong các bài viết quảng cáo hoặc nội dung trả phí.",
      "D": "Liên kết đến các trang web đối thủ để so sánh."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388108,
    "question": "Công cụ nào sau đây KHÔNG phải là công cụ hỗ trợ nghiên cứu từ khóa?",
    "options": {
      "A": "Google Keyword Planner.",
      "B": "SEMrush.",
      "C": "Google Analytics.",
      "D": "Ahrefs."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388109,
    "question": "Mục tiêu chính của việc tối ưu hóa cho thiết bị di động (Mobile SEO) là gì?",
    "options": {
      "A": "Tăng tốc độ tải trang trên máy tính để bàn.",
      "B": "Cải thiện trải nghiệm người dùng khi truy cập website trên điện thoại.",
      "C": "Tăng cường bảo mật cho website.",
      "D": "Giảm chi phí quảng cáo trực tuyến."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388110,
    "question": "Thẻ tiêu đề (Title tag) có vai trò quan trọng như thế nào trong SEO?",
    "options": {
      "A": "Chỉ hiển thị cho quản trị viên website.",
      "B": "Quyết định giao diện hiển thị của website trên trang tìm kiếm.",
      "C": "Mô tả ngắn gọn nội dung trang và hiển thị trên SERPs.",
      "D": "Tăng tốc độ tải trang website."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388111,
    "question": "Trong SEO, 'internal link' (liên kết nội bộ) mang lại lợi ích gì chính?",
    "options": {
      "A": "Tăng Page Authority cho website từ các trang web khác.",
      "B": "Giúp người dùng dễ dàng điều hướng và khám phá nội dung website.",
      "C": "Tăng lượng truy cập trực tiếp vào website.",
      "D": "Ngăn chặn các website khác sao chép nội dung."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388112,
    "question": "Yếu tố nào sau đây KHÔNG ảnh hưởng trực tiếp đến thứ hạng SEO?",
    "options": {
      "A": "Chất lượng nội dung website.",
      "B": "Số lượng bài viết trên website.",
      "C": "Cấu trúc URL thân thiện với SEO.",
      "D": "Số lượng backlink chất lượng."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388113,
    "question": "So sánh giữa SEO 'White hat' và 'Black hat', điểm khác biệt lớn nhất là gì?",
    "options": {
      "A": "Chi phí đầu tư cho hoạt động SEO.",
      "B": "Thời gian để đạt được kết quả SEO.",
      "C": "Tuân thủ các nguyên tắc và hướng dẫn của công cụ tìm kiếm.",
      "D": "Mức độ phức tạp về kỹ thuật thực hiện."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388114,
    "question": "Điều gì sẽ xảy ra nếu một website sử dụng quá nhiều 'keyword stuffing' (nhồi nhét từ khóa) trong nội dung?",
    "options": {
      "A": "Website sẽ nhanh chóng đạt được thứ hạng cao trên công cụ tìm kiếm.",
      "B": "Website có thể bị công cụ tìm kiếm phạt và giảm thứ hạng.",
      "C": "Website sẽ thu hút được nhiều người dùng hơn.",
      "D": "Website sẽ cải thiện trải nghiệm người dùng."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388115,
    "question": "Ví dụ nào sau đây là một URL thân thiện với SEO?",
    "options": {
      "A": "www.example.com/p=123",
      "B": "www.example.com/category/post-title",
      "C": "www.example.com/index.php?id=456",
      "D": "www.example.com/#!article-789"
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388116,
    "question": "Ngoại lệ nào sau đây KHÔNG được xem là nội dung trùng lặp (duplicate content) trong SEO?",
    "options": {
      "A": "Nội dung được đăng tải lại trên nhiều website khác nhau.",
      "B": "Nội dung giống hệt nhau trên nhiều trang khác nhau của cùng một website.",
      "C": "Nội dung được trích dẫn hợp lý và có ghi nguồn rõ ràng.",
      "D": "Nội dung được tạo ra tự động và lặp đi lặp lại."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388117,
    "question": "Khi website mới được xây dựng, hoạt động SEO nào cần được ưu tiên thực hiện đầu tiên?",
    "options": {
      "A": "Xây dựng backlink từ nhiều nguồn khác nhau.",
      "B": "Tối ưu hóa tốc độ tải trang và trải nghiệm di động.",
      "C": "Đăng ký website với các công cụ tìm kiếm (ví dụ: Google Search Console).",
      "D": "Phân tích đối thủ cạnh tranh và chiến lược từ khóa của họ."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388118,
    "question": "Để đo lường hiệu quả của chiến dịch SEO, chỉ số nào sau đây KHÔNG phù hợp để theo dõi?",
    "options": {
      "A": "Thứ hạng từ khóa mục tiêu.",
      "B": "Lưu lượng truy cập tự nhiên (Organic traffic).",
      "C": "Tỷ lệ thoát trang (Bounce rate).",
      "D": "Lượt thích trang trên Facebook (Facebook Likes)."
    },
    "correctAnswer": "D",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388119,
    "question": "SEO (Tối ưu hóa công cụ tìm kiếm) là gì?",
    "options": {
      "A": "Một hình thức quảng cáo trả phí để website xuất hiện trên top đầu kết quả tìm kiếm.",
      "B": "Quy trình thiết kế lại giao diện website cho đẹp mắt hơn.",
      "C": "Tập hợp các kỹ thuật nhằm nâng cao thứ hạng website trên các trang kết quả tìm kiếm tự nhiên.",
      "D": "Phương pháp bảo mật website khỏi các cuộc tấn công mạng."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388120,
    "question": "Yếu tố nào sau đây **quan trọng nhất** trong SEO On-page?",
    "options": {
      "A": "Số lượng backlink trỏ về website.",
      "B": "Tốc độ tải trang và trải nghiệm người dùng.",
      "C": "Mức độ phổ biến của thương hiệu trên mạng xã hội.",
      "D": "Thiết kế giao diện website bắt mắt và hiện đại."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388121,
    "question": "Backlink chất lượng có vai trò như thế nào đối với SEO?",
    "options": {
      "A": "Giảm chi phí quảng cáo Google Ads.",
      "B": "Tăng độ tin cậy và uy tín của website trong mắt công cụ tìm kiếm.",
      "C": "Cải thiện tốc độ tải trang của website.",
      "D": "Tăng cường bảo mật cho website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388122,
    "question": "Tại sao nghiên cứu từ khóa (Keyword Research) lại quan trọng trong SEO?",
    "options": {
      "A": "Để tăng lượng truy cập trực tiếp vào website.",
      "B": "Để hiểu rõ nhu cầu tìm kiếm của người dùng và tối ưu hóa nội dung phù hợp.",
      "C": "Để thiết kế website đẹp mắt và chuyên nghiệp hơn.",
      "D": "Để xây dựng hệ thống backlink chất lượng."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388123,
    "question": "Thẻ tiêu đề (Title tag) và thẻ mô tả (Meta description) có vai trò gì trong SEO?",
    "options": {
      "A": "Hiển thị hình ảnh thu nhỏ của website trên kết quả tìm kiếm.",
      "B": "Cung cấp thông tin tóm tắt về nội dung trang và thu hút người dùng click vào liên kết.",
      "C": "Tăng tốc độ tải trang của website.",
      "D": "Xác định ngôn ngữ chính của website."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388124,
    "question": "Sự khác biệt chính giữa SEO và SEM (Search Engine Marketing) là gì?",
    "options": {
      "A": "SEO tập trung vào quảng cáo trả phí, SEM tập trung vào kết quả tự nhiên.",
      "B": "SEO là một phần của SEM, bao gồm cả SEO và quảng cáo trả phí.",
      "C": "SEO tập trung vào kết quả tự nhiên, SEM bao gồm cả SEO và quảng cáo trả phí.",
      "D": "SEO và SEM là hai khái niệm hoàn toàn giống nhau."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388125,
    "question": "Lý do chính khiến website cần tối ưu hóa cho thiết bị di động (Mobile-friendly) là gì?",
    "options": {
      "A": "Để giảm chi phí hosting.",
      "B": "Để tăng cường bảo mật website.",
      "C": "Vì ngày càng có nhiều người dùng truy cập internet bằng thiết bị di động và Google ưu tiên website mobile-friendly.",
      "D": "Để website hiển thị đẹp hơn trên máy tính để bàn."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388126,
    "question": "Ví dụ nào sau đây là một từ khóa đuôi dài (Long-tail keyword)?",
    "options": {
      "A": "Điện thoại",
      "B": "Laptop",
      "C": "Mua điện thoại iPhone 14 Pro Max 256GB chính hãng giá rẻ ở Hà Nội",
      "D": "Thời trang nam"
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388127,
    "question": "Nội dung chất lượng (Content is King) có vai trò như thế nào trong SEO?",
    "options": {
      "A": "Không quan trọng bằng số lượng backlink.",
      "B": "Giúp thu hút và giữ chân người dùng trên website, tăng khả năng chia sẻ và backlink tự nhiên.",
      "C": "Chỉ quan trọng đối với SEO Off-page.",
      "D": "Chỉ quan trọng đối với website bán hàng trực tuyến."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388128,
    "question": "Robots.txt là file gì và có chức năng gì trong SEO kỹ thuật?",
    "options": {
      "A": "File chứa mã nguồn website.",
      "B": "File hướng dẫn công cụ tìm kiếm cách thu thập dữ liệu (crawl) và index website.",
      "C": "File chứa thông tin về sitemap của website.",
      "D": "File chứa danh sách từ khóa mục tiêu."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388129,
    "question": "Sitemap XML có tác dụng gì cho SEO?",
    "options": {
      "A": "Tăng tốc độ tải trang.",
      "B": "Giúp công cụ tìm kiếm dễ dàng tìm và index tất cả các trang trên website.",
      "C": "Cải thiện trải nghiệm người dùng trên website.",
      "D": "Ngăn chặn spam bình luận."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388130,
    "question": "Trong SEO, thuật ngữ 'Internal link' (liên kết nội bộ) đề cập đến điều gì?",
    "options": {
      "A": "Liên kết từ website của bạn đến website khác.",
      "B": "Liên kết từ website khác đến website của bạn.",
      "C": "Liên kết giữa các trang khác nhau trong cùng một website.",
      "D": "Liên kết từ mạng xã hội đến website."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388131,
    "question": "Nếu thứ hạng website của bạn giảm đột ngột, nguyên nhân **ít có khả năng** là gì?",
    "options": {
      "A": "Google cập nhật thuật toán.",
      "B": "Đối thủ cạnh tranh tối ưu SEO tốt hơn.",
      "C": "Website bị phạt bởi Google (Google penalty).",
      "D": "Bạn vừa đăng tải một bài viết blog mới."
    },
    "correctAnswer": "D",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388132,
    "question": "Công cụ nào sau đây KHÔNG phải là công cụ hỗ trợ SEO phổ biến?",
    "options": {
      "A": "Google Analytics",
      "B": "Google Search Console",
      "C": "Facebook Ads Manager",
      "D": "SEMrush"
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388133,
    "question": "Phương pháp SEO 'White hat' (mũ trắng) và 'Black hat' (mũ đen) khác nhau chủ yếu ở điểm nào?",
    "options": {
      "A": "Chi phí thực hiện.",
      "B": "Thời gian đạt kết quả.",
      "C": "Tuân thủ theo nguyên tắc của công cụ tìm kiếm.",
      "D": "Mức độ phức tạp kỹ thuật."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388134,
    "question": "Mục tiêu chính của SEO (Tối ưu hóa công cụ tìm kiếm) là gì?",
    "options": {
      "A": "Tăng lưu lượng truy cập trực tiếp vào trang web.",
      "B": "Tăng thứ hạng trang web trên các trang kết quả tìm kiếm (SERPs) cho các từ khóa mục tiêu.",
      "C": "Tăng độ nhận diện thương hiệu trên mạng xã hội.",
      "D": "Tạo ra nhiều backlink từ các trang web không liên quan."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388135,
    "question": "Trong quá trình nghiên cứu từ khóa (keyword research), bạn nhận thấy một từ khóa có lượng tìm kiếm cao nhưng độ cạnh tranh rất lớn. Bạn nên ưu tiên điều gì khi quyết định chọn từ khóa này cho chiến lược SEO?",
    "options": {
      "A": "Chắc chắn sử dụng từ khóa này vì lượng tìm kiếm cao, bỏ qua độ cạnh tranh.",
      "B": "Từ bỏ từ khóa này và tìm kiếm từ khóa khác có độ cạnh tranh thấp hơn.",
      "C": "Phân tích sâu hơn về đối thủ cạnh tranh và khả năng tạo ra nội dung chất lượng vượt trội để cạnh tranh từ khóa này.",
      "D": "Sử dụng từ khóa này trong các chiến dịch quảng cáo trả phí (PPC) thay vì SEO."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388136,
    "question": "Bạn đang tối ưu hóa SEO On-page cho một trang sản phẩm bán giày thể thao. Yếu tố nào sau đây bạn nên ưu tiên chỉnh sửa trực tiếp trên trang sản phẩm để cải thiện thứ hạng?",
    "options": {
      "A": "Tăng tốc độ tải trang bằng cách nén ảnh và tối ưu code.",
      "B": "Xây dựng nhiều backlink từ các trang web thể thao khác.",
      "C": "Chỉnh sửa thẻ tiêu đề (Title tag) và mô tả meta (Meta description) chứa từ khóa mục tiêu.",
      "D": "Chia sẻ liên kết trang sản phẩm lên nhiều mạng xã hội."
    },
    "correctAnswer": "C",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388137,
    "question": "Phương pháp SEO 'White hat' và 'Black hat' khác nhau chủ yếu ở điểm nào?",
    "options": {
      "A": "White hat tập trung vào kỹ thuật, Black hat tập trung vào nội dung.",
      "B": "White hat tuân thủ nguyên tắc của công cụ tìm kiếm, Black hat cố gắng 'lách luật' để đạt thứ hạng nhanh chóng.",
      "C": "White hat chỉ sử dụng từ khóa chính, Black hat sử dụng nhiều từ khóa phụ.",
      "D": "White hat chỉ áp dụng cho website lớn, Black hat áp dụng cho website nhỏ."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  },
  {
    "id": 1744611388138,
    "question": "Điều gì có thể xảy ra nếu một website sử dụng quá nhiều từ khóa (keyword stuffing) trong nội dung?",
    "options": {
      "A": "Website sẽ nhanh chóng đạt thứ hạng cao trên Google.",
      "B": "Website có thể bị Google phạt và giảm thứ hạng, thậm chí bị loại khỏi kết quả tìm kiếm.",
      "C": "Website sẽ thu hút được nhiều người dùng truy cập hơn.",
      "D": "Website sẽ cải thiện trải nghiệm người dùng vì nội dung rõ ràng hơn."
    },
    "correctAnswer": "B",
    "source": "Imported from Word"
  }
]
]
