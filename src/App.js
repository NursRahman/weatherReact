import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Bishkek");
  const handleChange = (event) => {
    setCity(event.target.value);
  };
  const handleClick = (event) => {
    event.preventDefault();
    getData();
  };

  const getData = () => {
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=13de15fabf777c2d7b5d8876b23eab1e"
    )
      .then((response) => response.json())
      .then((datas) => setWeatherData(datas));
  };

  useEffect(getData, []);

  return (
    <div className="container mx-auto max-w-md p-8">
      <div className="App">
        <h1 className="text-3xl font-bold">Weather</h1>

        <form className="p-4">
          <label
            form="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  //stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="message"
              name="message"
              onChange={handleChange}
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter city"
              required
            />
            <button
              onClick={handleClick}
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
        <div className="p-4">
          {weatherData && (
            <div className="flex flex-col items-center justify-center bg-blue-300 rounded-lg p-4">
              <h1 className="text-2xl font-bold mb-2">{weatherData.name}</h1>
              <p className="text-lg">{weatherData.weather[0].description}</p>
              <p className="text-4xl font-bold mt-4">
                {Math.round(weatherData.main.temp - 273.15)}°C
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
