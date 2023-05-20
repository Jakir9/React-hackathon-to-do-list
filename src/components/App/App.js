import React, { useState } from "react";
import "./App.css";
import Input from "../Input";
import List from "../List";
import AddButton from "../AddButton";
import DeleteButton from "../DeleteButton";
//import all components need to display the app i.e: List function, Input, addbutton, deletebutton
function App() {
  const [text, setText] = useState(""); //text will contain userInput into the todo list and setText sets the value in text
  const [listArray, setListArray] = useState([]); //we make an array to store the list items and initialisen it to an empty array as no items will be in the array to start off with

  function handleChange(event) {
    //this handle change is similiar to an event listener in JS, it listens for any change in the input box
    setText(event.target.value); //reads the text inputted and sets text = to it
  }

  function handleClick() {
    //when add button is clicked it adds the text to the list
    const newItem = { id: listArray.length + 1, text: text }; //assigns a id to the new item, so we can keep track of it
    setListArray([...listArray, newItem]); //adds the new item to the list
    setText(""); //clears the input box
  }

  function handleDelete(id) {
    //we pass the id of the item to handleqDelete
    const updatedList = listArray.filter((item) => item.id !== id); //we filter the listArray and return a new array with all the items that doesn't have the id we passed in
    setListArray(updatedList); //set the list array equal to the updatedList (doesnt contain the removed item now)
  }

  function handleDeleteAll() {
    //when this function is called we set the arrayList to an empty array, this clears the list
    setListArray([]);
  }

  //we cycle through every item in the listArray and return a list item with the delete button next to each item  button.
  const listItems = listArray.map((item) => (
    <li key={item.id}>
      {item.text}
      <DeleteButton handleDelete={() => handleDelete(item.id)} />
    </li>
  ));

  return (
    <div //styling for  app
      className="App"
      style={{
        backgroundColor: "#BADBF2",
        color: "#FFB2E6",
        fontWeight: "bold",
        padding: "60px",
        textAlign: "center",
        display: "inline-block",
        fontSize: "20px",
        marginTop: "80px",
        marginBottom: "auto",
        marginRight: "80px",
        marginLeft: "80px",
        borderRadius: "80px",
        columnWidth: "90px",
        columnLength: "auto",
      }}
    >
      <h1>To Do List </h1>

      <Input text={text} handleChange={handleChange} />
      <AddButton handleClick={handleClick} />
      <List func={listItems} />

      {listItems.length > 0 && ( //if the list is not empty we display the delete all button, otherwise it does show (conditonal rendering)
        <button onClick={handleDeleteAll}>Delete All</button>
      )}
    </div>
  );
}

export default App;
