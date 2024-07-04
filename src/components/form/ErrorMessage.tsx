type ErrorMessageProps = {
	children: string;
};

export default function ErrorMessage({ children }: ErrorMessageProps) {
	return <span className="text-red-700 text-xs">{children}</span>;
}
