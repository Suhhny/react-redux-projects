import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

    renderWeather = (cityData) => {

        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        return(
            <tr key = {name}>
                <td>{name}</td>
                <td><Chart data={temps} color="red" units="K"/></td>
                <td><Chart data={pressures} color="blue" units="hPa"/></td>
                <td><Chart data={humidities} color="orange" units="%"/></td>
            </tr>
        );
    }


    render(){
        return(
            <table className = "table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead> 
                <tbody>
                    {/* need data -> need mapStateToProps */}
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };   // == {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);


// 글로벌창업실습
// 창조성과혁신창업