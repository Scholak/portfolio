import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { moveFromBottom } from '../animations'

interface EducationProps {
	id: number
	department: string
	university: string
	start: string
	end: string
}

const Education = ({ department, university, start, end }: EducationProps) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subHeadingRef = useRef<HTMLHeadingElement>(null)

	const contentView = useInView(contentRef)
	const headingView = useInView(headingRef)
	const subHeadingView = useInView(subHeadingRef)

  return (
		<motion.div
			ref={contentRef}
			variants={moveFromBottom}
			initial='hidden'
			animate={contentView ? 'visible' : 'hidden'}
			transition={{ duration: 1, delay: 0.5 }}
			className='education'
		>
			<motion.h4
				ref={headingRef}
				variants={moveFromBottom}
				initial='hidden'
				animate={headingView ? 'visible' : 'hidden'}
				transition={{ duration: 1, delay: 0.6 }}
			>
				{department}
			</motion.h4>
			<motion.h5
				ref={subHeadingRef}
				variants={moveFromBottom}
				initial='hidden'
				animate={subHeadingView ? 'visible' : 'hidden'}
				transition={{ duration: 1, delay: 0.7 }}
			>
				{university} ({start} - {end})
			</motion.h5>
		</motion.div>
	)
}

export default Education
