import { educations } from '../data'
import { IEducation } from '../types'
import { motion, useInView } from 'framer-motion'
import Education from './Education'
import { moveFromBottom } from '../animations'
import { useRef } from 'react'

const Educations = () => {
	const headingRef = useRef<HTMLHeadingElement>(null)

	const headingView = useInView(headingRef)

  return (
		<section className='education-section' id='education'>
			<motion.h2
				ref={headingRef}
				variants={moveFromBottom}
				initial='hidden'
				animate={headingView ? 'visible' : 'hidden'}
				transition={{ duration: 1, delay: 0.7 }}
				className='section-title'
			>
				Education
			</motion.h2>
			<div className='educations'>
				{educations.map((education: IEducation) => (
					<Education key={education.id} {...education} />
				))}
			</div>
		</section>
	)
}

export default Educations
