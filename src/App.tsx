import { QueryClient, QueryClientProvider } from "react-query";
import AddressModalForm from "./views/AddressModal";
const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<AddressModalForm />
		</QueryClientProvider>
	);
}

export default App;
