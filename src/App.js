import React, {useState} from 'react';
import Axios from 'axios';
import "./App.css";

function App() {
  const [car, setCar] = useState("");

  const stala = () => {
    Axios.get("http://127.0.0.1:8000/modele/api/modeles/?format=json")
    .then((response) => {
        console.log(response);
        setCar(response.data[0].Marka + " " + response.data[0].Model + " " + response.data[0].Opis + " " + response.data[0].Pojemnosc_Silnika + " "
        + response.data[0].Przebieg + " " + response.data[0].Rodzaj_Paliwa + " " + response.data[0].Rok)
    }
  );
};
return (
  <div>
    View Cars <button onClick={stala}>PRIVIET</button><br></br>
    <div id='Category'>
      {car}
    </div>
  </div>
  );
}

export default App;

//setCar(response.data[0].Marka + " " + response.data[0].Model + " " + response.data[0].Opis + " " + response.data[0].Pojemnosc_Silnika + " "
//+ response.data[0].Przebieg + " " + response.data[0].Rodzaj_Paliwa + " " + response.data[0].Rok)