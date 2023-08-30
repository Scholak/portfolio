import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { moveFromBottom } from '../animations'

interface WorkProps {
	title: string
	description: string
	skills: string[]
	delay: number
}

const Work = ({ title, description, skills, delay }: WorkProps) => {
	const contentRef = useRef<HTMLDivElement>(null)
	const headingRef = useRef<HTMLHeadingElement>(null)
	const paragraphRef = useRef<HTMLParagraphElement>(null)
	const skillHeadingRef = useRef<HTMLHeadingElement>(null)
	const skillRef = useRef<HTMLSpanElement>(null)
	const moreRef = useRef<HTMLAnchorElement>(null)

	const contentView = useInView(contentRef)
	const headingView = useInView(headingRef)
	const paragraphView = useInView(paragraphRef)
	const skillHeadingView = useInView(skillHeadingRef)
	const skillView = useInView(skillRef)
	const moreView = useInView(moreRef)

	return (
		<motion.div
			ref={contentRef}
			variants={moveFromBottom}
			initial='hidden'
			animate={contentView ? 'visible' : 'hidden'}
			transition={{ duration: 1, delay: 0.5 + delay }}
			className='work'
		>
			<motion.h4
				ref={headingRef}
				variants={moveFromBottom}
				initial='hidden'
				animate={headingView ? 'visible' : 'hidden'}
				transition={{ duration: 1, delay: 0.6 + delay }}
			>
				{title}
			</motion.h4>
			<motion.p
				ref={paragraphRef}
				variants={moveFromBottom}
				initial='hidden'
				animate={paragraphView ? 'visible' : 'hidden'}
				transition={{ duration: 1, delay: 0.7 + delay }}
			>
				{description}
			</motion.p>
			<div className='skills'>
				<motion.h5
					ref={skillHeadingRef}
					variants={moveFromBottom}
					initial='hidden'
					animate={skillHeadingView ? 'visible' : 'hidden'}
					transition={{ duration: 1, delay: 0.7 + delay }}
				>
					Skills
				</motion.h5>
				<div className='skill-list'>
					{skills.map((skill: string, idx: number) => (
						<motion.span
							key={skill}
							ref={skillRef}
							variants={moveFromBottom}
							initial='hidden'
							animate={skillView ? 'visible' : 'hidden'}
							transition={{ duration: 1, delay: 0.7 + 0.1 * idx + delay }}
						>
							{skill}
						</motion.span>
					))}
				</div>
			</div>
			<motion.a
				ref={moreRef}
				variants={moveFromBottom}
				initial='hidden'
				animate={moreView ? 'visible' : 'hidden'}
				transition={{ duration: 1, delay: 0.8 + delay }}
				href='https://www.linkedin.com/in/sebahatin-%C3%A7olak-a24127197'
				target='_blank'
			>
				Learn More
			</motion.a>
		</motion.div>
	)
}

export default Work
