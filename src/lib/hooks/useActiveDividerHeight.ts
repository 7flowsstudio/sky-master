import { useEffect, useState, RefObject } from "react";

export const useActiveDividerHeight = (
	listRef: RefObject<HTMLElement | null>,
	dividerHeight: number
) => {
	const [activeHeight, setActiveHeight] = useState(0);

	useEffect(() => {
		const element = listRef.current;
		if (!element || dividerHeight === 0) return;

		let frameId: number;

		const update = () => {
			const rect = element.getBoundingClientRect();
			const windowHeight = window.innerHeight;
			const centerY = windowHeight / 2;
			const distanceScrolled = centerY - rect.top;
			const newHeight = Math.max(0, Math.min(distanceScrolled, dividerHeight));

			setActiveHeight(newHeight);
			frameId = requestAnimationFrame(update); // постійне оновлення
		};

		frameId = requestAnimationFrame(update);
		window.addEventListener("resize", update);

		return () => {
			cancelAnimationFrame(frameId);
			window.removeEventListener("resize", update);
		};
	}, [listRef, dividerHeight]);

	return activeHeight;
};
