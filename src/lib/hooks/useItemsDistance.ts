import { useEffect, useState, RefObject } from "react";

export const useItemsDistance = (
	isMobile: boolean,
	listRef: RefObject<HTMLElement | null>,
	itemClass: string
) => {
	const [distance, setDistance] = useState<number>(0);

	useEffect(() => {
		if (!listRef.current) return;

		const calcDistance = () => {
			const items = listRef.current?.querySelectorAll(`.${itemClass}`);
			if (!items || items.length < 2) return;

			const first = items[0] as HTMLElement;
			const last = items[items.length - 2] as HTMLElement;

			const firstRect = first.getBoundingClientRect();
			const lastRect = last.getBoundingClientRect();

			setDistance(lastRect.bottom - firstRect.top + (isMobile ? 57 : 100));
		};

		calcDistance();

		// оновлення при зміні розміру
		window.addEventListener("resize", calcDistance);
		return () => window.removeEventListener("resize", calcDistance);
	}, [listRef, itemClass, isMobile]);

	return distance;
};
