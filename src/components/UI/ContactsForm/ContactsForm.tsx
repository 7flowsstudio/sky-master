import React from "react";
import s from "./ContactsForm.module.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { useTranslations } from "next-intl";

export type InitialValuesType = {
	name: string;
	email: string;
	program: string;
	military: string;
	message: string;
};

type CloseProps = {
	onClose: () => void;
};

const ContactsForm = ({ onClose }: CloseProps) => {
	const t = useTranslations("ContactForm");

	const initialValues: InitialValuesType = {
		name: "",
		email: "",
		program: "",
		military: "",
		message: "",
	};

	const onlyWords = /^[a-zA-Zа-яА-ЯіІєЄїЇ]+$/;

	const validationSchema = Yup.object({
		name: Yup.string()
			.matches(onlyWords, "ТІЛЬКИ СЛОВА!")
			.min(3, "Мінімум 3 символа!")
			.max(30, "Максимум 30 символів!")
			.required("Поле не може бути пустим"),
		email: Yup.string()
			.email("Некоректний email!")
			.required("Введіть коректний email!"),
		program: Yup.string().required("Оберіть програму"),
		military: Yup.string().required("Оберіть варіант"),
		message: Yup.string()
			.min(10, "Від 10 до 500 символів!")
			.max(500, "Від 10 до 500 символів!")
			.required("Це поле обов'язкове!"),
	});

	const handleAdd = async (
		values: InitialValuesType,
		{ resetForm }: FormikHelpers<InitialValuesType>
	) => {
		try {
			const response = await fetch("/api/send-email", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(values),
			});

			if (response.ok) {
				onClose();
				resetForm();
			} else {
				onClose();
			}
		} catch (error) {
			console.error("Помилка:", error);
		}
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleAdd}
			validationSchema={validationSchema}
		>
			{({ isValid, dirty, handleChange }) => (
				<Form className={s.form}>
					{/* NAME & EMAIL */}
					<div className={s.row}>
						<label className={s.label}>
							<Field
								className={s.input}
								type="text"
								name="name"
								placeholder={t("name") + "*"}
							/>
							<ErrorMessage name="name" component="p" className={s.error} />
						</label>

						<label className={s.label}>
							<Field
								className={s.input}
								type="email"
								name="email"
								placeholder={t("email") + "*"}
							/>
							<ErrorMessage name="email" component="p" className={s.error} />
						</label>
					</div>

					{/* MILITARY RADIO */}
					<div className={`${s.label} ${s.militaryLabel}`}>
						<span className={s.labelText}>{t("military")}*</span>

						<div className={s.radioGroup}>
							<label className={s.radioOption}>
								<input
									type="radio"
									name="military"
									value="yes"
									onChange={handleChange}
									className={s.radioHidden}
								/>
								<span>{t("yes")}</span>
							</label>

							<label className={s.radioOption}>
								<input
									type="radio"
									name="military"
									value="no"
									onChange={handleChange}
									className={s.radioHidden}
								/>
								<span>{t("no")}</span>
							</label>
						</div>

						<ErrorMessage name="military" component="p" className={s.error} />
					</div>

					{/* PROGRAM SELECT */}
					<label className={s.label}>
						<span className={s.labelText}>{t("select")}*</span>
						<Field as="select" className={s.select} name="program">
							<option value="">— choose —</option>
							<option value="FPV Basic">{t("select_variant.0")}</option>
							<option value="FPV Pro">{t("select_variant.1")}</option>
							<option value="Tactical Start">{t("select_variant.2")}</option>
							<option value="Night Ops">{t("select_variant.3")}</option>
							<option value="Civil Flight">{t("select_variant.4")}</option>
							<option value="Mapping Basics">{t("select_variant.5")}</option>
						</Field>
						<ErrorMessage name="program" component="p" className={s.error} />
					</label>

					{/* MESSAGE */}
					<label className={s.label}>
						<Field
							as="textarea"
							className={`${s.input} ${s.textarea}`}
							name="message"
							rows={1}
							placeholder={t("message")}
						/>
						<ErrorMessage name="message" component="p" className={s.error} />
					</label>

					{/* SUBMIT */}
					<button
						className={s.submitBtn}
						type="submit"
						disabled={!(isValid && dirty)}
					>
						{t("btn")}
						<svg className={s.iconBtn}>
							<use href="/sprite.svg#icon-arrow-top-right"></use>
						</svg>
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default ContactsForm;
