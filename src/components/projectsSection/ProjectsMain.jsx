import ProjectsText from './ProjectsText'
import AllProjects from './AllProjects'
import ProjectsStats from './ProjectsStats'
import { FadeInUp } from '../AnimationWrapper'

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4 mt-32 sm:mt-20 lg:mt-16">
        <FadeInUp delay={0.2}>
          <ProjectsText/>
        </FadeInUp>
        <FadeInUp delay={0.4} className="mt-16 sm:mt-12 lg:mt-14">
          <AllProjects/>
        </FadeInUp>
        <ProjectsStats />
    </div>
  )
}

export default ProjectsMain
