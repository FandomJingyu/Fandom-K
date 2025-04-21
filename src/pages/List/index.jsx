import CreditCharge from "./Chart/creditCharge";
import Donation from "./Donation/index";
import Chart from "./Chart/index";

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
