"use client";

import React from "react";

type SkillImage = {
  img: string;
};

type SkillImagesProps = {
  list: SkillImage[];
};

export default function SkillItem({ list }: SkillImagesProps) {
  return (
    <div className="order-1 lg:order-2 col-lg-6">
      <div className="flex justify-center flex-wrap mb-2">
        {list.map((item) => (
          <div
            key={item.img}
            className="icon icon-lg icon-shape shadow-sm rounded-circle m-1 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
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
