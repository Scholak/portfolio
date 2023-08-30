import Work from './Work'
import { works } from '../data'
import { IWork } from '../types'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { moveFromBottom } from '../animations'

const WorkExperience = () => {
	const headingRef = useRef<HTMLHeadingElement>(null)
	const headingView = useInView(headingRef)

  return (
		<section className='work-experience-section' id='work'>
			<motion.h2
				ref={headingRef}
				variants={moveFromBottom}
				initial='hidden'
				animate={headingView ? 'visible' : 'hidden'}
				transition={{ duration: 1, delay: 0.5 }}
				className='section-title'
			>
				Work Experience
			</motion.h2>
			<div className='works'>
				{works.map((work: IWork, idx: number) => (
					<Work {...work} key={work.id} delay={idx * 0.2} />
				))}
			</div>
		</section>
	)
}

export default WorkExperience
