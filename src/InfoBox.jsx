import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { TbTemperatureCelsius } from "react-icons/tb";

import "./InfoBox.css";

export default function InfoBox({ info }) {
	return (
		<div className="infoBox">
			<div className="cardContainer">
				{info ? (
					<Card
						variant="outlined"
						style={{ width: "280px", marginBottom: "20px" }}>
						<CardContent>
							<div>
								<LiaTemperatureHighSolid
									style={{
										fontSize: "80px",
										marginRight: "0.5rem",
									}}
								/>
							</div>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									marginBottom: "10px",
								}}>
								<div
									className="temp-font"
									style={{
										fontFamily: "JetBrains Mono",
										fontWeight: "bold",
										fontSize: "40px",
									}}>
									{Math.round(info.temp)}
								</div>
								<div>
									<TbTemperatureCelsius
										style={{ fontSize: "50px" }}
									/>
								</div>
							</div>
							<Typography
								style={{
									fontSize: "30px",
								}}>
								<span>{info.weather}</span>
							</Typography>
							<hr />
							<Typography
								gutterBottom
								variant="h5"
								component="div"
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									marginBottom: "10px",
								}}>
								<span style={{ marginRight: "0.5rem" }}>
									{info.city}
								</span>{" "}
								{info.humidity > 80 ? (
									<ThunderstormIcon />
								) : info.temp > 15 ? (
									<WbSunnyIcon />
								) : (
									<AcUnitIcon />
								)}
							</Typography>
							<Typography
								variant="body2"
								color="text.secondary"
								component={"span"}
								style={{ textAlign: "left" }}>
								<Box ml={7}>
									{" "}
									
									<div>
										Feels Like = {info.feelsLike}&deg;C
									</div>
									<div>Humidity = {info.humidity}%</div>
									<div>Min Temp = {info.tempMin}&deg;C</div>
									<div>Max Temp = {info.tempMax}&deg;C</div>
								</Box>
							</Typography>
						</CardContent>
					</Card>
				) : (
					<div>No information available</div>
				)}
			</div>
		</div>
	);
}
