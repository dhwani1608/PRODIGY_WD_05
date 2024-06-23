const apiKey = '593980fbbfbfa6309229be2dbe6f8196';

const locationInput = document.querySelector("#input_search");
const search_btn = document.querySelector("#search-btn");
const city = document.getElementById("city");
const temp = document.getElementById("temp");

search_btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    const location = locationInput.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    let temp_celsius = data["main"]["temp"];
    let description = data["weather"][0]["main"];
    for(i in data){
        if(location){
            city.innerText = data["name"];
            temp.innerText = Math.round(temp_celsius-273.15);
            document.getElementById("humidity-level").innerText = `${data["main"]["humidity"]} %`;
            document.getElementById("wind-speed").innerText = `${data["wind"]["speed"]} km/h`;
            const icon1 = document.createElement("i");
            if(description === "Rain"){
                const icon = document.getElementById("weather-icon");
                createIcon(icon, icon1);
                icon1.className = "fa-solid fa-cloud-showers-heavy fa-10x";
            }
            else if(description === "Smoke"){
                const icon = document.getElementById("weather-icon");
                createIcon(icon, icon1);
                icon1.className = "fa-solid fa-smog fa-10x";
            }
            else if(description === "Clear"){
                const icon = document.getElementById("weather-icon");
                createIcon(icon, icon1);
                icon1.className = "fa-regular fa-sun fa-10x";
            }
            else if(description === "Clouds"){
                const icon = document.getElementById("weather-icon");
                createIcon(icon, icon1);
                icon1.className = "fa-solid fa-cloud-sun fa-10x";
            }
            else if(description === "Snow"){
                const icon = document.getElementById("weather-icon");
                createIcon(icon, icon1);
                icon1.className = "fa-regular fa-snowflake";
            }
        }
    }
})

function createIcon(icon, icon1){
    icon1.id = "weather-icon";
    icon.replaceWith(icon1);
}