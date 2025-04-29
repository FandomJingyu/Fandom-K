import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import CommonStyles from "./styles/commonStyles.jsx";
import LayoutStyles from "./styles/layoutStyles.jsx";
import ResetStyles from "./styles/resetStyles.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<ResetStyles />
			<CommonStyles />
			<LayoutStyles />
			<App />
		</BrowserRouter>
	</StrictMode>,
);
