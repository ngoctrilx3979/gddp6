"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gray-50 rounded-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left content */}
        <div data-aos="fade-right" data-aos-duration="1000">
          <span
            className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Giáo Dục Địa Phương
          </span>

          <h1
            className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Khám phá tri thức <br /> gắn liền với quê hương
          </h1>

          <ul className="space-y-3 mb-8 text-gray-700">
            <li data-aos="fade-up" data-aos-delay="400">🌱 Học tập sinh động, gần gũi và thiết thực</li>
            <li data-aos="fade-up" data-aos-delay="500">📚 Tài liệu, bài học phong phú và đa dạng</li>
            <li data-aos="fade-up" data-aos-delay="600">🤝 Cùng nhau xây dựng hành trang cho tương lai</li>
          </ul>

          <div
            className="flex gap-4"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md shadow transition">
              Bắt đầu học ngay ↗
            </button>
            <button className="border border-gray-400 hover:border-gray-600 px-6 py-3 rounded-md font-medium transition">
              Khám phá thêm ↗
            </button>
          </div>
        </div>

        {/* Right image */}
        <div
          className="relative flex justify-center"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          {/* Background circle */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div
              className="w-72 h-72 md:w-96 md:h-96 bg-green-100 rounded-full -z-10"
              data-aos="zoom-in"
              data-aos-delay="300"
            ></div>
          </div>

          <Image
            src="/an-giang.jpg" // 👉 thay bằng ảnh minh họa giáo dục
            alt="Giáo dục địa phương"
            width={400}
            height={400}
            className="relative z-10"
          />

          {/* Small box highlight */}
          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-md px-4 py-3 flex items-center gap-3"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <span className="text-gray-800 font-medium">
              Cộng đồng học tập
            </span>
            <div className="flex -space-x-3">
              <Image src="/student1.jpg" alt="Student1" width={40} height={40} className="rounded-full border" />
              <Image src="/student2.jpg" alt="Student2" width={40} height={40} className="rounded-full border" />
              <Image src="/student3.jpg" alt="Student3" width={40} height={40} className="rounded-full border" />
              <div className="w-10 h-10 bg-green-600 text-white flex items-center justify-center rounded-full border">
                +
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
