import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";

const SingleProject = ({ project, featured = false }) => {
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <div className={`
            group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl 
            transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700
            ${featured ? 'lg:col-span-1' : ''}
        `}>
            {/* Project Image */}
            <div className="relative overflow-hidden rounded-t-xl">
                {!imageError ? (
                    <img 
                        src={project.image} 
                        alt={project.title}
                        onError={handleImageError}
                        className="w-full h-48 sm:h-40 lg:h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                ) : (
                    <div className="w-full h-48 sm:h-40 lg:h-52 bg-gradient-to-br from-blue-400 to-orange-400 flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">
                            {project.title.charAt(0)}
                        </span>
                    </div>
                )}
                
                {/* Overlay with links */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex space-x-4">
                        {project.liveLink && (
                            <a 
                                href={project.liveLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors"
                                aria-label="View live project"
                            >
                                <FaExternalLinkAlt className="text-lg" />
                            </a>
                        )}
                        {project.githubLink && (
                            <a 
                                href={project.githubLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-full transition-colors"
                                aria-label="View source code"
                            >
                                <FaGithub className="text-lg" />
                            </a>
                        )}
                    </div>
                </div>

                {/* Featured badge */}
                {featured && (
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                    </div>
                )}
            </div>

            {/* Project Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors">
                    {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                        <span 
                            key={index}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex space-x-4">
                        {project.liveLink && (
                            <a 
                                href={project.liveLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-600 font-medium text-sm flex items-center space-x-1 transition-colors"
                            >
                                <FaExternalLinkAlt className="text-xs" />
                                <span>Live Demo</span>
                            </a>
                        )}
                        {project.githubLink && (
                            <a 
                                href={project.githubLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium text-sm flex items-center space-x-1 transition-colors"
                            >
                                <FaGithub className="text-xs" />
                                <span>Source</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;
