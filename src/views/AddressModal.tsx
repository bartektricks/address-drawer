import AddressForm from "../components/address-form/AddressForm";

export default function AddressModal() {
	return (
		<div className="p-6">
			<header className="mb-8">
				<h1 className="font-bold text-lg mb-1">Addresses</h1>
				<p className="text-gray-600 text-sm">
					Search for an address to add it to your list. You will be able to add
					directions to the location on the booking form.
				</p>
			</header>
			<main>
				<AddressForm />
			</main>
		</div>
	);
}
