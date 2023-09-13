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
      <label htmlFor="tilapia">
        Tilapia &nbsp;
        <input
          type="checkbox"
          name="tilapia"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "tilapia",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "tilapia")
              );
            }
          }}
        />
      </label>
      <label htmlFor="tuna">
        Tuna &nbsp;
        <input
          type="checkbox"
          name="tuna"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "tuna",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "tuna")
              );
            }
          }}
        />
      </label>
      <label htmlFor="tuna_steak">
        Tuna steak &nbsp;
        <input
          type="checkbox"
          name="tuna_steak"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "tuna_steak",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "tuna_steak")
              );
            }
          }}
        />
      </label>
      <label htmlFor="shrimp">
        Shrimp &nbsp;
        <input
          type="checkbox"
          name="shrimp"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "shrimp",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "shrimp")
              );
            }
          }}
        />
      </label>
      <label htmlFor="salmon">
        Salmon &nbsp;
        <input
          type="checkbox"
          name="salmon"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "salmon",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "salmon")
              );
            }
          }}
        />
      </label>
      <label htmlFor="cod">
        Cod &nbsp;
        <input
          type="checkbox"
          name="cod"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "cod",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "cod")
              );
            }
          }}
        />
      </label>
      <label htmlFor="Bass">
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
