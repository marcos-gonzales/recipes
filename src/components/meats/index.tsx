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
      <label htmlFor="ground_beef" className="has-text-danger">
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
      <label htmlFor="steak" className="has-text-danger">
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
      <label htmlFor="chicken" className="has-text-danger">
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
      <label htmlFor="pork" className="has-text-danger">
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
      <label htmlFor="ham" className="has-text-danger">
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
      <label htmlFor="lamb" className="has-text-danger">
        Lamb &nbsp;
        <input
          type="checkbox"
          name="lamb"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "lamb",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "lamb")
              );
            }
          }}
        />
      </label>
      <label htmlFor="bison" className="has-text-danger">
        Bison &nbsp;
        <input
          type="checkbox"
          name="bison"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "bison",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "bison")
              );
            }
          }}
        />
      </label>
      <label htmlFor="sausage" className="has-text-danger">
        Sausage &nbsp;
        <input
          type="checkbox"
          name="sausage"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "sausage",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "sausage")
              );
            }
          }}
        />
      </label>
    </div>
  );
};
export default index;
