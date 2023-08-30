import { projects } from "../data"
import { IProject } from "../types"
import Project from "./Project"
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { moveFromBottom } from '../animations'

const Projects = () => {
  const headingRef = useRef<HTMLHeadingElement>(null)
	const headingView = useInView(headingRef)

  return (
		<section className='projects-section' id='projects'>
			<motion.h2
				ref={headingRef}
				variants={moveFromBottom}
				initial='hidden'
				animate={headingView ? 'visible' : 'hidden'}
				transition={{ duration: 1, delay: 0.5 }}
				className='section-title'
			>
				Projects
			</motion.h2>
			<div className='project-list'>
				{projects.map((project: IProject) => (
					<Project {...project} key={project.id} />
				))}
			</div>
		</section>
	)
}

export default Projects
