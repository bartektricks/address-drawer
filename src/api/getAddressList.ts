import db from "@/lib/db";

// MOCK API CALL
export default function getAddressList() {
	return db.get()?.addresses;
}
