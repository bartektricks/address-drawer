import clearAllAddresses from "@/api/clearAllAddresses";
import setAddressList from "@/api/setAddressList";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import AddressCards from "./AddressCards";

const mockAddresses = [
	{
		id: "1",
		address: "123 Main St",
		departments: ["Sales", "Support"],
		description: "Near downtown",
	},
	{
		id: "2",
		address: "456 Oak Ave",
		departments: ["HR"],
		description: "",
	},
];

vi.stubGlobal("location", { reload: vi.fn() });

beforeEach(() => {
	for (const address of mockAddresses) {
		setAddressList(address);
	}
});

afterEach(() => {
	clearAllAddresses();
});

afterAll(() => {
	vi.unstubAllGlobals();
});

describe("AddressCards Component", () => {
	it("renders the AddressCards component with correct data", () => {
		render(<AddressCards />);

		expect(screen.getByText("123 Main St")).toBeInTheDocument();
		expect(
			screen.getByText("Nr. of departments who use this address: 2"),
		).toBeInTheDocument();
		expect(screen.getByText("Directions: Near downtown")).toBeInTheDocument();
		expect(screen.getByText("456 Oak Ave")).toBeInTheDocument();
		expect(
			screen.getByText("Nr. of departments who use this address: 1"),
		).toBeInTheDocument();
		expect(screen.getByText("Directions: N/A")).toBeInTheDocument();
	});

	it("calls clearAddress and reloads page on close button click", () => {
		render(<AddressCards />);

		fireEvent.click(screen.getByTestId("close-button-1"));

		waitFor(() =>
			expect(screen.queryByText("123 Main St")).not.toBeInTheDocument(),
		);
	});
});
