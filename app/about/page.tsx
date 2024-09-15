"use client";

import React from "react";

export default function AboutPage() {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('./background-about.jpg')" }} // Ensure this path is correct
    >
      <div className="absolute inset-0 bg-black/30" /> {/* Overlay to make text readable */}
      <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center max-w-6xl mx-auto">
        {/* Text Section */}
        <div className="w-full max-w-lg mb-6 text-white">
          <p className="text-8xl text-primary mb-2">Hello, I'm</p>
          <h2 className="text-5xl font-semibold mb-3">Software Engineer</h2>
          <p className="text-xl mb-6">
            Passionate about creating new projects, focused on{' '}
            <span className="text-primary font-semibold">Mobile Apps</span> and{' '}
            <span className="text-primary font-semibold">Web Development</span>. I enjoy
            self-learning and turning ideas into reality. Explore my projects
            and expertise!
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 mb-6">
          <div className="w-64 h-64 flex items-center justify-center rounded-full overflow-hidden">
            <img
              src="/photo.PNG"
              alt="Persona Photo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
