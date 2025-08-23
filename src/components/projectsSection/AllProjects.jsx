import SingleProject from "./SingleProject";
import { StaggerContainer, StaggerItem } from '../AnimationWrapper';

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce platform with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
        image: "/images/project1.jpg", // Bạn có thể thay thế bằng ảnh thực tế
        technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
        liveLink: "https://example.com",
        githubLink: "https://github.com/yourusername/ecommerce",
        featured: true
    },
    {
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        image: "/images/project2.jpg",
        technologies: ["React", "Firebase", "Tailwind CSS", "React DnD"],
        liveLink: "https://example.com",
        githubLink: "https://github.com/yourusername/taskmanager",
        featured: false
    },
    {
        title: "Weather Dashboard",
        description: "A responsive weather dashboard that displays current weather conditions, forecasts, and interactive maps using multiple weather APIs.",
        image: "/images/project3.jpg",
        technologies: ["JavaScript", "API Integration", "Chart.js", "CSS3"],
        liveLink: "https://example.com",
        githubLink: "https://github.com/yourusername/weather",
        featured: false
    },
    {
        title: "Portfolio Website",
        description: "A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and dark mode support.",
        image: "/images/project4.jpg",
        technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
        liveLink: "https://example.com",
        githubLink: "https://github.com/yourusername/portfolio",
        featured: true
    },
    {
        title: "Social Media App",
        description: "A social media application with user profiles, post creation, real-time chat, and social interactions using modern web technologies.",
        image: "/images/project5.jpg",
        technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
        liveLink: "https://example.com",
        githubLink: "https://github.com/yourusername/social",
        featured: false
    },
    {
        title: "Learning Management System",
        description: "An educational platform for online courses with video streaming, progress tracking, quizzes, and student-teacher interaction.",
        image: "/images/project6.jpg",
        technologies: ["Next.js", "Prisma", "MySQL", "AWS S3"],
        liveLink: "https://example.com",
        githubLink: "https://github.com/yourusername/lms",
        featured: true
    }
];

const AllProjects = () => {
    return (
        <div className="space-y-8">
            {/* Featured Projects */}
            <div>
                <h3 className="text-2xl font-semibold text-blue-400 mb-6 text-center sm:text-left">
                    Featured Projects
                </h3>
                <StaggerContainer className="grid lg:grid-cols-2 md:grid-cols-1 gap-8">
                    {projects.filter(project => project.featured).map((project, index) => (
                        <StaggerItem key={index}>
                            <SingleProject project={project} featured={true} />
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>

            {/* Other Projects */}
            <div>
                <h3 className="text-2xl font-semibold text-orange-400 mb-6 text-center sm:text-left">
                    Other Projects
                </h3>
                <StaggerContainer className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
                    {projects.filter(project => !project.featured).map((project, index) => (
                        <StaggerItem key={index}>
                            <SingleProject project={project} featured={false} />
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </div>
    )
}

export default AllProjects
