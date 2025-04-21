import { CreditProvider } from "../../context/CreditContext";
import Chart from "./Chart/index";
import Donation from "./Donation/index";
import CreditCharge from "./components/creditCharge";

const List = () => {
	return (
		<div className="mainGrid">
			<CreditProvider>
				<CreditCharge />
			</CreditProvider>
			<Donation />
			<Chart />
		</div>
	);
};

export default List;
