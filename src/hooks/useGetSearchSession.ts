import {
	useAddressAutofillCore,
	useSearchSession,
} from "@mapbox/search-js-react";

/**
 * Custom hook that returns a search session for address autofill.
 * @returns The search session object.
 */
export default function useGetSearchSession() {
	const addressAutofillCore = useAddressAutofillCore({
		accessToken: import.meta.env.VITE_MAPBOX_API_KEY,
	});

	return useSearchSession(addressAutofillCore);
}
