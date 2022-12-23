import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { useRef } from "react";
import "../style/Edit.css";
export const Edit = ({
  change2,
  changetext,
  final,
  setfinal,
  index,
  item,
  setchange,
}) => {
  const changealot = () => {
    const text2 = text.current.value;

    if (final.indexOf(item) == index) {
      final[index].sub = `${text2 ? `${text2}` : `s`}`;
      setfinal([...final]);
    }
    console.log(final);
    setchange(false);
    text.current.value = "";
  };
  const text = useRef();
  const class2 = change2 ? "bigman" : "";
  return (
    <div className={`${class2}`}>
      <div
        style={{ display: `${change2 == false ? "none" : "block"}` }}
        className="big2"
      >
        <Paper
          elevation={3}
          className="main2"
          sx={{ display: `${change2 == false ? "none" : "block"}` }}
        >
          <h2>changed your mind ?</h2>
          <div
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              className="text2"
              id="filled-basic"
              label="your new note"
              variant="filled"
              inputRef={text}
              sx={{ width: "90% " }}
            />
          </div>
          <div
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              style={{ display: "block" }}
              className="mybtn2"
              onClick={() => {
                changealot();
              }}
            >
              submit
            </button>
          </div>
        </Paper>
      </div>
    </div>
  );
};
