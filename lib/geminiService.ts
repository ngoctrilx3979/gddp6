// lib/geminiService.ts
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyCSQ9cQYppwfZhp4EW7U5ArgG_lKvfqaDo";
const genAI = new GoogleGenerativeAI(apiKey);

// 🧹 Hàm tách JSON trong response
function extractJSON(text: string): string {
  // Bỏ codeblock
  let clean = text.replace(/```json/g, "").replace(/```/g, "").trim();

  // Regex tìm JSON object đầu tiên
  const match = clean.match(/\{[\s\S]*\}/);
  if (match) {
    return match[0];
  }
  throw new Error("Không tìm thấy JSON trong response: " + text);
}

// 🔄 Hàm gọi Gemini có retry
async function callWithRetry(model: any, prompt: string, retries = 3, delay = 30000) {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const result = await model.generateContent(prompt);
      const raw = result.response.text();
      const jsonStr = extractJSON(raw);
      return JSON.parse(jsonStr);
    } catch (err: any) {
      if (err.message?.includes("429") && attempt < retries - 1) {
        console.warn(`⚠️ Quota exceeded. Thử lại sau ${delay / 1000}s...`);
        await new Promise((res) => setTimeout(res, delay));
      } else if (err instanceof SyntaxError) {
        console.error("❌ JSON parse error:", err);
        throw new Error("Gemini trả về dữ liệu không hợp lệ");
      } else {
        throw err;
      }
    }
  }
  throw new Error("Gemini API failed sau nhiều lần retry");
}
// =====================
// 📌 Các hàm export
// =====================

// 1. Tóm tắt bài học
export async function generateSummary(inputContent: string, lessonContent: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `Bạn là một trợ lý AI giúp tóm tắt nội dung học tập.

Nếu người dùng nhập thêm nội dung (inputContent), hãy ưu tiên dùng nó để tạo tóm tắt.
Nếu inputContent rỗng, hãy dùng lessonContent.

Nội dung người dùng nhập thêm:
${inputContent}

Nội dung bài học:
${lessonContent}

Yêu cầu: 
- Tóm tắt thành 1 tiêu đề ngắn gọn và 1 đoạn tóm tắt súc tích.
- Trả về JSON đúng chuẩn, không kèm văn bản thừa.

Cấu trúc JSON:
{
  "title": "tiêu đề ngắn gọn",
  "summary": "đoạn tóm tắt súc tích"
}`;

  return await callWithRetry(model, prompt);
}

// 2. Sinh câu hỏi luyện tập
export async function generateQuestions(prompt: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
  return await callWithRetry(model, prompt);
}

// 3. Phân tích năng lực học tập (có thêm dữ liệu chart)
export async function generateAnalysis(lessons: any[], practices: any[], feedbacks: any[]) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  // 🔹 Rút gọn dữ liệu trước khi gửi để tránh quota
  const lessonData = lessons.map((l) => ({ id: l.id, title: l.title }));
  const practiceData = practices.map((p) => ({
    lessonId: p.lessonId,
    score: p.score,
    total: p.details?.length || 0,
  }));
  const feedbackData = feedbacks.map((f) => ({ rating: f.rating, comment: f.comment }));

  const prompt = `
Hãy phân tích năng lực học tập dựa trên dữ liệu:

1. Danh sách bài học: ${JSON.stringify(lessonData)}
2. Kết quả luyện tập: ${JSON.stringify(practiceData)}
3. Các feedback của học viên: ${JSON.stringify(feedbackData)}

Yêu cầu:
- Đánh giá chi tiết năng lực hiện tại (điểm mạnh, điểm yếu).
- Phân tích dựa trên kết quả luyện tập và phản hồi.
- Đưa ra gợi ý hướng học tập cụ thể để cải thiện.
- Tạo dữ liệu biểu đồ (chart data) có thể trực quan hóa được.

Trả về JSON với cấu trúc sau:
{
  "overview": "Tổng quan năng lực...",
  "practiceAnalysis": "Phân tích dựa trên luyện tập...",
  "feedbackAnalysis": "Phân tích dựa trên phản hồi...",
  "suggestions": ["Gợi ý 1", "Gợi ý 2", "Gợi ý 3"],
  "charts": {
    "practiceChart": {
      "title": "Điểm trung bình theo bài học",
      "type": "bar",
      "data": [
        { "lessonTitle": "Bài 1", "averageScore": 8.5 },
        { "lessonTitle": "Bài 2", "averageScore": 7.0 }
      ]
    },
    "feedbackChart": {
      "title": "Phân bố đánh giá của học viên",
      "type": "pie",
      "data": [
        { "rating": 5, "count": 10 },
        { "rating": 4, "count": 4 },
        { "rating": 3, "count": 2 }
      ]
    },
    "progressChart": {
      "title": "Xu hướng điểm luyện tập theo thời gian",
      "type": "line",
      "data": [
        { "date": "2025-09-01", "averageScore": 7.2 },
        { "date": "2025-09-10", "averageScore": 8.0 },
        { "date": "2025-09-20", "averageScore": 8.8 }
      ]
    }
  }
}
- Chỉ trả về JSON hợp lệ, không giải thích thêm.
`;

  return await callWithRetry(model, prompt);
}
export async function askGemini(prompt: string, context: any = {}) {
  const contextText = JSON.stringify(context, null, 2);
  const fullPrompt = `
  Bạn là trợ lý ảo của trang web học tập.
  Dữ liệu trang web:
  ${contextText}

  Người dùng hỏi: "${prompt}"

  Hãy trả lời tự nhiên, rõ ràng, có thể chèn link chính xác nếu phù hợp.
  Nếu không chắc chắn, hãy nói lịch sự.
  `;
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

 const result = await model.generateContent(fullPrompt);
     return result.response.text();
 
}