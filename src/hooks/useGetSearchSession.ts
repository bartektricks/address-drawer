import {
	useAddressAutofillCore,
	useSearchSession,
} from "@mapbox/search-js-react";

export default function useGetSearchSession() {
	const addressAutofillCore = useAddressAutofillCore({
		accessToken: import.meta.env.VITE_MAPBOX_API_KEY,
	});

	return useSearchSession(addressAutofillCore);
}
