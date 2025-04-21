import Donation from "./Donation/index";
import CreditCharge from "./components/creditCharge";

const List = () => {
	return (
		<div className="mainGrid">
			<CreditCharge />
			<Donation />
		</div>
	);
};

export default List;
