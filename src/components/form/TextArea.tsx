import ErrorMessage from "./ErrorMessage";
import Label, { type LabelProps } from "./Label";
import { getInputClass } from "./helpers";

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
				className={getInputClass()}
				aria-errormessage={error}
			/>
			{error && <ErrorMessage>{error}</ErrorMessage>}
		</Label>
	);
}
