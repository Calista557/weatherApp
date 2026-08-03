const form = document.querySelector(".searchForm");
const cityInput = document.querySelector(".cityInput");
const cityText = document.querySelector(".cityName");
const tempText = document.querySelector(".temperature");
const descText = document.querySelector(".description");
const humidityText = document.querySelector(".humidityValue");
const windText = document.querySelector(".windValue");

const apiKey = "8c1453d27172f22f31bf30c0f63af0d8";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (city === "") {
    return;
  }
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const res = await axios.get(url);
    const data = res.data;

    const temp = data.main.temp;
    const cityName = data.name;
    const description = data.weather[0].description;

    const formattedDescription =
      description.charAt(0).toUpperCase() + description.slice(1);

    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    cityText.textContent = cityName;
    tempText.textContent = `${Math.round(temp)}°C`;
    descText.textContent = description;

    humidityText.textContent = `${humidity}%`;
    windText.textContent = `${windSpeed} m/s`;
  } catch (e) {
    console.log("City not found or network error");
  }
});
