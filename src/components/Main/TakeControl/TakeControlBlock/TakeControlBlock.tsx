"use client";
import React, { useState } from "react";
import StartButton from "@/components/UI/StartButton/StartButton";
import Image from "next/image";
import s from "./TakeControlBlock.module.css";
import { useTranslations } from "next-intl";
import SplitText from "@/components/UI/SplitText/SplitText";
import ModalWrapper from "@/components/UI/ModalWrapper/ModalWrapper";
import ContactsForm from "@/components/UI/ContactsForm/ContactsForm";
import Successfull from "@/components/UI/Successfull/Successfull";

const TakeControlBlock = () => {
	const [openModal, setOpenModal] = useState(false);
	const [successfull, setSuccsessfull] = useState(false);
	const t = useTranslations("TakeControl");
	const CloseModal = () => {
		setOpenModal(false);
		setSuccsessfull(false);
	};
	return (
		<>
			<div className={s.takeControlBlock}>
				<div className={s.takeControlLeft}>
					<div className={s.takeControlDescr}>
						<div className={s.title}>
							<h6 className={s.titleLitle}>{t("title_litle")}</h6>

							<h2 className={s.title_big}>
								<SplitText
									text={t("title_big")}
									className={s.title_big}
									delay={25}
									duration={0.1}
									ease="power3.out"
									splitType="chars"
									from={{ opacity: 0, y: 40 }}
									to={{ opacity: 1, y: 0 }}
									threshold={0.01}
									rootMargin="-100px"
									textAlign="left"
								/>
								{/* {t("title_big")} */}
							</h2>
						</div>
						<div className={s.takeControlBtn}>
							<StartButton setOpenModal={setOpenModal} />
						</div>
					</div>
				</div>
				<div className={s.takeControlRight}>
					<Image
						src="/img/takecontrol/photo_new.png"
						width={780}
						height={666}
						alt="soldier"
						className={s.soldier}
					/>
					<Image
						src="/img/takecontrol/photo_drone.png"
						width={780}
						height={666}
						alt="soldier"
						className={s.drone}
					/>
				</div>
			</div>
			{openModal && (
				<ModalWrapper
					onClose={CloseModal}
					text={successfull ? "Message delivered." : "Contact Form"}
				>
					{successfull ? (
						<Successfull onClose={CloseModal} />
					) : (
						<ContactsForm successfull={setSuccsessfull} />
					)}
				</ModalWrapper>
			)}
		</>
	);
};

export default TakeControlBlock;
