import React from "react";
import "./card.css";
import FormDialog from "../dialog/dialog";

export default function card(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickCard = () => {
    setOpen(true)
  }

  return (
    <>
    <FormDialog 
      open={open}
      setOpen={setOpen}
      name={props.name} 
      cost={props.cost} 
      category={props.category} 
      listCard={props.listCard}
      id={props.id}
      setListCard={props.setListCard} />

      <div className="card-container" onClick={() => {
        handleClickCard()
      }}>
        <h1 className="card-title">{props.name}</h1>
        <p className="card-cost">Preço: {props.cost}R$</p>
        <p className="card-category">Categoria: {props.category}</p>
      </div>
    </>
  );
}
