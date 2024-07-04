import { Formik } from "formik";
import { LuMapPin } from "react-icons/lu";
import Button from "../button/Button";
import Combobox from "../form/Combobox";
import MultiSelect from "../form/MultiSelect";
import TextArea from "../form/TextArea";
import { AddressFormSchema } from "./schema";

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
					<Combobox
						iconStart={LuMapPin}
						title="Search for an address"
						placeholder="Type your address here..."
						name="address"
						fields={[
							{
								id: 1,
								value: "Durward Reynolds",
								displayValue: "Durward Reynolds",
							},
							{ id: 2, value: "Kenton Towne", displayValue: "Kenton Towne" },
							{
								id: 3,
								value: "Therese Wunsch",
								displayValue: "Therese Wunsch",
							},
							{
								id: 4,
								value: "Benedict Kessler",
								displayValue: "Benedict Kessler",
							},
							{ id: 5, value: "Katelyn Rohan", displayValue: "Katelyn Rohan" },
						]}
						value={values.address}
						onSelect={handleChange}
						error={touched.address ? errors.address : undefined}
						onQueryChange={(e) => {
							console.log(e);
						}}
					/>
					<MultiSelect
						title="Attach the address above to one or more departments"
						placeholder="Select department(s)"
						name="departments"
						value={values.departments}
						onChange={handleChange}
						fields={departments}
						error={touched.departments ? errors.departments : undefined}
					/>
					<TextArea
						title="Address description (optional)"
						placeholder="Write here..."
						name="description"
						onChange={handleChange}
						onBlur={handleBlur}
						error={touched.description ? errors.description : undefined}
						value={values.description}
					/>
					<Button className="self-end" type="submit">
						Add address
					</Button>
				</form>
			)}
		</Formik>
	);
}
