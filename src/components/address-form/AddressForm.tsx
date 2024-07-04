import { Formik } from "formik";
import Button from "../button/Button";
import Input from "../form/Input";
import TextArea from "../form/TextArea";
import { AddressFormSchema, type FieldKeys } from "./schema";

const ADDRESS = "address" satisfies FieldKeys;
const DESCRIPTION = "description" satisfies FieldKeys;

export default function AddressForm() {
	return (
		<Formik
			initialValues={AddressFormSchema.getDefault()}
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
					<TextArea
						title="Address description (optional)"
						placeholder="Write here..."
						onChange={handleChange}
						onBlur={handleBlur}
						error={touched[DESCRIPTION] ? errors[DESCRIPTION] : undefined}
					>
						{values[DESCRIPTION]}
					</TextArea>
					<Button className="self-end" type="submit">
						Add address
					</Button>
				</form>
			)}
		</Formik>
	);
}
