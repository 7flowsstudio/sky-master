"use client";
import React from "react";
import { Link } from "@/i18n/routing";
import { useRouter } from "next/navigation";

interface Props extends React.ComponentProps<typeof Link> {
	scrollId?: string;
}

export const LocalizedScrollLinkCustom = ({
	scrollId,
	href,
	onClick,
	...props
}: Props) => {
	const router = useRouter();

	const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
		if (!scrollId) return;

		e.preventDefault();

		// Якщо вже на потрібній сторінці
		if (href === window.location.pathname) {
			const el = document.getElementById(scrollId);
			if (el) el.scrollIntoView({ behavior: "smooth" });
			return;
		}

		// Переходимо на сторінку і додаємо query для scroll
		await router.push(`${href}?scrollTo=${scrollId}`, { scroll: false });
	};

	return <Link href={href} onClick={handleClick} {...props} />;
};
