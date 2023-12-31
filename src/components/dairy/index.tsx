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
      <label htmlFor="milk" className="has-text-info">
        Milk &nbsp;
        <input
          type="checkbox"
          name="milk"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "milk",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "milk")
              );
            }
          }}
        />
      </label>
      <label htmlFor="cheese" className="has-text-info">
        Cheese &nbsp;
        <input
          type="checkbox"
          name="cheese"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "cheese",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "cheese")
              );
            }
          }}
        />
      </label>
      <label htmlFor="eggs" className="has-text-info">
        Eggs &nbsp;
        <input
          type="checkbox"
          name="eggs"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "eggs",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredients) => ingredients.name !== "eggs")
              );
            }
          }}
        />
      </label>
      <label htmlFor="butter" className="has-text-info">
        Butter &nbsp;
        <input
          type="checkbox"
          name="butter"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "butter",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "butter")
              );
            }
          }}
        />
      </label>
      <label htmlFor="yogurt" className="has-text-info">
        Yogurt &nbsp;
        <input
          type="checkbox"
          name="yogurt"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "yogurt",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "yogurt")
              );
            }
          }}
        />
      </label>
      <label htmlFor="ice_cream" className="has-text-info">
        Ice Cream &nbsp;
        <input
          type="checkbox"
          name="ice_cream"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "ice_cream",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "ice_cream")
              );
            }
          }}
        />
      </label>
      <label htmlFor="sour_cream" className="has-text-info">
        Sour Cream &nbsp;
        <input
          type="checkbox"
          name="sour_cream"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "sour_cream",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "sour_cream")
              );
            }
          }}
        />
      </label>
      <label htmlFor="heavy_cream" className="has-text-info">
        Heavy Cream &nbsp;
        <input
          type="checkbox"
          name="heavy_cream"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "heavy_cream",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "heavy_cream")
              );
            }
          }}
        />
      </label>
      <label htmlFor="half_and_half" className="has-text-info">
        Half & Half &nbsp;
        <input
          type="checkbox"
          name="half_and_half"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "half_and_half",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "half_and_half")
              );
            }
          }}
        />
      </label>
    </div>
  );
};
export default index;
