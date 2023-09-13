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
      <label htmlFor="broccoli">
        Broccoli &nbsp;
        <input
          type="checkbox"
          name="broccoli"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "broccoli",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "broccoli")
              );
            }
          }}
        />
      </label>
      <label htmlFor="carrots">
        Carrot &nbsp;
        <input
          type="checkbox"
          name="onion"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "carrots",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "carrots")
              );
            }
          }}
        />
      </label>
      <label htmlFor="onion">
        Onion &nbsp;
        <input
          type="checkbox"
          name="onion"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "onion",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "onion")
              );
            }
          }}
        />
      </label>
      <label htmlFor="potato">
        Potato &nbsp;
        <input
          type="checkbox"
          name="potato"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "potato",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "potato")
              );
            }
          }}
        />
      </label>
      <label htmlFor="spinach">
        Spinach &nbsp;
        <input
          type="checkbox"
          name="spinach"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "spinach",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "spinach")
              );
            }
          }}
        />
      </label>
      <label htmlFor="lettuce">
        lettuce &nbsp;
        <input
          type="checkbox"
          name="lettuce"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "lettuce",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "lettuce")
              );
            }
          }}
        />
      </label>
      <label htmlFor="peas">
        Peas &nbsp;
        <input
          type="checkbox"
          name="peas"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "peas",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "peas")
              );
            }
          }}
        />
      </label>
    </div>
  );
};
export default index;
