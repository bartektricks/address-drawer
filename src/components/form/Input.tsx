import clsx from "clsx";
import ErrorMessage from "./ErrorMessage";
import Label, { type LabelProps } from "./Label";

type InputProps = JSX.IntrinsicElements["input"] & {
	error?: string;
	iconStart?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
	iconEnd?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
} & LabelProps;

export default function Input({
	title,
	iconStart: IconStart,
	iconEnd: IconEnd,
	error,
	...props
}: InputProps) {
	const inputClass = clsx(
		"border border-gray-300 rounded w-full py-2 text-sm",
		{
			"px-1": !IconStart && !IconEnd,
			"pl-6 pr-1": IconStart,
			"pr-6 pl-1": IconEnd,
		},
	);

	return (
		<Label title={title}>
			<div className="relative">
				{IconStart && <IconStart className="absolute top-0 left-0" />}
				<input
					type="text"
					{...props}
					className={inputClass}
					aria-errormessage={error}
				/>
				{IconEnd && <IconEnd className="absolute top-0 right-0" />}
			</div>
			{error && <ErrorMessage>{error}</ErrorMessage>}
		</Label>
	);
}
