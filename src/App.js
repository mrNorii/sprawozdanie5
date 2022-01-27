import React, {useState} from 'react';
import Axios from 'axios';
import "./App.css";

function App() {
  const [userCat, setJokeCat] = useState("");
  const [userSet, setJokeSet] = useState("");
  const [userDel, setJokeDelivery] = useState("");

  const stala = () => {
    Axios.get("http://127.0.0.1:8000/modele/api/modeles/?format=json")
    .then((response) => {
        console.log(response);
        /*setJokeCat(response.data.category)
        setJokeSet(response.data.setup)
        setJokeDelivery(response.data.delivery);*/
    }
  );
};
return (
  <div>
    Click Button <button onClick={stala}>Get Joke</button><br></br>
    <div id='Category'>
      {userCat}
    </div>
    <div id='Setup'>
      {userSet}
    </div>
    <div id='Delivery'>
      {userDel}
    </div>
  </div>
  );
}

export default App;
