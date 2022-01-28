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
      <div id='left'>
        <div id='markaL'><label id='text'>Marka: </label></div>
        <div id='modelL'><label id='text'>Model: </label></div>
        <div id='rokL'><label id='text'>Rok: </label></div>
        <div id='przebiegL'><label id='text'>Przebieg: </label></div>
        <div id='pojemnoscL'><label id='text'>Pojemność Silnika: </label></div>
        <div id='rodzajL'><label id='text'>Rodzaj Paliwa: </label></div>
        <div id='opisL'><label id='text'>Opis: </label></div>
      </div>
      <div id='right'>
        <div id='marka'>{Car.Marka}</div>
        <div id='model'>{Car.Model}</div>
        <div id='rok'>{Car.Rok}</div>
        <div id='przebieg'>{Car.Przebieg} km</div>
        <div id='pojemnosc'>{Car.Pojemnosc_Silnika} cm3</div>
        <div id='rodzaj'>{Car.Rodzaj_Paliwa}</div>
        <div id='opis'>{Car.Opis}</div>
      </div>
      <div id='right2'>
        <img src={Car.Zdjecie} id='zdjecie' width="400px" />
      </div>
    </div>
    ));

    return (
      <div>{EveryCar}</div>
    );
  }

}

//http://127.0.0.1:8000/modele/api/modeles/?format=json