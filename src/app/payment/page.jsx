import PayPalButton from "@/components/paypalButton/PaypalButtonMaster";
import styles from "./payment.module.css";

const PaymentPage = () => {
	return (
		<div className={styles.container}>
			<h1>Payment Page</h1>
			<div className={styles.card}>
				<h2>Club Dues</h2>
				<button className={styles.button}>
					<a href="https://buy.stripe.com/test_4gw2bQecR0Iq17a4gg">
						Pay Club Dues
					</a>
				</button>
			</div>
			<div className={styles.card}>
				<h2>Tournament Dues</h2>
				<button className={styles.button}>
					<a href="https://buy.stripe.com/test_5kA8Ae4Chbn46rueUV">
						Pay Tournament Fee
					</a>
				</button>
			</div>
			<PayPalButton />
			<p>Payment plans available on request!</p>
		</div>
	);
};

export default PaymentPage;
