import * as Yup from "yup";

export const AddressFormSchema = Yup.object().shape({
	address: Yup.string().required("Address is required."),
	departments: Yup.array(Yup.string().required())
		.min(1, "Select at least one department.")
		.required(),
	description: Yup.string().optional(),
});

export type Fields = Yup.InferType<typeof AddressFormSchema>;
export type FieldKeys = keyof Fields;
