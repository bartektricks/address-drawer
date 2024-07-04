type ErrorMessageProps = {
	children: string | string[];
};

export default function ErrorMessage({ children }: ErrorMessageProps) {
	return (
		<span className="text-red-700 text-xs">
			{typeof children === "string" ? children : children.join(", ")}
		</span>
	);
}
