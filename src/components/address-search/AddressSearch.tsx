import Combobox, { type ComboboxProps } from "@/components/form/Combobox";
import { useState } from "react";
import { LuMapPin } from "react-icons/lu";
import useQueryAddress from "./useQueryAddress";

type AddressSearchProps = Omit<
	ComboboxProps,
	"fields" | "onQueryChange" | "isLoading"
>;

export default function AddressSearch(props: AddressSearchProps) {
	const [query, setQuery] = useState("");
	const { data, isFetching, isError } = useQueryAddress(query);

	return (
		<Combobox
			iconStart={LuMapPin}
			{...props}
			fields={data}
			onQueryChange={setQuery}
			isLoading={isFetching}
			fallbackMessage={isError ? "An error occurred." : undefined}
		/>
	);
}
