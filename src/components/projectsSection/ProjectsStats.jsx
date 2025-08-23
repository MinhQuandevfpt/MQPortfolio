import { FadeInUp } from '../AnimationWrapper'

const ProjectsStats = () => {
  const stats = [
    {
      number: "15+",
      label: "Projects Completed",
      description: "Successfully delivered projects"
    },
    {
      number: "8+",
      label: "Technologies Used",
      description: "Modern web technologies"
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      description: "Happy clients and users"
    },
    {
      number: "2+",
      label: "Years Experience",
      description: "Building web applications"
    }
  ]

  return (
    <div className="bg-gradient-to-r from-blue-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 py-16 mt-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <FadeInUp delay={0.2}>
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Project <span className="text-blue-400">Statistics</span>
          </h3>
        </FadeInUp>
        
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8">
          {stats.map((stat, index) => (
            <FadeInUp key={index} delay={0.3 + index * 0.1}>
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.description}
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsStats
