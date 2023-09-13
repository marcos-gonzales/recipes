import React from "react";

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
      <label htmlFor="ground_beef">
        Ground Beef &nbsp;
        <input
          type="checkbox"
          name="ground_beef"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "ground_beef",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "ground_beef")
              );
            }
          }}
        />
      </label>
      <label htmlFor="steak">
        Steak &nbsp;
        <input
          type="checkbox"
          name="steak"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "steak",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "steak")
              );
            }
          }}
        />
      </label>
      <label htmlFor="chicken">
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
                prev.filter((ingredients) => ingredients.name !== "chicken")
              );
            }
          }}
        />
      </label>
      <label htmlFor="pork">
        pork &nbsp;
        <input
          type="checkbox"
          name="pork"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "pork",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "pork")
              );
            }
          }}
        />
      </label>
      <label htmlFor="ham">
        Ham &nbsp;
        <input
          type="checkbox"
          name="ham"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "ham",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "ham")
              );
            }
          }}
        />
      </label>
    </div>
  );
};
export default index;
