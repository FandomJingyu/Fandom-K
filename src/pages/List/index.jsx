import CreditCharge from "./Charge/components/CreditCharge";
import Chart from "./Chart/index";
import Donation from "./Donation/index";

const List = () => {
	return (
		<div className="mainGrid">
			<CreditCharge />
			<Donation />
			<Chart />
		</div>
	);
};

export default List;
