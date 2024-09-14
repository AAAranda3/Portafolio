"use client";

import React from "react";
import Image from "next/image"; // Ensure you import Image from next/image or use an <img> tag if not using Next.js

type SkillItem = {
  img: string;
};

type SkillCardProps = {
  list: SkillItem[];
};

export default function SkillCard({ list }: SkillCardProps) {
  return (
    <div className="order-1 lg:order-2 col-lg-6">
      <div className="flex justify-center flex-wrap mb-2">
        {list.map((item) => (
          <div
            key={item.img}
            className="icon icon-lg icon-shape shadow-sm rounded-circle m-1"
            style={{
              width: '64px',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              overflow: 'hidden',
            }}
          >
            <img
              src={item.img}
              alt="Icon"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
