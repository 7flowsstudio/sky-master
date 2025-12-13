// import {useTranslations} from 'next-intl';
import { ReactNode } from "react";

type Props = {
	children?: ReactNode;
};

// export default function PageLayout({children}: Props) {
//   const t = useTranslations('PageLayout');

//   return <>{children}</>;
// }

export default function PageLayout({ children }: Props) {
	return <>{children}</>;
}
