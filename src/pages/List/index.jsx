import Chart from "./Chart/index";
import CreditCharge from "./Donation/components/creditCharge";
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
