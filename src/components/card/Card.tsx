import { FaTrash } from "react-icons/fa";

type CardProps = {
	title: string;
	subtitle: string;
	body: string;
	onClose: () => void;
};

export default function Card({ title, subtitle, body, onClose }: CardProps) {
	return (
		<div className="relative rounded border border-gray-300 p-2 pr-7 text-gray-600 text-sm">
			<button
				className="absolute top-0 right-0 p-3"
				aria-label="Close"
				type="button"
				onClick={onClose}
			>
				<FaTrash aria-hidden="true" className="size-2.5" />
			</button>
			<h3 className="text-black font-bold">{title}</h3>
			<p>{subtitle}</p>
			<p>{body}</p>
		</div>
	);
}
