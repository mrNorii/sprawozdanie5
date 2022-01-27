import React from 'react';
import "./App.css";

export default class App extends React.Component{
  state = {
    loading: true,
    Cars: []
  };

  async componentDidMount() {
    const url = "http://127.0.0.1:8000/modele/api/modeles/?format=json";
    const response = await fetch(url)
    const data = await response.json();
    this.setState({Cars: data, loading: false})
    
    console.log(data[0]);
  }


  render(){
  
  if(this.state.loading)
    return <div>loading...</div>

  if(!this.state.Cars.length)
    return <div>Didn't get a car!</div>

  const EveryCar = this.state.Cars.map(Car => (
    <div id='box' key={Car.id}>
      <div id='marka'>{Car.Marka}</div>
      <div id='model'>{Car.Model}</div>
      <div id='opis'>{Car.Opis}</div>
      <div id='pojemnosc'>{Car.Pojemnosc_Silnika}</div>
      <div id='przebieg'>{Car.Przebieg}</div>
      <div id='rodzaj'>{Car.Rodzaj_Paliwa}</div>
      <div id='rok'>{Car.Rok}</div> 
    </div>
    ));

    return (
      <div>{EveryCar}</div>
    );
  }

}

//http://127.0.0.1:8000/modele/api/modeles/?format=json