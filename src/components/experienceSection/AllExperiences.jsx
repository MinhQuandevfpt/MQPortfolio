import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";

const experiences = [
    {
        job: "Front-End Developer",
        company: "Alex Apps",
        date: "2022 - Present",
        responsibilities: [
            "Implementing reusable components.",
            "Participating in large scale application.",
            "Working on the performance of web applications.",
            "Generating new ideas for better user experience.",
        ],
    },
    {
        job: "Course Instructor",
        company: "Nucamp",
        date: "2023 - Present",
        responsibilities: [
            "Explaining and facilitating web development concepts.",
            "Help students with their assignments and grade them weekly.",
            "Provide support for students through their learning journey.",
        ],
    },
    {
        job: "Course Instructor",
        company: "Sprints",
        date: "2024 - Present",
        responsibilities: [
            "Teaching JavaScript, React and TailwindCSS.",
            "Participating in preparing course materials.",
            "Helping students through their way in learning web development technologies.",
        ],
    },
];

const AllExperiences = () => {
    return (
        <div className="flex md:flex-row sm:flex-col items-center justify-between translate-y-0 sm:-translate-y-28 lg:translate-y-1 transition-all">
            {experiences.map((experience, index) => {
                return (
                    <>
                        <SingleExperience key={index} experience={experience} />
                        {index < 2 ? (
                            <FaArrowRightLong className="text-6xl text-orange-500 lg:block sm:hidden" />
                        ) : (
                            ""
                        )}

                    </>
                )
            })}
        </div>
    )
}

export default AllExperiences