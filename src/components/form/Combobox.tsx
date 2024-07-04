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

type ComboboxProps = {
	title: string;
	error?: string;
	value: string;
	name: string;
	placeholder: string;
	fields: { id: number | string; value: string; displayValue: string }[];
	onQueryChange: (e: string) => void;
	onSelect: FormikHandlers["handleChange"];
};

export default function Combobox({
	title,
	error,
	value,
	fields,
	onSelect,
	placeholder,
	name,
	onQueryChange,
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
				<ComboboxInput
					className={getInputClass()}
					placeholder={placeholder}
					displayValue={(displayValue) =>
						typeof displayValue === "string" ? displayValue : value
					}
					onChange={(event) => {
						onQueryChange(event.target.value);
					}}
				/>
				<ComboboxOptions
					anchor="bottom"
					className={getInputClass(
						"w-[var(--input-width)] bg-white px-0 py-0 cursor-pointer",
					)}
				>
					{fields.map(({ id, value, displayValue }) => (
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
