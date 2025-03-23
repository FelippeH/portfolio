import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
	title: "Portfolio",
	description: "Portóflio de projetos de desenvolvimento web",
}

const font = Montserrat({
	subsets: ["latin"],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-br">
			<body className={`${font.className} antialiased`}>{children}</body>
		</html>
	)
}
