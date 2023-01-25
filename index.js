const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const contactRoute = require("./route/contactRoute");

app.use(express.json());
app.use(
	cors({
		origin: ["https://suzainclient.vercel.app/"],
	})
);

app.post("/contact", async (req, res) => {
	const { name, email, summary } = req.body;

	await contactRoute(email, summary, name);
	res.json({
		success: "Email sent to Suzain Imteyaz",
	});
});
if (process.env.NODE_ENV === "production") {
	
	app.get("*", (req, res) =>{
		console.log(`connected`);
	}
		
	);
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`server listing to port 5000 only`));
