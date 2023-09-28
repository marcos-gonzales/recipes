import React, { useState } from "react";

type indexProps = {
  setCuisine: React.Dispatch<
    React.SetStateAction<{
      name: string;
      checked: boolean;
    }>
  >;
  cuisine: {
    name: string;
    checked: boolean;
  }[];
};

interface InputElement extends HTMLInputElement {
  target: any;
  checked: boolean;
}

const index: React.FC<indexProps> = ({ setCuisine, cuisine }) => {
  async function uncheckAllBoxes(e: InputElement) {
    let checkboxes = document.querySelectorAll("#cuisine");
    checkboxes.forEach((checkbox) => {
      if ((checkbox as HTMLInputElement).name !== e.target.name) {
        (checkbox as HTMLInputElement).checked = false;
      }
    });
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginTop: "2rem" }}
    >
      <label htmlFor="peruvian" style={{ color: "#de8fb6" }}>
        Peruvian &nbsp;
        <input
          id="cuisine"
          type="checkbox"
          name="peruvian"
          onChange={(e) => {
            uncheckAllBoxes(e.target as InputElement);
            setCuisine({
              name: "peruvian",
              checked: true,
            });
          }}
        />
      </label>
      <label htmlFor="indian" style={{ color: "#de8fb6" }}>
        Indian &nbsp;
        <input
          id="cuisine"
          type="checkbox"
          name="indian"
          onChange={(e) => {
            uncheckAllBoxes(e.target as InputElement);
            setCuisine({
              name: "indian",
              checked: true,
            });
          }}
        />
      </label>
      <label htmlFor="Mexican" style={{ color: "#de8fb6" }}>
        Mexican &nbsp;
        <input
          id="cuisine"
          type="checkbox"
          name="Mexican"
          onChange={(e) => {
            uncheckAllBoxes(e.target as InputElement);
            setCuisine({
              name: "Mexican",
              checked: true,
            });
          }}
        />
      </label>
      <label htmlFor="thai" style={{ color: "#de8fb6" }}>
        Thai &nbsp;
        <input
          id="cuisine"
          type="checkbox"
          name="thai"
          onChange={(e) => {
            uncheckAllBoxes(e.target as InputElement);
            setCuisine({
              name: "thai",
              checked: true,
            });
          }}
        />
      </label>
      <label htmlFor="american" style={{ color: "#de8fb6" }}>
        American &nbsp;
        <input
          id="cuisine"
          type="checkbox"
          name="american"
          onChange={(e) => {
            uncheckAllBoxes(e.target as InputElement);
            setCuisine({
              name: "american",
              checked: true,
            });
          }}
        />
      </label>
      <label htmlFor="greek" style={{ color: "#de8fb6" }}>
        Greek &nbsp;
        <input
          id="cuisine"
          type="checkbox"
          name="greek"
          onChange={(e) => {
            uncheckAllBoxes(e.target as InputElement);
            setCuisine({
              name: "greek",
              checked: true,
            });
          }}
        />
      </label>
      <label htmlFor="italian" style={{ color: "#de8fb6" }}>
        Italian &nbsp;
        <input
          id="cuisine"
          type="checkbox"
          name="italian"
          onChange={(e) => {
            uncheckAllBoxes(e.target as InputElement);
            setCuisine({
              name: "italian",
              checked: true,
            });
          }}
        />
      </label>
      <label htmlFor="japanese" style={{ color: "#de8fb6" }}>
        Japanese &nbsp;
        <input
          id="cuisine"
          type="checkbox"
          name="japanese"
          onChange={(e) => {
            uncheckAllBoxes(e.target as InputElement);
            setCuisine({
              name: "japanese",
              checked: true,
            });
          }}
        />
      </label>
      <label htmlFor="korean" style={{ color: "#de8fb6" }}>
        Korean &nbsp;
        <input
          id="cuisine"
          type="checkbox"
          name="korean"
          onChange={(e) => {
            uncheckAllBoxes(e.target as InputElement);
            setCuisine({
              name: "korean",
              checked: true,
            });
          }}
        />
      </label>
      <label htmlFor="french" style={{ color: "#de8fb6" }}>
        French &nbsp;
        <input
          id="cuisine"
          type="checkbox"
          name="french"
          onChange={(e) => {
            uncheckAllBoxes(e.target as InputElement);
            setCuisine({
              name: "french",
              checked: true,
            });
          }}
        />
      </label>
    </div>
  );
};
export default index;
