import {
	useAddressAutofillCore,
	useSearchSession,
} from "@mapbox/search-js-react";
import { useDebounce } from "@uidotdev/usehooks";
import { useQuery } from "react-query";

export const ADDRESS_KEY = "address";

export default function useQueryAddress(query: string) {
	const debouncedQuery = useDebounce(query, 200);

	const addressAutofillCore = useAddressAutofillCore({
		accessToken: import.meta.env.VITE_MAPBOX_API_KEY,
	});

	const sess = useSearchSession(addressAutofillCore);

	const queryData = useQuery({
		queryKey: [ADDRESS_KEY, debouncedQuery],
		queryFn: async () => {
			const data = await sess.suggest(debouncedQuery);
			return data?.suggestions.map(({ full_address }, index) => ({
				id: full_address ?? index,
				value: full_address ?? "",
				displayValue: full_address ?? "",
			}));
		},
	});

	return queryData;
}
