import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MyLocationIcon from "@mui/icons-material/MyLocation";

import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
	const [city, setCity] = useState("");
	const [error, setError] = useState("");

	const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
	const API_KEY = import.meta.env.VITE_WEATHER_API_KEY; 


	const getWeatherInfo = async () => {
		try {
			const response = await fetch(
				`${API_URL}q=${city}&appid=${API_KEY}&units=metric`,
			);

			if (!response.ok) {
				throw new Error("City not found");
			}

			const jsonResponse = await response.json();

			const result = {
				city: city,
				temp: jsonResponse.main.temp,
				tempMin: jsonResponse.main.temp_min,
				tempMax: jsonResponse.main.temp_max,
				humidity: jsonResponse.main.humidity,
				feelsLike: jsonResponse.main.feels_like,
				weather: jsonResponse.weather[0].description,
			};
			return result;
		} catch (err) {
			throw err;
		}
	};

	const handleChange = (event) => {
		setCity(event.target.value);
		setError("");
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (city.trim() === "") {
			setError("City cannot be empty");
			return;
		}
		try {
			const newInfo = await getWeatherInfo();
			setCity(""); //
			updateInfo(newInfo);
		} catch (err) {
			setError("No such place exists!");
		}
	};

	return (
		<div className="searchBox">
			<form onSubmit={handleSubmit}>
				<TextField
					id="city"
					label="City Name"
					variant="outlined"
					value={city}
					onChange={handleChange}
					size="small"
					style={{ width: "280px" }}
					error={!!error}
					helperText={error}
				/>
				<br />
				<br />
				<Button
					variant="contained"
					type="submit"
					startIcon={<MyLocationIcon />}
				>
					Search
				</Button>
			</form>
		</div>
	);
}
