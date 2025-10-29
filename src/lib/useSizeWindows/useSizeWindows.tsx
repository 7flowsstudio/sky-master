"use client";
import { useEffect, useState } from "react";

const useSizeWindows = () => {
	const [padding, setPadding] = useState({ top: 40, bottom: 40 });

	useEffect(() => {
		const updatePadding = () => {
			const width = window.innerWidth;
			if (width < 768) {
				setPadding({ top: 40, bottom: 40 });
			} else if (width < 1280) {
				setPadding({ top: 80, bottom: 80 });
			} else {
				setPadding({ top: 120, bottom: 120 });
			}
		};

		updatePadding();
		window.addEventListener("resize", updatePadding);
		return () => window.removeEventListener("resize", updatePadding);
	}, []);
	return padding;
};

export default useSizeWindows;
