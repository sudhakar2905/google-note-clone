import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = (props) => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });
  };

  const onDelete = (id) => {
    setAddItem((oldData) => {
      return oldData.filter((currData, index) => {
        return index !== id; // to delete the item with the matching index
      });
    });
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete} // Ensure deleteItem is passed correctly
          />
        );
      })}
      <Footer />
    </>
  );
};

export default App;
