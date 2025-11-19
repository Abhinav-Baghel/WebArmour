const express = require("express");
const cors = require("cors");
const { scanWebsite } = require("./scanner");

const app = express();
const port = process.env.PORT || 5000;

// allow your frontend + localhost
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://web-armour.vercel.app",
    ],
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("WebArmour backend is running ✅");
});

app.post("/scan", async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).send({ error: "URL is required" });
  }

  try {
    const report = await scanWebsite(url);
    return res.json(report);
  } catch (error) {
    console.error("Error during scanning:", error);
    return res.status(500).send({ error: "Something went wrong" });
  }
}); 

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
