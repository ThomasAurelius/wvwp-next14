"use client";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import styles from "./paypalButton.module.css";

import { updatePlayerTournPaid } from "@/lib/action";

const PayPalButtonTournament = ({ player }) => {
	const playerName = player.firstname + " " + player.lastname;
	const playerId = player._id;

	const style = {
		layout: "horizontal",
		label: "pay",
		tagline: "false",
		size: "responsive",
		shape: "rect",
		color: "gold",
	};
	const paypalOptions = {
		"client-id":
			"ARG22fUBxsrJDWLrV56uPQxMSCL9KqZ9BqeF-vXo8Hd4AijsHuB41JbBUiNbS0_7zujhO_4CFRGZKOM-",
		currency: "USD",
	};

	const createOrder = (data, actions) => {
		return actions.order.create({
			purchase_units: [
				{
					amount: {
						value: "200.00", // Example amount
					},
					description: playerName + " Tournament Fee",
				},
			],
		});
	};

	const onApprove = (data, actions) => {
		return actions.order.capture().then(function (details) {
			updatePlayerTournPaid(playerId);
			alert("Transaction completed by " + details.payer.name.given_name);
			console.log(details);
			window.location.reload();
		});
	};

	return (
		<div className={styles.container}>
			<PayPalScriptProvider options={paypalOptions}>
				<h4>Pay Tournament Fee</h4>
				<PayPalButtons
					createOrder={createOrder}
					onApprove={onApprove}
					style={style}
				/>
			</PayPalScriptProvider>
		</div>
	);
};

export default PayPalButtonTournament;
