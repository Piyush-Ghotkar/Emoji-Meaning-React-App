import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const emojiDict = {
    "😊": "Smiling",
    "😂": "Laughing",
    "😅": "Grining",
    "😍": "Love-eyes",
    "😘": "Blow-kiss",
    "🤗": "Huging"
  };

  var emojis = Object.keys(emojiDict);
  const [emojiMeaning, setEmojiMeaning] = useState(" ");

  function onChangeHandler(event) {
    var currEmoji = event.target.value;
    var currMeaning = emojiDict[currEmoji];
    if (currMeaning == undefined) {
      currMeaning = "Can't recognize this!";
    }
    setUserState(currMeaning);
  }

  function onClickHandler(currEmoji) {
    var currMeaning = emojiDict[currEmoji];
    setUserState(currMeaning);
  }

  function setUserState(currMeaning) {
    setEmojiMeaning(currMeaning);
  }

  return (
    <div className="App">
      <h1>Emoji Meaning</h1>

      <input placeholder="Enter emoji" onChange={onChangeHandler} />

      <div className="display">{emojiMeaning}</div>

      <h3>Emojis we know</h3>
      <div className="list">
        {emojis.map(function printItem(item) {
          return (
            <span className="item" onClick={() => onClickHandler(item)}>
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
