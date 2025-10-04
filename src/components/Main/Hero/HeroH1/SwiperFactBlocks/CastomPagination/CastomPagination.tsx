import React from "react";
import s from "./CastomPagination.module.css";

type ItemProp = {
	id: number;
	stat: string;
	descr: string;
};

type PaginationProps = {
	info: ItemProp[] | undefined;
	activeSlide: number | null;
};

const CastomPagination = ({ info = [], activeSlide }: PaginationProps) => {
	return (
		<div className={s.paginationWraper}>
			{info.map((step, index) => (
				<div key={index} className={s.paginationItem}>
					{index === activeSlide ? (
						<div className={s.boolitActiveIcon}></div>
					) : (
						<div className={s.boolitIcon}></div>
					)}
				</div>
			))}
		</div>
	);
};

export default CastomPagination;
