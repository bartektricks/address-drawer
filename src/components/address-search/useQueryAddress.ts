import useGetSearchSession from "@/hooks/useGetSearchSession";
import { useDebounce } from "@uidotdev/usehooks";
import { useQuery } from "react-query";
import suggestionsDto from "./suggestionsDto";

export const ADDRESS_KEY = "address";

export default function useQueryAddress(query: string) {
	const debouncedQuery = useDebounce(query, 200);
	const sess = useGetSearchSession();

	const queryData = useQuery({
		queryKey: [ADDRESS_KEY, debouncedQuery],
		queryFn: async () => {
			const data = await sess.suggest(debouncedQuery);
			return data?.suggestions.map(suggestionsDto);
		},
	});

	return queryData;
}
