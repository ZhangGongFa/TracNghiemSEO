// Dữ liệu câu hỏi trắc nghiệm SEO
const questions = [
  {
    id: 1,
    question: "SEO (Tối ưu hóa công cụ tìm kiếm) là gì?",
    options: {
      A: "Một loại virus máy tính tấn công các trang web.",
      B: "Quá trình tăng cường khả năng hiển thị của trang web trên các công cụ tìm kiếm.",
      C: "Một hình thức quảng cáo trả phí trên mạng xã hội.",
      D: "Phần mềm quản lý nội dung trang web."
    },
    correctAnswer: "B",
    source: "Bộ 1"
  },
  {
    id: 2,
    question: "Mục tiêu chính của SEO là gì?",
    options: {
      A: "Tăng số lượng trang trên website.",
      B: "Thu hút người dùng truy cập website từ các nguồn trả phí.",
      C: "Tăng lưu lượng truy cập tự nhiên (organic traffic) và chất lượng đến website.",
      D: "Xây dựng liên kết từ các website không liên quan."
    },
    correctAnswer: "C",
    source: "Bộ 1"
  },
  {
    id: 3,
    question: "Yếu tố nào sau đây KHÔNG phải là yếu tố SEO On-page?",
    options: {
      A: "Tối ưu hóa thẻ tiêu đề (Title tag).",
      B: "Xây dựng liên kết ngược (Backlink).",
      C: "Tối ưu hóa nội dung bài viết.",
      D: "Tối ưu hóa thẻ mô tả meta (Meta description)."
    },
    correctAnswer: "B",
    source: "Bộ 1"
  },
  {
    id: 4,
    question: "Từ khóa (Keywords) đóng vai trò quan trọng như thế nào trong SEO?",
    options: {
      A: "Từ khóa chỉ quan trọng trong quảng cáo trả phí, không liên quan đến SEO.",
      B: "Từ khóa giúp công cụ tìm kiếm hiểu nội dung trang web và kết nối với truy vấn tìm kiếm của người dùng.",
      C: "Từ khóa giúp trang web tăng tốc độ tải trang.",
      D: "Từ khóa giúp trang web có giao diện đẹp hơn."
    },
    correctAnswer: "B",
    source: "Bộ 1"
  },
  {
    id: 5,
    question: "Thẻ tiêu đề (Title tag) có vai trò gì trong SEO?",
    options: {
      A: "Hiển thị nội dung chính của trang web trên trang chủ.",
      B: "Hiển thị tên miền của website trên thanh địa chỉ trình duyệt.",
      C: "Hiển thị tiêu đề trang trên trang kết quả tìm kiếm (SERPs) và tab trình duyệt.",
      D: "Tạo hiệu ứng đồ họa cho trang web."
    },
    correctAnswer: "C",
    source: "Bộ 1"
  },
  {
    id: 6,
    question: "Mô tả meta (Meta description) thường được sử dụng để làm gì?",
    options: {
      A: "Tăng tốc độ tải trang.",
      B: "Cung cấp đoạn mô tả ngắn gọn về nội dung trang web trên trang kết quả tìm kiếm (SERPs).",
      C: "Chèn từ khóa ẩn vào trang web.",
      D: "Thay thế nội dung chính của trang web."
    },
    correctAnswer: "B",
    source: "Bộ 1"
  },
  {
    id: 7,
    question: "Tại sao tốc độ tải trang (Page speed) lại quan trọng đối với SEO?",
    options: {
      A: "Tốc độ tải trang không ảnh hưởng đến SEO.",
      B: "Tốc độ tải trang chậm có thể làm tăng tỷ lệ thoát trang (Bounce rate) và ảnh hưởng tiêu cực đến trải nghiệm người dùng.",
      C: "Tốc độ tải trang nhanh giúp trang web hiển thị quảng cáo tốt hơn.",
      D: "Tốc độ tải trang chỉ quan trọng đối với thiết bị di động."
    },
    correctAnswer: "B",
    source: "Bộ 1"
  },
  {
    id: 8,
    question: "Liên kết ngược (Backlink) là gì trong SEO?",
    options: {
      A: "Liên kết nội bộ giữa các trang trong cùng một website.",
      B: "Liên kết từ website khác trỏ về website của bạn.",
      C: "Liên kết từ website của bạn trỏ ra website khác.",
      D: "Liên kết đến các trang mạng xã hội."
    },
    correctAnswer: "B",
    source: "Bộ 1"
  },
  {
    id: 9,
    question: "Trong SEO, 'Anchor text' là gì?",
    options: {
      A: "Văn bản thay thế hình ảnh khi hình ảnh không tải được.",
      B: "Văn bản hiển thị khi di chuột lên liên kết.",
      C: "Văn bản có thể nhấp chuột được sử dụng để tạo liên kết.",
      D: "Văn bản ẩn chứa từ khóa, không hiển thị cho người dùng."
    },
    correctAnswer: "C",
    source: "Bộ 1"
  },
  {
    id: 10,
    question: "Phương pháp SEO nào sau đây được coi là 'SEO mũ đen' (Black hat SEO)?",
    options: {
      A: "Xây dựng nội dung chất lượng và hữu ích cho người dùng.",
      B: "Tối ưu hóa tốc độ tải trang.",
      C: "Nhồi nhét từ khóa (Keyword stuffing) vào nội dung.",
      D: "Xây dựng liên kết tự nhiên từ các website uy tín."
    },
    correctAnswer: "C",
    source: "Bộ 1"
  },
  {
    id: 11,
    question: "Sitemap XML có vai trò gì đối với SEO?",
    options: {
      A: "Tăng tốc độ tải trang.",
      B: "Giúp công cụ tìm kiếm thu thập dữ liệu (crawl) và lập chỉ mục (index) website hiệu quả hơn.",
      C: "Cải thiện trải nghiệm người dùng trên website.",
      D: "Tạo giao diện đẹp hơn cho website."
    },
    correctAnswer: "B",
    source: "Bộ 1"
  },
  {
    id: 12,
    question: "Công cụ nào sau đây thường được sử dụng để phân tích từ khóa và nghiên cứu đối thủ trong SEO?",
    options: {
      A: "Microsoft Word.",
      B: "Google Sheets.",
      C: "Google Keyword Planner.",
      D: "Adobe Photoshop."
    },
    correctAnswer: "C",
    source: "Bộ 1"
  },
  {
    id: 13,
    question: "Đối với SEO Local (SEO địa phương), yếu tố nào sau đây quan trọng nhất để cải thiện thứ hạng?",
    options: {
      A: "Số lượng bài viết blog trên website.",
      B: "Số lượng backlink từ website quốc tế.",
      C: "Thông tin NAP (Name, Address, Phone number) nhất quán và chính xác trên các nền tảng trực tuyến.",
      D: "Tốc độ tải trang website trên máy tính để bàn."
    },
    correctAnswer: "C",
    source: "Bộ 1"
  },
  {
    id: 14,
    question: "Khi nào thì việc sử dụng thuộc tính 'nofollow' cho liên kết là phù hợp trong SEO?",
    options: {
      A: "Khi liên kết đến các trang web có nội dung chất lượng cao.",
      B: "Khi liên kết đến trang web của đối thủ cạnh tranh.",
      C: "Khi liên kết đến các trang web không đáng tin cậy hoặc liên kết quảng cáo trả phí.",
      D: "Khi liên kết đến các trang web có tốc độ tải trang nhanh."
    },
    correctAnswer: "C",
    source: "Bộ 1"
  },
  {
    id: 15,
    question: "Điều gì sẽ xảy ra nếu một website bị Google phạt (Google penalty) do vi phạm chính sách SEO?",
    options: {
      A: "Website sẽ được Google khen thưởng.",
      B: "Thứ hạng website sẽ được cải thiện nhanh chóng.",
      C: "Lưu lượng truy cập tự nhiên (organic traffic) của website có thể giảm đáng kể hoặc website bị loại khỏi kết quả tìm kiếm.",
      D: "Website sẽ được miễn phí quảng cáo trên Google Ads."
    },
    correctAnswer: "C",
    source: "Bộ 1"
  },
  {
    id: 16,
    question: "Tại sao nghiên cứu từ khóa (Keyword Research) lại quan trọng trong SEO?",
    options: {
      A: "Giúp website có giao diện đẹp hơn.",
      B: "Giúp xác định những từ khóa mà khách hàng mục tiêu sử dụng để tìm kiếm sản phẩm/dịch vụ.",
      C: "Giúp website tải nhanh hơn.",
      D: "Giúp website được bảo mật tốt hơn."
    },
    correctAnswer: "B",
    source: "Bộ 1"
  },
  {
    id: 17,
    question: "SEO (Tối ưu hóa công cụ tìm kiếm) là quá trình nhằm mục đích gì?",
    options: {
      A: "Tăng cường bảo mật website.",
      B: "Cải thiện trải nghiệm người dùng trên website.",
      C: "Tăng khả năng hiển thị của website trên các trang kết quả tìm kiếm.",
      D: "Giảm chi phí quảng cáo trực tuyến."
    },
    correctAnswer: "C",
    source: "Bộ 2"
  },
  {
    id: 18,
    question: "Trong SEO, 'từ khóa' (keyword) đóng vai trò quan trọng nhất trong giai đoạn nào?",
    options: {
      A: "Thiết kế giao diện website.",
      B: "Nghiên cứu và lập kế hoạch nội dung.",
      C: "Xây dựng liên kết (backlink).",
      D: "Tối ưu hóa tốc độ tải trang."
    },
    correctAnswer: "B",
    source: "Bộ 2"
  },
  {
    id: 19,
    question: "Liên kết nội bộ (internal link) mang lại lợi ích gì cho SEO?",
    options: {
      A: "Tăng tốc độ tải trang.",
      B: "Giúp người dùng và công cụ tìm kiếm điều hướng website dễ dàng hơn.",
      C: "Tăng độ tin cậy của website với công cụ tìm kiếm.",
      D: "Cả 2 và 3."
    },
    correctAnswer: "D",
    source: "Bộ 2"
  },
  {
    id: 20,
    question: "Trong SEO, 'backlink chất lượng' được đánh giá dựa trên yếu tố nào là quan trọng nhất?",
    options: {
      A: "Số lượng backlink.",
      B: "Mức độ liên quan của website nguồn backlink.",
      C: "Tốc độ tăng trưởng backlink.",
      D: "Vị trí backlink trên trang nguồn."
    },
    correctAnswer: "B",
    source: "Bộ 2"
  },
  {
    id: 21,
    question: "Thẻ tiêu đề (title tag) hiển thị ở đâu trên trang kết quả tìm kiếm (SERP)?",
    options: {
      A: "Ở cuối đoạn mô tả (snippet).",
      B: "Ở vị trí nổi bật nhất, là dòng chữ màu xanh dương, có thể click vào.",
      C: "Ẩn trong mã nguồn HTML, không hiển thị trực tiếp.",
      D: "Ở góc dưới bên phải của snippet."
    },
    correctAnswer: "B",
    source: "Bộ 2"
  },
  {
    id: 22,
    question: "Mục đích chính của việc sử dụng thẻ mô tả meta (meta description) là gì?",
    options: {
      A: "Tăng tốc độ tải trang.",
      B: "Cung cấp thông tin tóm tắt về nội dung trang để người dùng xem trước trên SERP.",
      C: "Cải thiện cấu trúc website.",
      D: "Xác định từ khóa chính cho trang."
    },
    correctAnswer: "B",
    source: "Bộ 2"
  },
  {
    id: 23,
    question: "Trong SEO, 'nội dung trùng lặp' (duplicate content) có tác động như thế nào đến thứ hạng website?",
    options: {
      A: "Không ảnh hưởng gì.",
      B: "Có thể giúp tăng thứ hạng nếu trùng lặp trên nhiều website.",
      C: "Có thể bị công cụ tìm kiếm phạt, làm giảm thứ hạng.",
      D: "Giúp tăng lưu lượng truy cập từ các nguồn khác nhau."
    },
    correctAnswer: "C",
    source: "Bộ 2"
  },
  {
    id: 24,
    question: "Công cụ nào sau đây **không** phải là công cụ hỗ trợ SEO phổ biến?",
    options: {
      A: "Google Analytics.",
      B: "Google Search Console.",
      C: "Microsoft Word.",
      D: "SEMrush."
    },
    correctAnswer: "C",
    source: "Bộ 2"
  },
  {
    id: 25,
    question: "Phương pháp SEO nào được xem là 'White Hat SEO'?",
    options: {
      A: "Nhồi nhét từ khóa (keyword stuffing).",
      B: "Xây dựng backlink hàng loạt từ website chất lượng thấp.",
      C: "Tạo nội dung chất lượng, hữu ích cho người dùng và tuân thủ nguyên tắc của công cụ tìm kiếm.",
      D: "Sử dụng cloaking (che giấu nội dung với công cụ tìm kiếm)."
    },
    correctAnswer: "C",
    source: "Bộ 2"
  },
  {
    id: 26,
    question: "Trong SEO, 'tối ưu hóa cho thiết bị di động' (mobile-friendly) ngày càng trở nên quan trọng vì lý do chính nào?",
    options: {
      A: "Giá thiết bị di động rẻ hơn máy tính để bàn.",
      B: "Số lượng người dùng internet truy cập bằng thiết bị di động ngày càng tăng.",
      C: "Thiết bị di động có màn hình nhỏ hơn, cần tối ưu hóa hiển thị.",
      D: "Thiết bị di động dễ mang theo hơn."
    },
    correctAnswer: "B",
    source: "Bộ 2"
  },
  {
    id: 27,
    question: "Chỉ số 'tỷ lệ thoát trang' (bounce rate) cao thường cho thấy điều gì về website?",
    options: {
      A: "Website có tốc độ tải trang nhanh.",
      B: "Website có nội dung chất lượng và liên quan đến truy vấn tìm kiếm.",
      C: "Website có trải nghiệm người dùng kém, nội dung không hấp dẫn hoặc không liên quan.",
      D: "Website có nhiều liên kết nội bộ."
    },
    correctAnswer: "C",
    source: "Bộ 2"
  },
  {
    id: 28,
    question: "Ví dụ nào sau đây thể hiện việc sử dụng từ khóa đuôi dài (long-tail keyword) hiệu quả?",
    options: {
      A: "'Điện thoại'.",
      B: "'Mua điện thoại iPhone'.",
      C: "'Điện thoại iPhone 14 Pro Max 256GB màu tím giá rẻ nhất Hà Nội'.",
      D: "'Điện thoại Samsung'."
    },
    correctAnswer: "C",
    source: "Bộ 2"
  },
  {
    id: 29,
    question: "Yếu tố nào sau đây là **quan trọng nhất** trong SEO On-page?",
    options: {
      A: "Số lượng backlink trỏ về website.",
      B: "Tốc độ tải trang nhanh.",
      C: "Nội dung chất lượng, độc đáo và liên quan đến từ khóa mục tiêu.",
      D: "Mức độ tương tác của người dùng trên mạng xã hội."
    },
    correctAnswer: "C",
    source: "Bộ 2"
  },
  {
    id: 30,
    question: "Liên kết 'nofollow' được sử dụng với mục đích gì?",
    options: {
      A: "Để tăng PageRank cho trang web được liên kết đến.",
      B: "Để chỉ định rằng website không chịu trách nhiệm về nội dung của trang web được liên kết.",
      C: "Để bot công cụ tìm kiếm thu thập dữ liệu trang web nhanh hơn.",
      D: "Để tăng tốc độ tải trang khi có quá nhiều liên kết."
    },
    correctAnswer: "B",
    source: "Bộ 2"
  },
  {
    id: 31,
    question: "SEO (Tối ưu hóa công cụ tìm kiếm) là quá trình chủ yếu tập trung vào điều gì?",
    options: {
      A: "Tăng cường tương tác trên mạng xã hội.",
      B: "Nâng cao trải nghiệm người dùng trên website và cải thiện thứ hạng trên công cụ tìm kiếm.",
      C: "Xây dựng thương hiệu cá nhân trực tuyến.",
      D: "Giảm chi phí quảng cáo trực tuyến."
    },
    correctAnswer: "B",
    source: "Bộ 3"
  },
  {
    id: 32,
    question: "Trong SEO, 'từ khóa' (keyword) được hiểu là gì?",
    options: {
      A: "Một đoạn văn bản mô tả sản phẩm hoặc dịch vụ.",
      B: "Những từ hoặc cụm từ người dùng nhập vào công cụ tìm kiếm khi tìm kiếm thông tin.",
      C: "Tên thương hiệu của doanh nghiệp.",
      D: "Địa chỉ URL của website."
    },
    correctAnswer: "B",
    source: "Bộ 3"
  },
  {
    id: 33,
    question: "Phương pháp SEO 'White Hat' và 'Black Hat' khác nhau chủ yếu ở yếu tố nào?",
    options: {
      A: "Chi phí thực hiện.",
      B: "Thời gian đạt được kết quả.",
      C: "Tính bền vững và tuân thủ nguyên tắc của công cụ tìm kiếm.",
      D: "Mức độ phức tạp về kỹ thuật."
    },
    correctAnswer: "C",
    source: "Bộ 3"
  },
  {
    id: 34,
    question: "Mục đích chính của việc xây dựng liên kết ngược (backlink) chất lượng là gì?",
    options: {
      A: "Tăng lượng truy cập trực tiếp vào website.",
      B: "Cải thiện tốc độ tải trang của website.",
      C: "Tăng độ uy tín và thẩm quyền của website trong mắt công cụ tìm kiếm.",
      D: "Giảm tỷ lệ thoát trang (Bounce rate)."
    },
    correctAnswer: "C",
    source: "Bộ 3"
  },
  {
    id: 35,
    question: "Thẻ tiêu đề (Title tag) có vai trò quan trọng trong SEO vì lý do nào sau đây?",
    options: {
      A: "Chỉ hiển thị cho công cụ tìm kiếm, không ảnh hưởng đến người dùng.",
      B: "Giúp người dùng dễ dàng chia sẻ bài viết trên mạng xã hội.",
      C: "Mô tả ngắn gọn và chính xác nội dung trang, hiển thị trên SERP và thu hút người dùng nhấp vào.",
      D: "Tăng thời gian người dùng ở lại trên website."
    },
    correctAnswer: "C",
    source: "Bộ 3"
  },
  {
    id: 36,
    question: "Ví dụ nào sau đây là một URL thân thiện với SEO?",
    options: {
      A: "www.example.com/p=123",
      B: "www.example.com/category/product-id=456",
      C: "www.example.com/danh-muc/ao-thun-nam",
      D: "www.example.com/index.php?page=products&id=789"
    },
    correctAnswer: "C",
    source: "Bộ 3"
  },
  {
    id: 37,
    question: "Điều gì sẽ xảy ra nếu website của bạn không được tối ưu cho thiết bị di động (mobile-friendly)?",
    options: {
      A: "Website sẽ tải nhanh hơn trên máy tính để bàn.",
      B: "Website sẽ được ưu tiên hiển thị trên kết quả tìm kiếm trên máy tính để bàn.",
      C: "Website có thể bị tụt hạng trên kết quả tìm kiếm trên thiết bị di động và trải nghiệm người dùng kém.",
      D: "Website sẽ nhận được nhiều backlink hơn."
    },
    correctAnswer: "C",
    source: "Bộ 3"
  },
  {
    id: 38,
    question: "Công cụ nào sau đây thường được sử dụng để theo dõi hiệu suất SEO của website?",
    options: {
      A: "Microsoft Excel.",
      B: "Google Search Console.",
      C: "Adobe Photoshop.",
      D: "WordPress."
    },
    correctAnswer: "B",
    source: "Bộ 3"
  },
  {
    id: 39,
    question: "Trong SEO, 'canonical URL' được sử dụng để giải quyết vấn đề gì?",
    options: {
      A: "Tăng tốc độ tải trang.",
      B: "Xác định URL chính thức khi có nhiều URL có nội dung giống nhau hoặc tương tự.",
      C: "Tạo liên kết nội bộ giữa các trang.",
      D: "Chuyển hướng người dùng đến trang mới."
    },
    correctAnswer: "B",
    source: "Bộ 3"
  },
  {
    id: 40,
    question: "Tại sao việc tối ưu hóa hình ảnh lại quan trọng trong SEO?",
    options: {
      A: "Hình ảnh không ảnh hưởng đến SEO.",
      B: "Hình ảnh đã tối ưu giúp trang web tải nhanh hơn, cải thiện trải nghiệm người dùng và thứ hạng SEO.",
      C: "Hình ảnh giúp tăng số lượng backlink.",
      D: "Hình ảnh giúp tăng số lượng từ khóa trên trang."
    },
    correctAnswer: "B",
    source: "Bộ 3"
  },
  {
    id: 41,
    question: "Trong SEO, 'từ khóa đuôi dài' (long-tail keyword) có đặc điểm gì?",
    options: {
      A: "Là những từ khóa ngắn, phổ biến với lượng tìm kiếm cao.",
      B: "Là những cụm từ khóa dài, cụ thể, thường có lượng tìm kiếm thấp hơn nhưng tỷ lệ chuyển đổi cao hơn.",
      C: "Là những từ khóa chỉ xuất hiện ở cuối bài viết.",
      D: "Là những từ khóa chỉ được sử dụng trong quảng cáo trả phí."
    },
    correctAnswer: "B",
    source: "Bộ 3"
  },
  {
    id: 42,
    question: "Tại sao việc sử dụng tiêu đề (heading) H1, H2, H3... lại quan trọng trong SEO?",
    options: {
      A: "Chỉ để trang web trông đẹp hơn.",
      B: "Giúp tăng số lượng từ khóa trên trang.",
      C: "Giúp cấu trúc nội dung rõ ràng, dễ đọc cho người dùng và giúp công cụ tìm kiếm hiểu cấu trúc và chủ đề của trang.",
      D: "Không quan trọng đối với SEO."
    },
    correctAnswer: "C",
    source: "Bộ 3"
  },
  {
    id: 43,
    question: "Trong SEO, 'chuỗi bánh mì vụn' (breadcrumb navigation) có tác dụng gì?",
    options: {
      A: "Chỉ để trang trí website.",
      B: "Giúp người dùng và công cụ tìm kiếm hiểu cấu trúc website và vị trí hiện tại của trang trong hệ thống phân cấp.",
      C: "Tăng tốc độ tải trang.",
      D: "Tăng số lượng từ khóa trên trang."
    },
    correctAnswer: "B",
    source: "Bộ 3"
  },
  {
    id: 44,
    question: "Trong SEO, 'tỷ lệ nhấp chuột' (CTR - Click-Through Rate) là gì?",
    options: {
      A: "Số lượng người dùng nhấp vào quảng cáo trả phí.",
      B: "Tỷ lệ phần trăm người dùng nhấp vào kết quả tìm kiếm của bạn so với tổng số lần hiển thị.",
      C: "Số lượng backlink trỏ đến website.",
      D: "Thời gian trung bình người dùng ở lại trang web."
    },
    correctAnswer: "B",
    source: "Bộ 4"
  },
  {
    id: 45,
    question: "Trong SEO, 'thời gian dừng lại trên trang' (dwell time) ảnh hưởng đến thứ hạng website như thế nào?",
    options: {
      A: "Không ảnh hưởng đến thứ hạng website.",
      B: "Thời gian dừng lại càng ngắn càng tốt cho SEO.",
      C: "Thời gian dừng lại càng dài thường cho thấy nội dung có giá trị và liên quan, có thể giúp cải thiện thứ hạng.",
      D: "Chỉ ảnh hưởng đến thứ hạng trên thiết bị di động."
    },
    correctAnswer: "C",
    source: "Bộ 4"
  },
  {
    id: 46,
    question: "Trong SEO, 'schema markup' (đánh dấu schema) được sử dụng để làm gì?",
    options: {
      A: "Tăng tốc độ tải trang.",
      B: "Giúp công cụ tìm kiếm hiểu rõ hơn về nội dung trang web và hiển thị rich snippets (đoạn trích phong phú) trên SERP.",
      C: "Tạo liên kết nội bộ giữa các trang.",
      D: "Chỉ để trang trí website."
    },
    correctAnswer: "B",
    source: "Bộ 4"
  },
  {
    id: 47,
    question: "Trong SEO, 'rich snippet' (đoạn trích phong phú) là gì?",
    options: {
      A: "Một đoạn mã HTML phức tạp.",
      B: "Kết quả tìm kiếm nâng cao với thông tin bổ sung như đánh giá, giá cả, thời gian nấu ăn, v.v.",
      C: "Một plugin WordPress.",
      D: "Một công cụ phân tích SEO."
    },
    correctAnswer: "B",
    source: "Bộ 4"
  },
  {
    id: 48,
    question: "Trong SEO, 'tối ưu hóa hình ảnh' bao gồm những yếu tố nào?",
    options: {
      A: "Chỉ cần sử dụng hình ảnh đẹp.",
      B: "Nén kích thước file, sử dụng thẻ alt, đặt tên file phù hợp, chọn định dạng phù hợp.",
      C: "Chỉ cần sử dụng hình ảnh có kích thước nhỏ.",
      D: "Chỉ cần sử dụng hình ảnh có bản quyền."
    },
    correctAnswer: "B",
    source: "Bộ 4"
  },
  {
    id: 49,
    question: "Trong SEO, 'thẻ alt' cho hình ảnh có vai trò gì?",
    options: {
      A: "Chỉ để trang trí website.",
      B: "Giúp công cụ tìm kiếm hiểu nội dung của hình ảnh và hiển thị khi hình ảnh không tải được.",
      C: "Tăng tốc độ tải trang.",
      D: "Không có vai trò gì trong SEO."
    },
    correctAnswer: "B",
    source: "Bộ 4"
  },
  {
    id: 50,
    question: "Trong SEO, 'tối ưu hóa tốc độ tải trang' có thể thực hiện bằng cách nào?",
    options: {
      A: "Sử dụng nhiều hình ảnh và video hơn.",
      B: "Nén hình ảnh, minify CSS/JS, sử dụng cache, tối ưu hóa mã nguồn.",
      C: "Tăng số lượng plugin trên website.",
      D: "Sử dụng nhiều hiệu ứng JavaScript hơn."
    },
    correctAnswer: "B",
    source: "Bộ 4"
  },
  {
    id: 51,
    question: "Trong SEO, 'tối ưu hóa cho thiết bị di động' (mobile optimization) bao gồm những yếu tố nào?",
    options: {
      A: "Chỉ cần có một website riêng cho thiết bị di động.",
      B: "Thiết kế responsive, tốc độ tải trang nhanh trên di động, nút bấm và font chữ dễ đọc, không sử dụng Flash.",
      C: "Chỉ cần có một ứng dụng di động.",
      D: "Không quan trọng vì hầu hết người dùng đều sử dụng máy tính để bàn."
    },
    correctAnswer: "B",
    source: "Bộ 4"
  },
  {
    id: 52,
    question: "Trong SEO, 'Google Mobile-First Indexing' nghĩa là gì?",
    options: {
      A: "Google chỉ lập chỉ mục cho các trang web trên thiết bị di động.",
      B: "Google ưu tiên sử dụng phiên bản di động của trang web để lập chỉ mục và xếp hạng.",
      C: "Google chỉ hiển thị kết quả tìm kiếm trên thiết bị di động.",
      D: "Google không quan tâm đến phiên bản desktop của trang web."
    },
    correctAnswer: "B",
    source: "Bộ 4"
  },
  {
    id: 53,
    question: "Trong SEO, 'Core Web Vitals' là gì?",
    options: {
      A: "Các plugin WordPress cần thiết.",
      B: "Các yếu tố đo lường trải nghiệm người dùng như tốc độ tải trang, tương tác và ổn định trực quan.",
      C: "Các công cụ phân tích SEO.",
      D: "Các yếu tố cơ bản của thiết kế web."
    },
    correctAnswer: "B",
    source: "Bộ 4"
  },
  {
    id: 54,
    question: "Trong SEO, 'E-A-T' là viết tắt của gì và nó quan trọng như thế nào?",
    options: {
      A: "Easy Access Technology - không quan trọng lắm.",
      B: "Expertise, Authoritativeness, Trustworthiness (Chuyên môn, Thẩm quyền, Đáng tin cậy) - rất quan trọng, đặc biệt đối với các trang web YMYL.",
      C: "Effective Advertising Techniques - quan trọng cho quảng cáo.",
      D: "External And Technical - quan trọng cho SEO kỹ thuật."
    },
    correctAnswer: "B",
    source: "Bộ 4"
  },
  {
    id: 55,
    question: "Trong SEO, 'YMYL' là viết tắt của gì?",
    options: {
      A: "Your Money Your Life - Các trang web có thể ảnh hưởng đến hạnh phúc, sức khỏe, ổn định tài chính hoặc an toàn của người dùng.",
      B: "Your Marketing Your Leads - Các trang web tiếp thị.",
      C: "Young Market Young Life - Các trang web dành cho giới trẻ.",
      D: "Yearly Marketing Yield Loss - Các trang web thống kê."
    },
    correctAnswer: "A",
    source: "Bộ 4"
  },
  {
    id: 56,
    question: "Trong SEO, 'robots.txt' được sử dụng để làm gì?",
    options: {
      A: "Tăng tốc độ tải trang.",
      B: "Hướng dẫn các bot công cụ tìm kiếm nên thu thập dữ liệu (crawl) hoặc không nên thu thập dữ liệu từ các phần cụ thể của website.",
      C: "Tạo liên kết nội bộ giữa các trang.",
      D: "Tạo sitemap cho website."
    },
    correctAnswer: "B",
    source: "Bộ 4"
  },
  {
    id: 57,
    question: "Trong SEO, 'cloaking' là gì và nó có được khuyến khích không?",
    options: {
      A: "Kỹ thuật hiển thị nội dung khác nhau cho người dùng và bot công cụ tìm kiếm - không được khuyến khích, có thể bị phạt.",
      B: "Kỹ thuật tối ưu hóa hình ảnh - được khuyến khích.",
      C: "Kỹ thuật tạo backlink - được khuyến khích.",
      D: "Kỹ thuật tối ưu hóa tốc độ tải trang - được khuyến khích."
    },
    correctAnswer: "A",
    source: "Bộ 4"
  },
  {
    id: 58,
    question: "Trong SEO, 'doorway pages' là gì và chúng có được khuyến khích không?",
    options: {
      A: "Trang đích cho quảng cáo - được khuyến khích.",
      B: "Trang tạo ra chủ yếu để xếp hạng cho các từ khóa cụ thể, thường có nội dung kém chất lượng và chuyển hướng người dùng - không được khuyến khích, có thể bị phạt.",
      C: "Trang giới thiệu sản phẩm - được khuyến khích.",
      D: "Trang liên hệ - được khuyến khích."
    },
    correctAnswer: "B",
    source: "Bộ 4"
  },
  {
    id: 59,
    question: "Trong SEO, 'hidden text' là gì và nó có được khuyến khích không?",
    options: {
      A: "Văn bản được ẩn khỏi người dùng nhưng hiển thị cho bot công cụ tìm kiếm, thường bằng cách sử dụng CSS - không được khuyến khích, có thể bị phạt.",
      B: "Văn bản trong thẻ alt của hình ảnh - được khuyến khích.",
      C: "Văn bản trong thẻ meta description - được khuyến khích.",
      D: "Văn bản trong file robots.txt - được khuyến khích."
    },
    correctAnswer: "A",
    source: "Bộ 4"
  },
  {
    id: 60,
    question: "Trong SEO, 'link farm' là gì và nó có được khuyến khích không?",
    options: {
      A: "Một nhóm website liên kết với nhau chủ yếu để tăng số lượng backlink - không được khuyến khích, có thể bị phạt.",
      B: "Một trang web chứa nhiều liên kết hữu ích - được khuyến khích.",
      C: "Một trang web chuyên về nông nghiệp - không liên quan đến SEO.",
      D: "Một công cụ tạo liên kết nội bộ - được khuyến khích."
    },
    correctAnswer: "A",
    source: "Bộ 4"
  },
  {
    id: 61,
    question: "SEO là viết tắt của cụm từ nào dưới đây?",
    options: {
      A: "Search Engine Optimization",
      B: "Social Engagement Optimization",
      C: "Sales & E-commerce Operations",
      D: "Systematic Enterprise Organization"
    },
    correctAnswer: "A",
    source: "Bộ 5"
  },
  {
    id: 62,
    question: "Mục tiêu chính của SEO là gì?",
    options: {
      A: "Tăng doanh số bán hàng trực tuyến ngay lập tức.",
      B: "Tăng lượng truy cập tự nhiên (organic traffic) từ các công cụ tìm kiếm.",
      C: "Xây dựng thương hiệu trên mạng xã hội.",
      D: "Giảm chi phí quảng cáo trực tuyến."
    },
    correctAnswer: "B",
    source: "Bộ 5"
  },
  {
    id: 63,
    question: "Tại sao việc nghiên cứu từ khóa (keyword research) lại quan trọng trong SEO?",
    options: {
      A: "Để biết đối thủ cạnh tranh đang sử dụng từ khóa nào.",
      B: "Để xác định các từ khóa mà khách hàng mục tiêu sử dụng khi tìm kiếm sản phẩm/dịch vụ.",
      C: "Để tăng số lượng từ khóa trên website.",
      D: "Để tạo ra nội dung độc đáo và khác biệt."
    },
    correctAnswer: "B",
    source: "Bộ 5"
  },
  {
    id: 64,
    question: "Thẻ Meta Description có vai trò gì trong kết quả tìm kiếm?",
    options: {
      A: "Quyết định thứ hạng website trên trang kết quả tìm kiếm.",
      B: "Hiển thị URL của website.",
      C: "Cung cấp mô tả ngắn gọn về nội dung trang web để thu hút người dùng nhấp chuột.",
      D: "Chứa các từ khóa chính để tăng mật độ từ khóa."
    },
    correctAnswer: "C",
    source: "Bộ 5"
  },
  {
    id: 65,
    question: "Trong SEO, thuật ngữ 'canonical URL' dùng để chỉ điều gì?",
    options: {
      A: "URL của trang chủ website.",
      B: "URL ưu tiên được công cụ tìm kiếm lập chỉ mục khi có nội dung trùng lặp.",
      C: "URL chứa từ khóa chính.",
      D: "URL rút gọn để chia sẻ trên mạng xã hội."
    },
    correctAnswer: "B",
    source: "Bộ 5"
  },
  {
    id: 66,
    question: "Backlink 'nofollow' khác với backlink 'dofollow' như thế nào?",
    options: {
      A: "Backlink 'nofollow' có chất lượng cao hơn 'dofollow'.",
      B: "Backlink 'nofollow' không truyền 'PageRank' (hoặc 'link juice') sang website được liên kết.",
      C: "Backlink 'dofollow' không được công cụ tìm kiếm tính đến.",
      D: "Không có sự khác biệt giữa 'nofollow' và 'dofollow'."
    },
    correctAnswer: "B",
    source: "Bộ 5"
  },
  {
    id: 67,
    question: "Khi thực hiện SEO cho một website mới, bạn nên ưu tiên yếu tố nào trước?",
    options: {
      A: "Xây dựng hàng loạt backlink từ các website khác.",
      B: "Tối ưu hóa SEO On-page (cấu trúc website, nội dung, từ khóa, tốc độ tải trang).",
      C: "Chạy quảng cáo trả phí để tăng truy cập nhanh chóng.",
      D: "Tập trung vào SEO Off-page trước khi có nội dung chất lượng."
    },
    correctAnswer: "B",
    source: "Bộ 5"
  },
  {
    id: 68,
    question: "So sánh SEO và SEM, điểm khác biệt lớn nhất giữa chúng là gì?",
    options: {
      A: "SEO tập trung vào quảng cáo trả phí, SEM tập trung vào truy cập tự nhiên.",
      B: "SEO là một phần của SEM.",
      C: "SEO tập trung vào truy cập tự nhiên (organic), SEM bao gồm cả SEO và quảng cáo trả phí (paid search).",
      D: "SEO và SEM là hai khái niệm hoàn toàn giống nhau."
    },
    correctAnswer: "C",
    source: "Bộ 5"
  },
  {
    id: 69,
    question: "SEO (Tối ưu hóa công cụ tìm kiếm) là gì?",
    options: {
      A: "Một phương pháp quảng cáo trả phí để trang web hiển thị đầu tiên trên Google.",
      B: "Quy trình tăng cường khả năng hiển thị của trang web hoặc trang web trên các trang kết quả của công cụ tìm kiếm (SERPs) một cách tự nhiên.",
      C: "Phần mềm giúp thiết kế trang web đẹp mắt và thu hút người dùng.",
      D: "Hoạt động quản lý và duy trì máy chủ web."
    },
    correctAnswer: "B",
    source: "Bộ 5"
  },
  {
    id: 70,
    question: "Yếu tố nào sau đây **quan trọng nhất** trong SEO On-page?",
    options: {
      A: "Số lượng backlink từ các trang web khác.",
      B: "Tốc độ tải trang và trải nghiệm người dùng trên thiết bị di động.",
      C: "Mức độ liên quan và chất lượng của nội dung trên trang web.",
      D: "Việc sử dụng mạng xã hội để quảng bá trang web."
    },
    correctAnswer: "C",
    source: "Bộ 6"
  },
  {
    id: 71,
    question: "Vì sao việc nghiên cứu từ khóa lại **cần thiết** trước khi triển khai SEO?",
    options: {
      A: "Để đảm bảo trang web có giao diện đẹp mắt và chuyên nghiệp.",
      B: "Để xác định những từ và cụm từ mà khách hàng mục tiêu sử dụng khi tìm kiếm sản phẩm/dịch vụ liên quan.",
      C: "Để tăng tốc độ tải trang web và cải thiện trải nghiệm người dùng.",
      D: "Để xây dựng hệ thống backlink chất lượng từ các trang web uy tín."
    },
    correctAnswer: "B",
    source: "Bộ 6"
  },
  {
    id: 72,
    question: "Backlink chất lượng là gì?",
    options: {
      A: "Liên kết từ bất kỳ trang web nào, miễn là có số lượng lớn.",
      B: "Liên kết từ các trang web có liên quan về chủ đề, có uy tín và độ tin cậy cao.",
      C: "Liên kết từ các trang web có thứ hạng thấp nhưng có nhiều lưu lượng truy cập.",
      D: "Liên kết từ các trang mạng xã hội."
    },
    correctAnswer: "B",
    source: "Bộ 6"
  },
  {
    id: 73,
    question: "Trong SEO, 'từ khóa đuôi dài' (Long-tail keyword) thường có đặc điểm gì?",
    options: {
      A: "Có lượng tìm kiếm rất lớn và độ cạnh tranh cao.",
      B: "Gồm 1-2 từ khóa chính, mang tính chung chung.",
      C: "Là các cụm từ khóa dài, cụ thể, thể hiện ý định tìm kiếm rõ ràng của người dùng và thường có độ cạnh tranh thấp hơn.",
      D: "Chỉ được sử dụng trong quảng cáo trả phí (SEM)."
    },
    correctAnswer: "C",
    source: "Bộ 6"
  },
  {
    id: 74,
    question: "Công cụ nào của Google giúp bạn theo dõi hiệu suất SEO của website, bao gồm lưu lượng truy cập, thứ hạng từ khóa và các lỗi kỹ thuật?",
    options: {
      A: "Google Analytics",
      B: "Google Ads",
      C: "Google Search Console",
      D: "Google My Business"
    },
    correctAnswer: "C",
    source: "Bộ 6"
  },
  {
    id: 75,
    question: "Trong SEO, 'tối ưu hóa cho thiết bị di động' (Mobile-friendly) nghĩa là gì?",
    options: {
      A: "Chỉ hiển thị trang web trên điện thoại di động, không hiển thị trên máy tính.",
      B: "Thiết kế trang web sao cho hiển thị và hoạt động tốt trên các thiết bị di động (điện thoại, máy tính bảng), đảm bảo trải nghiệm người dùng tốt.",
      C: "Tạo một ứng dụng di động riêng biệt thay vì website.",
      D: "Tăng kích thước chữ viết trên trang web."
    },
    correctAnswer: "B",
    source: "Bộ 6"
  },
  {
    id: 76,
    question: "Phương pháp SEO 'mũ trắng' (White hat SEO) khác biệt với 'mũ đen' (Black hat SEO) như thế nào?",
    options: {
      A: "Mũ trắng tập trung vào các kỹ thuật hợp pháp, bền vững, tuân thủ nguyên tắc của công cụ tìm kiếm, trong khi mũ đen sử dụng các thủ thuật gian lận, ngắn hạn để nhanh chóng tăng thứ hạng.",
      B: "Mũ trắng chỉ tập trung vào SEO On-page, còn mũ đen chỉ tập trung vào SEO Off-page.",
      C: "Mũ trắng sử dụng công cụ trả phí, mũ đen sử dụng công cụ miễn phí.",
      D: "Không có sự khác biệt, cả hai đều là các phương pháp SEO hiệu quả."
    },
    correctAnswer: "A",
    source: "Bộ 6"
  },
  {
    id: 77,
    question: "Tại sao 'nội dung là vua' (Content is king) trong SEO?",
    options: {
      A: "Vì nội dung giúp trang web có giao diện đẹp mắt.",
      B: "Vì nội dung chất lượng, độc đáo và hữu ích thu hút người dùng, giữ chân họ ở lại trang web lâu hơn, tăng khả năng chia sẻ và nhận được backlink tự nhiên, từ đó cải thiện thứ hạng.",
      C: "Vì nội dung giúp tăng tốc độ tải trang.",
      D: "Vì nội dung giúp giảm chi phí quảng cáo."
    },
    correctAnswer: "B",
    source: "Bộ 6"
  },
  {
    id: 78,
    question: "Khi nào bạn nên sử dụng thẻ 'noindex' trong robots meta tag?",
    options: {
      A: "Khi bạn muốn trang web được index nhanh chóng.",
      B: "Khi bạn muốn ngăn chặn một trang cụ thể (ví dụ trang cảm ơn, trang quản trị, nội dung trùng lặp) không bị công cụ tìm kiếm index và hiển thị trên kết quả tìm kiếm.",
      C: "Khi bạn muốn tăng tốc độ tải trang.",
      D: "Khi bạn muốn cải thiện trải nghiệm người dùng trên thiết bị di động."
    },
    correctAnswer: "B",
    source: "Bộ 6"
  },
  {
    id: 79,
    question: "Mục đích chính của việc sử dụng từ khóa (keywords) trong SEO là gì?",
    options: {
      A: "Để làm cho văn bản trên website dài hơn và phức tạp hơn.",
      B: "Để thu hút người dùng mạng xã hội.",
      C: "Để giúp các công cụ tìm kiếm hiểu nội dung trang web và kết nối với truy vấn tìm kiếm của người dùng.",
      D: "Để tăng tốc độ tải trang web."
    },
    correctAnswer: "C",
    source: "Bộ 6"
  },
  {
    id: 80,
    question: "SEO (Search Engine Optimization) được định nghĩa chính xác nhất là gì?",
    options: {
      A: "Một phương pháp xây dựng website đẹp mắt và thu hút người dùng.",
      B: "Một tập hợp các kỹ thuật nhằm tối ưu hóa website để đạt thứ hạng cao hơn trên các công cụ tìm kiếm.",
      C: "Một hình thức quảng cáo trực tuyến trả phí để tăng lượng truy cập website.",
      D: "Một công cụ phân tích website để đo lường hiệu quả hoạt động."
    },
    correctAnswer: "B",
    source: "Bộ 7"
  },
  {
    id: 81,
    question: "Tại sao SEO lại quan trọng đối với một doanh nghiệp trực tuyến?",
    options: {
      A: "SEO giúp website tải nhanh hơn, cải thiện trải nghiệm người dùng.",
      B: "SEO đảm bảo website luôn hiển thị đẹp trên mọi thiết bị di động.",
      C: "SEO giúp tăng độ nhận diện thương hiệu và thu hút khách hàng tiềm năng một cách bền vững thông qua tìm kiếm tự nhiên.",
      D: "SEO giúp giảm chi phí quảng cáo và marketing trực tuyến."
    },
    correctAnswer: "C",
    source: "Bộ 7"
  },
  {
    id: 82,
    question: "Thẻ tiêu đề (Title tag) có vai trò quan trọng như thế nào trong SEO?",
    options: {
      A: "Chỉ hiển thị trên trang web cho người dùng xem.",
      B: "Là yếu tố chính để Google xác định chủ đề chính của trang và hiển thị trên trang kết quả tìm kiếm.",
      C: "Không ảnh hưởng đến thứ hạng tìm kiếm, chỉ quan trọng về mặt thẩm mỹ.",
      D: "Chỉ cần chứa từ khóa chính, không cần hấp dẫn người dùng."
    },
    correctAnswer: "B",
    source: "Bộ 7"
  },
  {
    id: 83,
    question: "Responsive design (thiết kế đáp ứng) quan trọng như thế nào đối với SEO?",
    options: {
      A: "Không quan trọng, vì SEO chỉ tập trung vào phiên bản desktop của website.",
      B: "Rất quan trọng, vì Google ưu tiên các website thân thiện với thiết bị di động và trải nghiệm người dùng trên mọi thiết bị.",
      C: "Chỉ quan trọng nếu website của bạn có lượng truy cập lớn từ thiết bị di động.",
      D: "Responsive design chỉ ảnh hưởng đến giao diện người dùng, không liên quan đến SEO."
    },
    correctAnswer: "B",
    source: "Bộ 7"
  },
  {
    id: 84,
    question: "Thẻ Meta Description (Mô tả meta) được sử dụng để làm gì?",
    options: {
      A: "Hiển thị nội dung chính của trang web cho người dùng.",
      B: "Cung cấp một đoạn mô tả ngắn gọn về nội dung trang, hiển thị dưới tiêu đề trang trên trang kết quả tìm kiếm, nhằm thu hút người dùng nhấp vào.",
      C: "Chứa các từ khóa quan trọng để tăng thứ hạng tìm kiếm.",
      D: "Thay thế cho thẻ tiêu đề (Title tag) khi thẻ tiêu đề quá dài."
    },
    correctAnswer: "B",
    source: "Bộ 7"
  },
  {
    id: 85,
    question: "CTR (Click-Through Rate) trong SEO là gì và tại sao nó quan trọng?",
    options: {
      A: "Chi phí trung bình cho mỗi nhấp chuột vào quảng cáo.",
      B: "Tỷ lệ người dùng nhấp vào liên kết website của bạn trên trang kết quả tìm kiếm so với tổng số lần hiển thị, phản ánh mức độ hấp dẫn của tiêu đề và mô tả trang.",
      C: "Số lượng từ khóa được sử dụng trong nội dung website.",
      D: "Thời gian trung bình người dùng ở lại trên website."
    },
    correctAnswer: "B",
    source: "Bộ 7"
  },
  {
    id: 86,
    question: "Công cụ nào sau đây KHÔNG phải là công cụ hỗ trợ SEO?",
    options: {
      A: "Google Analytics.",
      B: "Google Search Console.",
      C: "SEMrush.",
      D: "Microsoft Word."
    },
    correctAnswer: "D",
    source: "Bộ 7"
  },
  {
    id: 87,
    question: "Yếu tố nào sau đây **không** phải là yếu tố xếp hạng chính của Google?",
    options: {
      A: "Chất lượng nội dung",
      B: "Số lượng từ khóa trong bài viết",
      C: "Trải nghiệm người dùng (UX)",
      D: "Backlinks chất lượng"
    },
    correctAnswer: "B",
    source: "Bộ 7"
  },
  {
    id: 88,
    question: "Mục đích chính của việc nghiên cứu từ khóa trong SEO là gì?",
    options: {
      A: "Để tìm hiểu các từ khóa mà đối thủ cạnh tranh đang sử dụng",
      B: "Để xác định các từ khóa mà khách hàng tiềm năng sử dụng khi tìm kiếm sản phẩm/dịch vụ của bạn",
      C: "Để tăng số lượng từ khóa trên trang web",
      D: "Để tạo ra nội dung dài hơn"
    },
    correctAnswer: "B",
    source: "Bộ 7"
  }
];
