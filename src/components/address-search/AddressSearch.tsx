import { useState } from "react";
import { LuMapPin } from "react-icons/lu";
import Combobox, { type ComboboxProps } from "../form/Combobox";
import useQueryAddress from "./useQueryAddress";

type AddressSearchProps = Omit<
	ComboboxProps,
	"fields" | "onQueryChange" | "isLoading"
>;

export default function AddressSearch(props: AddressSearchProps) {
	const [query, setQuery] = useState("");
	const { data, isFetching } = useQueryAddress(query);

	return (
		<Combobox
			iconStart={LuMapPin}
			{...props}
			fields={data}
			onQueryChange={setQuery}
			isLoading={isFetching}
		/>
	);
}
