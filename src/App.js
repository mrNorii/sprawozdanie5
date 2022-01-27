import React from 'react';
import "./App.css";

export default class App extends React.Component{
  state = {
    loading: true,
  };

  async componentDidMount() {
    const url = "http://127.0.0.1:8000/modele/api/modeles/?format=json";
    const response = await fetch(url)
    const data = await response.json();
    this.setState({Car: data[0], loading: false})
    
    console.log(data[0]);
  }


  render(){
  
  if(this.state.loading)
    return <div>loading...</div>

  if(!this.state.Car)
    return <div>Didn't get a car!</div>

    return (
      <div>
        <div>{this.state.Car.Marka}</div>
        <div>{this.state.Car.Model}</div>
        <div>{this.state.Car.Opis}</div>
        <div>{this.state.Car.Pojemnosc_Silnika}</div>
        <div>{this.state.Car.Przebieg}</div>
        <div>{this.state.Car.Rodzaj_Paliwa}</div>
        <div>{this.state.Car.Rok}</div>  
      </div>
    )
  }

}



//setCar(response.data[0].Marka + " " + response.data[0].Model + " " + response.data[0].Opis + " " + response.data[0].Pojemnosc_Silnika + " "
//+ response.data[0].Przebieg + " " + response.data[0].Rodzaj_Paliwa + " " + response.data[0].Rok)
//http://127.0.0.1:8000/modele/api/modeles/?format=json