import { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
		<>
			<nav className={open ? 'navbar open' : 'navbar'}>
				<h2 className='logo'>
					<a href='/'>Scholak</a>
				</h2>
				<ul className='nav-links'>
					<li>
						<a href='#top'>Home</a>
					</li>
					<li>
						<a href='#education'>Education</a>
					</li>
					<li>
						<a href='#work'>Work Experience</a>
					</li>
					<li>
						<a href='#skills'>Skills</a>
					</li>
					<li>
						<a href='#projects'>Projects</a>
					</li>
				</ul>
			</nav>
			<div
				className={open ? 'burger-icon open' : 'burger-icon'}
				onClick={() => setOpen(!open)}
			>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</>
	)
}

export default Navbar
