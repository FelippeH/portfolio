import { Controller, Get, Param } from "@nestjs/common"
import { ProjectPrisma } from "./project.prisma"
import { Project } from "@core"

@Controller("projects")
export class ProjectController {
	constructor(private readonly repo: ProjectPrisma) {}

	@Get()
	async obterTodos(): Promise<Project[]> {
		return this.repo.obterTodos()
	}

	@Get(":id")
	async obterPorId(@Param("id") id: string): Promise<Project | null> {
		return this.repo.obterPorId(Number(id))
	}
}
