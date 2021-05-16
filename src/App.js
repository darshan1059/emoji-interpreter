import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "Disbelief",
  "😔": "Sad",
  "🥡": "Takeout box",
  "❤️": "Love",
  "😑": "Annoyance",
  "😪": "Sleepy",
  "😵": "Dizzy",
  "😕": "Confused",
  "😗": "Kissing"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    //console.log(event.target.value);
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    console.log(emoji);
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <nav>
        <h1>Emoji Interpreter</h1>
      </nav>

      <h2> Put your emoji below 👇</h2>
      <input onChange={emojiInputHandler}></input>
      <h2> Meaning 👉 {meaning} </h2>

      <h3> Emojis we know </h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            //if you want to pass something from the list
            style={{
              fontSize: "2rem",
              padding: "0.5rem",
              marginLeft: "2rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}

      <footer>
        <div style={{ fontSize: "x-large", padding: "1rem" }}>About</div>
        <p>
          Do you know the meaning of every emoji that you use in day to day
          life? Checkout the meaning of commonly used emoji with the help of
          emoji interpreter..!!
        </p>
      </footer>
    </div>
  );
}
