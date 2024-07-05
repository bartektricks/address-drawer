import db from "@/lib/db";

// MOCK API CALL
export default function clearAllAddresses() {
	db.clearAll();
}
