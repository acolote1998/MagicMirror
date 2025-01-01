document.addEventListener("DOMContentLoaded", function () {
  const fetchTripData = (apiEndpoint, elementId) => {
    fetch(apiEndpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const tripDiv = document.getElementById(elementId);
        tripDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
      })
      .catch((error) => {
        console.error(`Error fetching trip data from ${apiEndpoint}:`, error);
        document.getElementById(elementId).textContent =
          "Error fetching trip data: " + error.message;
      });
  };
});
