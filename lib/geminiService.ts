// lib/geminiService.ts
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyDSw7Ndia1eY2CNAE7ccadH1m2U7mQuAPQ";
const genAI = new GoogleGenerativeAI(apiKey);

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

  const result = await model.generateContent(prompt);
  let text = result.response.text();
// 🧹 Làm sạch nếu Gemini trả về có ```json ... ```
  text = text.replace(/```json/g, "").replace(/```/g, "").trim();
  try {
    return JSON.parse(text);
  } catch (e) {
    console.error("Gemini trả về không đúng JSON:", text);
    throw e;
  }
}

export async function generateQuestions(prompt: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(prompt);
  let text = result.response.text();
 text = text.replace(/```json/g, "").replace(/```/g, "").trim();
  // parse JSON từ Gemini
  try {
    return JSON.parse(text);
  } catch (e) {
    console.error("JSON parse error:", e, text);
    throw new Error("Gemini trả về không phải JSON hợp lệ");
  }
}