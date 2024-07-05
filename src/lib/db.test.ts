import db, { DB_KEY } from "./db";

describe("db", () => {
	it("should get undefined when no data in localStorage", () => {
		const result = db.get();
		expect(result).toBeUndefined();
	});

	it("should set a new address", () => {
		const address = {
			id: "1",
			address: "123 Main St",
			departments: ["HR", "IT"],
			description: "Headquarters",
		};

		db.set(address);

		const storedData = localStorage.getItem(DB_KEY);
		const parsedData = storedData ? JSON.parse(storedData) : null;

		expect(parsedData).toEqual({ addresses: [address] });
	});

	it("should remove an address by id", () => {
		const address1 = {
			id: "1",
			address: "123 Main St",
			departments: ["HR", "IT"],
			description: "Headquarters",
		};

		const address2 = {
			id: "2",
			address: "456 Elm St",
			departments: ["Finance"],
			description: "Branch Office",
		};

		db.set(address1);
		db.set(address2);
		db.remove("1");

		const storedData = localStorage.getItem(DB_KEY);
		const parsedData = storedData ? JSON.parse(storedData) : null;

		expect(parsedData).toEqual({ addresses: [address2] });
	});

	it("should clear all addresses", () => {
		const address = {
			id: "1",
			address: "123 Main St",
			departments: ["HR", "IT"],
			description: "Headquarters",
		};

		db.set(address);
		db.clearAll();

		const storedData = localStorage.getItem(DB_KEY);
		expect(storedData).toBeNull();
	});
});
