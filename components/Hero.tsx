import React from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-emerald-950 dark:via-gray-900 dark:to-teal-950">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/assets/heroSec.jpg')",
        }}
      ></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-200/20 to-teal-200/20 dark:from-emerald-800/20 dark:to-teal-800/20"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-300/20 dark:bg-emerald-700/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-teal-300/20 dark:bg-teal-700/20 rounded-full blur-xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-[600] leading-tight">
              The Funnel Effect
            </h1>
            <p className="text-lg md:text-2xl text-white max-w-2xl mx-auto leading-relaxed">
              Transform your knowledge journey with expert-led content.
              <br />
              <span className="text-green-300 font-medium">
                From code to cardiology - master what matters most.
              </span>
            </p>
            <div className="mt-4 text-sm md:text-base text-white/90 italic">
              "Where learning flows seamlessly from concept to mastery"
            </div>
            <div className="mt-2 text-xs md:text-sm text-white/80">
              💡 Programming • 🫀 Cardiology • 📚 Knowledge • 🚀 Growth
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/blogs"
              className="bg-gradient-to-r from-emerald-500 via-green-600 to-teal-600 hover:from-emerald-600 hover:via-green-700 hover:to-teal-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Start Learning
            </Link>
          </div>

          {/* Stats */}
          <div className="pt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-300">
                  500+
                </div>
                <div className="text-sm text-white/80 uppercase tracking-wide">
                  Articles
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-300">
                  25k+
                </div>
                <div className="text-sm text-white/80 uppercase tracking-wide">
                  Learners
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-300">
                  15+
                </div>
                <div className="text-sm text-white/80 uppercase tracking-wide">
                  Topics
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-300">
                  5+
                </div>
                <div className="text-sm text-white/80 uppercase tracking-wide">
                  Years
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Curved Wave Bottom */}
      {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg 
          className="relative block w-full h-16 md:h-20 lg:h-24 text-white" 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            fill="currentColor"
          />
        </svg>
      </div> */}
    </div>
  );
};

export default Hero;
