const nodemailer = require("nodemailer");

const contactRoute = async (email, summary, name) => {
	try {
		const transporter = nodemailer.createTransport({
			host: process.env.HOST,
			service: process.env.SERVICE,
			port: Number(process.env.EMAIL_PORT),
			secure: Boolean(process.env.SECURE),
			auth: {
				user: process.env.USER,
				pass: process.env.PASS,
			},
		});

		transporter.sendMail({
			from: email,
			to: process.env.USERME,
			subject: `message from ${name}`,
			text: `email from ${email} and this is the summary ${summary}`,
			// html: `
			// <h3>Informations<h3/>
			// <ul>
			// <li>Name: ${name}<li/>
			// <li>Email: ${email}<li/>
			// </ul>
			// <h3>Message</h3>
			// <p>${message}<p/>
			// `,
		});
	} catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};
module.exports = contactRoute;
