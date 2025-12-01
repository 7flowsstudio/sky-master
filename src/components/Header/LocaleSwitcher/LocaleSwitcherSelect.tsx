"use client";

import { useParams } from "next/navigation";
import { ChangeEvent, ReactNode, useTransition } from "react";
import { Locale, usePathname, useRouter } from "@/i18n/routing";
import s from "./LocaleSwitcher.module.css";

type Props = {
	children: ReactNode;
	defaultValue: string;
	type?: string;
};

export default function LocaleSwitcherSelect({
	children,
	defaultValue,
	type,
}: Props) {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const pathname = usePathname();
	const params = useParams();

	function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
		const nextLocale = event.target.value as Locale;
		startTransition(() => {
			router.replace(
				// @ts-expect-error -- TypeScript will validate that only known `params`
				// are used in combination with a given `pathname`. Since the two will
				// always match for the current route, we can skip runtime checks.
				{ pathname, params },
				{ locale: nextLocale }
			);
		});
	}

	return (
		<label className={s.label__select}>
			<select
				className={s.nav__select}
				defaultValue={defaultValue}
				disabled={isPending}
				onChange={onSelectChange}
			>
				{children}
			</select>
			<svg className={`${s.arrow_icon} ${type === "mob" ? s.mob : ""}`}>
				<use href="/sprite.svg#icon-arrow-bottom" />
			</svg>
		</label>
	);
}
