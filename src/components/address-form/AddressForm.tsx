import { Formik } from "formik";
import { LuMapPin } from "react-icons/lu";
import AddressSearch from "../address-search/AddressSearch";
import Button from "../button/Button";
import Combobox from "../form/Combobox";
import MultiSelect from "../form/MultiSelect";
import TextArea from "../form/TextArea";
import { departments } from "./helpers";
import { AddressFormSchema } from "./schema";

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
					<AddressSearch
						iconStart={LuMapPin}
						title="Search for an address"
						placeholder="Type your address here..."
						name="address"
						value={values.address}
						onSelect={handleChange}
						error={touched.address ? errors.address : undefined}
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
