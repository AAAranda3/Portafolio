"use client";

import { useState } from 'react';
import { Tabs, Tab } from "@nextui-org/react";
import SkillItem from "@/components/skill-item"

// Define a type for the tab keys
type TabKey = 'Mobile' | 'Web' | 'Others';

const mobileImages = [
  { img: "/kotlin.svg" },
  { img: "/java.svg" },
  { img: "/ionic.svg" },
  { img: "/compose.svg" },
  { img: "/android_studio.svg" },
  { img: "/gradle.svg" },
  { img: "/junit.svg" },
  { img: "/bitbucket.svg" },
  { img: "/firebase.svg" },
  { img: "/sqlite.svg" },
  { img: "/xml.svg" },
];

const webImages = [
  { img: "/javascript.svg" },
  { img: "/ts.svg" },
  { img: "/html.svg" },
  { img: "/css.svg" },
  { img: "/nextjs.svg" },
  { img: "/nodejs.svg" },
  { img: "/angular.svg" },
  { img: "/ionic.svg" },
  { img: "/php.svg" },
  { img: "/tailwind.svg" },
  { img: "/mongodb.svg" },
  { img: "/mysql.svg" },
];

const otherImages = [
  { img: "/python.svg" },
  { img: "/c++.svg" },
  { img: "/c.svg" },
  { img: "/unity.svg" },
  { img: "/raspberrypi.svg" },
  { img: "/arduino.svg" },
  { img: "/github.svg" },
  { img: "/gitlab.svg" },
  { img: "/docker.svg" },
  { img: "/jira.svg" },
  { img: "/confluence.svg" },
  { img: "/trello.svg" },
];

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState<TabKey>('Mobile');

  const handleSelectionChange = (key: React.Key) => {
    // Cast the key to TabKey, assuming it matches one of the valid values
    setActiveTab(key as TabKey);
  };

  return (
    <div className="flex flex-col items-center justify-center p-20">
      <h2 className="text-4xl text-primary font-semibold mb-3 p-8">Skills</h2>

      <div className="w-full max-w-lg">
        <div className="flex justify-center">
          <Tabs
            variant="underlined"
            color="primary"
            size="lg"
            aria-label="Tabs underlined"
            onSelectionChange={handleSelectionChange}
          >
            <Tab key="Mobile" title="Mobile" />
            <Tab key="Web" title="Web" />
            <Tab key="Others" title="Others" />
          </Tabs>
        </div>

        <div className="mt-20">
          {activeTab === 'Mobile' && <SkillItem list={mobileImages}></SkillItem>}
          {activeTab === 'Web' && <SkillItem list={webImages}></SkillItem>}
          {activeTab === 'Others' && <SkillItem list={otherImages}></SkillItem>}
        </div>
      </div>
    </div>


  );
}
