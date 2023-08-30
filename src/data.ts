import {
	FaHtml5,
	FaCss3Alt,
	FaJsSquare,
	FaReact,
	FaNodeJs,
	FaGithub,
	FaGlobeEurope,
} from 'react-icons/fa'
import { TbBrandNextjs, TbBrandRedux } from 'react-icons/tb'
import { SiTailwindcss, SiMongodb, SiTypescript } from 'react-icons/si'
import { BiLogoPostgresql } from 'react-icons/bi'
import { IEducation, IProject, ISkill, IWork } from './types'
import chatApp from './assets/chat_app.png'
import noteApp from './assets/note_app.png'
import nextjsMongodbCrud from './assets/nextjs_mongodb_crud.png'
import scootin from './assets/scootin.png'
import itech from './assets/itech.png'
import nft from './assets/nft.png'
import dashboard from './assets/dashboard.png'
import sellzee from './assets/sellzee.png'

export const educations: IEducation[] = [
	{ id: 1, university: 'Atilim University', department: 'Software Engineering',  start: '2019', end: '2023' }
]

export const works: IWork[] = [
	{
		id: 1,
		title: 'Front End Developer Intern At OTXO Tech',
    description: 'I improved my React & Next.js skills by creating landing page & dashboard designs and simple apps using React, Typescript and Next.js',
    skills: ['React', 'Next.js', 'Typescript', 'Zod', 'React Hook Form', 'Redux', 'Styled Components', 'Tailwindcss']
	},
  {
		id: 2,
		title: 'Drupal Developer Intern At Turna Tech',
    description: 'I created several web apps using drupal. I learned about drupal modules, themes and more.',
    skills: ['Drupal', 'Mysql', 'Php', 'Html', 'Css']
	},
]

export const skills: ISkill[] = [
	{ id: 1, Icon: FaHtml5 },
	{ id: 2, Icon: FaCss3Alt },
	{ id: 3, Icon: FaJsSquare },
	{ id: 4, Icon: SiTailwindcss },
	{ id: 5, Icon: FaReact },
	{ id: 6, Icon: TbBrandRedux },
	{ id: 7, Icon: SiTypescript },
	{ id: 8, Icon: FaNodeJs },
	{ id: 9, Icon: FaGithub },
	{ id: 10, Icon: TbBrandNextjs },
	{ id: 11, Icon: BiLogoPostgresql },
	{ id: 12, Icon: SiMongodb },
]

export const projects: IProject[] = [
	{
		id: 1,
		title: 'Chat App',
		description:
			'This app allows users to register to the system using google accounts. The app allows user to add new friends by searching for emails. After adding friends you are able to send messages and images to them. You can also delete your messages.',
		image: chatApp,
		skills: [
			'React',
			'Next.js',
			'Typescript',
			'Redux',
			'React Query',
			'Tailwindcss',
			'Axios',
			'Zod',
			'React Hook Form',
			'Prisma',
			'Cloudinary',
		],
		links: [
			{ Icon: FaGithub, url: 'https://github.com/Scholak/chat-app' },
			{ Icon: FaGlobeEurope, url: 'https://chat-app-ruby-three.vercel.app' },
		],
	},
	{
		id: 2,
		title: 'Note App',
		description:
			'Note app has several features. First feature is about authentication. You can register, login and reset password. After successfull login, you can create new note list. Then you can add todos tor these links and if you wish, you dan delete todos and lists too.',
		image: noteApp,
		skills: [
			'React',
			'Next.js',
			'Typescript',
			'Zod',
			'React Hook Form',
			'Tailwindcss',
			'Axios',
			'Prisma',
			'Vitest',
			'React Testing Library',
		],
		links: [
			{ Icon: FaGithub, url: 'https://github.com/Scholak/note-app' },
			{ Icon: FaGlobeEurope, url: 'https://note-app-one-chi.vercel.app' },
		],
	},
	{
		id: 3,
		title: 'Next.js & MongoDB Crud',
		description:
			'Goal of this project is integrating mongodb to the Next.js app. The app uses nosql for data storing and react query for data fetching.',
		image: nextjsMongodbCrud,
		skills: [
			'React',
			'Next.js',
			'Typescript',
			'Mongoose',
			'Zod',
			'React Hook Form',
			'Tailwindcss',
			'Axios',
		],
		links: [
			{ Icon: FaGithub, url: 'https://github.com/Scholak/next-mongodb-crud' },
		],
	},
	{
		id: 4,
		title: 'Scootin Multi Page Website Using React',
		description:
			'Scootin multi page website has four pages. home, about, careers, locations. The goal is trying new features of react router dom. <RouteProvider /> and createBrowserRouter() used from react router dom.',
		image: scootin,
		skills: [
			'React',
			'Typescript',
			'React Icons',
			'React Router Dom',
			'Framer Motion',
			'SASS',
		],
		links: [
			{
				Icon: FaGithub,
				url: 'https://github.com/Scholak/scoot-multipage-website',
			},
			{
				Icon: FaGlobeEurope,
				url: 'https://master--magical-ganache-3492d3.netlify.app/',
			},
		],
	},
	{
		id: 5,
		title: 'I-Tech Landing Page Using React',
		description:
			'The landing page contains 11 sections. hero, companies, features, feature one, feature two, feature three, app integrations, app images, reviews, social, download. I improved Tailwindcss skills by creating this app.',
		image: itech,
		skills: ['React', 'Framer Motion', 'Tailwindcss'],
		links: [
			{
				Icon: FaGithub,
				url: 'https://github.com/Scholak/itech-landing-page',
			},
			{
				Icon: FaGlobeEurope,
				url: 'https://jocular-monstera-a66e6b.netlify.app/',
			},
		],
	},
	{
		id: 6,
		title: 'NFT Landing Page Using React',
		description:
			'The landing page inclued 6 sections. hero, creators, collections, choose us, cards, newsletter. The goal is improving styled components skills and the app is created by using styled components features.',
		image: nft,
		skills: ['React', 'Framer Motion', 'Styled Components'],
		links: [
			{
				Icon: FaGithub,
				url: 'https://github.com/Scholak/nft-landing-page',
			},
			{
				Icon: FaGlobeEurope,
				url: 'https://comforting-marigold-c2c46f.netlify.app/',
			},
		],
	},
	{
		id: 7,
		title: 'Dashboard Design Using React',
		description: 'The landing page contains 5 sections. cards, transaction history, goals, outcomes, new transaction. I improved custom css skills by creating this app.',
		image: dashboard,
		skills: ['React', 'SASS'],
		links: [
			{
				Icon: FaGithub,
				url: 'https://github.com/Scholak/financial-dashboard',
			},
			{
				Icon: FaGlobeEurope,
				url: 'https://magnificent-sunshine-7d252b.netlify.app/',
			},
		],
	},
	{
		id: 8,
		title: 'Sellzee Landing Page Using React',
		description:
			'The landing page contains 8 sections. hero, brands, about, awards, features, reviews, plans, newsletter. I improved Tailwindcss skills by creating this app',
		image: sellzee,
		skills: ['React', 'Tailwindcss'],
		links: [
			{
				Icon: FaGithub,
				url: 'https://github.com/Scholak/sellzee-landing-page',
			},
			{
				Icon: FaGlobeEurope,
				url: 'https://glittering-sable-14274f.netlify.app/',
			},
		],
	},
]
