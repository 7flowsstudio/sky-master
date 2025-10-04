import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
	locales: ["en", "ua"] as const,
	defaultLocale: "en",
	pathnames: {
		"/": "/",
		"/programs": "/programs",
		"/corporate": "/corporate",
		"/about": "/about",
		"/contacts": "/contacts",
		"/training": "/training",
	},
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export function isLocale(value: string): value is Locale {
	return (routing.locales as readonly string[]).includes(value);
}

export const { Link, getPathname, redirect, usePathname, useRouter } =
	createNavigation(routing);
