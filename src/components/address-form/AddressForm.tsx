import getDepartments from "@/api/getDepartments";
import AddressSearch from "@/components/address-search/AddressSearch";
import Button from "@/components/button/Button";
import MultiSelect from "@/components/form/MultiSelect";
import TextArea from "@/components/form/TextArea";
import { Formik } from "formik";
import { getSharedProps } from "./helpers";
import { AddressFormSchema, type Fields } from "./schema";

const initialValues: Fields = {
	address: "",
	departments: [],
	description: "",
};

export default function AddressForm() {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={AddressFormSchema}
			onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
		>
			{({ handleSubmit, ...props }) => {
				return (
					<form onSubmit={handleSubmit} className="flex flex-col gap-4">
						<AddressSearch
							title="Search for an address"
							placeholder="Type your address here..."
							{...getSharedProps("address", props)}
						/>
						<MultiSelect
							title="Attach the address above to one or more departments"
							placeholder="Select department(s)"
							{...getSharedProps("departments", props)}
							fields={getDepartments()}
						/>
						<TextArea
							title="Address description (optional)"
							placeholder="Write here..."
							{...getSharedProps("description", props)}
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
