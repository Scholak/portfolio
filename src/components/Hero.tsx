import { useRef } from 'react'
import me from '../assets/me.png'
import { motion, useInView } from 'framer-motion'
import { moveFromBottom } from '../animations'

const Hero = () => {
	const imgRef = useRef<HTMLImageElement>(null)
	const subHeadingRef = useRef<HTMLHeadingElement>(null)
	const headingRef = useRef<HTMLHeadingElement>(null)
	const paragraphRef = useRef<HTMLParagraphElement>(null)

	const imgView = useInView(imgRef)
	const subHeadingEl = useInView(subHeadingRef)
	const headingEl = useInView(headingRef)
	const paragraphEl = useInView(paragraphRef)

	return (
		<section className='hero-section'>
			<motion.img
				src={me}
				alt='me!'
				ref={imgRef}
				variants={moveFromBottom}
				initial='hidden'
				animate={imgView ? 'visible' : 'hidden'}
				transition={{ duration: 1, delay: 0.5 }}
			/>
			<div className='content'>
				<motion.h2
					ref={subHeadingRef}
					variants={moveFromBottom}
					initial='hidden'
					animate={subHeadingEl ? 'visible' : 'hidden'}
					transition={{ duration: 1, delay: 0.6 }}
				>
					Hello! I Am <span>Sebahattin Colak</span>
				</motion.h2>
				<motion.h1
					ref={headingRef}
					variants={moveFromBottom}
					initial='hidden'
					animate={headingEl ? 'visible' : 'hidden'}
					transition={{ duration: 1, delay: 0.7 }}
				>
					I'm a Front End Developer.
				</motion.h1>
				<motion.p
					ref={paragraphRef}
					variants={moveFromBottom}
					initial='hidden'
					animate={paragraphEl ? 'visible' : 'hidden'}
					transition={{ duration: 1, delay: 0.8 }}
				>
					Graduated from Atilim University Software Engineering 
					program in 2023. Eager to improve my skills and 
					addicted to software development. Currently developing 
					full stack apps using React, Next.js, Tailwindcss,
					 Prisma and Typescript.
				</motion.p>
			</div>
		</section>
	)
}

export default Hero
