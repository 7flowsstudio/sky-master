import nodemailer from "nodemailer";

export async function POST(req) {
	const { name, email, program, military, message } = await req.json();

	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: Number(process.env.SMTP_PORT),
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASSWORD,
		},
	});

	try {
		await transporter.sendMail({
			from: process.env.SMTP_FROM,
			to: process.env.SMTP_TO,
			subject: `Повідомлення від ${name}`,
			text: `Ім'я: ${name}\nEmail: ${email}\nПрограма: ${program}\nВійськовий: ${military}\nПовідомлення: ${message}`,
			html: `
        <p><strong>Ім'я:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Програма:</strong> ${program}</p>
        <p><strong>Військовий:</strong> ${military}</p>
				<p><strong>Повідомлення:</strong> ${message}</p>
      `,
		});

		return Response.json(
			{ message: "Email sent successfully!" },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Ошибка отправки email:", error);
		return Response.json({ message: "Error sending email" }, { status: 500 });
	}
}
