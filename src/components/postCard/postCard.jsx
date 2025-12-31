"use client";
import styles from "./postCard.module.css";
import React from "react";
import Link from "next/link";
import PayPalButtonMaster from "../paypalButton/PaypalButtonMaster";
import PayPalButtonTournament from "../paypalButton/PaypalButtonSingleTournament";
import { usePathname } from "next/navigation";
import PayPalButtonOpenWater from "../paypalButton/PaypalButtonOpenWater";
import PayPalButtonSantiamMasters from "../paypalButton/PaypalButtonSantiamMasters";

const PostCard = ({ player }) => {
	const path = usePathname();
	const paid = player.duesPaid;

	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<div className={styles.topLeft}>
					<h1 className={styles.title}>
						{player.firstname} {player.lastname}
					</h1>
				</div>
				<div className={styles.topRight}>
					<p className={styles.descGender}>{player.gender}</p>
					<p className={styles.descYear}>{player.year}</p>
				</div>
			</div>
			<div className={styles.bottom}>
				<div className={styles.bottomRight}>
					{player.duesPaid == true ? (
						<div className={styles.paidButton}>
							<p className={styles.descPaid}>Dues Paid</p>
						</div>
					) : (
						<div className={styles.paidButton}>
							<p className={styles.descNotPaid}>Dues Not Paid</p>
						</div>
					)}

					{player.tournPaid == true ? (
						<div className={styles.paidButton}>
							<p className={styles.descPaid}>Tournament Paid</p>
						</div>
					) : (
						<div className={styles.paidButton}>
							<p className={styles.descNotPaid}>Tournament Not Paid</p>
						</div>
					)}
				</div>

				<div>
					<button disabled className={styles.button}>
						Edit
					</button>
				</div>
			</div>
			{(player.year == "Junior" || player.year == "Senior") &
			(path == "/parent") &
			(player.duesPaid == false) ? (
				<div>
					<PayPalButtonMaster player={player} />
				</div>
			) : (
				<></>
			)}
			{(player.tournPaid == false) & (path == "/parent") ? (
				<div>
					<PayPalButtonTournament player={player} />
				</div>
			) : (
				<></>
			)}
			{(player.openWaterPaid == false) & (path == "/parent") ? (
				<div>
					<PayPalButtonOpenWater player={player} />
				</div>
			) : (
				<></>
			)}
			{(player.santiamMastersPaid == false) & (path == "/parent") ? (
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
