
const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

app.post("/send", async (req, res) => {
    const student = {
        name: "manu",
        course: "bca",
        marks: 85
    };

    try {
        const response = await axios.post(
            "https://manu001.app.n8n.cloud/webhook-test/student",
            student
        );

        console.log("Response from n8n:", response.data);

        res.json({
            message: "Data sent successfully",
            n8nResponse: response.data
        });

    } catch (error) {
        console.log(error.message);

        res.status(500).json({
            message: "Failed to send data"
        });
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
