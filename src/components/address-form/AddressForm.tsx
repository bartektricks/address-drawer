import { Formik } from "formik";
import Button from "../button/Button";
import Input from "../form/Input";
import MultiSelect from "../form/MultiSelect";
import TextArea from "../form/TextArea";
import { AddressFormSchema, type FieldKeys } from "./schema";

const ADDRESS = "address" satisfies FieldKeys;
const DESCRIPTION = "description" satisfies FieldKeys;

const departments = [
	{
		id: 1,
		displayValue: "Department 1",
		value: "department-1",
	},
	{
		id: 2,
		displayValue: "Department 2",
		value: "department-2",
	},
	{
		id: 3,
		displayValue: "Department 3",
		value: "department-3",
	},
	{
		id: 4,
		displayValue: "Department 4",
		value: "department-4",
	},
	{
		id: 5,
		displayValue: "Department 5",
		value: "department-5",
	},
];

export default function AddressForm() {
	return (
		<Formik
			initialValues={{
				address: "",
				departments: [] as string[],
				description: "",
			}}
			validationSchema={AddressFormSchema}
			onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
		>
			{({
				handleChange,
				handleSubmit,
				handleBlur,
				values,
				errors,
				touched,
			}) => (
				<form onSubmit={handleSubmit} className="flex flex-col gap-4">
					<Input
						title="Search for an address"
						type="text"
						name={ADDRESS}
						placeholder="Type your address here..."
						onChange={handleChange}
						onBlur={handleBlur}
						value={values[ADDRESS]}
						error={touched[ADDRESS] ? errors[ADDRESS] : undefined}
					/>
					<MultiSelect
						title="Attach the address above to one or more departments"
						value={values.departments}
						name="departments"
						onChange={handleChange}
						fields={departments}
						placeholder="Select department(s)"
						error={touched.departments ? errors.departments : undefined}
					/>
					<TextArea
						title="Address description (optional)"
						placeholder="Write here..."
						onChange={handleChange}
						onBlur={handleBlur}
						name="description"
						error={touched[DESCRIPTION] ? errors[DESCRIPTION] : undefined}
						value={values[DESCRIPTION]}
					/>
					<Button className="self-end" type="submit">
						Add address
					</Button>
				</form>
			)}
		</Formik>
	);
}
