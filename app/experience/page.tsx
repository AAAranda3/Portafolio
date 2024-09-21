"use client";

import React from 'react';
import { Timeline } from '@/components/timeline';
import { Chip } from '@nextui-org/react';

const timelineData = [
  {
    title: 'Townhall of Terrassa',
    content: (
      <div className="text-justify">
        <h4 className="text-lg font-semibold text-primary">
          Mobile Developer
        </h4>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
          January 2021 - June 2021
        </p>
        <p className="font-medium mb-4">
          My first touch with a real project. I made a tailor-made application for the Animal Welfare Department, completely alone, while studying my first Higher Education.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Developed an Android application in <span className="font-medium">Kotlin</span> using <span className="font-medium">RxKotlin</span>, <span className="font-medium">XML</span>, and <span className="font-medium">Firebase</span> for database management.</li>
          <li>Used <span className="font-medium">Github</span> for version control and project management.</li>
          <li>Created a space for processing animal complaints, accessing relevant animal-related information, and facilitating adoptions from kennels associated with Animal Welfare.</li>
          <li>Implemented volunteer management features, allowing users to sign up and participate in animal welfare activities.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Witeklab',
    content: (
      <div className="text-justify">
        <h4 className="text-lg font-semibold text-primary">
          IOT Developer
        </h4>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
          September 2021 - June 2022
        </p>
        <p className="font-medium mb-4">
          Dual internship for the second Higher Education, I touched a lot of technologies and languages.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Developed applications in <span className="font-medium">Ionic</span> to visualize sensor data.</li>
          <li>Integrated applications with <span className="font-medium">Bluetooth</span> to communicate with <span className="font-medium">ESP-32</span> microcontrollers programmed in Python.</li>
          <li>Led a team of interns, providing leadership and overseeing daily tasks.</li>
          <li>Programmed devices and sensors using <span className="font-medium">I2C</span> and <span className="font-medium">SPI</span> communication protocols.</li>
          <li>Worked with various microcontrollers, including <span className="font-medium">Arduino</span> and <span className="font-medium">Raspberry Pi</span>.</li>
          <li>Developed web applications using <span className="font-medium">Angular</span>.</li>
          <li>Programmed microchips and facilitated communication via <span className="font-medium">radio</span> in <span className="font-medium">C</span>.</li>
        </ul>
        <p className="font-medium mt-4">
          This role provided me with the opportunity to immerse myself in a diverse range of technologies and languages, giving me a solid foundation in IoT development.
          Leading a team of interns helped me refine my leadership skills and gain experience in managing microprojects.
          I also enhanced my technical versatility with exposure to different aspects of IoT, from device programming to app and web development, has been invaluable.
        </p>
      </div>
    ),
  },
  {
    title: 'VASS',
    content: (
      <div className="text-justify">
        <h4 className="text-lg font-semibold text-primary">
          Android Developer
        </h4>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
          September 2022 - November 2023
        </p>
        <p className="font-medium mb-4">
          I was responsible for the development and maintenance of multiple mobile applications, including MyCupra and Seat/Cupra Connect.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Developed Android applications using <span className="font-medium">Jetpack Compose</span>, focusing on modern UI components, performance, and user experience.</li>
          <li>Developed and maintained the <span className="font-medium">Seat/Cupra Connect</span> app using <span className="font-medium">Java</span>, contributing to continuous improvement and functionality.</li>
          <li>Integrated and maintained <span className="font-medium">REST APIs</span> for seamless data flow between mobile apps and backend services.</li>
          <li>Utilized <span className="font-medium">JIRA Software</span> for project management, tracking bugs, and following the project lifecycle efficiently.</li>
          <li>Collaborated with cross-functional teams, adhering to the <span className="font-medium">SAFe (Scaled Agile Framework)</span> methodology to ensure alignment with organizational goals.</li>
          <li>Managed version control using <span className="font-medium">Sourcetree</span> locally and <span className="font-medium">Bitbucket</span> remotely, ensuring smooth collaboration across repositories.</li>
        </ul>
        <p className="font-medium mt-4">
          This role helped enhance my skills in <span className="font-medium">Jetpack Compose</span>, <span className="font-medium">REST API integration</span>, and agile methodologies in a collaborative environment.
          It also allowed me to fully focus on mobile development, gain significant experience, and greatly improve the quality of my code.
        </p>
      </div>
    ),
  },
  {
    title: 'WorldSensing',
    content: (
      <div className="text-justify">
        <h4 className="text-lg font-semibold text-primary">
          Android Software Engineer
        </h4>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
          November 2023 - Now
        </p>
        <p className="font-medium mb-4">
          Fully responsible for the development, testing and releases of the Android application that configures the IoT solutions offered by the company. These solutions are focused on sectors such as mining, infrastructure, construction, and railways.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Developed and maintained the application using <span className="font-medium">Java</span> with <span className="font-medium">RxJava</span> and <span className="font-medium">Kotlin</span> with <span className="font-medium">RxKotlin</span>, following the <span className="font-medium">MVVM design pattern</span> to ensure clean architecture and maintainable code.</li>
          <li>Monitored data and configured IoT solutions, including managing radio frequency operations.</li>
          <li>Focused on automated testing strategies to ensure reliability and high-quality code.</li>
          <li>Implemented <span className="font-medium">CI/CD pipelines</span> for continuous integration and delivery, streamlining the release process.</li>
          <li>Used <span className="font-medium">Firebase</span> for various integrations, including data management, crashlitics, internal distribution and notifications.</li>
          <li>Adhered to <span className="font-medium">Agile methodology</span> for project management and team collaboration.</li>
          <li>Managed version control using <span className="font-medium">Bitbucket</span> and <span className="font-medium">Git</span>.</li>
        </ul>
        <p className="font-medium mt-4">
          This role allowed me to take full ownership of an Android application while gaining deep expertise in IoT configurations, improving my skills in Kotlin/Java and project lifecycle management.
          The world of IoT is a sector I am passionate about, and I am excited to continue learning and advancing in this field.
        </p>
      </div>
    ),
  },
];



export default function ExperiencePage() {
  return (
    <div className="flex flex-col items-center mt-20 pt-20">
      <h2 className="text-4xl text-primary font-semibold mb-3">Experience</h2>

      <div className="w-full flex flex-col items-center justify-center pt-10">
        {/* First Row */}
        <div className="flex items-center mb-4">
          {/* Icon 1 */}
          <div className="text-primary mr-4">
            <img src="/title.svg" alt="Title Icon" className="w-8 h-8" />
          </div>
          {/* Text and Chip 1 */}
          <p className="text-lg font-medium flex-grow mr-2">
            Certificate of Higher Education (DAM)
          </p>
          <Chip color="primary">9.17</Chip>
        </div>

        {/* Second Row */}
        <div className="flex items-center">
          {/* Icon 2 */}
          <div className="text-primary mr-4">
            <img src="/title.svg" alt="Title Icon" className="w-8 h-8" />
          </div>
          {/* Text and Chip 2 */}
          <p className="text-lg font-medium flex-grow mr-2">
            Certificate of Higher Education (DAW)
          </p>
          <Chip color="primary">8.47</Chip>
        </div>
      </div>

      <div className="relative w-full bg-light dark:bg-dark py-12 px-4 md:px-8 lg:px-10">
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className='text-lg'>
            <p>This is the resume of my experience, counting practices and companies that ive worked.</p>
          </div>
          <div className="flex justify-center gap-16 pt-10">
            <div className="flex flex-col items-center">
              <p className="text-4xl mt-2 text-primary">3.5+</p>
              <h3 className="text-lg">Work Experience</h3>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-4xl mt-2 text-primary">4+</p>
              <h3 className="text-lg">Companies</h3>
            </div>
          </div>

        </div>

      </div>

      <Timeline data={timelineData} />
    </div>
  );
}
