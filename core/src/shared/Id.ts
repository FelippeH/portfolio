export class Id {
	static gerar(): string {
		const k1 = Math.random().toString(36).substring(2, 9)
		const k2 = Math.random().toString(36).substring(2, 9)
		const k3 = Math.random().toString(36).substring(2, 9)
		return `${k1}-${k2}-${k3}`
	}
}
