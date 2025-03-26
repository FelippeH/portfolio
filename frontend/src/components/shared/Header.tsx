import Image from "next/image"
import Container from "./Container"
import Link from "next/link"

export default function Header() {
	return (
		<header className="flex items-center h-14 bg-red-600">
			<Container className="flex-1">
				<div>
					<Link href="/" className="hidden sm:block">
						<Image src="/f_logo.png" alt="Logo" width={50} height={0} />
					</Link>
				</div>
			</Container>
		</header>
	)
}
