import clsx from "clsx";

type ButtonProps = JSX.IntrinsicElements["button"];

export default function Button({ className, ...props }: ButtonProps) {
	return (
		<button
			className={clsx(
				"bg-violet-800 text-white text-sm py-3 px-4 rounded max-w-max",
				className,
			)}
			{...props}
		/>
	);
}
