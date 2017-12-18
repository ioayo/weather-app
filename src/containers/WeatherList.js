import React, { Component } from 'react';

import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humitidies = cityData.list.map(weather => weather.main.humidity);
		return(
			<tr key={name} >
				<td>{name}</td>
				<td>
					<Chart data={temps} color={"red"}/>
				</td>
				<td>
					<Chart data={pressures} color={"orange"} />
				</td>
				<td>
					<Chart data={humitidies} color={"blue"} />
				</td>
			</tr>
		)
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th width={"10%"}>City</th>
						<th width={"30%"}>Temperature</th>
						<th width={"30%"}>Pressure</th>
						<th width={"30%"}>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{ this.props.weather.map(this.renderWeather) }
				</tbody>
			</table>
		)
	}
}

function mapStateToProps({ weather }) {
	return {
		weather
	}
}

export default connect(mapStateToProps)(WeatherList);