import React, { useState } from "react";

type indexProps = {
  setIngredients: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        checked: boolean;
      }[]
    >
  >;
};

const index: React.FC<indexProps> = ({ setIngredients }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginTop: "2rem" }}
    >
      <label htmlFor="chicken" style={{ color: "#866409" }}>
        Chicken &nbsp;
        <input
          type="checkbox"
          name="chicken"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "chicken",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "chicken")
              );
            }
          }}
        />
      </label>
      <label htmlFor="turkey" style={{ color: "#866409" }}>
        Turkey &nbsp;
        <input
          type="checkbox"
          name="turkey"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "turkey",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "turkey")
              );
            }
          }}
        />
      </label>
      <label htmlFor="duck" style={{ color: "#866409" }}>
        Duck &nbsp;
        <input
          type="checkbox"
          name="duck"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "duck",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "duck")
              );
            }
          }}
        />
      </label>
      <label htmlFor="Bass" style={{ color: "#866409" }}>
        Bass &nbsp;
        <input
          type="checkbox"
          name="Bass"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "Bass",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "Bass")
              );
            }
          }}
        />
      </label>
    </div>
  );
};
export default index;
