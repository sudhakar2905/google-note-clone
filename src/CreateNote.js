import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputEvent=(event) => {
    const {name, value} = event.target
    setNote((prevData)=>{
      return{
        ...prevData,
        [name]: value,
      };
    });
  };
  const addEvent=() => {
    props.passNote(note);
    setNote({title: "", content: ""});

  }
  return (
    <>
      <div className="main_note">
        <form>
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={inputEvent}
            placeholder="Title"
            autoComplete="off"
          />
          <textarea 
            rows="" 
            column="" 
            name="content"
            value = {note.content}
            onChange={inputEvent}
            placeholder="Write a note here..." />
          <Button onClick={addEvent}>
            <AddIcon className="plus_sign" />
          </Button>
        </form>
      </div>
    </>
  );
};

export default CreateNote;
