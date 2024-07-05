import { cn } from "@/helpers/cn";
import {
	Listbox,
	ListboxButton,
	ListboxOption,
	ListboxOptions,
} from "@headlessui/react";
import type { FormikHandlers } from "formik";
import { IoChevronDownSharp } from "react-icons/io5";
import ErrorMessage from "./ErrorMessage";
import Label, { type LabelProps } from "./Label";
import { getInputClass } from "./helpers";

type MultiSelectProps = {
	error?: string | string[];
	fields: { id: number; displayValue: string; value: string }[];
	name: string;
	onBlur: FormikHandlers["handleBlur"];
	onChange: FormikHandlers["handleChange"];
	placeholder: string;
	value: string[];
} & LabelProps;

export default function MultiSelect({
	error,
	fields,
	name,
	onBlur,
	onChange,
	placeholder,
	title,
	value,
}: MultiSelectProps) {
	const selectedDisplayValues = fields
		.filter((field) => value.includes(field.value))
		.map((field) => field.displayValue)
		.join(", ");

	const isSelectedValueVisible = selectedDisplayValues.length > 0;

	return (
		<Label title={title}>
			<Listbox
				value={value}
				onChange={(values) => {
					onChange({
						target: {
							value: values,
							name,
						},
					});
				}}
				multiple
			>
				{({ open }) => (
					<>
						<ListboxButton
							className={getInputClass("text-start relative flex pr-6")}
							onBlur={() => {
								onBlur({
									target: {
										value,
										name,
									},
								});
							}}
						>
							<span className="overflow-x-auto text-nowrap no-scrollbar">
								{isSelectedValueVisible ? selectedDisplayValues : placeholder}
							</span>
							<IoChevronDownSharp
								aria-hidden="true"
								className={cn(
									"absolute top-1/2 right-1 -translate-y-1/2",
									open && "rotate-180",
								)}
								size={18}
							/>
						</ListboxButton>
						<ListboxOptions
							anchor="bottom"
							className={getInputClass(
								"w-[var(--button-width)] bg-white px-0 py-0 cursor-pointer",
							)}
						>
							{fields.map(({ id, value, displayValue }) => (
								<ListboxOption
									key={id}
									value={value}
									className="data-[focus]:bg-gray-200 px-1 py-2"
								>
									{displayValue}
								</ListboxOption>
							))}
						</ListboxOptions>
					</>
				)}
			</Listbox>
			{error && <ErrorMessage>{error}</ErrorMessage>}
		</Label>
	);
}
