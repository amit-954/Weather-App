import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({});

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
		<div  style={{ textAlign: "center"}}>
			<h1 style={{ fontFamily: "Roboto" }}>Weather App</h1>
			<SearchBox updateInfo={updateInfo} />
			{Object.keys(weatherInfo).length > 0 ? (
                <InfoBox info={weatherInfo} />
            ) : (
                <div></div>
            )}

			{/* <InfoBox /> */}
		</div>
	);
}
