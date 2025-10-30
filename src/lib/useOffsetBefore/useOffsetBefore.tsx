"use client";
import { useEffect, useState } from "react";

const useOffsetBefore = () => {
	const [offsetBefore, setOffsetBefore] = useState(0);

	useEffect(() => {
		const updateOffset = () => {
			const width = window.innerWidth;
			let newOffset;

			if (width < 768) newOffset = 150;
			else if (width < 1280) newOffset = (width - 84) / 3 / 2;
			else newOffset = (width - 160) / 4 / 2;

			setOffsetBefore(newOffset);
		};

		updateOffset();
		window.addEventListener("resize", updateOffset);
		return () => window.removeEventListener("resize", updateOffset);
	}, []);

	return offsetBefore;
};

export default useOffsetBefore;
