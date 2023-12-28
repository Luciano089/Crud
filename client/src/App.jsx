import "../src/App.css";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Card from "./components/cards/card";


function App() {
  const [values, setValues] = useState();
  const [listGames, setListGames] = useState();
  // console.log(listGames);

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    axios
      .post("http://localhost:3001/register", {
        name: values.name,
        cost: values.cost,
        category: values.category,
      })
      .then((response) => {
        console.log(response);
      });
  };

  useEffect(() => {
    axios.get("http://localhost:3001/getCard").then((response) => {
      setListGames(response.data);
    });
  }, []);

  return (
    <div className="app_container">
      <div className="register_container">
        <h1>UEPA</h1>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          className="register_input"
          onChange={handleChangeValues}
        />
        <input
          type="text"
          name="cost"
          placeholder="Preço"
          className="register_input"
          onChange={handleChangeValues}
        />
        <input
          type="text"
          name="category"
          placeholder="Categoria"
          className="register_input"
          onChange={handleChangeValues}
        />

        <button className="register_button" onClick={() => handleClickButton()}>
          Cadastrar
        </button>
      </div>

      {typeof listGames !== "undefined" &&
        listGames.map((value) => {
          return (
            <Card
              key={value.id}
              ListCard={listGames}
              setListCard={setListGames}
              id={value.idgames}
              name={value.name}
              cost={value.cost}
              category={value.category}
            >
             
            </Card>
          );
        })}
    </div>
  );
}

export default App;
