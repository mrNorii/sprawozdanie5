import React, {useState} from 'react';
import Axios from 'axios';
import "./App.css";

function App() {
  const [user, setUser] = useState("");

  const stala = () => {
    Axios.get("https://v2.jokeapi.dev/joke/Any?safe-mode")
    .then((response) => {
        console.log(response);
        setUser(response.data.category + " | " + response.data.setup + " ... " + response.data.delivery);
    }
  );
};
return (
  <div>
    Click Button <button onClick={stala}>Get Joke</button><br></br>
    {user}
  </div>
  );
}

export default App;