import ResizeObserver from "@/__tests__/mocks/ResizeObserver";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Combobox from "./Combobox";

const withUser = (node: React.ReactNode) => {
	const user = userEvent.setup();
	const renderData = render(node);

	return {
		user,
		...renderData,
	};
};

const FIELDS = [
	{ id: 1, value: "value1", displayValue: "Display Value 1" },
	{ id: 2, value: "value2", displayValue: "Display Value 2" },
	{ id: 3, value: "value3", displayValue: "Display Value 3" },
];

const DEFAULT_PROPS = {
	error: "",
	fallbackMessage: "No fields found.",
	fields: FIELDS,
	iconStart: undefined,
	isLoading: false,
	name: "combobox",
	onBlur: vi.fn(),
	onQueryChange: vi.fn(),
	onSelect: vi.fn(),
	placeholder: "Select an option",
	title: "Combobox",
	value: "",
};

beforeAll(() => {
	vi.stubGlobal("ResizeObserver", ResizeObserver);
});

afterAll(() => {
	vi.unstubAllGlobals();
});

describe("Combobox", () => {
	it("renders the Combobox component", () => {
		render(<Combobox {...DEFAULT_PROPS} />);
		expect(screen.getByTestId("combobox")).toBeInTheDocument();
	});

	it("displays the placeholder text", () => {
		render(<Combobox {...DEFAULT_PROPS} />);
		expect(screen.getByPlaceholderText("Select an option")).toBeInTheDocument();
	});

	it("displays all the options when typed any value", async () => {
		const { user } = withUser(<Combobox {...DEFAULT_PROPS} />);
		await user.type(screen.getByTestId("combobox"), "x");

		expect(
			screen.getByRole("option", { name: "Display Value 1" }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("option", { name: "Display Value 2" }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("option", { name: "Display Value 3" }),
		).toBeInTheDocument();
	});

	it("calls the onSelect function when an option is selected", async () => {
		const { user } = withUser(<Combobox {...DEFAULT_PROPS} />);
		await user.type(screen.getByTestId("combobox"), "search query");
		await user.click(screen.getByRole("option", { name: "Display Value 2" }));

		expect(DEFAULT_PROPS.onSelect).toHaveBeenCalledWith({
			target: {
				value: "value2",
				name: "combobox",
			},
		});
	});

	it("calls the onQueryChange function when the input value changes", () => {
		const { user } = withUser(<Combobox {...DEFAULT_PROPS} />);

		user.type(screen.getByTestId("combobox"), "search query");
		expect(DEFAULT_PROPS.onQueryChange).toHaveBeenCalledWith("search query");
	});

	it("calls the onBlur function when the input loses focus", () => {
		render(<Combobox {...DEFAULT_PROPS} />);

		fireEvent.blur(screen.getByTestId("combobox"));

		expect(DEFAULT_PROPS.onBlur).toHaveBeenCalledWith({
			target: {
				value: "",
				name: "combobox",
			},
		});
	});

	it("displays the error message when error prop is provided", () => {
		render(<Combobox {...DEFAULT_PROPS} error="Invalid selection" />);
		expect(screen.getByText("Invalid selection")).toBeInTheDocument();
	});
});
