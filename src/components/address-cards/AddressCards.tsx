import clearAddress from "@/api/clearAddress";
import getAddressList from "@/api/getAddressList";
import Card from "../card/Card";

export default function AddressCards() {
	const addresses = getAddressList();

	if (!addresses) return null;

	return (
		<div className="space-y-3">
			{addresses.map(({ id, address, departments, description }) => (
				<Card
					key={id}
					title={address}
					subtitle={`Nr. of departments who use this address: ${departments.length}`}
					body={`Directions: ${description.length > 0 ? description : "N/A"}`}
					onClose={() => {
						clearAddress(id);

						// This could be a query update with React Query
						window.location.reload();
					}}
				/>
			))}
		</div>
	);
}
