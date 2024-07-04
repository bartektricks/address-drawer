import * as Yup from "yup";

export const AddressFormSchema = Yup.object().shape({
	address: Yup.string().required("Address is required."),
	description: Yup.string().optional(),
});

export type FieldKeys = keyof Yup.InferType<typeof AddressFormSchema>;
