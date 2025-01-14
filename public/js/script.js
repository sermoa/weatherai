async function getData() {
  try {
    const response = await fetch("/data?currentTime=" + new Date().toLocaleString());
    const data = await response.json();

    document.getElementById("location-info").textContent = `${data.city}, ${data.region}`;
    document.getElementById("weather-info").textContent = `${data.weather} (${data.temperature}°C)`;
    document.getElementById("image-prompt").textContent = data.imagePrompt;
    document.getElementById("image-display").innerHTML = `<img src="${data.image}" alt="${data.imagePrompt}">`;
  } catch (error) {
    console.error("Error:", error);
  }
}

// Fetch data periodially
getData();
setInterval(getData, 60 * 60 * 1000);
