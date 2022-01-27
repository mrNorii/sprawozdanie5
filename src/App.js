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

    return (
      <div>
        {this.state.Cars.map(Car => (
          <div>
            <div>{Car.Marka}</div>
            <div>{Car.Model}</div>
            <div>{Car.Opis}</div>
            <div>{Car.Pojemnosc_Silnika}</div>
            <div>{Car.Przebieg}</div>
            <div>{Car.Rodzaj_Paliwa}</div>
            <div>{Car.Rok}</div> 
          </div>
        ))}
      </div>
    );
  }

}



//setCar(response.data[0].Marka + " " + response.data[0].Model + " " + response.data[0].Opis + " " + response.data[0].Pojemnosc_Silnika + " "
//+ response.data[0].Przebieg + " " + response.data[0].Rodzaj_Paliwa + " " + response.data[0].Rok)
//http://127.0.0.1:8000/modele/api/modeles/?format=json