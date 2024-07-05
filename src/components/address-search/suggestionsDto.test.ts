import suggestionsDto from "./suggestionsDto";

describe("suggestionsDto", () => {
	test("should return correct dto object", () => {
		const suggestion = {
			full_address: "123 Main St",
		};

		const expectedDto = {
			id: suggestion.full_address,
			value: suggestion.full_address,
			displayValue: suggestion.full_address,
		};

		const result = suggestionsDto(suggestion, 1);

		expect(result).toEqual(expectedDto);
	});

	test("should handle undefined full_address", () => {
		const suggestion = {
			full_address: undefined,
		};

		const index = 1;

		const expectedDto = {
			id: 1,
			value: "",
			displayValue: "",
		};

		const result = suggestionsDto(suggestion, index);

		expect(result).toEqual(expectedDto);
	});

	test("should handle skip other props than full_address", () => {
		const suggestion = {
			full_address: "test",
			other_prop: "other",
		};

		const expectedDto = {
			id: suggestion.full_address,
			value: suggestion.full_address,
			displayValue: suggestion.full_address,
		};

		const result = suggestionsDto(suggestion, 1);

		expect(result).toEqual(expectedDto);
		expect(JSON.stringify(result)).not.toContain(suggestion.other_prop);
	});
});
