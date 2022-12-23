import React, { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../style/Input.css";
import { Edit } from "./Edit";
import { MakeNotes } from "./MakeNotes";
export const Input = () => {
  const [try1, settry] = useState("");
  const [note, setnote] = useState([]);
  const [try2, settry2] = useState("");
  const [note2, setnote2] = useState([]);
  const [final, setfinal] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [change, setchange] = useState(false);
  const [text, settext] = useState();
  const [index, setindex] = useState();
  const [item, setitem] = useState();
  const [hide, sethide] = useState(false);
  const newindex = (index, item) => {
    setindex(index);
  };
  const newitem = (item) => {
    setitem(item);
  };
  console.log(change);
  const changing = (new2) => {
    setchange(new2);
  };
  const changetext = (text) => {
    settext(text);
  };
  const bye = () => {
    sethide(true);
  };
  const back = () => {
    sethide(false);
  };
  let xax = "";
  if (isLoading == false) {
    xax = "";
  } else {
    xax = "dis";
  }

  return (
    <Fragment>
      <Edit
        change2={change}
        setchange={setchange}
        changetext={changetext}
        setfinal={setfinal}
        final={final}
        index={index}
        item={item}
      ></Edit>

      <MakeNotes
        newindex={newindex}
        newitem={newitem}
        setfinal={setfinal}
        final={final}
        main={note}
        sub={note2}
        changing={changing}
        text={text}
      ></MakeNotes>
      <button
        className={`button-6${hide ? "" : "-bye"}`}
        style={{ display: "fixed" }}
        onClick={back}
      >
        back
      </button>

      <div className={`biggest${hide ? "dis" : ""}`}>
        <Box
          sx={{
            width: "300px",
            border: "1px solid black",
            textAlign: "center",
            backgroundColor: "white",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "baseline",
          }}
        >
          <div
            style={{
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "gray" }}>type new note</h2>
            <TextField
              id="outlined-password-input"
              label="title"
              autoComplete="current-password"
              value={try1}
              onChange={(e) => {
                settry(e.target.value);
              }}
              sx={{
                marginTop: "20px",
                borderRadius: "200px",
                color: "red !important",
              }}
            />
            <TextField
              id="outlined-password-input"
              label="note"
              autoComplete="current-password"
              value={try2}
              onChange={(e) => {
                settry2(e.target.value);
              }}
              sx={{
                marginTop: "20px",
                borderRadius: "200px",
                color: "red !important",
              }}
            />
            <a
              style={{ marginBottom: "20px" }}
              onClick={() => {
                setfinal([...final, { main: try1, sub: try2 }]);
                settry2("");
                settry("");
              }}
              href="#"
              class="btn btn-white"
            >
              submit
            </a>
            <a
              style={{ marginBottom: "20px" }}
              onClick={bye}
              href="#"
              class="btn btn-white"
            >
              hide
            </a>
          </div>
        </Box>
      </div>
    </Fragment>
  );
};
