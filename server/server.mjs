import fetch from "node-fetch"; // Import node-fetch
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { Buffer } from "buffer"; // Import buffer to handle base64 encoding

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 3000;

function chooseApiKey() {
  const apiKeys = ["", "", ""];

  // Return a random API key from the array
  const randomIndex = Math.floor(Math.random() * apiKeys.length);
  console.log("Key: ", apiKeys[randomIndex]);
  return apiKeys[randomIndex];
}

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "../public")));

// Basic auth credentials for Meteomatics API
const username = "personal_acevedo_manuel"; // Replace with your actual username
const password = ""; // Replace with your actual password

// Encode credentials in base64
const auth =
  "Basic " + Buffer.from(`${username}:${password}`).toString("base64");

// Proxy API requests to Trip of Bus 540 towards Universitetet to SL API
app.get("/api/trip540universitetet", async (req, res) => {
  const apiUrl540universitetet =
    "https://journeyplanner.integration.sl.se/v1/TravelplannerV3_1/trip.json?key=" +
    chooseApiKey() +
    "&lang=en&originExtId=300103491&originCoordLat=59.382827621206914&originCoordLong=17.9836075814318&destExtId=300109203&destCoordLat=59.36575987476077&destCoordLong=18.05453555656101&numF=6&via=300101178&Products=8";

  try {
    const response = await fetch(apiUrl540universitetet);
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

// Proxy API requests to Trip of Bus 505 towards Bagatorps Sodra to SL API
app.get("/api/trip505bagatorpssodra", async (req, res) => {
  const apiUrl505bagatorpssodra =
    "https://journeyplanner.integration.sl.se/v1/TravelplannerV3_1/trip.json?key=" +
    chooseApiKey() +
    "&lang=en&originExtId=300103491&originCoordLat=59.382827621206914&originCoordLong=17.9836075814318&destExtId=300109957&destCoordLat=59.37755941536501&destCoordLong=17.998952370654642&numF=6&via=300103442&Products=8";

  try {
    const response = await fetch(apiUrl505bagatorpssodra);
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

// Proxy API requests to Trip of Bus 505 towards Solna Centrum to SL API
app.get("/api/trip505solnacentrum", async (req, res) => {
  const apiUrl505solnacentrum =
    "https://journeyplanner.integration.sl.se/v1/TravelplannerV3_1/trip.json?key=" +
    chooseApiKey() +
    "&lang=en&originExtId=300103491&originCoordLat=59.382827621206914&originCoordLong=17.9836075814318&destExtId=300109305&destCoordLat=59.35841634521147&destCoordLong=17.997707861727083&numF=6&via=300103466&Products=8";

  try {
    const response = await fetch(apiUrl505solnacentrum);
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

// Proxy API requests to Trip of Bus 540 towards Tensa Centrum to SL API
app.get("/api/trip540tenstacentrum", async (req, res) => {
  const apiUrl540tenstacentrum =
    "https://journeyplanner.integration.sl.se/v1/TravelplannerV3_1/trip.json?key=" +
    chooseApiKey() +
    "&lang=en&originExtId=300103491&originCoordLat=59.382827621206914&originCoordLong=17.9836075814318&destExtId=300103786&destCoordLat=59.39469788966184&destCoordLong=17.906993970625578&numF=6&via=300103788&Products=8";

  try {
    const response = await fetch(apiUrl540tenstacentrum);
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

// Proxy API requests to Trip of Train towards T-C from Ulriksdal to SL API
app.get("/api/trippendeltoStockholmCity", async (req, res) => {
  const apiUrlpendeltoStockholmCity =
    "https://journeyplanner.integration.sl.se/v1/TravelplannerV3_1/trip.json?key=" +
    chooseApiKey() +
    "&lang=en&originExtId=300109508&originCoordLat=59.380694229483524&originCoordLong=18.000516415866276&destExtId=300101080&destCoordLat=59.33115858206812&destCoordLong=18.059402305922088&numF=6&Products=1";

  try {
    const response = await fetch(apiUrlpendeltoStockholmCity);
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

// Proxy API requests to Trip of Train towards Häggvik from Ulriksdal to SL API
app.get("/api/trippendeltoHaggvik", async (req, res) => {
  const apiUrlpendeltoHaggvik =
    "https://journeyplanner.integration.sl.se/v1/TravelplannerV3_1/trip.json?key=" +
    chooseApiKey() +
    "&lang=en&originExtId=300109508&originCoordLat=59.380694229483524&originCoordLong=18.000516415866276&destExtId=300109505&destCoordLat=59.44404429793658&destCoordLong=17.932662407671838&numF=6&Products=1";

  try {
    const response = await fetch(apiUrlpendeltoHaggvik);
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

// Proxy API requests to Trip of Tunnelbanna towards T-Centralen from Hallonbergen to SL API
app.get("/api/triptbtc", async (req, res) => {
  const apiUrltbtc =
    "https://journeyplanner.integration.sl.se/v1/TravelplannerV3_1/trip.json?key=" +
    chooseApiKey() +
    "&lang=en&originExtId=300109303&originCoordLat=59.375354132066605&originCoordLong=17.969118517590957&destExtId=300109001&destCoordLat=59.33108667461729&destCoordLong=18.05957403812906&numF=6&Products=2";

  try {
    const response = await fetch(apiUrltbtc);
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

// Proxy API requests to Trip of Tunnelbanna towards Akalla from Hallonbergen to SL API
app.get("/api/triptbakalla", async (req, res) => {
  const apiUrltbakalla =
    "https://journeyplanner.integration.sl.se/v1/TravelplannerV3_1/trip.json?key=" +
    chooseApiKey() +
    "&lang=en&originExtId=300109303&originCoordLat=59.375354132066605&originCoordLong=17.969118517590957&destExtId=300109300&destCoordLat=59.413819193724414&destCoordLong=17.91737977637064&numF=6&Products=2";

  try {
    const response = await fetch(apiUrltbakalla);
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

// Proxy API requests Temperature of Stockholm
app.get("/api/temperaturestockholm", async (req, res) => {
  const apiUrltemperaturestockholm =
    "https://api.meteomatics.com/" +
    getCurrentDateTime() +
    ".000+02:00/t_2m:C/59.3251172,18.0710935/json?model=mix";

  try {
    const response = await fetch(apiUrltemperaturestockholm, {
      headers: {
        Authorization: auth,
      },
    });

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

function getCurrentDateTime() {
  const now = new Date();

  // Get year, month, day, hours, minutes, and seconds
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // Format the date and time
  const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;

  return String(formattedDateTime);
}

// Start the server
app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});
