import React from "react";
import { useState } from "react";

export const InputForm = ({ taskList, setTaskList }) => {
  const [inputText, setInputText] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (inputText === "") {
      return;
    }

    /* タスクを追加する。 */
    setTaskList([
      //以前のtaskListの情報を保持しながら第二引数の情報を追加する(スプレット構文)
      ...taskList,
      {
        id: taskList.length, //idを持たせる
        text: inputText,
        completed: false,
      },
    ]);
    // console.log(taskList);
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  };

  return (
    <div className="inputForm">
      <form onSubmit={addTask}>
        <input type="text" onChange={handleChange} value={inputText} />
        <button onClick={addTask}>
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
    </div>
  );
};
