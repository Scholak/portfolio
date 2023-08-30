import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { moveFromBottom } from '../animations'

const Contact = () => {
	const paragraphRef = useRef<HTMLParagraphElement>(null)
	const headingRef = useRef<HTMLHeadingElement>(null)
	const linkRef = useRef<HTMLAnchorElement>(null)

	const paragraphView = useInView(paragraphRef)
	const headingView = useInView(headingRef)
	const linkView = useInView(linkRef)

	return (
		<section className='contact-section'>
			<motion.h2
				ref={headingRef}
				variants={moveFromBottom}
				initial='hidden'
				animate={headingView ? 'visible' : 'hidden'}
				transition={{ duration: 1, delay: 0.5 }}
				className='section-title'
			>
				Contact
			</motion.h2>
			<motion.p
				ref={paragraphRef}
				variants={moveFromBottom}
				initial='hidden'
				animate={paragraphView ? 'visible' : 'hidden'}
				transition={{ duration: 1, delay: 0.6 }}
			>
				Email: scholaksebahattin@gmail.com
			</motion.p>
			<div className='social-links'>
				<motion.a
					ref={linkRef}
					variants={moveFromBottom}
					initial='hidden'
					animate={linkView ? 'visible' : 'hidden'}
					transition={{ duration: 1, delay: 0.7 }}
					href='https://github.com/Scholak'
					target='_blank'
				>
					<FaGithub />
				</motion.a>
				<motion.a
					ref={linkRef}
					variants={moveFromBottom}
					initial='hidden'
					animate={linkView ? 'visible' : 'hidden'}
					transition={{ duration: 1, delay: 0.8 }}
					href='https://www.linkedin.com/in/sebahatin-%C3%A7olak-a24127197'
					target='_blank'
				>
					<FaLinkedinIn />
				</motion.a>
			</div>
		</section>
	)
}

export default Contact
