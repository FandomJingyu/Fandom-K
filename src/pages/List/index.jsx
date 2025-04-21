import { CreditProvider } from "../../context/CreditContext";
import CreditCharge from "./Charge/components/creditCharge";
import Chart from "./Chart/index";
import Donation from "./Donation/index";

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
