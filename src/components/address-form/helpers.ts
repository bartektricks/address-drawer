import type { FormikProps } from "formik";
import type { FieldKeys, Fields } from "./schema";

const getErrorMessage = (
	name: FieldKeys,
	{ errors, touched }: Pick<FormikProps<Fields>, "errors" | "touched">,
) => {
	const error = errors[name];
	const message = Array.isArray(error) ? error.join(", ") : error;

	return touched[name] ? message : undefined;
};

export const getSharedProps = <T extends FieldKeys>(
	name: T,
	{
		handleChange,
		handleBlur,
		values,
		...props
	}: Omit<FormikProps<Fields>, "handleSubmit">,
) => ({
	name,
	onChange: handleChange,
	onSelect: handleChange,
	onBlur: handleBlur,
	value: values[name],
	error: getErrorMessage(name, props),
});
