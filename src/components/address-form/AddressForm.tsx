import { Formik } from "formik";
import AddressSearch from "../address-search/AddressSearch";
import Button from "../button/Button";
import MultiSelect from "../form/MultiSelect";
import TextArea from "../form/TextArea";
import { departments } from "./helpers";
import { AddressFormSchema, type FieldKeys } from "./schema";

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
			}) => {
				const getErrorMessage = (name: FieldKeys) => {
					const error = errors[name];
					const message = Array.isArray(error) ? error.join(", ") : error;

					return touched[name] ? message : undefined;
				};

				const getSharedProps = <T extends FieldKeys>(name: T) => ({
					name,
					onChange: handleChange,
					onSelect: handleChange,
					onBlur: handleBlur,
					value: values[name],
					error: getErrorMessage(name),
				});

				return (
					<form onSubmit={handleSubmit} className="flex flex-col gap-4">
						<AddressSearch
							title="Search for an address"
							placeholder="Type your address here..."
							{...getSharedProps("address")}
						/>
						<MultiSelect
							title="Attach the address above to one or more departments"
							placeholder="Select department(s)"
							{...getSharedProps("departments")}
							fields={departments}
						/>
						<TextArea
							title="Address description (optional)"
							placeholder="Write here..."
							{...getSharedProps("description")}
						/>
						<Button className="self-end" type="submit">
							Add address
						</Button>
					</form>
				);
			}}
		</Formik>
	);
}
