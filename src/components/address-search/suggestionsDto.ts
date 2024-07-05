import type useGetSearchSession from "@/hooks/useGetSearchSession";

type Suggestion = NonNullable<
	ReturnType<typeof useGetSearchSession>["suggestions"]
>["suggestions"][number];

export default function suggestionsDto(
	{ full_address }: Pick<Suggestion, "full_address">,
	index: number,
) {
	return {
		id: full_address ?? index,
		value: full_address ?? "",
		displayValue: full_address ?? "",
	};
}
