"use client";

import React from "react";
import { Divider } from "@nextui-org/divider";

export default function AboutPage() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8">
      {/* Text Section */}
      <div className="max-w-lg font-bold text-center md:text-left mb-6 md:mb-0 md:mr-8">
        <p className="text-4xl text-primary mb-2">Hello, I'm</p>
        <h2 className="text-4xl font-semibold mb-3">Android Engineer</h2>
        <p className="text-xl mb-6 text-justify">
          Passionate about creating new projects, focused on <span className="text-primary">Mobile Apps</span> and <span className="text-primary">Web Development</span>.
          I enjoy self-learning and turning ideas into reality.
          Explore my projects and expertise!
        </p>
      </div>


      {/* Image Section */}
      <div className="flex-shrink-0 mb-6 md:mb-0">
        <div className="w-80 h-80 flex items-center justify-center border-4 border-primary rounded-full overflow-hidden">
          <img
            src="/photo2.jpg"
            alt="Persona Photo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
