const express = require("express");
const fetch = require("node-fetch"); // Import node-fetch
const path = require("path");
const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "../public")));

// Proxy API requests to SL API
app.get("/api/trip", async (req, res) => {
  const apiUrl =
    "https://journeyplanner.integration.sl.se/v1/TravelplannerV3_1/trip.json?key=&lang=en&originExtId=300103491&originCoordLat=59.382827621206914&originCoordLong=17.9836075814318&destExtId=300103470&destCoordLat=59.382112482752&destCoordLong=17.977933372485207&numF=1";

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    res.setHeader("Content-Type", "application/json");
    res.send(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error fetching data");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});
