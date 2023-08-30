import { IconType } from "react-icons"

export interface ILink {
  Icon: IconType
  url: string
}

export interface IEducation {
	id: number
	university: string
	department: string
	start: string
	end: string
}

export interface IWork {
  id: number
  title: string
  description: string
  skills: string[]
}

export interface ISkill {
	id: number
	Icon: IconType
}

export interface IProject {
  id: number
  title: string
  description: string
  skills: string[]
  image: string
  links: ILink[]
}