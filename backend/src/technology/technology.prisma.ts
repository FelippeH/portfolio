import { Technology } from "@core"
import { Injectable } from "@nestjs/common"
import { PrismaProvider } from "src/db/prisma.provider"

@Injectable()
export class TechnologyPrisma {
	constructor(private readonly prisma: PrismaProvider) {}

	async obterTodas(): Promise<Technology[]> {
		return this.prisma.technology.findMany()
	}

	async obterDestaques(): Promise<Technology[]> {
		return this.prisma.technology.findMany({
			where: {
				highlight: true,
			},
		})
	}
}
