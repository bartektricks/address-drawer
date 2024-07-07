export const DB_KEY = "db";

export type Address = {
	id: string;
	address: string;
	departments: string[];
	description: string;
};

type DbData = {
	addresses: Address[];
};

/**
 * Mock db with ORM (kind of like Prisma Client etc.).
 */
const db = {
	get(): DbData | undefined {
		const db = localStorage.getItem(DB_KEY);
		return db ? JSON.parse(db) : undefined;
	},
	set(address: Address) {
		const db = this.get();

		localStorage.setItem(
			DB_KEY,
			JSON.stringify({
				addresses: [...(!db ? [address] : [...db.addresses, address])],
			}),
		);
	},
	remove(id: string) {
		const db = this.get();

		if (!db) return;

		const addresses = db.addresses.filter((address) => address.id !== id);
		localStorage.setItem(DB_KEY, JSON.stringify({ addresses }));
	},
	clearAll() {
		localStorage.removeItem(DB_KEY);
	},
};

export default db;
