import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import Weather from './Weather';
const API_KEY="ba562c947153b5ac8f3a5bc372a07431";
export default class App extends React.Component{
  state = {
    isLoaded: false,
    error:null,
    temperature:null,
    name:null,
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
        // isLoaded:true
        this._getWeather(position.coords.latitude, position.coords.longitude)
      },
        error=>{
          this.setState({
            error:error
          });
        }
    );
}
    _getWeather=(lat,long)=>{
      fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`)
          .then(reponse=>reponse.json()).then(json=>{
            console.log(json);
            this.setState({
              temperature: json.main.temp,
              name: json.weather[0].main,
              city:json.name,
              isLoaded:true
            });
      })

  }

  render() {
    const {isLoaded,error,temperature,name,city} = this.state;
    return (
        <View style={styles.container}>
          <StatusBar hidden={true}/>
          {isLoaded ? (
              <Weather temp={Math.floor(temperature-273.15)} name={name} city={city} />
              ) : (
                  <View style={styles.loading}>
                    <Text style={styles.loadingText}>Get the fucking weather</Text>
                    {error ? <Text style={styles.errorText}>{error}</Text>:null}
                  </View>
          )}
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    },
  errorText:{
    color:"red",
    backgroundColor:'transparent',
    marginBottom: 40
  },
  loading:{
    flex:1,
    backgroundColor: '#fdf6aa',
    justifyContent:'flex-end',
    paddingLeft:25
  },
  loadingText:{
    fontSize:30,
    marginBottom:100
  }
});
