import React from "react";
import ExCom from "../components/ExCom";
import Chairs from "../components/Chairs";
import HrDepartment from "../components/HrDepartment";
import BusinessDepartment from "../components/BusinessDepartment";
import MultimediaDepartment from "../components/MultimediaDepartment";

export default function TeamPage() {
	return (
		<div>
			<div className="mb-12">
				<ExCom />
			</div>
			<div className="mb-12">
				<Chairs />
			</div>
			{/* <div className="mb-12">
				<HrDepartment />
			</div>
			<div className="mb-12">
				<BusinessDepartment />
			</div>
			<div className="mb-12">
				<MultimediaDepartment />
			</div> */}
		</div>
	);
}
