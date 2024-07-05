import clearAddress from "@/api/clearAddress";
import db from "@/lib/db";

vi.mock("@/lib/db");

describe("clearAddress", () => {
	it("should remove the address from the database", () => {
		const id = "addressId";
		clearAddress(id);
		expect(db.remove).toHaveBeenCalledWith(id);
	});
});
