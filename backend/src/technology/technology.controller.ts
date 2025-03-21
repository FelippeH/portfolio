import { Controller, Get } from "@nestjs/common"
import { Technology } from "@core"
import { TechnologyPrisma } from "./technology.prisma"

@Controller("technologys")
export class TechnologyController {
	constructor(private readonly repo: TechnologyPrisma) {}

	@Get()
	async obterTodas(): Promise<Technology[]> {
		return this.repo.obterTodas()
	}

	@Get("destaques")
	async obterDestaques(): Promise<Technology[]> {
		return this.repo.obterDestaques()
	}
}
