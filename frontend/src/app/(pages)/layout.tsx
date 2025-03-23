import ButtonChat from "@/components/chat/buttonchat"

export default function Layout(props: { children: React.ReactNode }) {
	return (
		<div>
			{props.children}
			<ButtonChat />
		</div>
	)
}

// React.ReactNode é um tipo que representa qualquer coisa que pode ser renderizada pelo React
