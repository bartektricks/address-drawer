import ErrorMessage from "./ErrorMessage";
import Label, { type LabelProps } from "./Label";

type TextAreaProps = JSX.IntrinsicElements["textarea"] &
	LabelProps & {
		error?: string;
	};

export default function TextArea({ title, error, ...props }: TextAreaProps) {
	return (
		<Label title={title}>
			<textarea
				rows={3}
				{...props}
				className="border border-gray-300 rounded w-full text-sm py-2 px-1"
				aria-errormessage={error}
			/>
			{error && <ErrorMessage>{error}</ErrorMessage>}
		</Label>
	);
}
