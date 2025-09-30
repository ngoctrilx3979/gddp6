// Bỏ thẻ HTML và cắt theo số từ
export function getExcerpt(html: string, wordLimit: number = 30): string {
  if (!html) return "";
  const text = html.replace(/<[^>]+>/g, " "); // bỏ tag HTML
  const words = text.trim().split(/\s+/);
  return words.slice(0, wordLimit).join(" ") + (words.length > wordLimit ? "..." : "");
}
