apiKey = 'API_KEY';
const description = document.getElementsByClassName("description")[0];
const temp = document.getElementsByClassName("temperature")[0];
const local = document.getElementsByClassName("local")[0];
const submit = document.getElementById("submit");
const search = document.getElementById("search");

submit.addEventListener("click", () => {
    getWeather(search.value);
});




function getWeather(location) {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Nao foi possível obter os dados do tempo');
            }
            return response.json();
        })
        .then(data => {
            let lon = data[0]['lon'].toFixed(2);
            let lat = data[0]['lat'].toFixed(2);
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Não foi possível obter os dados do tempo');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    local.textContent = data['name'];
                    description.textContent = capitalizeFirstLetter(data['weather'][0]['description']);
                    temp.textContent = `${(data['main']['temp'] - 273.15).toFixed()}°C`;
                })
                .catch(error => {
                    console.error('Erro:', error);
                });

        })
        .catch(error => {
            console.error('Error:', error);
        });
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
