"use client";
import React, { useState } from "react";
import s from "./SkyMaster.module.css";
import WrapperForComponents from "@/components/UI/WrapperForComponents/WrapperForComponents";
import { useTranslations } from "next-intl";
import StartButton from "@/components/UI/StartButton/StartButton";
import Image from "next/image";
import useSizeWindows from "@/lib/useSizeWindows/useSizeWindows";
import SplitText from "@/components/UI/SplitText/SplitText";
import ModalWrapper from "@/components/UI/ModalWrapper/ModalWrapper";
import ContactsForm from "@/components/UI/ContactsForm/ContactsForm";
import useScrollAnimation from "@/lib/hooks/useScrollAnimation";

const SkyMaster = () => {
	const [openModal, setOpenModal] = useState(false);
	const t = useTranslations("Skymaster");
	const [adventagesRef, adventagesVisible] = useScrollAnimation() as [
		React.RefObject<HTMLDivElement>,
		boolean
	];
	const [adventagesListRef, adventagesListVisible] = useScrollAnimation() as [
		React.RefObject<HTMLUListElement>,
		boolean
	];

	const { top, bottom } = useSizeWindows();

	const itemList = [
		{ id: 0, title: t("flight.item_1.title"), text: t("flight.item_1.text") },
		{ id: 1, title: t("flight.item_2.title"), text: t("flight.item_2.text") },
		{ id: 2, title: t("flight.item_3.title"), text: t("flight.item_3.text") },
		{ id: 3, title: t("flight.item_4.title"), text: t("flight.item_4.text") },
	];

	const CloseModal = () => {
		setOpenModal(false);
	};
	return (
		<>
			<div className={s.skymasterWrapper}>
				<WrapperForComponents paddingTop={top} paddingBottom={bottom}>
					<div className={s.skymasterBlock}>
						<div className={s.titleH2}>
							<h6 className={s.titleSmall}>{t("title_small")}</h6>
							<h2 className={s.titleBig}>
								<div className={s.rectangle}></div>
								<SplitText
									text={t("title_big")}
									className={s.titleBig}
									delay={50}
									duration={0.1}
									ease="power3.out"
									splitType="chars"
									from={{ opacity: 0, y: 40 }}
									to={{ opacity: 1, y: 0 }}
									threshold={0.01}
									rootMargin="-100px"
									textAlign="center"
								/>
								{/* {t("title_big")} */}
							</h2>
						</div>

						<div className={s.content}>
							<ul
								ref={adventagesListRef}
								className={`${s.adventagesList} ${s.animateAdventagesList} ${
									adventagesListVisible ? s.visible : ""
								}`}
							>
								{itemList.map((item) => (
									<li key={item.id} className={s.advItem}>
										<div className={s.advWrap}>
											<svg className={s.iconAdv}>
												<use
													href={`/sprite.svg#icon-skymaster-${item.id + 1}`}
												></use>
											</svg>
										</div>
										<div className={s.advDescr}>
											<h4 className={s.advTitle}>{item.title}</h4>
											<p className={s.advText}>{item.text}</p>
										</div>
									</li>
								))}
							</ul>
							<div
								ref={adventagesRef}
								className={`${s.imgAdventages} ${s.animateAdventages} ${
									adventagesVisible ? s.visible : ""
								}`}
							>
								<Image
									src="/img/skymaster/adventage.png"
									width={355}
									height={347}
									alt="img_skymaster"
									className={s.imgSkymaster}
								/>

								<div className={s.imgDescr}>
									<h4 className={s.advTitle}>{t("flight_head.title")}</h4>
									<p className={s.advText}>{t("flight_head.text")}</p>
									<StartButton setOpenModal={setOpenModal} />
								</div>
							</div>
						</div>
					</div>
				</WrapperForComponents>
			</div>
			{openModal && (
				<ModalWrapper onClose={CloseModal}>
					<ContactsForm onClose={CloseModal} />
				</ModalWrapper>
			)}
		</>
	);
};

export default SkyMaster;
