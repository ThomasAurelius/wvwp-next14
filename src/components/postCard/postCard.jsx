"use client";
import styles from "./postCard.module.css";
import React from "react";
import PayPalButtonMaster from "../paypalButton/PaypalButtonMaster";
import PayPalButtonTournament from "../paypalButton/PaypalButtonSingleTournament";
import { usePathname } from "next/navigation";
import PayPalButtonOpenWater from "../paypalButton/PaypalButtonOpenWater";
import PayPalButtonSantiamMasters from "../paypalButton/PaypalButtonSantiamMasters";

const PostCard = ({ player }) => {
	const path = usePathname();

	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<div className={styles.topLeft}>
					<h1 className={styles.title}>
						{player.firstname} {player.lastname}
					</h1>
				</div>
				<div className={styles.infoSection}>
					<div className={styles.badges}>
						<span className={styles.genderBadge}>
							<span className={styles.badgeIcon}>
								{player.gender === "Male" ? "♂" : player.gender === "Female" ? "♀" : ""}
							</span>
							{player.gender}
						</span>
						<span className={styles.levelBadge}>
							{player.year}
						</span>
					</div>
					<div className={styles.paymentStatus}>
						<span className={player.duesPaid ? styles.statusPaid : styles.statusNotPaid}>
							<span className={styles.statusIcon}>
								{player.duesPaid ? "✓" : "✗"}
							</span>
							Dues {player.duesPaid ? "Paid" : "Not Paid"}
						</span>
						<span className={player.tournPaid ? styles.statusPaid : styles.statusNotPaid}>
							<span className={styles.statusIcon}>
								{player.tournPaid ? "✓" : "✗"}
							</span>
							Tournament {player.tournPaid ? "Paid" : "Not Paid"}
						</span>
					</div>
				</div>
			</div>
			{(player.year === "Junior" || player.year === "Senior") &&
			(path === "/parent") &&
			(player.duesPaid === false) ? (
				<div>
					<PayPalButtonMaster player={player} />
				</div>
			) : (
				<></>
			)}
			{(player.tournPaid === false) && (path === "/parent") ? (
				<div>
					<PayPalButtonTournament player={player} />
				</div>
			) : (
				<></>
			)}
			{(player.openWaterPaid === false) && (path === "/parent") ? (
				<div>
					<PayPalButtonOpenWater player={player} />
				</div>
			) : (
				<></>
			)}
			{(player.santiamMastersPaid === false) && (path === "/parent") ? (
				<div>
					<PayPalButtonSantiamMasters player={player} />
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default PostCard;
