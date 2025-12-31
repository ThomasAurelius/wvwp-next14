"use client";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import styles from "./paypalButton.module.css";

import { updatePlayerDuesPaid } from "@/lib/action";

const PayPalButtonMaster = ({ player }) => {
	const playerName = player.firstname + " " + player.lastname;
	const playerId = player._id;
	const grade = player.year;
	let dues;
	if (grade == "Senior") {
		dues = 495;
	} else if (grade == "Junior") {
		dues = 395;
	} else {
		dues = 0;
	}

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
						value: dues, // Example amount
					},
					description: playerName + " Club Dues",
				},
			],
		});
	};

	const onApprove = (data, actions) => {
		return actions.order.capture().then(function (details) {
			updatePlayerDuesPaid(playerId);
			alert("Transaction Successful!");
			console.log(details);
			window.location.reload();
		});
	};

	return (
		<div className={styles.container}>
			<PayPalScriptProvider options={paypalOptions}>
				<h4>Pay Dues</h4>
				<PayPalButtons
					createOrder={createOrder}
					onApprove={onApprove}
					style={style}
				/>
			</PayPalScriptProvider>
		</div>
	);
};

export default PayPalButtonMaster;
