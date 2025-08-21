"use client";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircle } from "lucide-react";


export default function WhyChooseUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 bg-gray-50 rounded-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left: Stats */}
        <div className="flex flex-col gap-6" data-aos="fade-right">
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h3 className="text-3xl font-bold text-blue-700">98%</h3>
            <p className="text-gray-600 mt-2">Successful Client</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h3 className="text-3xl font-bold text-blue-700">79%</h3>
            <p className="text-gray-600 mt-2">Team Advisors</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h3 className="text-3xl font-bold text-blue-700">12+</h3>
            <p className="text-gray-600 mt-2">Years Experience</p>
          </div>
        </div>

        {/* Middle: Image */}
        <div className="relative w-full h-[400px]" data-aos="zoom-in">
          <Image
            src="/images/why-choose-us.jpg"
            alt="Why Choose Us"
            fill
            className="object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right: Content */}
        <div className="flex flex-col gap-4" data-aos="fade-left">
          <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded text-sm font-medium w-fit">
            Why Choose Us
          </span>
          <h2 className="text-3xl font-bold text-gray-800 leading-snug">
            Choose Excellence <br /> Elevate Your Learning Experience
          </h2>
          <p className="text-gray-600">
            Chúng tôi cam kết mang đến trải nghiệm học tập tốt nhất, giúp bạn
            phát triển kiến thức và kỹ năng để tiến xa hơn trên con đường học
            tập.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-2 mt-4">
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Range Of Services
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Professional Expertise
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Online Resources
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Client Success Stories
            </div>
          </div>

          {/* CTA Button */}
          <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition">
            About Us →
          </button>
        </div>
      </div>
    </section>
  );
}
