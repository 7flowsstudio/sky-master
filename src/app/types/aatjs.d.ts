declare module "aatjs" {
	export interface ScrollObserverInstance {
		onScroll(callback: (info: { percentageY: number }) => void): void;
	}

	export const ScrollObserver: {
		Element(
			element: HTMLElement,
			options?: { offsetTop?: number; offsetBottom?: number }
		): ScrollObserverInstance;
	};

	export function valueAtPercentage(options: {
		from: number;
		to: number;
		percentage: number;
	}): number;
}
