import { renderHook } from "@testing-library/react";
import useGetSearchSession from "./useGetSearchSession";

vi.stubGlobal("import.meta", {
	env: {
		VITE_MAPBOX_API_KEY: "fake-mapbox-api-key",
	},
});

describe("useGetSearchSession", () => {
	it("should return a session token", () => {
		const { result } = renderHook(() => useGetSearchSession());

		expect(result.current).toHaveProperty("sessionToken");
	});
});
