import Contact from "./components/Contact"
import Educations from './components/Educations'
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import WorkExperience from "./components/WorkExperience"

const App = () => {
  return (
		<>
			<div id='top'></div>
			<Navbar />
			<Hero />
			<Educations />
			<WorkExperience />
			<Skills />
			<Projects />
			<Contact />
		</>
	)
}

export default App
