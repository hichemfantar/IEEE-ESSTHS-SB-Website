import React from "react";
import ExCom from "../components/ExCom";
import Chairs from "../components/Chairs";

export default function TeamPage() {
	return (
		<div>
			<div className="mb-12">
				<ExCom />
			</div>
			<Chairs />
		</div>
	);
}
