"use client";

export default function AboutMeSection() {
    return (
        <div className="flex flex-col items-center justify-center p-20">
            <h2 className="text-4xl text-primary font-semibold mb-6 p-8">About Me</h2>

            <div className="w-full max-w-2xl">

                <p className="text-justify text-lg mb-5">
                    I am a dedicated software engineer with a strong passion for mobile development.
                    My expertise lies in creating intuitive and native applications using Kotlin and Java, alongside frameworks like Jetpack Compose.
                    Currently, I am focused on learning cross-platform development to broaden my skill set and create versatile applications.
                </p>

                <p className="text-justify text-lg mb-5">
                    With a solid foundation in mobile technologies and a commitment to best practices in software development,
                    I believe in the power of collaboration, often working closely with cross-functional teams.
                </p>
                <p className="text-justify text-lg mb-5">
                    Outside of coding, I’m a really social person, which enjoy a lot of hobbies.
                    I’m a non stop person, which uses his time to enrich himself with new experiences and knowledge.
                </p>
            </div>
            <div className="flex-shrink-0">
                <div className="w-48 h-48 flex items-center justify-center rounded-full overflow-hidden">
                    <img
                        src="/photo.PNG"
                        alt="Persona Photo"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
