import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { moveFromBottom } from "../animations"
import { ILink } from "../types"

interface ProjectProps {
  title: string
  description: string
  image: string
  skills: string[]
  links: any[]
}

const Project = ({ title, description, image, skills, links }: ProjectProps) => {
	const headingRef = useRef<HTMLHeadingElement>(null)
	const paragraphRef = useRef<HTMLParagraphElement>(null)
	const skillRef = useRef<HTMLSpanElement>(null)
	const moreRef = useRef<HTMLAnchorElement>(null)
	const imageRef = useRef<HTMLImageElement>(null)

	const headingView = useInView(headingRef)
	const paragraphView = useInView(paragraphRef)
	const skillView = useInView(skillRef)
	const moreView = useInView(moreRef)
	const imageView = useInView(imageRef)

	return (
		<div className='project-single'>
			<div className='content'>
				<motion.h5
					ref={headingRef}
					variants={moveFromBottom}
					initial='hidden'
					animate={headingView ? 'visible' : 'hidden'}
					transition={{ duration: 1, delay: 0.6 }}
				>
					{title}
				</motion.h5>
				<motion.p
					ref={paragraphRef}
					variants={moveFromBottom}
					initial='hidden'
					animate={paragraphView ? 'visible' : 'hidden'}
					transition={{ duration: 1, delay: 0.7 }}
				>
					{description}
				</motion.p>
				<div className='skills'>
					{skills.map((skill: string, idx: number) => (
						<motion.span
							key={skill}
							ref={skillRef}
							variants={moveFromBottom}
							initial='hidden'
							animate={skillView ? 'visible' : 'hidden'}
							transition={{ duration: 1, delay: 0.5 + 0.1 * idx }}
						>
							{skill}
						</motion.span>
					))}
				</div>
				<div className='links'>
					{links.map((link: ILink, idx: number) => (
						<motion.a
							key={link.url}
							ref={moreRef}
							variants={moveFromBottom}
							initial='hidden'
							animate={moreView ? 'visible' : 'hidden'}
							transition={{ duration: 1, delay: 0.8 + 0.1 * idx }}
							href={link.url}
							target='_blank'
						>
							<link.Icon />
						</motion.a>
					))}
				</div>
			</div>
			<motion.img
				ref={imageRef}
				variants={moveFromBottom}
				initial='hidden'
				animate={imageView ? 'visible' : 'hidden'}
				transition={{ duration: 1, delay: 0.5 }}
				src={image}
				alt='project image'
			/>
		</div>
	)
}

export default Project
