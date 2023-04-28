import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [apiGenderizeFetch, setApiGenderizeFetch] = useState();
  const [name, setName] = useState("Martin");
  
  

  useEffect(() => {
    fetch(`https://api.genderize.io?name=${name}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        setApiGenderizeFetch(data);
      });
  }, [name]);

  

  const handleChange = (e) => {
    setName(e.target.value);
   
    
  }

  return (
    <div>
      <h1>Genderize + REACT</h1>
      <h2>Please enter your name</h2>
      <form>
        <input type="text" onChange={handleChange} />
      </form>
      {apiGenderizeFetch ? (
        <ul>
          <li>Name: {apiGenderizeFetch.name}</li>
          <li>Gender: {apiGenderizeFetch.gender}</li>
          <li>Reliability: {Math.floor(apiGenderizeFetch.probability * 100)}%</li>
        </ul>
      ) : (
        <p>No name yet</p>
      )}


    </div>
  );
}

export default App;
