export type LabelProps = {
	title?: string;
};

export default function Label({
	title,
	children,
}: React.PropsWithChildren<LabelProps>) {
	if (!title) return children;

	return (
		<label>
			<p className="text-xs mb-1 cursor-pointer">{title}</p>
			{children}
		</label>
	);
}
