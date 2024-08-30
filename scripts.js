function searchByCityName() {
    const cityName = document.getElementById('cityName').value;
    if (cityName.trim() === '') {
      alert('Please enter a city name.');
      return;
    }
  
    fetchWeatherData(cityName);
  }
  
  function fetchWeatherData(city) {
    const apiUrl = `https://weatherapi-com.p.rapidapi.com/current.json?q=${encodeURIComponent(city)}`;
  
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'ff529987e1msh5e81800113c4cb1p112edbjsn28bbc5a9a6ee', // Replace with your actual API key
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data && data.current) {
        updateWeatherDisplay(data);
      } else {
        alert('Weather data not found for the given city.');
      }
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      alert('Failed to fetch weather data. Please try again.');
    });
  }
  
  function updateWeatherDisplay(data) {
    document.getElementById('weather-city-name').textContent = data.location.name;
    document.getElementById('location-name').textContent = data.location.name;
    document.getElementById('local-time').textContent = data.location.localtime;
    document.getElementById('temp-c').textContent = data.current.temp_c;
    document.getElementById('temp-f').textContent = data.current.temp_f;
    document.getElementById('feels-like-c').textContent = data.current.feelslike_c;
    document.getElementById('feels-like-f').textContent = data.current.feelslike_f;
    document.getElementById('wind').textContent = data.current.wind_kph;
    document.getElementById('humidity').textContent = data.current.humidity;
    document.getElementById('pressure').textContent = data.current.pressure_mb;
  }
  