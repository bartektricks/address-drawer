import clearAllAddresses from "@/api/clearAllAddresses";
import AddressCards from "@/components/address-cards/AddressCards";
import AddressForm from "@/components/address-form/AddressForm";
import { IoIosClose } from "react-icons/io";

export default function AddressModal() {
	return (
		<div className="p-6 max-w-2xl mx-auto">
			<header className="mb-8 relative">
				<h1 className="font-bold text-lg mb-1">Addresses</h1>
				<p className="text-gray-600 text-sm">
					Search for an address to add it to your list. You will be able to add
					directions to the location on the booking form.
				</p>
				<button
					className="absolute top-0 right-0"
					aria-label="Close"
					type="button"
					onClick={() => {
						clearAllAddresses();

						// This could be a query update with React Query
						window.location.reload();
					}}
				>
					<IoIosClose aria-hidden="true" className="size-7" />
				</button>
			</header>
			<main className="space-y-8">
				<AddressForm />
				<AddressCards />
			</main>
		</div>
	);
}
