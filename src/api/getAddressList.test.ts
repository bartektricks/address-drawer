import { DB_KEY } from "@/lib/db"; // adjust the import according to your file structure
import getAddressList from "./getAddressList";

describe("getAddressList", () => {
	afterEach(() => {
		window.localStorage.clear();
	});

	it("should return addresses from localStorage", () => {
		const mockAddresses = [
			{
				id: "1",
				address: "123 Main St",
				departments: ["HR", "Finance"],
				description: "Main office",
			},
		];

		// Set the localStorage with mock data
		window.localStorage.setItem(
			DB_KEY,
			JSON.stringify({ addresses: mockAddresses }),
		);

		const result = getAddressList();
		expect(result).toEqual(mockAddresses);
	});

	it("should return null if no addresses are in localStorage", () => {
		const result = getAddressList();
		expect(result).toBeUndefined();
	});
});
