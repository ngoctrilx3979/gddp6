"use client";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    group: "Thiết kế giáo án",
    items: [
      { title: "Thiết kế Giáo án STEAM", img: "/steam.png", link: "https://roboki.vn/g/67ddbd59923d0072befa1357" },
      { title: "Thiết kế Giáo Án", img: "/giao-an.jpg", link: "https://roboki.vn/g/67ddbd59923d0072befa135d" },
      { title: "Tổ chức HĐTN theo Chương trình GDPT 2018", img: "/hdtn.jpg", link: "https://roboki.vn/g/67ddbd59923d0072befa1383" },
      { title: "Tối ưu kịch bản Video", img: "/images.png", link: "https://roboki.vn/g/68008a07759adcc4be9c4bff" },
      { title: "Thiết kế dự án học tập", img: "/ok.png", link: "https://roboki.vn/g/682c2d277e2e043fa9c31cba" },
      { title: "AI Tạo Slide", img: "/images (1).png", link: "https://roboki.vn/g/6847ad346b8149756f12d38c" },
    ],
  },
  {
    group: "Chuyên sâu",
    items: [
      { title: "Tư Duy Phản Biện", img: "/phan-bien.jpg", link: "https://roboki.vn/g/67ddbd59923d0072befa135f" },
      { title: "Triz - Các thủ thuật sáng tạo", img: "/Triz.jpg", link: "https://roboki.vn/g/67ddbd59923d0072befa1369" },
      { title: "Viết lời bài hát", img: "/loi-bai-hat.jpg", link: "https://roboki.vn/g/67ddbd59923d0072befa1379" },
      { 
        title: "Hỏi đáp Cuộc thi SÁNG TẠO SẢN PHẨM GIÁO DỤC TRÊN NỀN TẢNG ROBOKI AI", 
        img: "/bai-hoc.png", 
        link: "https://roboki.vn/g/68da39b4f42a1c242438d3ce" 
      },
    ],
  }
];

export default function LinkMenu() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {categories.map((category) => (
        <div key={category.group} className="mb-8">
          
          <h2 className="text-2xl font-bold mb-4 text-blue-600">{category.group}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {category.items.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                target="_blank"
                className="
                  bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center
                  hover:shadow-xl hover:-translate-y-1 transition-all duration-200
                "
              >
                <div className="w-16 h-16 relative mb-3">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>

                <p className="text-sm text-gray-800 font-medium">
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
