import { useRef } from 'react'
import { skills } from '../data'
import { ISkill } from '../types'
import { motion, useInView } from 'framer-motion'
import { moveFromBottom } from '../animations'

const Skills = () => {
	const headingRef = useRef<HTMLHeadingElement>(null)
	const spanRef = useRef<HTMLSpanElement>(null)

	const headingEl = useInView(headingRef)
	const spanEl = useInView(spanRef)

  return (
		<section className='skills-section' id='skills'>
			<motion.h2
				ref={headingRef}
				variants={moveFromBottom}
				initial='hidden'
				animate={headingEl ? 'visible' : 'hidden'}
				transition={{ duration: 1, delay: 0.5 }}
				className='section-title'
			>
				Skills
			</motion.h2>
			<div className='skill-list'>
				{skills.map((skill: ISkill, idx: number) => (
					<motion.span
						key={skill.id}
						ref={spanRef}
						variants={moveFromBottom}
						initial='hidden'
						animate={spanEl ? 'visible' : 'hidden'}
						transition={{ duration: 1, delay: 0.5 + 0.1 * idx }}
					>
						<skill.Icon />
					</motion.span>
				))}
			</div>
		</section>
	)
}

export default Skills
