import React, { useState } from 'react';
import axios from 'axios';


function App() {


  const [data, setData] = useState({});
  const [kaupunki, setKaupunki] = useState('');
  const [cels, setCels] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${kaupunki}&appid=6671217914dc1325bbc0ef6addde7055`;



  const fetchKaupunki = () => {
   
      axios.get(url)
        .then(res => {
          setData(res.data);
          console.log(res.data);
          setKaupunki('');
        })
    }
  
  

  return (
    <div>
      <h1>Weather App</h1>
      
      <input
       value={kaupunki}
      onChange={e => setKaupunki(e.target.value) } />
      <button type='submit' onClick={fetchKaupunki}>Hae</button>

      <div>
        <h2>Weather in {data.weather.main}</h2>
        {data.weather && <p> Weather: {data.weather[0].main}</p>}
        {data.main && <p>Temperature: {data.main.temp}</p>}
        {data.main && <p>Humidity: {data.main.humidity}</p> }
    

      </div>
      </div>

      
  );
}

export default App;
