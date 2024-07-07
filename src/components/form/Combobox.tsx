import {
	ComboboxInput,
	ComboboxOption,
	ComboboxOptions,
	Combobox as HeadlessCombobox,
} from "@headlessui/react";
import type { FormikHandlers } from "formik";
import ErrorMessage from "./ErrorMessage";
import Label from "./Label";
import { getInputClass } from "./helpers";

export type ComboboxProps = {
	error?: string;
	fallbackMessage?: string;
	fields?: { id: number | string; value: string; displayValue: string }[];
	iconStart?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
	isLoading?: boolean;
	name: string;
	onBlur: FormikHandlers["handleBlur"];
	onQueryChange: (e: string) => void;
	onSelect: FormikHandlers["handleChange"];
	placeholder: string;
	title: string;
	value: string;
};

export default function Combobox({
	error,
	fallbackMessage = "No fields found.",
	fields,
	iconStart: IconStart,
	isLoading,
	name,
	onBlur,
	onQueryChange,
	onSelect,
	placeholder,
	title,
	value,
}: ComboboxProps) {
	return (
		<Label title={title}>
			<HeadlessCombobox
				value={value}
				name={name}
				onChange={(e) => {
					onSelect({
						target: {
							value: e,
							name,
						},
					});
				}}
			>
				<div className="relative">
					{IconStart && (
						<IconStart
							color="#d1d5db"
							className="absolute top-1/2 -translate-y-1/2 left-1 max-w-4"
						/>
					)}
					<ComboboxInput
						className={getInputClass(!!IconStart && "pl-6")}
						autoComplete="off"
						aria-invalid={!!error}
						aria-errormessage={error}
						data-testid="combobox"
						onBlur={() => {
							onBlur({
								target: {
									value,
									name,
								},
							});
						}}
						placeholder={placeholder}
						displayValue={(displayValue) =>
							typeof displayValue === "string" ? displayValue : value
						}
						onChange={(event) => {
							onQueryChange(event.target.value);
						}}
					/>
				</div>
				<ComboboxOptions
					anchor="bottom"
					className={getInputClass(
						"w-[var(--input-width)] bg-white px-0 py-0 cursor-pointer",
					)}
				>
					{!fields?.length && (
						<div className="px-1 py-2">
							{isLoading ? "Loading fields..." : fallbackMessage}
						</div>
					)}
					{fields?.map(({ id, value, displayValue }) => (
						<ComboboxOption
							key={id}
							value={value}
							className="data-[focus]:bg-gray-200 px-1 py-2"
						>
							{displayValue}
						</ComboboxOption>
					))}
				</ComboboxOptions>
			</HeadlessCombobox>
			{error && <ErrorMessage>{error}</ErrorMessage>}
		</Label>
	);
}
