import { CreditProvider } from "../../context/CreditContext";
import CreditCharge from "./components/creditCharge";

const List = () => {
	return (
		<div className="mainGrid">
			<CreditProvider>
				<CreditCharge />
			</CreditProvider>
		</div>
	);
};

export default List;
