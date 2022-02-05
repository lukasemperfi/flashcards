import React from "react";
import { MainLayout } from "./components/MainLayout/MainLayout";
import { TestEditor } from "./components/TestEditor";
import { AppRouter } from "./router/AppRouter";

function App() {
	return (
		<>
			<AppRouter />
		</>
		// <TestEditor/>
	);
}

export default App;
