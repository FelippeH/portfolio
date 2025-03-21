import { Level } from "./Level"
import { Type } from "./Type"
import Technology from "../technology/Technology"

export default interface Project {
	id: number
	name: string
	description: string
	images: string[]
	type: Type
	level: Level
	repository: string
	hightlight: boolean
	tehcnologies: Technology[]
}
