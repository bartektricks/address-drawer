import db, { type Address } from "@/lib/db";

// MOCK API CALL
export default function setAddressList(data: Address) {
	// TODO add merging existing addresses.
	return db.set(data);
}
