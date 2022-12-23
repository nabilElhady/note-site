import React from "react";
import "../style/Input.css";
import { Edit } from "./Edit";
export const MakeNotes = ({
  final,
  setfinal,
  changing,
  text,
  newindex,
  newitem,
}) => {
  const bobo = final.map((item, index) => {
    const del = (index) => {
      const newlist = final.filter((item) => final.indexOf(item) != index);
      changing(true);
      console.log(text);
      newindex(index);
      newitem(item);
      console.log(item, index);
    };
    return (
      <div className="bigtry">
        <ul
          id={index}
          onClick={() => {
            del(index);
          }}
        >
          <li>
            <a href="#">
              <h2>{item.main}</h2>
              <p>{item.sub}</p>
            </a>
          </li>
        </ul>
      </div>
    );
  });
  return (
    <div style={{ display: "flex", zIndex: -5, flexWrap: "wrap" }}>{bobo}</div>
  );
};
