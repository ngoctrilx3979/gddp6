import Image from "next/image";
import LatestPosts from "./components/LatestPosts";
import LatestLessons from "./components/LatestLessons";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Nội dung chính */}
      <main className="flex-1">
        <Hero />
        <div className="px-8 sm:px-20 py-12 flex flex-col gap-16">
          <WhyChooseUs />
          <LatestLessons />
          <LatestPosts />
          <Testimonials />
          <Footer />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-800 py-6 flex gap-6 flex-wrap items-center justify-center text-sm text-white">
        <div className="flex items-center gap-2">
          <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
          Địa chỉ: 10A Ngô Thời Nhậm, Phường Mỹ Long
        </div>
        <div className="flex items-center gap-2">
          <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
          SĐT: 0938693693
        </div>
        <div className="flex items-center gap-2">
          <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
          Email: ngoctrilx3979@gmail.com
        </div>
      </footer>
    </div>
  );
}
