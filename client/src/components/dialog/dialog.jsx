import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios, { Axios } from "axios";

export default function FormDialog(props) {
  const [editValues, setEdiValues] = useState({
    id: props.id,
    name: props.name,
    cost: props.cost,
    category: props.category,
  });

  const handleEditgame = () => {
    axios.put("http://localhost:3001/edit", {
      id: editValues.id,
      name: editValues.name,
      cost: editValues.cost, 
      category: editValues.category
    });

    handleClose()
  };

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleDeleteGames = () => {
    axios.delete(`http://localhost:3001/delete/${editValues.id}`, () => {
      alert('Jogo Deletado')
    })
    handleClose()
  }

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleChangeValues = (value) => {
    setEdiValues((prevValues) => ({
      ...prevValues,
      [value.target.id]: value.target.value,
    }));
  };

  return (
    <Dialog open={props.open} onClose={handleClose}>
      <DialogTitle id="form-dialog-title">Editar</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Game Name"
          type="text"
          fullWidth
          defaultValue={props.name}
          onChange={handleChangeValues}
          variant="standard"
        />

        <TextField
          autoFocus
          margin="dense"
          id="cost"
          defaultValue={props.cost}
          label="cost game"
          type="text"
          onChange={handleChangeValues}
          fullWidth
          variant="standard"
        />

        <TextField
          autoFocus
          margin="dense"
          id="category"
          defaultValue={props.category}
          label="Category name"
          type="text"
          onChange={handleChangeValues}
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDeleteGames}>Excluir</Button>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleEditgame}>Salvar</Button>
      </DialogActions>
    </Dialog>
  );
}
