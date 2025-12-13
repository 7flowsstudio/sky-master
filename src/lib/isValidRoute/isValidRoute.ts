import { ROUTING_PATHS } from "./routingPaths";

// isValidRoute.ts
export function isValidRoute(pathname: string) {
	// exact match
	if (ROUTING_PATHS.includes(pathname)) return true;

	// dynamic: /programs/[id]
	if (pathname.startsWith("/programs/")) {
		const parts = pathname.split("/");
		return parts.length === 3 && parts[2].length > 0;
	}

	return false;
}
