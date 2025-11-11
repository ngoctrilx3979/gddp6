"use client";
import Image from "next/image";

const categories = [
  {
    group: "Hỗ trợ",
    items: [
      { title: "Gì Cũng Biết", img: "/icons/1.png" },
    ],
  },
  {
    group: "Thiết kế giáo án",
    items: [
      { title: "Thiết kế Giáo án STEAM", img: "/icons/2.png" },
      { title: "Thiết kế Giáo Án", img: "/icons/3.png" },
      { title: "Tổ chức HĐTN theo Chương trình GDPT 2018", img: "/icons/4.png" },
      { title: "Tối ưu kịch bản Video", img: "/icons/5.png" },
      { title: "Thiết kế dự án học tập", img: "/icons/6.png" },
      { title: "AI Tạo Slide", img: "/icons/7.png" },
    ],
  },
  {
    group: "Chuyên sâu",
    items: [
      { title: "Tư Duy Phản Biện", img: "/icons/8.png" },
      { title: "Triz - Các thủ thuật sáng tạo", img: "/icons/9.png" },
      { title: "Viết lời bài hát", img: "/icons/10.png" },
      { title: "Hỏi đáp Cuộc thi SÁNG TẠO SẢN PHẨM GIÁO DỤC TRÊN NỀN TẢNG ROBOKI AI", img: "/icons/11.png" },
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
                            <div 
                                key={item.title} 
                                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
                            >
                             <div className="w-14 h-14 relative">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className="object-cover rounded-full"
                                />
                                </div>
                                <p className="text-sm text-gray-800 font-medium">{item.title}</p>
                            </div>
    
                            
                        ))}
                    </div>
                    

                </div>

            ))}
        </div>
    );
}