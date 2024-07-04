import * as Yup from "yup";

export const AddressFormSchema = Yup.object().shape({
	address: Yup.string().required("Address is required."),
	departments: Yup.array(Yup.string()).min(
		1,
		"Select at least one department.",
	),
	description: Yup.string().optional(),
});

export type FieldKeys = keyof Yup.InferType<typeof AddressFormSchema>;
