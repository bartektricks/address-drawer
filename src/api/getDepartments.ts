import db from "../server/db";

// Mock API call to get departments from db
export default function getDepartments() {
	return db.departments;
}
