import db from "@/lib/db";

// MOCK API CALL
export default function clearAddress(id: string) {
	db.remove(id);
}
