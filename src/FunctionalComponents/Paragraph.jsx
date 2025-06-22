import React, { useState } from "react";
//import mystyle from "../Assests/Css/component.module.css"
function Paragraph() {
  const [paragraphs, setParagraphs] = useState([]);
  const [counter, setCounter] = useState(1);

  // Function to create a paragraph
  function create() {
    setParagraphs(paragraphs.concat({ id: "p" + counter, text: "Nice, you triggered this alert message!  " +"success--" + counter }));
    setCounter(counter + 1);
  }

  // Function to delete a paragraph
  function deleteItem(id) {
    setParagraphs(paragraphs.filter(function (p) {
      return p.id !== id;
    }));
  }

  return (
    <div className="center">
      <button onClick={create}>Show Live Alert</button>
      <div className="second">
        {paragraphs.map(function (p) {
          return (
            <p key={p.id} id={p.id}>
              {p.text}
              <i className="fa fa-close icon" onClick={function () { deleteItem(p.id); }}></i>
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Paragraph;
