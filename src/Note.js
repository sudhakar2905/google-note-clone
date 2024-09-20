import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Note = (props) => {
  const deleteNote = () => {
    console.log("Delete function called for id:", props.id);
    console.log("deleteItem function:", props.deleteItem);
    props.deleteItem(props.id);
  };

  return (
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <button className="btn" onClick={deleteNote}>
          <DeleteOutlineIcon className="delete-icon" />
        </button>
      </div>
    </>
  );
};

export default Note;
