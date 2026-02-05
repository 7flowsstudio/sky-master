"use client";
import React, { useState } from "react";
import s from "./OurPrograms.module.css";
import WrapperForComponents from "@/components/UI/WrapperForComponents/WrapperForComponents";
import { useTranslations } from "next-intl";
import Image from "next/image";
// import StartButton from "@/components/UI/StartButton/StartButton";
import useIsMobile from "@/lib/isMobile/isMobile";
import useSizeWindows from "@/lib/useSizeWindows/useSizeWindows";
import { Link, usePathname } from "@/i18n/routing";
import { programsData } from "./programData";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import SplitText from "@/components/UI/SplitText/SplitText";
import ModalWrapper from "@/components/UI/ModalWrapper/ModalWrapper";
import ContactsForm from "@/components/UI/ContactsForm/ContactsForm";
import StartButtonLink from "@/components/UI/StartButtonLink/StartButtonLink";

type Props = {
  type?: string;
};

const OurPrograms = ({ type }: Props) => {
  const t = useTranslations("OurPrograms");
  const pathname = usePathname().split("/")[1];
  const { top, bottom } = useSizeWindows();
  const isMobile = useIsMobile();
  const cardList = programsData.map((item) => ({
    ...item,
    title: t(item.titleKey),
    local: t(item.localKey),
    date: t(item.dateKey),
    descr: t(item.descrKey),
  }));

  return (
    <>
      <div
        className={`${s.ourPrograms} ${
          pathname === "programs"
            ? "scrollstack-fullpage"
            : "scrollstack-fullpage-section"
        }`}
      >
        <WrapperForComponents
          paddingTop={type ? 40 : top}
          paddingBottom={type ? 40 : bottom}
        >
          <div className={s.programsBlock}>
            <h5 className={s.programsSmallTitle}>{t("titleSection")}</h5>
            <div className={s.programsHeadTitle}>
              <h3 className={`${s.programsTitle} ${s.left}`}>
                <div className={s.rectangle}></div>
                <SplitText
                  text={t("tite_1")}
                  className={`${s.programsTitle} ${s.left}`}
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="left"
                />
              </h3>
              <h3 className={`${s.programsTitle} ${s.right}`}>
                <SplitText
                  text={t("tite_2")}
                  className={`${s.programsTitle} ${s.right}`}
                  delay={100}
                  duration={0.06}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.4}
                  rootMargin="100px"
                  textAlign="right"
                />
              </h3>
            </div>
            {/* {pathname !== "programs" && (
				<div className={s.seeMoreWrapper}>
					<Link href="/programs" className={s.link}>
						<svg className={s.iconLink}>
							<use href="/sprite.svg#icon-arrow-top-right"></use>
						</svg>
						{t("btn")}
					</Link>
				</div>
			)} */}
            <ScrollStack
              itemDistance={120} // відстань між картками
              // itemScale={0.05} // наскільки зменшується картка позаду
              blurAmount={2} // легке розмиття
              // startOffset={0.2} // коли починає працювати анімація
            >
              {cardList
                .slice(0, pathname === "programs" ? cardList.length : 3)
                .map((item) => (
                  <ScrollStackItem key={item.id}>
                    <li className={s.programsCard}>
                      <Image
                        src={isMobile ? item.src_mob : item.src}
                        width={325}
                        height={400}
                        alt={`image` + item.id}
                        className={s.programsImage}
                      />

                      <div className={s.programsContent}>
                        <div className={s.programsContentTop}>
                          {/* <Link
														href={{
															pathname: "/programs/[id]",
															params: { id: String(item.id) },
														}}
													> */}
                          <h4 className={s.cardTitle}>{item.title}</h4>
                          {/* </Link> */}

                          <div className={s.horizontSeparator}></div>

                          <div className={s.programsInfo}>
                            <svg className={s.cardIcon}>
                              <use href="/sprite.svg#icon-teenyicons-location"></use>
                            </svg>
                            {item.local}

                            <svg className={s.cardIcon}>
                              <use href="/sprite.svg#icon-slash"></use>
                            </svg>

                            <svg className={s.cardIcon}>
                              <use href="/sprite.svg#icon-tdesign-calendar-filled"></use>
                            </svg>

                            {item.date}
                          </div>
                        </div>

                        <div className={s.programsContentBottom}>
                          <h4 className={s.cardDescription}>{item.descr}</h4>
                          <div className={s.cardBtnBlock}>
                            <StartButtonLink id={item.id} />
                          </div>
                        </div>
                      </div>
                    </li>
                  </ScrollStackItem>
                ))}
            </ScrollStack>
            {pathname !== "programs" && (
              <div className={s.seeMoreWrapper}>
                <Link href="/programs" className={s.link}>
                  <svg className={s.iconLink}>
                    <use href="/sprite.svg#icon-arrow-top-right"></use>
                  </svg>
                  {t("btn")}
                </Link>
              </div>
            )}
          </div>
        </WrapperForComponents>
      </div>
    </>
  );
};

export default OurPrograms;
